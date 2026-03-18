import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import StartScreen from "@/components/StartScreen";
import QuizScreen from "@/components/QuizScreen";
import ResultScreen from "@/components/ResultScreen";

type View = "start" | "quiz" | "result";

const Index = () => {
  const [view, setView] = useState<View>("start");
  const [score, setScore] = useState(0);

  const handleStart = () => setView("quiz");

  const handleComplete = (finalScore: number) => {
    setScore(finalScore);
    setView("result");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-xl bg-card rounded-[24px] shadow-[0_8px_30px_rgb(31,45,77,0.08)] overflow-hidden">
        <AnimatePresence mode="wait">
          {view === "start" && <StartScreen key="start" onStart={handleStart} />}
          {view === "quiz" && <QuizScreen key="quiz" onComplete={handleComplete} />}
          {view === "result" && <ResultScreen key="result" />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
