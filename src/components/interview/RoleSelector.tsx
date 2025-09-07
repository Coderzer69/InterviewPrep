import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Users, BarChart3, Palette, Database, Brain } from "lucide-react";

interface Role {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  domains: string[];
  color: string;
}

const roles: Role[] = [
  {
    id: "software-engineer",
    title: "Software Engineer",
    description: "Technical coding and system design interviews",
    icon: Code,
    domains: ["Frontend", "Backend", "Full-Stack", "DevOps", "Mobile"],
    color: "primary",
  },
  {
    id: "product-manager",
    title: "Product Manager",
    description: "Product strategy, user experience, and business interviews",
    icon: Users,
    domains: ["Strategy", "Analytics", "Growth", "Design", "Technical PM"],
    color: "success",
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    description: "Data analysis, SQL, and business intelligence interviews",
    icon: BarChart3,
    domains: ["SQL", "Python/R", "Business Intelligence", "Statistics", "ML"],
    color: "warning",
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    description: "Design thinking, user research, and portfolio reviews",
    icon: Palette,
    domains: ["UI Design", "UX Research", "Prototyping", "Design Systems"],
    color: "improvement",
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    description: "Machine learning, statistics, and data modeling interviews",
    icon: Brain,
    domains: ["Machine Learning", "Statistics", "Python", "Deep Learning"],
    color: "primary",
  },
  {
    id: "database-admin",
    title: "Database Administrator",
    description: "Database design, optimization, and administration interviews",
    icon: Database,
    domains: ["SQL", "Database Design", "Performance", "Security"],
    color: "secondary",
  },
];

interface RoleSelectorProps {
  onRoleSelect: (roleId: string, domain?: string) => void;
}

export default function RoleSelector({ onRoleSelect }: RoleSelectorProps) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6 text-foreground">
          Choose Your Target Role
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
          Select the role you're preparing for, and we'll simulate a realistic
          interview experience tailored to your target position.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {roles.map((role) => {
          const IconComponent = role.icon;
          return (
            <Card
              key={role.id}
              className="transition-smooth hover:shadow-soft border border-border bg-card cursor-pointer group"
              onClick={() => onRoleSelect(role.id)}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-6 p-4 rounded-full border-2 border-border bg-background group-hover:border-primary transition-smooth">
                  <IconComponent className="w-8 h-8 text-foreground" />
                </div>
                <CardTitle className="text-2xl mb-3 font-bold">
                  {role.title}
                </CardTitle>
                <CardDescription className="text-sm font-light leading-relaxed">
                  {role.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-medium mb-3 text-muted-foreground uppercase tracking-wider">
                      Domains:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {role.domains.map((domain) => (
                        <span
                          key={domain}
                          className="text-xs border border-border/80 px-3 py-1 bg-muted text-muted-foreground rounded-sm font-medium"
                        >
                          {domain}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full mt-[20px] font-medium bg-primary text-white hover:bg-primary/90 hover:text-white cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      onRoleSelect(role.id);
                    }}
                  >
                    Start Interview Prep
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
