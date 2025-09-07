import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Target,
  Brain,
  Users,
  Award,
  BookOpen,
  Clock,
} from "lucide-react";

export const FreshContentSections = () => {
  const careerTips = [
    {
      title: "Research-Driven Preparation",
      description:
        "Deep dive into company culture, recent news, and industry trends. 70% of successful candidates spend 3+ hours researching their target company.",
      icon: BookOpen,
      difficulty: "Essential",
    },
    {
      title: "The STAR Method Mastery",
      description:
        "Structure your behavioral responses with Situation, Task, Action, Result. Practice 5-7 compelling stories that showcase different skills.",
      icon: Target,
      difficulty: "Intermediate",
    },
    {
      title: "Technical Communication",
      description:
        "Explain complex concepts simply. Practice describing your code to non-technical stakeholders - it's often tested in senior roles.",
      icon: Brain,
      difficulty: "Advanced",
    },
  ];

  const interviewInsights = [
    {
      stat: "89%",
      label: "of interviews include behavioral questions",
      insight:
        "Prepare stories that demonstrate leadership, problem-solving, and teamwork",
    },
    {
      stat: "3-5",
      label: "seconds to make a first impression",
      insight:
        "Your initial greeting and energy set the tone for the entire conversation",
    },
    {
      stat: "67%",
      label: "of candidates ask no questions",
      insight:
        "Prepare 5-7 thoughtful questions about role, team, and company direction",
    },
  ];

  const skillAreas = [
    {
      category: "Technical Skills",
      skills: ["System Design", "Data Structures", "Algorithms", "API Design"],
      color: "from-primary to-accent",
    },
    {
      category: "Soft Skills",
      skills: [
        "Communication",
        "Leadership",
        "Problem Solving",
        "Adaptability",
      ],
      color: "from-accent to-improvement",
    },
    {
      category: "Industry Knowledge",
      skills: ["Market Trends", "Best Practices", "Frameworks", "Tools"],
      color: "from-improvement to-primary",
    },
  ];

  return (
    <div className="space-y-20">
      {/* Career Tips Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional Career Tips
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insider strategies from industry professionals and hiring managers
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {careerTips.map((tip, index) => (
              <Card
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:shadow-glow transition-all">
                      <tip.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge
                      variant="outline"
                      className="border-primary/30 text-primary"
                    >
                      {tip.difficulty}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground">
                    {tip.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interview Insights Section */}
      <section className="py-20 bg-muted/70">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Interview Intelligence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Data-driven insights to give you the competitive edge
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {interviewInsights.map((insight, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="relative">
                  <div className="text-5xl md:text-6xl font-bold">
                    {insight.stat}
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-xl opacity-15"></div>
                </div>
                <p className="text-lg font-medium text-foreground">
                  {insight.label}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {insight.insight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Assessment Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Skill Assessment Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive preparation across all critical interview dimensions
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {skillAreas.map((area, index) => (
              <Card
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border-border/50"
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-4 h-4 rounded-full bg-gradient-to-r ${area.color}`}
                    ></div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {area.category}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {area.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="px-4 py-2 border border-border/80 rounded-lg bg-muted/30 text-center text-sm font-medium text-foreground hover:bg-muted/50 transition-colors"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, number: "10K+", label: "Practice Sessions" },
              { icon: TrendingUp, number: "87%", label: "Success Rate" },
              { icon: Clock, number: "24/7", label: "AI Available" },
              { icon: Award, number: "500+", label: "Companies Covered" },
            ].map((stat, index) => (
              <div key={index} className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-foreground">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
