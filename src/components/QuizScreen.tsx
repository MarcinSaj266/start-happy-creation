import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { questions } from "@/data/questions";
import type { ExecutiveDomain } from "@/data/questions";

interface QuizAnswer {
  question_number: number;
  domain: ExecutiveDomain;
  score: number;
}

interface QuizScreenProps {
  onComplete: (answers: QuizAnswer[]) => void;
}

const QuizScreen = ({ onComplete }: QuizScreenProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [collectedAnswers, setCollectedAnswers] = useState<QuizAnswer[]>([]);

  const question = questions[currentIndex];
  const total = questions.length;
  const progress = ((currentIndex) / total) * 100;

  const handleSelect = (optionIndex: number, points: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(optionIndex);

    const newAnswer: QuizAnswer = {
      question_number: question.id,
      domain: question.domain,
      score: points,
    };
    const updatedAnswers = [...collectedAnswers, newAnswer];

    setTimeout(() => {
      if (currentIndex < total - 1) {
        setCollectedAnswers(updatedAnswers);
        setCurrentIndex((prev) => prev + 1);
        setSelectedOption(null);
      } else {
        setIsLoading(true);
        setTimeout(() => {
          onComplete(updatedAnswers);
        }, 1500);
      }
    }, 300);
  };

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center text-center px-6 py-20 md:py-32"
      >
        <div className="w-10 h-10 border-3 border-foreground/20 border-t-foreground rounded-full animate-spin mb-6" />
        <p className="text-muted-foreground text-base font-medium">
          Generowanie spersonalizowanego raportu...
        </p>
      </motion.div>
    );
  }

  return (
    <div className="px-6 py-8 md:px-12 md:py-12">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium text-muted-foreground">
            Pytanie {currentIndex + 1} z {total}
          </span>
          <span className="text-sm font-medium text-muted-foreground">
            {Math.round(((currentIndex + 1) / total) * 100)}%
          </span>
        </div>
        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-foreground rounded-full"
            initial={{ width: `${progress}%` }}
            animate={{ width: `${((currentIndex + 1) / total) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-accent mb-2">
            Pytanie {currentIndex + 1}: {question.title}
          </p>
          <h2 className="text-base md:text-lg font-medium text-foreground leading-relaxed mb-8">
            <span className="font-semibold">Sytuacja:</span> {question.situation}
          </h2>

          <div className="space-y-3">
            {question.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx, option.points)}
                  disabled={selectedOption !== null}
                  className={`w-full text-left p-5 md:p-6 rounded-2xl border-2 transition-all duration-200 flex items-start gap-4 group ${
                    isSelected
                      ? "border-foreground bg-foreground/[0.03]"
                      : "border-secondary hover:border-foreground/30 hover:bg-secondary/50"
                  } ${selectedOption !== null && !isSelected ? "opacity-50" : ""}`}
                >
                  {/* Radio indicator */}
                  <div
                    className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 transition-all duration-200 flex items-center justify-center ${
                      isSelected
                        ? "border-foreground bg-foreground"
                        : "border-muted group-hover:border-foreground/40"
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 rounded-full bg-card"
                      />
                    )}
                  </div>
                  <span className="text-sm md:text-base text-foreground leading-relaxed">
                    {option.label}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default QuizScreen;
