import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ExternalLink,
  BookOpen,
  Video,
  Users,
  Brain,
  Zap,
  Code,
  MessageCircle,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";
import { InterviewGuide } from "./InterviewGuide";
import { QABank } from "./QABank";
import { CheatSheet } from "./CheatSheet";
import { QuickTips } from "./QuickTips";
import { InterviewGlossary } from "./InterviewGlossary";

interface StudyResourcesProps {
  role: string;
  onBack: () => void;
}

const resources = {
  "software-engineer": {
    technical: [
      {
        title: "LeetCode",
        description: "Practice coding problems and algorithms",
        url: "https://leetcode.com",
        type: "Coding Practice",
        icon: Code,
      },
      {
        title: "System Design Primer",
        description: "Learn system design concepts and patterns",
        url: "https://github.com/donnemartin/system-design-primer",
        type: "System Design",
        icon: BookOpen,
      },
      {
        title: "Cracking the Coding Interview",
        description: "Comprehensive guide to technical interviews",
        url: "https://www.crackingthecodinginterview.com",
        type: "Book",
        icon: BookOpen,
      },
    ],
    behavioral: [
      {
        title: "STAR Method Guide",
        description: "Master the STAR technique for behavioral questions",
        url: "https://www.indeed.com/career-advice/interviewing/how-to-use-the-star-method",
        type: "Method",
        icon: Users,
      },
      {
        title: "Behavioral Interview Questions",
        description: "Common behavioral questions and sample answers",
        url: "https://www.glassdoor.com/blog/behavioral-interview-questions",
        type: "Q&A Guide",
        icon: BookOpen,
      },
    ],
  },
  "product-manager": {
    technical: [
      {
        title: "Decode and Conquer",
        description: "Product management interview framework",
        url: "https://www.lewis-lin.com/decode-and-conquer",
        type: "Framework",
        icon: BookOpen,
      },
      {
        title: "Product School",
        description: "PM interview preparation courses",
        url: "https://productschool.com",
        type: "Course",
        icon: Video,
      },
    ],
    behavioral: [
      {
        title: "PM Leadership Stories",
        description: "How to craft compelling leadership narratives",
        url: "https://www.productmanagerhq.com/behavioral-interview-questions/",
        type: "Storytelling",
        icon: Users,
      },
    ],
  },
  "data-analyst": {
    technical: [
      {
        title: "SQL Interview Questions",
        description: "Practice SQL queries and database concepts",
        url: "https://www.stratascratch.com",
        type: "SQL Practice",
        icon: Code,
      },
      {
        title: "Analytics Interview Prep",
        description: "Business case studies and analytical thinking",
        url: "https://www.analyticsvidhya.com",
        type: "Case Studies",
        icon: BookOpen,
      },
    ],
    behavioral: [
      {
        title: "Data Storytelling",
        description: "Communicate insights effectively to stakeholders",
        url: "https://www.storytellingwithdata.com",
        type: "Communication",
        icon: Users,
      },
    ],
  },
};

