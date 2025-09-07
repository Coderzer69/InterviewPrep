import { useState, useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FloatingParticles } from "@/components/FloatingParticles";
import { Footer } from "@/components/Footer";
import { FreshContentSections } from "@/components/FreshContentSections";
import RoleSelector from "@/components/interview/RoleSelector";
import InterviewModeSelector from "@/components/interview/InterviewModeSelector";
import InterviewChat from "@/components/interview/InterviewChat";
import InterviewSummary from "@/components/interview/InterviewSummary";
import StudyResources from "@/components/interview/StudyResources";
import InterviewHistory from "@/components/interview/InterviewHistory";

type AppState =
  | "role-selection"
  | "mode-selection"
  | "interview"
  | "summary"
  | "resources"
  | "history";

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

const Index = () => {
  const [appState, setAppState] = useState<AppState>("role-selection");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedMode, setSelectedMode] = useState("");
  const [interviewSummary, setInterviewSummary] =
    useState<InterviewSummary | null>(null);

  const interviewSectionRef = useRef<HTMLDivElement>(null);
  const tipsSectionRef = useRef<HTMLDivElement>(null);

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId);
    setAppState("mode-selection");
  };

  const handleModeSelect = (mode: string) => {
    setSelectedMode(mode);
    setAppState("interview");
  };

  const handleInterviewComplete = (summary: InterviewSummary) => {
    setInterviewSummary(summary);

    // Save to history
    const session = {
      id: Date.now().toString(),
      role: selectedRole,
      mode: selectedMode,
      date: new Date(),
      score: summary.overallScore,
      questionsCount: summary.questions.length,
    };

    const existingSessions = JSON.parse(
      localStorage.getItem("interviewSessions") || "[]"
    );
    localStorage.setItem(
      "interviewSessions",
      JSON.stringify([...existingSessions, session])
    );

    setAppState("summary");
  };

  const handleStartNew = () => {
    setAppState("role-selection");
    setSelectedRole("");
    setSelectedMode("");
    setInterviewSummary(null);
  };

  const handleGoHome = () => {
    setAppState("role-selection");
  };

  const handleViewResources = () => {
    setAppState("resources");
  };

  const handleViewHistory = () => {
    setAppState("history");
  };

  const handleScrollToInterview = () => {
    if (appState !== "role-selection") {
      setAppState("role-selection");
    }
    setTimeout(() => {
      interviewSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const handleScrollToTips = () => {
    if (appState !== "role-selection") {
      setAppState("role-selection");
    }
    setTimeout(() => {
      tipsSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <FloatingParticles />

      {appState === "role-selection" && (
        <>
          <Navigation
            onViewHistory={handleViewHistory}
            onViewResources={handleViewResources}
            onScrollToInterview={handleScrollToInterview}
            onScrollToTips={handleScrollToTips}
            onGoHome={handleGoHome}
          />
          <HeroSection onStartInterview={() => setAppState("role-selection")} />
          <div ref={interviewSectionRef} className="py-20">
            <RoleSelector onRoleSelect={handleRoleSelect} />
          </div>
          <div ref={tipsSectionRef}>
            <FreshContentSections />
          </div>
          <Footer />
        </>
      )}

      {appState === "mode-selection" && (
        <>
          <Navigation
            onViewHistory={handleViewHistory}
            onViewResources={handleViewResources}
            onScrollToInterview={handleScrollToInterview}
            onScrollToTips={handleScrollToTips}
            onGoHome={handleGoHome}
          />
          <div className="pt-20">
            <InterviewModeSelector
              role={selectedRole}
              onModeSelect={handleModeSelect}
              onBack={() => setAppState("role-selection")}
            />
          </div>
          <Footer />
        </>
      )}

      {appState === "interview" && (
        <>
          <Navigation
            onViewHistory={handleViewHistory}
            onViewResources={handleViewResources}
            onScrollToInterview={handleScrollToInterview}
            onScrollToTips={handleScrollToTips}
            onGoHome={handleGoHome}
          />
          <div className="pt-20">
            <InterviewChat
              role={selectedRole}
              mode={selectedMode}
              onBack={() => setAppState("mode-selection")}
              onComplete={handleInterviewComplete}
            />
          </div>
          <Footer />
        </>
      )}

      {appState === "summary" && interviewSummary && (
        <>
          <Navigation
            onViewHistory={handleViewHistory}
            onViewResources={handleViewResources}
            onScrollToInterview={handleScrollToInterview}
            onScrollToTips={handleScrollToTips}
            onGoHome={handleGoHome}
          />
          <div className="pt-20">
            <InterviewSummary
              summary={interviewSummary}
              role={selectedRole}
              mode={selectedMode}
              onStartNew={handleStartNew}
              onGoHome={handleGoHome}
              onViewResources={handleViewResources}
            />
          </div>
          <Footer />
        </>
      )}

      {appState === "resources" && (
        <>
          <Navigation
            onViewHistory={handleViewHistory}
            onViewResources={handleViewResources}
            onScrollToInterview={handleScrollToInterview}
            onScrollToTips={handleScrollToTips}
            onGoHome={handleGoHome}
          />
          <div className="pt-20">
            <StudyResources role={selectedRole} onBack={handleGoHome} />
          </div>
          <Footer />
        </>
      )}

      {appState === "history" && (
        <>
          <Navigation
            onViewHistory={handleViewHistory}
            onViewResources={handleViewResources}
            onScrollToInterview={handleScrollToInterview}
            onScrollToTips={handleScrollToTips}
            onGoHome={handleGoHome}
          />
          <div className="pt-20">
            <InterviewHistory onBack={handleGoHome} />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
