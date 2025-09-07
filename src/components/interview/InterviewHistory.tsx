import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Calendar, Trophy, BarChart3 } from "lucide-react";

interface InterviewSession {
  id: string;
  role: string;
  mode: string;
  date: Date;
  score: number;
  questionsCount: number;
}

interface InterviewHistoryProps {
  onBack: () => void;
  onViewSession?: (sessionId: string) => void;
}

export default function InterviewHistory({
  onBack,
  onViewSession,
}: InterviewHistoryProps) {
  const [sessions, setSessions] = useState<InterviewSession[]>([]);
  const [stats, setStats] = useState({
    totalSessions: 0,
    averageScore: 0,
    bestScore: 0,
    improvement: 0,
  });

  useEffect(() => {
    // Load sessions from localStorage
    const savedSessions = localStorage.getItem("interviewSessions");
    if (savedSessions) {
      const parsedSessions = JSON.parse(savedSessions).map((session: any) => ({
        ...session,
        date: new Date(session.date),
      }));
      setSessions(parsedSessions);

      // Calculate stats
      if (parsedSessions.length > 0) {
        const totalScore = parsedSessions.reduce(
          (sum: number, session: InterviewSession) => sum + session.score,
          0
        );
        const avgScore = totalScore / parsedSessions.length;
        const bestScore = Math.max(
          ...parsedSessions.map((s: InterviewSession) => s.score)
        );

        // Calculate improvement (compare last 3 to previous 3 sessions)
        let improvement = 0;
        if (parsedSessions.length >= 6) {
          const recent = parsedSessions.slice(-3);
          const previous = parsedSessions.slice(-6, -3);
          const recentAvg =
            recent.reduce(
              (sum: number, s: InterviewSession) => sum + s.score,
              0
            ) / 3;
          const previousAvg =
            previous.reduce(
              (sum: number, s: InterviewSession) => sum + s.score,
              0
            ) / 3;
          improvement = ((recentAvg - previousAvg) / previousAvg) * 100;
        }

        setStats({
          totalSessions: parsedSessions.length,
          averageScore: Math.round(avgScore * 10) / 10,
          bestScore,
          improvement: Math.round(improvement),
        });
      }
    }
  }, []);

  const getScoreColor = (score: number) => {
    if (score >= 8) return "text-success";
    if (score >= 6) return "text-warning";
    return "text-destructive";
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex items-center gap-4 mb-8">
        <Button
          variant="ghost"
          onClick={onBack}
          className="hover:bg-primary/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <div>
          <h1 className="text-4xl font-bold text-foreground">
            Interview History
          </h1>
          <p className="text-xl text-muted-foreground">
            Track your progress and review past sessions
          </p>
        </div>
      </div>

      {sessions.length === 0 ? (
        <Card className="border-0 text-center py-12 shadow-lg border border-border">
          <CardContent>
            <BarChart3 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <CardTitle className="text-xl mb-2">No Interview History</CardTitle>
            <CardDescription className="text-lg mb-6">
              Complete your first interview to start tracking your progress
            </CardDescription>
            <Button onClick={onBack}>Start Your First Interview</Button>
          </CardContent>
        </Card>
      ) : (
        <>
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="card-gradient border-0">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {stats.totalSessions}
                </div>
                <p className="text-sm text-muted-foreground">Total Sessions</p>
              </CardContent>
            </Card>

            <Card className="card-gradient border-0">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-success mb-1">
                  {stats.averageScore}
                </div>
                <p className="text-sm text-muted-foreground">Average Score</p>
              </CardContent>
            </Card>

            <Card className="card-gradient border-0">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-warning mb-1">
                  {stats.bestScore}
                </div>
                <p className="text-sm text-muted-foreground">Best Score</p>
              </CardContent>
            </Card>

            <Card className="card-gradient border-0">
              <CardContent className="p-6 text-center">
                <div
                  className={`text-3xl font-bold mb-1 ${
                    stats.improvement >= 0 ? "text-success" : "text-improvement"
                  }`}
                >
                  {stats.improvement > 0 ? "+" : ""}
                  {stats.improvement}%
                </div>
                <p className="text-sm text-muted-foreground">Improvement</p>
              </CardContent>
            </Card>
          </div>

          {/* Sessions List */}
          <Card className="card-gradient border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                Recent Sessions
              </CardTitle>
              <CardDescription>Your interview practice history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sessions
                  .sort((a, b) => b.date.getTime() - a.date.getTime())
                  .map((session) => (
                    <div
                      key={session.id}
                      className="flex items-center justify-between p-4 rounded-lg border bg-card/50 hover:bg-card/80 transition-smooth"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Trophy className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold">{session.role}</h3>
                            <Badge variant="outline" className="text-xs">
                              {session.mode}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {formatDate(session.date)}
                            </span>
                            <span>{session.questionsCount} questions</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div
                            className={`text-2xl font-bold ${getScoreColor(
                              session.score
                            )}`}
                          >
                            {session.score}/10
                          </div>
                          <div className="w-24">
                            <Progress
                              value={session.score * 10}
                              className="h-2"
                            />
                          </div>
                        </div>
                        {onViewSession && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onViewSession(session.id)}
                          >
                            View Details
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
