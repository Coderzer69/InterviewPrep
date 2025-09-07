import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code, Briefcase, BarChart3 } from "lucide-react";
import { FreshContentSections } from "@/components/FreshContentSections";
import heroImage from "@/assets/hero-interview-bot.jpg";

interface HeroSectionProps {
  onStartInterview: () => void;
}

export const HeroSection = ({ onStartInterview }: HeroSectionProps) => {
  const roles = [
    {
      icon: Code,
      title: "Software Engineer",
      description: "Technical interviews, coding challenges, system design",
      domains: ["React", "Node.js", "Python", "Java"],
    },
    {
      icon: Briefcase,
      title: "Product Manager",
      description: "Product strategy, user experience, market analysis",
      domains: ["Strategy", "Analytics", "Design", "Research"],
    },
    {
      icon: BarChart3,
      title: "Data Analyst",
      description: "Data interpretation, statistical analysis, insights",
      domains: ["SQL", "Python", "Tableau", "Statistics"],
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-8">
            {/* Hero Image */}
            <div className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img
                src={heroImage}
                alt="AI Interview Bot"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                Master Your Interview Skills
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                AI-powered practice sessions designed to boost your confidence
                and skills. Get real-time feedback, personalized coaching, and
                land your dream job.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Button
                size="lg"
                onClick={onStartInterview}
                className="!px-[30px] cursor-pointer !py-[25px] text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-neon group border-0"
              >
                Start Your Journey
                <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Role Cards Section */}
      <section className="py-20 bg-muted/70">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Interview Path
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored interview experiences for different roles and skill
              levels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {roles.map((role, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-neon transition-all duration-300 hover:-translate-y-2 cursor-pointer group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30"
                onClick={onStartInterview}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all">
                  <role.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {role.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {role.description}
                </p>
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-primary mb-2">
                    KEY DOMAINS:
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {role.domains.map((domain) => (
                      <span
                        key={domain}
                        className="px-3 py-1 bg-muted/30 text-foreground text-sm rounded-full border border-border/30"
                      >
                        {domain}
                      </span>
                    ))}
                  </div>
                </div>
                <Button
                  variant="default"
                  className="mt-6 text-white border border-primary/30 transition-all"
                >
                  Start Practice
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fresh Content Sections */}
      <FreshContentSections />
    </div>
  );
};
