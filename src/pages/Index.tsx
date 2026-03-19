import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import StartScreen from "@/components/StartScreen";
import QuizScreen from "@/components/QuizScreen";
import ResultScreen from "@/components/ResultScreen";
import { supabase } from "@/integrations/supabase/client";
import type { ExecutiveDomain } from "@/data/questions";
import logo from "@/assets/logo.png";

type View = "start" | "quiz" | "result";

interface QuizAnswer {
  question_number: number;
  domain: ExecutiveDomain;
  score: number;
}

const Index = () => {
  const [view, setView] = useState<View>("start");
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  const handleStart = async () => {
    // Create a new quiz session in Supabase
    const { data, error } = await supabase
      .from("quiz_sessions")
      .insert({ status: "in_progress" as const })
      .select("id")
      .single();

    if (error) {
      console.error("Failed to create session:", error);
    }
    if (data) {
      setSessionId(data.id);
    }
    setAnswers([]);
    setView("quiz");
  };

  const handleComplete = async (collectedAnswers: QuizAnswer[]) => {
    setAnswers(collectedAnswers);

    if (!sessionId) {
      setView("result");
      return;
    }

    // Calculate domain scores
    const scores = { inhibition: 0, working_memory: 0, cognitive_flexibility: 0 };
    collectedAnswers.forEach((a) => {
      scores[a.domain] += a.score;
    });
    const totalScore = Object.values(scores).reduce((s, v) => s + v, 0);

    // Save answers
    const answerRows = collectedAnswers.map((a) => ({
      session_id: sessionId,
      question_number: a.question_number,
      domain: a.domain as "inhibition" | "working_memory" | "cognitive_flexibility",
      score: a.score,
    }));

    const [answersResult, sessionResult] = await Promise.all([
      supabase.from("quiz_answers").insert(answerRows),
      supabase
        .from("quiz_sessions")
        .update({
          score_inhibition: scores.inhibition,
          score_working_memory: scores.working_memory,
          score_cognitive_flexibility: scores.cognitive_flexibility,
          total_score: totalScore,
        })
        .eq("id", sessionId),
    ]);

    if (answersResult.error) console.error("Failed to save answers:", answersResult.error);
    if (sessionResult.error) console.error("Failed to update session:", sessionResult.error);

    setView("result");
  };

  const handleEmailSubmit = async (email: string) => {
    // Upsert lead (in case email already exists)
    const { data: lead, error: leadError } = await supabase
      .from("leads")
      .upsert({ email }, { onConflict: "email" })
      .select("id")
      .single();

    if (leadError) {
      console.error("Failed to save lead:", leadError);
      return false;
    }

    if (sessionId && lead) {
      const { error: updateError } = await supabase
        .from("quiz_sessions")
        .update({
          lead_id: lead.id,
          status: "completed" as const,
          completed_at: new Date().toISOString(),
        })
        .eq("id", sessionId);

      if (updateError) console.error("Failed to update session:", updateError);
    }

    return true;
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 md:p-8">
      {/* Branding Header */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <img src={logo} alt="Logigłówka logo" className="h-10 w-auto" />
        <span className="text-foreground font-bold text-2xl tracking-tight">Logigłówka</span>
      </div>

      <div className="w-full max-w-xl bg-card rounded-[24px] shadow-[0_8px_30px_rgb(31,45,77,0.08)] overflow-hidden">
        <AnimatePresence mode="wait">
          {view === "start" && <StartScreen key="start" onStart={handleStart} />}
          {view === "quiz" && <QuizScreen key="quiz" onComplete={handleComplete} />}
          {view === "result" && <ResultScreen key="result" onEmailSubmit={handleEmailSubmit} />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
