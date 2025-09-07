import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  FileText,
  MessageCircle,
  Code,
  Users,
  Target,
} from "lucide-react";

export const InterviewGuide = () => {
  const guideSteps = [
    {
      id: 1,
      title: "Resume Tailoring",
      icon: FileText,
      duration: "30-45 mins",
      overview: "Optimize your resume for specific roles and ATS systems",
      steps: [
        "Analyze job description keywords and requirements",
        "Tailor experience bullets to match role expectations",
        "Quantify achievements with specific metrics",
        "Format for ATS compatibility and human readability",
        "Create role-specific versions for different positions",
      ],
      tips: [
        "Use action verbs and industry-specific terminology",
        "Keep it to 1-2 pages with consistent formatting",
        "Include relevant skills and certifications prominently",
      ],
    },
    {
      id: 2,
      title: "Behavioral Interview Strategy",
      icon: MessageCircle,
      duration: "60-90 mins",
      overview: "Master the STAR method for compelling storytelling",
      steps: [
        "Identify 5-7 compelling professional stories",
        "Structure each story using STAR format",
        "Practice delivery for natural, confident presentation",
        "Prepare stories that showcase different competencies",
        "Anticipate follow-up questions for each story",
      ],
      tips: [
        "Focus on your specific actions and contributions",
        "Include measurable results and lessons learned",
        "Practice out loud to improve timing and flow",
      ],
    },
    {
      id: 3,
      title: "Technical Interview Practice",
      icon: Code,
      duration: "2-3 hours",
      overview: "Build confidence in coding challenges and system design",
      steps: [
        "Review fundamental data structures and algorithms",
        "Practice coding problems similar to company patterns",
        "Prepare system design examples at appropriate level",
        "Practice explaining your thought process clearly",
        "Set up proper coding environment and tools",
      ],
      tips: [
        "Think aloud during problem solving",
        "Start with brute force, then optimize",
        "Ask clarifying questions before coding",
      ],
    },
    {
      id: 4,
      title: "Mock Interview Workflow",
      icon: Users,
      duration: "45-60 mins",
      overview: "Simulate real interview conditions for peak performance",
      steps: [
        "Set up professional video conferencing environment",
        "Practice with realistic time constraints",
        "Record sessions for self-review and improvement",
        "Get feedback from peers or mentors",
        "Iterate on weak areas identified in mock sessions",
      ],
      tips: [
        "Dress professionally even for practice sessions",
        "Test technology beforehand to avoid issues",
        "Practice in the same environment as real interviews",
      ],
    },
    {
      id: 5,
      title: "Follow-up & Next Steps",
      icon: Target,
      duration: "15-30 mins",
      overview: "Maintain momentum after the interview process",
      steps: [
        "Send personalized thank-you notes within 24 hours",
        "Reference specific conversation points from interview",
        "Provide any additional information requested",
        "Set up tracking system for application status",
        "Plan follow-up timeline based on company feedback",
      ],
      tips: [
        "Keep notes during interviews for personalized follow-up",
        "Be patient but proactive in your follow-up approach",
        "Continue applying to maintain options and momentum",
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Complete Interview Preparation Roadmap
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          A comprehensive, step-by-step guide to help you ace any interview.
          Follow this structured approach to maximize your success rate and
          build lasting confidence.
        </p>
      </div>

      <div className="space-y-8">
        {guideSteps.map((step, _index) => (
          <Card
            key={step.id}
            className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all"
          >
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-foreground">
                        Step {step.id}: {step.title}
                      </h3>
                      <Badge
                        variant="outline"
                        className="border-primary/30 text-primary"
                      >
                        {step.duration}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{step.overview}</p>
                  </div>
                </div>
              </div>

              {/* Steps */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-4 flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Action Steps</span>
                  </h4>
                  <ul className="space-y-3">
                    {step.steps.map((stepItem, stepIndex) => (
                      <li
                        key={stepIndex}
                        className="flex items-start space-x-3 text-sm"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground leading-relaxed">
                          {stepItem}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-4 flex items-center space-x-2">
                    <Target className="w-4 h-4 text-accent" />
                    <span>Pro Tips</span>
                  </h4>
                  <ul className="space-y-3">
                    {step.tips.map((tip, tipIndex) => (
                      <li
                        key={tipIndex}
                        className="flex items-start space-x-3 text-sm"
                      >
                        <div className="w-2 h-2 rounded-full bg-accent/60 mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground leading-relaxed">
                          {tip}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-8">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold text-foreground">
            Ready to Start Your Journey?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Remember: preparation is the key to confidence. Take your time with
            each step, practice regularly, and trust the process. You've got
            this! 💪
          </p>
        </div>
      </Card>
    </div>
  );
};
