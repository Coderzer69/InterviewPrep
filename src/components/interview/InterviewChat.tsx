import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Send, User, Bot, Clock } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

interface Message {
  id: string;
  type: "bot" | "user";
  content: string;
  timestamp: Date;
}

interface InterviewChatProps {
  role: string;
  mode: string;
  onBack: () => void;
  onComplete?: (summary: InterviewSummary) => void;
}

// Keep this in sync with Index.tsx InterviewSummary
interface InterviewSummary {
  overallScore: number;
  strengths: string[];
  improvements: string[];
  questions: Array<{
    question: string;
    answer: string;
    score: number;
    feedback: string;
  }>;
}

const API_URL = "http://localhost:3000/api/v1/interview-bit";

type StartResponse = {
  question: string;
  topic?: string;
  difficulty?: string;
  notes?: string;
};

type AnswerResponse = {
  was_your_answer_correct?: boolean;
  explanation?: string;
};

// Normalize backend text so markdown renders (bold/italic/code/newlines)
const normalizeMarkdown = (raw: string): string => {
  let text = String(raw ?? "").trim();
  // Strip surrounding triple backtick fences (with optional language)
  text = text.replace(/^```[\w.-]*\n?/, "").replace(/```\s*$/m, "");
  // Unescape common sequences coming from JSON/stringified responses
  text = text.replace(/\\n/g, "\n").replace(/\\t/g, "\t");
  // Unescape markdown punctuation if it was backslash-escaped by the model
  text = text.replace(/\\([*_`~])/g, "$1");
  return text;
};

export default function InterviewChat({
  role,
  mode,
  onBack,
}: InterviewChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [dynamicQuestions, setDynamicQuestions] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [interactions, setInteractions] = useState<
    Array<{
      question: string;
      answer: string;
      explanation: string;
      wasCorrect: boolean;
    }>
  >([]); // reserved for summary/history
  const [score, setScore] = useState(0);
  const [nextPressCount, setNextPressCount] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [answeredCount, setAnsweredCount] = useState(0);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    const el = messagesContainerRef.current;
    if (!el) return;
    // Next frame (ensures DOM is painted)
    requestAnimationFrame(() => {
      el.scrollTop = el.scrollHeight;
    });
    // Fallback for async content sizing (images/markdown)
    setTimeout(() => {
      el.scrollTop = el.scrollHeight;
    }, 0);
  };

  useEffect(scrollToBottom, [messages, isTyping]);

  // Add message helper
  const addMessage = (type: "bot" | "user", content: string) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), type, content, timestamp: new Date() },
    ]);
  };

  // Fetch initial question
  useEffect(() => {
    if (messages.length > 0) return;
    const fetchInitial = async () => {
      setIsTyping(true);
      try {
        const res = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            role,
            mode,
            action: "start",
            answer: "",
            previousQuestion: "",
          }),
        });
        const data: StartResponse = await res.json();
        const q = data.question || "Let's begin the interview.";
        // Store a structured payload marker so renderer can format nicely
        addMessage("bot", `__START__${JSON.stringify(data)}`);
        setDynamicQuestions([q]);
        setCurrentQuestion(0);
        setInteractions([
          { question: q, answer: "", explanation: "", wasCorrect: false },
        ]);
      } catch {
        addMessage("bot", "Failed to fetch first question. Try again.");
      } finally {
        setIsTyping(false);
      }
    };
    fetchInitial();
  }, []);

  // Send answer to backend
  const handleSendAnswer = async () => {
    if (!userInput.trim()) return;
    const answer = userInput.trim();

    addMessage("user", answer);
    setUserInput("");
    setIsTyping(true);

    try {
      const previousQuestion = dynamicQuestions[currentQuestion] || "";
      const payload = {
        role,
        mode,
        action: "answer",
        previousQuestion,
        answer,
      };
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data: AnswerResponse = await res.json();
      const correct = Boolean(data.was_your_answer_correct);
      const explanation = data.explanation || "";

      // Only show evaluation/feedback; don't auto-advance
      const resultMsg = `${correct ? "✅ Correct" : "❌ Incorrect"}$${" "}${
        explanation || ""
      }`.replace("$ ", " ");
      addMessage("bot", resultMsg);
      // Sonner notification (status only, black text)
      if (correct) {
        toast.success("Correct answer", { className: "text-black" });
      } else {
        toast.error("Incorrect answer", { className: "text-black" });
      }

      // Update interactions for this question
      setInteractions((prev) => {
        const next = [...prev];
        next[currentQuestion] = {
          question: previousQuestion,
          answer,
          explanation: explanation,
          wasCorrect: correct,
        };
        return next;
      });
      // Score: increment on correct
      if (correct) {
        setScore((s) => s + 1);
      }
      // Progress advances only after an answer is submitted
      setAnsweredCount((c) => Math.min(c + 1, 5));
    } catch {
      addMessage("bot", "Server error. Try again later.");
    } finally {
      setIsTyping(false);
    }
  };

  // Next question on demand
  const handleNextQuestion = async () => {
    setIsTyping(true);
    try {
      // Prevent going beyond limits or before answering
      if (nextPressCount >= 5 || nextPressCount >= answeredCount) {
        setIsTyping(false);
        return;
      }
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role,
          mode,
          action: "start",
          answer: "",
          previousQuestion: "",
        }),
      });
      const data: StartResponse = await res.json();
      const q = data.question || "Question cannot be loaded. Try again.";
      addMessage("bot", `__START__${JSON.stringify(data)}`);
      setDynamicQuestions((prev) => [...prev, q]);
      setCurrentQuestion((prev) => prev + 1);
      setNextPressCount((c) => c + 1);
      setInteractions((prev) => [
        ...prev,
        { question: q, answer: "", explanation: "", wasCorrect: false },
      ]);
    } catch {
      addMessage("bot", "Failed to load the next question. Try again.");
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-6 max-w-4xl">
      <div className="flex items-center justify-between w-full">
        <Button
          variant="ghost"
          onClick={onBack}
          className="bg-primary/2 hover:bg-primary/4 border border-border/30 text-xs sm:text-sm"
        >
          <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> Back
        </Button>

        <div className="flex items-center gap-2 sm:gap-4 sm:w-auto">
          <Badge
            variant="outline"
            className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold"
          >
            <Clock className="w-3 h-3 mr-1" />
            Question {Math.min(answeredCount + 1, 5)} of 5
          </Badge>

          <Progress
            value={(Math.min(answeredCount, 5) / 5) * 100}
            className="w-24 sm:w-32"
          />
        </div>
      </div>

      <Card className="my-2 border-0 h-fit p-2 sm:p-4">
        <CardHeader className="gap-0">
          <CardTitle className="flex items-center justify-between gap-2 p-0">
            <div className="flex items-start sm:items-center gap-2">
              <span className="text-sm sm:text-base text-foreground">
                {mode === "technical" ? "Technical" : "Behavioral"} Interview
              </span>
              <Badge variant="secondary" className="text-xs">
                {role}
              </Badge>
            </div>

            <span className="text-xs text-md sm:text-base font-semibold text-foreground sm:ml-auto">
              Q{currentQuestion + 1} • Score {score}
            </span>
          </CardTitle>
        </CardHeader>
      </Card>

      <Card className="mb-4 border-0">
        <CardContent className="p-2 sm:p-6">
          <div
            ref={messagesContainerRef}
            className="space-y-3 sm:space-y-4 max-h-80 sm:max-h-96 overflow-y-auto px-2 sm:px-4"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "flex gap-3",
                  msg.type === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "flex gap-2 sm:gap-3 max-w-[85%] sm:max-w-[80%]",
                    msg.type === "user" ? "flex-row-reverse" : "flex-row"
                  )}
                >
                  <div
                    className={cn(
                      "w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white flex-shrink-0",
                      msg.type === "user" ? "bg-primary" : "bg-muted-foreground"
                    )}
                  >
                    {msg.type === "user" ? (
                      <User className="w-3 h-3 sm:w-4 sm:h-4" />
                    ) : (
                      <Bot className="w-3 h-3 sm:w-4 sm:h-4" />
                    )}
                  </div>
                  <div
                    className={cn(
                      "rounded-lg px-3 py-2 sm:px-4 sm:py-3 shadow-soft",
                      msg.type === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border"
                    )}
                  >
                    {msg.type === "user" ? (
                      <p className="text-xs sm:text-sm leading-5 sm:leading-6">
                        {msg.content}
                      </p>
                    ) : // Structured START renderer
                    msg.content.startsWith("__START__") ? (
                      (() => {
                        try {
                          const payload = JSON.parse(
                            msg.content.replace("__START__", "")
                          ) as StartResponse;
                          return (
                            <div className="space-y-2">
                              <h2 className="text-sm sm:text-base font-bold">
                                {payload.question}
                              </h2>
                              {payload.topic ? (
                                <p className="text-xs sm:text-sm font-semibold m-0">
                                  {payload.topic}
                                </p>
                              ) : null}
                              <div className="flex items-center gap-2">
                                {payload.difficulty
                                  ? (() => {
                                      const level = String(
                                        payload.difficulty
                                      ).toLowerCase();
                                      const diffClass =
                                        level === "easy"
                                          ? "border-green-500 text-green-700 bg-green-50"
                                          : level === "medium"
                                          ? "border-yellow-500 text-yellow-700 bg-yellow-50"
                                          : level === "hard"
                                          ? "border-red-500 text-red-600 bg-red-50"
                                          : "border-border text-foreground";
                                      return (
                                        <span
                                          className={`inline-flex items-center rounded-full border px-1.5 sm:px-2 py-0.5 text-xs ${diffClass}`}
                                        >
                                          {payload.difficulty}
                                        </span>
                                      );
                                    })()
                                  : null}
                              </div>
                              {payload.notes ? (
                                <div className="border rounded-md p-2 sm:p-3 text-xs">
                                  {payload.notes}
                                </div>
                              ) : null}
                            </div>
                          );
                        } catch {
                          return (
                            <p className="text-xs sm:text-sm">
                              Invalid question.
                            </p>
                          );
                        }
                      })()
                    ) : (
                      <ReactMarkdown
                        components={{
                          p: ({ node, ...props }) => (
                            <p
                              className="mb-2 sm:mb-3 text-xs sm:text-sm leading-5 sm:leading-6"
                              {...props}
                            />
                          ),
                          strong: ({ node, ...props }) => (
                            <strong className="font-bold" {...props} />
                          ),
                          li: ({ node, ...props }) => (
                            <li
                              className="ml-4 sm:ml-6 list-disc my-1 text-xs sm:text-sm leading-5 sm:leading-6"
                              {...props}
                            />
                          ),
                          h1: ({ node, ...props }) => (
                            <h1
                              className="text-lg sm:text-xl font-semibold my-2 sm:my-4"
                              {...props}
                            />
                          ),
                          h2: ({ node, ...props }) => (
                            <h2
                              className="text-base sm:text-lg font-semibold my-2 sm:my-3"
                              {...props}
                            />
                          ),
                          hr: ({ node, ...props }) => (
                            <hr className="my-4 sm:my-6" {...props} />
                          ),
                        }}
                      >
                        {normalizeMarkdown(msg.content || "")}
                      </ReactMarkdown>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-2 sm:gap-3 justify-start animate-slide-up">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-muted-foreground flex items-center justify-center text-white flex-shrink-0">
                  <Bot className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <div className="bg-card border rounded-lg px-3 py-2 sm:px-4 sm:py-3 shadow-soft">
                  <span className="text-xs sm:text-sm">
                    Interviewer is thinking...
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </CardContent>
      </Card>

      <Card className="border-0">
        <CardContent className="p-2 sm:p-6">
          <Textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your answer..."
            className="min-h-20 sm:min-h-24 resize-none mb-2 text-xs sm:text-sm"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendAnswer();
              }
            }}
          />
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-2 justify-between items-stretch sm:items-center">
            <div className="flex gap-2">
              {answeredCount >= 5 ? (
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
                  <span className="text-sm sm:text-lg font-semibold">
                    Interview Quiz Completed
                  </span>
                  <Button
                    variant="default"
                    className="cursor-pointer text-xs sm:text-sm"
                    size="sm"
                    onClick={() => setShowSummary(true)}
                  >
                    Show Quiz Summary
                  </Button>
                </div>
              ) : (
                <Button
                  variant="default"
                  className="cursor-pointer py-2 sm:py-[20px] text-xs sm:text-sm"
                  size="sm"
                  onClick={handleNextQuestion}
                  disabled={isTyping || answeredCount <= nextPressCount}
                >
                  Next question
                </Button>
              )}
            </div>
            <Button
              onClick={handleSendAnswer}
              disabled={!userInput.trim() || isTyping}
              className="transition-bounce hover:scale-105 text-xs sm:text-sm py-2 sm:py-3"
            >
              <Send className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> Send
              Answer
            </Button>
          </div>
          {showSummary && (
            <div className="mt-4 space-y-3 sm:space-y-4">
              <div className="border rounded-lg p-3 sm:p-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 gap-2 sm:gap-0">
                  <h3 className="text-xs sm:text-sm font-semibold m-0">
                    Quiz Summary
                  </h3>
                  <Badge variant="outline" className="text-xs">
                    Score: {score}/5
                  </Badge>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  {interactions.map((it, idx) => (
                    <div key={idx} className="border rounded-md p-2 sm:p-3">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 gap-2 sm:gap-0">
                        <div className="text-xs font-bold flex-1">
                          Q{idx + 1}: {it.question}
                        </div>
                        <Badge
                          variant="outline"
                          className={`px-1.5 sm:px-2 py-1 text-xs flex-shrink-0 ${
                            it.wasCorrect
                              ? "border-green-500 text-green-700 bg-green-50"
                              : "border-red-500 text-red-700 bg-red-50"
                          }`}
                        >
                          {it.wasCorrect ? "✅ Correct" : "❌ Incorrect"}
                        </Badge>
                      </div>
                      <div className="text-xs mb-1">
                        <span className="font-semibold">Your Answer:</span>{" "}
                        <span className="break-words">{it.answer || "—"}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <span className="font-semibold text-foreground">
                          Explanation:
                        </span>{" "}
                        <span className="break-words">
                          {it.explanation || "—"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex justify-end">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setShowSummary(false)}
                    className="text-xs sm:text-sm"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
