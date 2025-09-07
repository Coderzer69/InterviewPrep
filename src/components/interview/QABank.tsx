import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MessageCircle,
  Code,
  Settings,
  Users,
  Lightbulb,
  Target,
} from "lucide-react";

export const QABank = () => {
  const categories = [
    {
      id: "behavioral",
      title: "Behavioral Questions",
      icon: MessageCircle,
      color: "from-primary to-accent",
      questions: [
        {
          question:
            "Tell me about a time you faced a significant challenge at work.",
          answer:
            "In my previous role as [position], we faced [specific challenge]. I took ownership by [specific actions], which resulted in [quantifiable outcome]. This experience taught me [key learning] and improved my approach to [relevant skill].",
          rationale:
            "This question assesses problem-solving skills, resilience, and ability to learn from difficulties.",
          tips: [
            "Choose a real challenge that showcases growth",
            "Focus on your actions, not team achievements",
            "Include specific metrics or outcomes",
            "End with lessons learned or skills gained",
          ],
        },
        {
          question:
            "Describe a situation where you had to work with a difficult team member.",
          answer:
            "I encountered this when working with [context]. I addressed it by [specific diplomatic actions], focusing on [common goals/project success]. The result was [improved collaboration/project outcome], and I learned [interpersonal insight].",
          rationale:
            "Tests emotional intelligence, conflict resolution, and teamwork abilities.",
          tips: [
            "Avoid speaking negatively about the person",
            "Focus on professional behavior and solutions",
            "Show empathy and understanding of different perspectives",
            "Demonstrate leadership in difficult situations",
          ],
        },
        {
          question: "Tell me about a time you failed or made a mistake.",
          answer:
            "Early in my career, I [specific mistake] which led to [consequence]. I immediately [corrective actions], communicated transparently with [stakeholders], and implemented [preventive measures]. This taught me [valuable lesson] and I now [improved practice].",
          rationale:
            "Evaluates self-awareness, accountability, and ability to learn from mistakes.",
          tips: [
            "Choose a real failure that led to growth",
            "Take full responsibility without blame",
            "Show immediate corrective action",
            "Demonstrate how you've prevented similar issues",
          ],
        },
      ],
    },
    {
      id: "technical",
      title: "Technical Questions",
      icon: Code,
      color: "from-accent to-improvement",
      questions: [
        {
          question:
            "How would you approach debugging a performance issue in production?",
          answer:
            "I'd start by [monitoring/logging analysis], identify bottlenecks using [specific tools], create a hypothesis, and implement [systematic testing approach]. I'd prioritize [critical path issues] and ensure [minimal user impact] during investigation.",
          rationale:
            "Assesses systematic thinking, technical troubleshooting, and production awareness.",
          tips: [
            "Mention specific debugging tools and methodologies",
            "Show understanding of production constraints",
            "Demonstrate systematic approach over random fixes",
            "Include monitoring and prevention strategies",
          ],
        },
        {
          question:
            "Explain how you would design a system to handle 1 million users.",
          answer:
            "I'd consider [load balancing], [database scaling strategies], [caching layers], and [microservices architecture]. Key factors include [data consistency], [fault tolerance], and [monitoring]. I'd implement [specific technologies] and plan for [gradual scaling].",
          rationale:
            "Tests system design thinking, scalability understanding, and architectural knowledge.",
          tips: [
            "Start with requirements clarification",
            "Discuss trade-offs between different approaches",
            "Show understanding of real-world constraints",
            "Include monitoring, security, and maintenance considerations",
          ],
        },
        {
          question:
            "What's the difference between [specific technical concepts]?",
          answer:
            "The key differences are [fundamental distinction]. [Concept A] is used when [specific use case], while [Concept B] is better for [different scenario]. The trade-offs include [performance/complexity/maintainability considerations].",
          rationale:
            "Evaluates depth of technical understanding and ability to make informed decisions.",
          tips: [
            "Provide clear, concise definitions",
            "Give practical examples of when to use each",
            "Discuss trade-offs and real-world implications",
            "Show understanding of context and appropriate usage",
          ],
        },
      ],
    },
    {
      id: "system-design",
      title: "System Design",
      icon: Settings,
      color: "from-improvement to-primary",
      questions: [
        {
          question: "Design a URL shortening service like bit.ly",
          answer:
            "I'd start with [requirements gathering], estimate [scale and constraints], design [data models], plan [API endpoints], and architect [scalable infrastructure]. Key components include [encoding algorithm], [database design], [caching strategy], and [analytics tracking].",
          rationale:
            "Tests ability to design large-scale systems and think about real-world constraints.",
          tips: [
            "Always start with requirements and constraints",
            "Estimate scale and traffic patterns",
            "Design data models before architecture",
            "Discuss trade-offs and alternative approaches",
          ],
        },
        {
          question: "How would you design a real-time chat system?",
          answer:
            "I'd use [WebSocket connections], implement [message queuing], design [user presence system], and plan [message storage]. Architecture would include [load balancers], [message brokers], [database sharding], and [real-time synchronization mechanisms].",
          rationale:
            "Assesses understanding of real-time systems, networking, and distributed architecture.",
          tips: [
            "Consider real-time requirements and protocols",
            "Plan for online/offline states and message delivery",
            "Design for horizontal scaling",
            "Include security and privacy considerations",
          ],
        },
      ],
    },
    {
      id: "leadership",
      title: "Leadership & Management",
      icon: Users,
      color: "from-primary to-improvement",
      questions: [
        {
          question: "How do you handle underperforming team members?",
          answer:
            "I start with [one-on-one discussion] to understand [root causes], provide [clear expectations], offer [support and resources], create [improvement plan], and maintain [regular check-ins]. If issues persist, I escalate appropriately while documenting [performance discussions].",
          rationale:
            "Evaluates management style, empathy, and ability to develop team members.",
          tips: [
            "Show empathy and desire to help team members succeed",
            "Demonstrate clear communication and expectation setting",
            "Include documentation and formal processes",
            "Balance team needs with individual development",
          ],
        },
        {
          question:
            "Describe your approach to managing conflicting priorities.",
          answer:
            "I assess [business impact], consult with [stakeholders], communicate [trade-offs], and make [data-driven decisions]. I ensure [transparency] about decisions, provide [regular updates], and remain [flexible] as priorities shift while maintaining [team focus].",
          rationale:
            "Tests prioritization skills, stakeholder management, and strategic thinking.",
          tips: [
            "Show systematic approach to prioritization",
            "Demonstrate stakeholder communication skills",
            "Include examples of difficult priority decisions",
            "Show flexibility while maintaining focus",
          ],
        },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Common Interview Q&A Bank
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Comprehensive collection of frequently asked interview questions with
          model answers, explanations, and personalization tips for different
          domains and experience levels.
        </p>
      </div>

      <div className="space-y-8">
        {categories.map((category) => (
          <Card
            key={category.id}
            className="p-8 bg-card/50 backdrop-blur-sm border-border/50"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-black ${category.color} flex items-center justify-center`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {category.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {category.questions.length} curated questions with detailed
                    guidance
                  </p>
                </div>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((qa, index) => (
                  <AccordionItem
                    key={index}
                    value={`${category.id}-${index}`}
                    className="border border-border/30 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <div className="flex items-start space-x-4 w-full">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-semibold flex-shrink-0 mt-1">
                          {index + 1}
                        </div>
                        <div className="text-foreground font-medium leading-relaxed">
                          {qa.question}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6 ml-12">
                      <div className="space-y-6">
                        {/* Model Answer */}
                        <div>
                          <div className="flex items-center space-x-2 mb-3">
                            <Lightbulb className="w-4 h-4 text-accent" />
                            <h4 className="font-semibold text-foreground">
                              Model Answer
                            </h4>
                          </div>
                          <p className="text-muted-foreground leading-relaxed bg-muted/20 p-4 rounded-lg border-l-4 border-accent/30">
                            {qa.answer}
                          </p>
                        </div>

                        {/* Rationale */}
                        <div>
                          <div className="flex items-center space-x-2 mb-3">
                            <Target className="w-4 h-4 text-improvement" />
                            <h4 className="font-semibold text-foreground">
                              Why This Question Matters
                            </h4>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {qa.rationale}
                          </p>
                        </div>

                        {/* Personalization Tips */}
                        <div>
                          <div className="flex items-center space-x-2 mb-3">
                            <MessageCircle className="w-4 h-4 text-primary" />
                            <h4 className="font-semibold text-foreground">
                              Personalization Tips
                            </h4>
                          </div>
                          <ul className="space-y-2">
                            {qa.tips.map((tip, tipIndex) => (
                              <li
                                key={tipIndex}
                                className="flex items-start space-x-3 text-sm"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0"></div>
                                <span className="text-muted-foreground leading-relaxed">
                                  {tip}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-8">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold text-foreground">
            Practice Makes Perfect
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Remember to practice these answers out loud, adapt them to your
            experiences, and maintain authenticity. The goal is to be prepared
            while staying natural and conversational.
          </p>
        </div>
      </Card>
    </div>
  );
};
