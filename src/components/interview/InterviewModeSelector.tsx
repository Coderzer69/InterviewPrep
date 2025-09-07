import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  MessageCircle,
  ArrowLeft,
  Clock,
  Target,
  Users,
} from "lucide-react";

interface InterviewMode {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  duration: string;
  difficulty: string;
}

const interviewModes: InterviewMode[] = [
  {
    id: "technical",
    title: "Technical Interview",
    description: "Algorithm questions, coding challenges, and system design",
    icon: Code2,
    features: [
      "Coding problems & algorithms",
      "System design questions",
      "Technical deep-dives",
      "Code review scenarios",
      "Architecture discussions",
    ],
    duration: "45-60 minutes",
    difficulty: "Advanced",
  },
  {
    id: "behavioral",
    title: "Behavioral Interview",
    description: "STAR-format questions, teamwork, and leadership scenarios",
    icon: MessageCircle,
    features: [
      "STAR method questions",
      "Leadership scenarios",
      "Conflict resolution",
      "Team collaboration",
      "Career motivation",
    ],
    duration: "30-45 minutes",
    difficulty: "Intermediate",
  },
];

interface InterviewModeSelectorProps {
  role: string;
  onModeSelect: (mode: string) => void;
  onBack: () => void;
}

export default function InterviewModeSelector({
  role,
  onModeSelect,
  onBack,
}: InterviewModeSelectorProps) {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        onClick={onBack}
        className="mb-8 hover:bg-primary/10"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Role Selection
      </Button>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Choose Your Interview Mode</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Select the type of interview you'd like to practice for your{" "}
          <strong>{role}</strong> role.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {interviewModes.map((mode) => {
          const IconComponent = mode.icon;
          return (
            <Card
              key={mode.id}
              className="bg-white transition shadow-lg border border-border/80 duration-200 hover:scale-104 cursor-pointer"
              onClick={() => onModeSelect(mode.id)}
            >
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                  <IconComponent className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-3">{mode.title}</CardTitle>
                <CardDescription className="text-base">
                  {mode.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {mode.duration}
                    </span>
                  </div>
                  <Badge
                    variant={
                      mode.difficulty === "Advanced"
                        ? "destructive"
                        : "secondary"
                    }
                    className="text-xs"
                  >
                    <Target className="w-3 h-3 mr-1" />
                    {mode.difficulty}
                  </Badge>
                </div>

                <div>
                  <p className="text-sm font-medium mb-3 text-muted-foreground flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    What You'll Practice:
                  </p>
                  <ul className="space-y-2">
                    {mode.features.map((feature, index) => (
                      <li
                        key={index}
                        className="text-sm flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className="w-full cursor-pointer transition-bounce hover:scale-105"
                  onClick={(e) => {
                    e.stopPropagation();
                    onModeSelect(mode.id);
                  }}
                >
                  Start {mode.title}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
