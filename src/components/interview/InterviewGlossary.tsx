import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BookOpen,
  Code,
  Users,
  MessageCircle,
  Settings,
  Target,
  Brain,
  Zap,
} from "lucide-react";

export const InterviewGlossary = () => {
  const glossaryCategories = [
    {
      category: "Interview Formats",
      icon: MessageCircle,
      color: "from-primary to-accent",
      terms: [
        {
          term: "Behavioral Interview",
          definition:
            "Interview format focused on past experiences and how you handled specific situations, using questions like 'Tell me about a time when...'",
          example:
            "Describing how you resolved a conflict with a team member using the STAR method.",
          importance:
            "Assesses soft skills, cultural fit, and problem-solving approach",
        },
        {
          term: "Technical Interview",
          definition:
            "Evaluation of technical skills through coding challenges, system design problems, or domain-specific questions.",
          example:
            "Solving algorithm problems on a whiteboard or designing a scalable chat system.",
          importance:
            "Validates technical competency and problem-solving methodology",
        },
        {
          term: "Panel Interview",
          definition:
            "Interview conducted by multiple interviewers simultaneously, often from different departments or seniority levels.",
          example:
            "Meeting with hiring manager, team lead, and HR representative together.",
          importance:
            "Provides diverse perspectives and simulates team collaboration",
        },
        {
          term: "Case Study Interview",
          definition:
            "Scenario-based evaluation where candidates solve realistic business problems or analyze complex situations.",
          example:
            "Analyzing why a product's user engagement dropped and proposing solutions.",
          importance:
            "Tests analytical thinking, business acumen, and structured problem-solving",
        },
      ],
    },
    {
      category: "Technical Concepts",
      icon: Code,
      color: "from-accent to-improvement",
      terms: [
        {
          term: "System Design",
          definition:
            "High-level architecture planning for scalable applications, focusing on components, data flow, and infrastructure decisions.",
          example:
            "Designing Twitter's architecture to handle millions of tweets per day.",
          importance:
            "Essential for senior roles, tests architectural thinking and scalability awareness",
        },
        {
          term: "Big-O Notation",
          definition:
            "Mathematical notation describing algorithm efficiency in terms of time and space complexity as input size grows.",
          example:
            "Binary search is O(log n) time complexity, much faster than linear search O(n).",
          importance:
            "Fundamental for evaluating and comparing algorithm performance",
        },
        {
          term: "Whiteboarding",
          definition:
            "Solving problems by writing code or diagrams on a whiteboard while explaining your thought process.",
          example:
            "Implementing a binary tree traversal while discussing trade-offs with the interviewer.",
          importance: "Tests communication skills alongside technical ability",
        },
        {
          term: "Code Review",
          definition:
            "Process of examining code for bugs, style issues, and improvements, often simulated in interviews.",
          example:
            "Identifying security vulnerabilities or performance issues in provided code samples.",
          importance:
            "Assesses code quality awareness and collaborative development skills",
        },
      ],
    },
    {
      category: "Assessment Methods",
      icon: Target,
      color: "from-improvement to-primary",
      terms: [
        {
          term: "STAR Method",
          definition:
            "Structured approach for answering behavioral questions: Situation, Task, Action, Result.",
          example:
            "S: Project deadline pressure, T: Deliver feature on time, A: Reorganized workflow, R: Delivered 2 days early.",
          importance:
            "Provides clear framework for compelling, complete answers",
        },
        {
          term: "Culture Fit",
          definition:
            "Assessment of how well a candidate's values, work style, and personality align with company culture.",
          example:
            "Evaluating if someone thrives in collaborative vs. independent work environments.",
          importance: "Predicts long-term success and team integration",
        },
        {
          term: "Technical Debt Discussion",
          definition:
            "Conversation about managing shortcuts, legacy code, and long-term maintainability in software projects.",
          example:
            "Explaining how you balanced quick fixes with sustainable solutions under deadline pressure.",
          importance:
            "Shows maturity in technical decision-making and business awareness",
        },
        {
          term: "Competency-Based Questions",
          definition:
            "Targeted questions designed to evaluate specific skills or competencies required for the role.",
          example:
            "Leadership competency: 'Describe a time you motivated an underperforming team member.'",
          importance:
            "Ensures candidates possess required skills through concrete evidence",
        },
      ],
    },
    {
      category: "Leadership & Management",
      icon: Users,
      color: "from-primary to-improvement",
      terms: [
        {
          term: "Servant Leadership",
          definition:
            "Leadership philosophy focused on serving team members' needs and removing obstacles to help them succeed.",
          example:
            "A manager who prioritizes team development and provides resources rather than just giving orders.",
          importance:
            "Modern leadership approach valued by progressive companies",
        },
        {
          term: "Stakeholder Management",
          definition:
            "Skill of managing relationships and communications with various project stakeholders with different interests.",
          example:
            "Balancing engineering quality concerns with business timeline pressures.",
          importance:
            "Critical for senior roles requiring cross-functional collaboration",
        },
        {
          term: "Change Management",
          definition:
            "Process of planning, implementing, and adapting to organizational or project changes effectively.",
          example:
            "Leading team through technology migration while maintaining productivity.",
          importance: "Essential in dynamic environments and growth companies",
        },
        {
          term: "Performance Management",
          definition:
            "System for setting goals, providing feedback, and developing team members' careers and skills.",
          example:
            "Creating development plans and conducting regular one-on-ones with direct reports.",
          importance: "Key responsibility for management positions",
        },
      ],
    },
    {
      category: "Industry Terms",
      icon: Settings,
      color: "from-accent to-primary",
      terms: [
        {
          term: "Agile Methodology",
          definition:
            "Iterative software development approach emphasizing collaboration, flexibility, and continuous improvement.",
          example:
            "Working in 2-week sprints with daily standups and retrospectives.",
          importance:
            "Dominant development methodology in modern tech companies",
        },
        {
          term: "MVP (Minimum Viable Product)",
          definition:
            "Basic version of a product with core features to validate market demand and gather user feedback.",
          example:
            "Launching a simple task management app before adding advanced features.",
          importance:
            "Fundamental product development concept for startups and feature development",
        },
        {
          term: "A/B Testing",
          definition:
            "Experimental method comparing two versions to determine which performs better with users.",
          example:
            "Testing two button colors to see which generates more clicks.",
          importance:
            "Data-driven decision making essential in product and marketing roles",
        },
        {
          term: "Technical Debt",
          definition:
            "Accumulated shortcuts or suboptimal solutions that require future refactoring or improvement.",
          example:
            "Quick fixes that work now but make future changes more difficult.",
          importance:
            "Critical concept for balancing speed and long-term maintainability",
        },
      ],
    },
    {
      category: "Soft Skills",
      icon: Brain,
      color: "from-improvement to-accent",
      terms: [
        {
          term: "Emotional Intelligence",
          definition:
            "Ability to recognize, understand, and manage your own emotions and those of others effectively.",
          example:
            "Staying calm under pressure and helping stressed team members stay focused.",
          importance:
            "Increasingly valued for leadership roles and team collaboration",
        },
        {
          term: "Growth Mindset",
          definition:
            "Belief that abilities and intelligence can be developed through dedication, hard work, and learning.",
          example:
            "Viewing failures as learning opportunities rather than personal shortcomings.",
          importance:
            "Indicates adaptability and continuous learning potential",
        },
        {
          term: "Cross-functional Collaboration",
          definition:
            "Working effectively with people from different departments, backgrounds, or areas of expertise.",
          example:
            "Product manager coordinating between engineering, design, and marketing teams.",
          importance:
            "Essential in modern organizations with interdependent teams",
        },
        {
          term: "Active Listening",
          definition:
            "Fully concentrating on, understanding, and responding thoughtfully to what others are saying.",
          example:
            "Paraphrasing concerns before offering solutions, asking clarifying questions.",
          importance:
            "Foundation of effective communication and relationship building",
        },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Interview Prep Glossary
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Essential terms, concepts, and methodologies you'll encounter in
          interviews. Understanding these will help you communicate effectively
          and demonstrate industry knowledge.
        </p>
      </div>

      <div className="space-y-8">
        {glossaryCategories.map((category, categoryIndex) => (
          <Card key={categoryIndex} className="p-8 bg-card/50">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {category.category}
                  </h2>
                  <p className="text-muted-foreground">
                    {category.terms.length} key terms and definitions
                  </p>
                </div>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {category.terms.map((termData, termIndex) => (
                  <AccordionItem
                    key={termIndex}
                    value={`${categoryIndex}-${termIndex}`}
                    className="border border-border/30 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <div className="flex items-center space-x-4 w-full">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-semibold flex-shrink-0">
                          {termIndex + 1}
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-foreground text-lg">
                            {termData.term}
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            Click to expand definition and examples
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6 ml-12">
                      <div className="space-y-6">
                        {/* Definition */}
                        <div>
                          <div className="flex items-center space-x-2 mb-3">
                            <BookOpen className="w-4 h-4 text-primary" />
                            <h4 className="font-semibold text-foreground">
                              Definition
                            </h4>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {termData.definition}
                          </p>
                        </div>

                        {/* Example */}
                        <div>
                          <div className="flex items-center space-x-2 mb-3">
                            <Zap className="w-4 h-4 text-accent" />
                            <h4 className="font-semibold text-foreground">
                              Example
                            </h4>
                          </div>
                          <p className="text-muted-foreground leading-relaxed bg-muted/20 p-4 rounded-lg border-l-4 border-accent/30">
                            {termData.example}
                          </p>
                        </div>

                        {/* Why It Matters */}
                        <div>
                          <div className="flex items-center space-x-2 mb-3">
                            <Target className="w-4 h-4 text-improvement" />
                            <h4 className="font-semibold text-foreground">
                              Why It Matters
                            </h4>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {termData.importance}
                          </p>
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

      {/* Quick Search Tips */}
      <Card className="p-8">
        <div className="text-center space-y-4">
          <BookOpen className="w-8 h-8 text-primary mx-auto" />
          <h3 className="text-xl font-bold text-foreground">
            Pro Tip: Use This Glossary Strategically
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Review terms relevant to your target role before interviews. Being
            familiar with industry terminology demonstrates professionalism and
            helps you communicate more effectively with interviewers.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {[
              "STAR Method",
              "System Design",
              "Culture Fit",
              "Agile",
              "Growth Mindset",
              "A/B Testing",
            ].map((term, index) => (
              <Badge
                key={index}
                variant="outline"
                className="border-primary/30 text-primary"
              >
                {term}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};
