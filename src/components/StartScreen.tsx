import { motion } from "framer-motion";
import { ShieldCheck, Check } from "lucide-react";
import { Link } from "react-router-dom";

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
      className="flex flex-col items-center text-center px-6 py-12 md:py-20 md:px-16">
      
      <h1 className="text-3xl md:text-5xl font-semibold text-foreground leading-tight max-w-xl mb-6">
        Kwestionariusz Funkcji Wykonawczych
      </h1>

      <p className="text-muted-foreground text-base md:text-lg max-w-md mb-10 leading-relaxed">
        Dlaczego Twoje dziecko czasem traci kontrolę nad emocjami, a innym razem potrafi głęboko się skupić? Zbadaj jego Profil Neuro-Rozwojowy.
      </p>

      <ul className="flex flex-col items-start gap-3 mb-10 text-left max-w-md w-full">
        <li className="flex items-start gap-3 text-muted-foreground text-sm md:text-base">
          <Check size={18} className="text-accent mt-0.5 shrink-0" />
          <span>10 precyzyjnych pytań. Zaledwie 2 minuty.</span>
        </li>
        <li className="flex items-start gap-3 text-muted-foreground text-sm md:text-base">
          <Check size={18} className="text-accent mt-0.5 shrink-0" />
          <span>Spersonalizowany raport bazujący na najnowszej neuronauce.</span>
        </li>
        <li className="flex items-start gap-3 text-muted-foreground text-sm md:text-base">
          <Check size={18} className="text-accent mt-0.5 shrink-0" />
          <span>Konkretny protokół do wdrożenia od razu po analizie.</span>
        </li>
      </ul>

      <button
        onClick={onStart}
        className="bg-accent text-accent-foreground font-semibold text-base md:text-lg px-10 py-4 rounded-full transition-all duration-200 hover:brightness-95 hover:-translate-y-0.5 active:translate-y-0 shadow-md hover:shadow-lg mb-6">
        
        Rozpocznij Diagnozę
      </button>

      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-muted-foreground text-xs md:text-sm font-medium">
        <ShieldCheck size={14} />
        <span>W oparciu o modele badawcze (m.in. Harvard Center on the Developing Child).</span>
      </div>
    </motion.div>);

};

export default StartScreen;