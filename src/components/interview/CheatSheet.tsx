import { Card } from "@/components/ui/card";
import { CheckCircle, XCircle, AlertTriangle, Lightbulb } from "lucide-react";

export const CheatSheet = () => {
  const dos = [
    {
      title: "Research the Company Thoroughly",
      description:
        "Know their mission, recent news, culture, and how your role fits into their goals. Show genuine interest and ask informed questions.",
      icon: "🔍",
    },
    {
      title: "Prepare Compelling STAR Stories",
      description:
        "Have 5-7 specific examples ready that showcase different skills. Practice telling them naturally and confidently.",
      icon: "⭐",
    },
    {
      title: "Ask Thoughtful Questions",
      description:
        "Prepare questions about role expectations, team dynamics, growth opportunities, and company direction. Show you're thinking long-term.",
      icon: "❓",
    },
    {
      title: "Practice Your Elevator Pitch",
      description:
        "Craft a compelling 60-90 second summary of your background, key strengths, and career goals that's relevant to the role.",
      icon: "🎯",
    },
    {
      title: "Dress Appropriately",
      description:
        "Research company culture and dress slightly more formal than their daily attire. When in doubt, err on the side of professional.",
      icon: "👔",
    },
    {
      title: "Follow Up Professionally",
      description:
        "Send personalized thank-you emails within 24 hours, referencing specific conversation points and reiterating your interest.",
      icon: "📧",
    },
    {
      title: "Be Authentic and Enthusiastic",
      description:
        "Show genuine excitement about the opportunity while being honest about your experiences and career aspirations.",
      icon: "✨",
    },
  ];

  const donts = [
    {
      title: "Don't Memorize Scripted Answers",
      description:
        "Avoid sounding robotic. Instead, have talking points and practice natural conversation flow around your key stories.",
      icon: "🤖",
    },
    {
      title: "Don't Speak Negatively About Previous Employers",
      description:
        "Even if you had bad experiences, focus on what you learned and how you grew rather than criticizing past companies or managers.",
      icon: "😠",
    },
    {
      title: "Don't Interrupt or Rush",
      description:
        "Let the interviewer finish their questions completely. Take a moment to think before responding. It's okay to pause.",
      icon: "⏸️",
    },
    {
      title: "Don't Lie or Exaggerate",
      description:
        "Be honest about your experience and skills. It's better to admit knowledge gaps and show willingness to learn.",
      icon: "🚫",
    },
    {
      title: "Don't Focus Only on Salary",
      description:
        "While compensation is important, emphasize your interest in the role, growth opportunities, and company mission first.",
      icon: "💰",
    },
    {
      title: "Don't Be Late or Unprepared",
      description:
        "Arrive 10-15 minutes early, test your technology for virtual interviews, and have backup plans for technical issues.",
      icon: "⏰",
    },
    {
      title: "Don't Forget to Listen",
      description:
        "Pay attention to what the interviewer is really asking. Sometimes they provide hints about what they're looking for in your response.",
      icon: "👂",
    },
  ];

  const quickTips = [
    {
      category: "Body Language",
      tips: [
        "Maintain eye contact (or look at camera for virtual interviews)",
        "Sit up straight with open, confident posture",
        "Use natural hand gestures while speaking",
        "Smile genuinely and show enthusiasm",
      ],
    },
    {
      category: "Communication",
      tips: [
        "Speak clearly and at moderate pace",
        "Use specific examples rather than general statements",
        "Structure your answers with clear beginning, middle, and end",
        "Ask for clarification if you don't understand a question",
      ],
    },
    {
      category: "Technical Interviews",
      tips: [
        "Think out loud during problem-solving",
        "Start with clarifying questions and assumptions",
        "Begin with brute force solution, then optimize",
        "Test your solution with example inputs",
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Interview Do's & Don'ts
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Essential guidelines to help you navigate interviews successfully and
          avoid common pitfalls that can derail even well-prepared candidates.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* DO's Section */}
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-success/30 transition-all">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-success" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Essential Do's
                </h2>
                <p className="text-muted-foreground">
                  Key behaviors that impress interviewers
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {dos.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-success/5 border border-success/10"
                >
                  <div className="text-2xl flex-shrink-0 mt-1">{item.icon}</div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground text-sm">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* DON'T's Section */}
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-destructive/30 transition-all">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Critical Don'ts
                </h2>
                <p className="text-muted-foreground">
                  Common mistakes to avoid at all costs
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {donts.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-destructive/5 border border-destructive/10"
                >
                  <div className="text-2xl flex-shrink-0 mt-1">{item.icon}</div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground text-sm">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Tips Section */}
      <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-warning/20 flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-warning" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Quick Reference Tips
              </h2>
              <p className="text-muted-foreground">
                Last-minute reminders organized by category
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {quickTips.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-semibold text-foreground border-b border-border pb-2">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.tips.map((tip, tipIndex) => (
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
            ))}
          </div>
        </div>
      </Card>

      {/* Final Encouragement */}
      <Card className="p-8">
        <div className="text-center space-y-4">
          <AlertTriangle className="w-8 h-8 text-warning mx-auto" />
          <h3 className="text-xl font-bold text-foreground">
            Remember: Authenticity Beats Perfection
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These guidelines are important, but the most crucial element is
            being genuinely yourself. Interviewers want to see the real you and
            how you'll fit into their team culture. Preparation should enhance
            your confidence, not mask your personality.
          </p>
        </div>
      </Card>
    </div>
  );
};