const StudyResources = ({ role, onBack }: StudyResourcesProps) => {
  const roleResources = resources[role as keyof typeof resources];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Comprehensive Interview Resources
          </h1>
          <p className="text-muted-foreground">
            Everything you need to ace your{" "}
            {role ? role.replace("-", " ") : "interview"} interview and advance
            your career
          </p>
        </div>
        <Button onClick={onBack} variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </div>

      <Tabs defaultValue="guide" className="space-y-8">
        <TabsList className="grid grid-cols-2 lg:grid-cols-6 h-auto p-2 bg-card/50 backdrop-blur-sm">
          <TabsTrigger
            value="guide"
            className="flex flex-col items-center space-y-1 py-3 px-4"
          >
            <BookOpen className="w-4 h-4" />
            <span className="text-xs">Interview Guide</span>
          </TabsTrigger>
          <TabsTrigger
            value="qa-bank"
            className="flex flex-col items-center space-y-1 py-3 px-4"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="text-xs">Q&A Bank</span>
          </TabsTrigger>
          <TabsTrigger
            value="cheat-sheet"
            className="flex flex-col items-center space-y-1 py-3 px-4"
          >
            <CheckCircle className="w-4 h-4" />
            <span className="text-xs">Do's & Don'ts</span>
          </TabsTrigger>
          <TabsTrigger
            value="quick-tips"
            className="flex flex-col items-center space-y-1 py-3 px-4"
          >
            <Zap className="w-4 h-4" />
            <span className="text-xs">Quick Tips</span>
          </TabsTrigger>
          <TabsTrigger
            value="glossary"
            className="flex flex-col items-center space-y-1 py-3 px-4"
          >
            <Brain className="w-4 h-4" />
            <span className="text-xs">Glossary</span>
          </TabsTrigger>
          <TabsTrigger
            value="external"
            className="flex flex-col items-center space-y-1 py-3 px-4"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="text-xs">External Resources</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="guide">
          <InterviewGuide />
        </TabsContent>

        <TabsContent value="qa-bank">
          <QABank />
        </TabsContent>

        <TabsContent value="cheat-sheet">
          <CheatSheet />
        </TabsContent>

        <TabsContent value="quick-tips">
          <QuickTips />
        </TabsContent>

        <TabsContent value="glossary">
          <InterviewGlossary />
        </TabsContent>

        <TabsContent value="external">
          <div className="space-y-8">
            {roleResources ? (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Technical Resources
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {roleResources.technical.map((resource, index) => {
                      const IconComponent = resource.icon;
                      return (
                        <Card
                          key={index}
                          className="p-6 hover:shadow-lg transition-shadow"
                        >
                          <div className="flex items-start space-x-4">
                            <div className="p-2 rounded-lg bg-primary/10">
                              <IconComponent className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-foreground mb-2">
                                {resource.title}
                              </h4>
                              <p className="text-sm text-muted-foreground mb-3">
                                {resource.description}
                              </p>
                              <div className="flex items-center justify-between">
                                <span className="text-xs bg-muted px-2 py-1 rounded">
                                  {resource.type}
                                </span>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() =>
                                    window.open(resource.url, "_blank")
                                  }
                                >
                                  <ExternalLink className="w-3 h-3 mr-1" />
                                  Visit
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Behavioral Resources
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {roleResources.behavioral.map((resource, index) => {
                      const IconComponent = resource.icon;
                      return (
                        <Card
                          key={index}
                          className="p-6 hover:shadow-lg transition-shadow"
                        >
                          <div className="flex items-start space-x-4">
                            <div className="p-2 rounded-lg bg-primary/10">
                              <IconComponent className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-foreground mb-2">
                                {resource.title}
                              </h4>
                              <p className="text-sm text-muted-foreground mb-3">
                                {resource.description}
                              </p>
                              <div className="flex items-center justify-between">
                                <span className="text-xs bg-muted px-2 py-1 rounded">
                                  {resource.type}
                                </span>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() =>
                                    window.open(resource.url, "_blank")
                                  }
                                >
                                  <ExternalLink className="w-3 h-3 mr-1" />
                                  Visit
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    General Interview Resources
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {[
                      {
                        title: "LeetCode",
                        description: "Practice coding problems and algorithms",
                        url: "https://leetcode.com",
                        type: "Coding Practice",
                        icon: Code,
                      },
                      {
                        title: "Cracking the Coding Interview",
                        description:
                          "Comprehensive guide to technical interviews",
                        url: "https://www.crackingthecodinginterview.com",
                        type: "Book",
                        icon: BookOpen,
                      },
                      {
                        title: "STAR Method Guide",
                        description:
                          "Master the STAR technique for behavioral questions",
                        url: "https://www.indeed.com/career-advice/interviewing/how-to-use-the-star-method",
                        type: "Method",
                        icon: Users,
                      },
                      {
                        title: "System Design Primer",
                        description:
                          "Learn system design concepts and patterns",
                        url: "https://github.com/donnemartin/system-design-primer",
                        type: "System Design",
                        icon: BookOpen,
                      },
                      {
                        title: "Behavioral Interview Questions",
                        description:
                          "Common behavioral questions and sample answers",
                        url: "https://www.glassdoor.com/blog/behavioral-interview-questions",
                        type: "Q&A Guide",
                        icon: BookOpen,
                      },
                      {
                        title: "Interview Preparation Tips",
                        description: "General tips for interview success",
                        url: "https://www.indeed.com/career-advice/interviewing/interview-tips",
                        type: "Tips",
                        icon: Zap,
                      },
                    ].map((resource, index) => {
                      const IconComponent = resource.icon;
                      return (
                        <Card
                          key={index}
                          className="p-6 hover:shadow-lg transition-shadow"
                        >
                          <div className="flex items-start space-x-4">
                            <div className="p-2 rounded-lg bg-primary/10">
                              <IconComponent className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-foreground mb-2">
                                {resource.title}
                              </h4>
                              <p className="text-sm text-muted-foreground mb-3">
                                {resource.description}
                              </p>
                              <div className="flex items-center justify-between">
                                <span className="text-xs bg-muted px-2 py-1 rounded">
                                  {resource.type}
                                </span>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() =>
                                    window.open(resource.url, "_blank")
                                  }
                                >
                                  <ExternalLink className="w-3 h-3 mr-1" />
                                  Visit
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudyResources;
