import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen = ({ onStart }: StartScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col items-center text-center px-6 py-12 md:py-20 md:px-16"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-muted-foreground text-sm font-medium mb-8">
        <ShieldCheck size={16} />
        <span>Narzędzie oparte na neurobiologii</span>
      </div>

      <h1 className="font-heading text-3xl md:text-5xl font-semibold text-foreground leading-tight max-w-xl mb-6">
        Sprawdź architekturę neuronalną Twojego dziecka.
      </h1>

      <p className="text-muted-foreground text-base md:text-lg max-w-md mb-10 leading-relaxed">
        10 pytań, 3 minuty. Przestań zgadywać przyczyny wybuchów złości.
        Otrzymaj darmowy, zindywidualizowany protokół działania.
      </p>

      <button
        onClick={onStart}
        className="bg-accent text-accent-foreground font-semibold text-base md:text-lg px-10 py-4 rounded-full transition-all duration-200 hover:brightness-95 hover:-translate-y-0.5 active:translate-y-0 shadow-md hover:shadow-lg"
      >
        Rozpocznij Diagnozę
      </button>
    </motion.div>
  );
};

export default StartScreen;
