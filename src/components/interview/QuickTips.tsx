import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Clock,
  Brain,
  MessageCircle,
  Target,
  Code,
  Users,
  Lightbulb,
} from "lucide-react";

export const QuickTips = () => {
  const tipCategories = [
    {
      category: "STAR Method",
      icon: Star,
      color: "from-primary to-accent",
      tips: [
        {
          title: "Situation",
          description: "Set the scene with specific context",
          example: "While working as a PM at TechCorp during Q3 2023...",
          level: "Essential",
        },
        {
          title: "Task",
          description: "Define what needed to be accomplished",
          example: "I was responsible for reducing customer churn by 15%...",
          level: "Essential",
        },
        {
          title: "Action",
          description: "Describe your specific actions and decisions",
          example: "I analyzed user feedback, implemented A/B testing...",
          level: "Critical",
        },
        {
          title: "Result",
          description: "Share quantifiable outcomes and learnings",
          example: "Achieved 18% churn reduction, learned importance of...",
          level: "Impact",
        },
      ],
    },
    {
      category: "Coding Interviews",
      icon: Code,
      color: "from-accent to-improvement",
      tips: [
        {
          title: "Big-O First Principle",
          description: "Always analyze time and space complexity",
          example: "This solution is O(n log n) time, O(1) space because...",
          level: "Technical",
        },
        {
          title: "Edge Cases Matter",
          description: "Consider null inputs, empty arrays, single elements",
          example: "What if the array is empty or has just one element?",
          level: "Detail",
        },
        {
          title: "Think Aloud",
          description: "Verbalize your thought process throughout",
          example: "I'm thinking a hash map might work here because...",
          level: "Communication",
        },
        {
          title: "Start Simple",
          description: "Begin with brute force, then optimize",
          example: "The naive approach would be O(n²), but we can optimize...",
          level: "Strategy",
        },
      ],
    },
    {
      category: "Behavioral Excellence",
      icon: MessageCircle,
      color: "from-improvement to-primary",
      tips: [
        {
          title: "Be Specific",
          description: "Use concrete examples with metrics when possible",
          example: "Increased team velocity by 40% over 3 months by...",
          level: "Impact",
        },
        {
          title: "Show Growth",
          description: "Demonstrate learning and improvement over time",
          example:
            "This experience taught me to always validate assumptions...",
          level: "Development",
        },
        {
          title: "Own Your Role",
          description: "Focus on your contributions, not team achievements",
          example: "My specific contribution was... while my team handled...",
          level: "Accountability",
        },
        {
          title: "Connect to Role",
          description: "Link your examples to the position requirements",
          example: "This leadership experience directly applies to...",
          level: "Relevance",
        },
      ],
    },
    {
      category: "System Design",
      icon: Target,
      color: "from-primary to-improvement",
      tips: [
        {
          title: "Clarify Requirements",
          description: "Ask about scale, features, and constraints upfront",
          example: "How many users? Read/write ratio? Consistency needs?",
          level: "Foundation",
        },
        {
          title: "Estimate Scale",
          description: "Calculate traffic, storage, and bandwidth needs",
          example: "1M users × 10 requests/day = 115 requests/second...",
          level: "Quantification",
        },
        {
          title: "Start High-Level",
          description: "Begin with major components, then drill down",
          example: "We'll need load balancer, app servers, databases...",
          level: "Architecture",
        },
        {
          title: "Discuss Trade-offs",
          description: "Explain pros/cons of different approaches",
          example: "SQL gives ACID properties, NoSQL offers better scaling...",
          level: "Analysis",
        },
      ],
    },
    {
      category: "Leadership Mindset",
      icon: Users,
      color: "from-accent to-primary",
      tips: [
        {
          title: "Servant Leadership",
          description: "Show how you enable others to succeed",
          example: "I focused on removing blockers so my team could...",
          level: "Philosophy",
        },
        {
          title: "Data-Driven Decisions",
          description: "Support choices with metrics and analysis",
          example: "Based on user research and A/B test results...",
          level: "Evidence",
        },
        {
          title: "Stakeholder Management",
          description: "Balance competing interests diplomatically",
          example: "I aligned engineering and business goals by...",
          level: "Negotiation",
        },
        {
          title: "Culture Building",
          description: "Demonstrate impact on team morale and growth",
          example: "Implemented mentorship program that improved retention...",
          level: "Culture",
        },
      ],
    },
    {
      category: "Last-Minute Prep",
      icon: Clock,
      color: "from-improvement to-accent",
      tips: [
        {
          title: "Review Your Resume",
          description: "Be ready to discuss any line item in detail",
          example: "Practice explaining gaps, transitions, achievements",
          level: "Preparation",
        },
        {
          title: "Research Recent News",
          description: "Know company's latest developments and challenges",
          example: "I saw your recent Series B announcement...",
          level: "Awareness",
        },
        {
          title: "Prepare Questions",
          description: "Have 5-7 thoughtful questions about role and company",
          example: "How does this role contribute to your 2024 goals?",
          level: "Engagement",
        },
        {
          title: "Plan Your Setup",
          description: "Test technology, environment, backup plans",
          example: "Stable internet, good lighting, phone backup",
          level: "Logistics",
        },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Quick Tips Cards
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Bite-sized, actionable advice you can apply immediately. Perfect for
          last-minute review or when you need specific guidance on interview
          techniques.
        </p>
      </div>

      <div className="space-y-12">
        {tipCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-6">
            <div className="flex items-center space-x-4">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} opacity-20 flex items-center justify-center`}
              >
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {category.category}
                </h2>
                <p className="text-muted-foreground">
                  {category.tips.length} essential techniques and frameworks
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.tips.map((tip, tipIndex) => (
                <Card
                  key={tipIndex}
                  className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all group hover:shadow-glow"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                        {tipIndex + 1}
                      </div>
                      <Badge
                        variant="outline"
                        className="border-primary/30 text-primary text-xs"
                      >
                        {tip.level}
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-semibold text-foreground text-sm leading-tight">
                        {tip.title}
                      </h3>

                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {tip.description}
                      </p>

                      <div className="pt-2 border-t border-border/30">
                        <div className="flex items-center space-x-2 mb-2">
                          <Lightbulb className="w-3 h-3 text-accent" />
                          <span className="text-xs font-medium text-accent">
                            Example
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground italic leading-relaxed bg-muted/20 p-2 rounded">
                          "{tip.example}"
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Reference Summary */}
      <Card className="p-8">
        <div className="text-center space-y-6">
          <Brain className="w-8 h-8 text-primary mx-auto" />
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Master These Frameworks
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
              These bite-sized frameworks work across different interview types.
              Practice them until they become second nature.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { framework: "STAR", use: "Behavioral Q's" },
              { framework: "Big-O", use: "Technical Analysis" },
              { framework: "Clarify-First", use: "System Design" },
              { framework: "Metrics-Focus", use: "Leadership Stories" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-3 bg-muted/50 rounded-lg border border-border"
              >
                <div className="font-semibold text-primary text-sm">
                  {item.framework}
                </div>
                <div className="text-xs text-muted-foreground">{item.use}</div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};
