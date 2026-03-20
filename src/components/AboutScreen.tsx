import { motion } from "framer-motion";
import { ArrowLeft, Facebook } from "lucide-react";
import { useNavigate } from "react-router-dom";
import aboutPhoto from "@/assets/zdjecie-logiglowka.png";

const AboutScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center p-4 md:p-8">
      <div className="w-full max-w-5xl">
        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium mb-8"
        >
          <ArrowLeft size={18} />
          Wróć do quizu
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center"
        >
          {/* Photo — 2/5 on desktop */}
          <div className="md:col-span-2 flex justify-center">
            <img
              src={aboutPhoto}
              alt="Twórczyni Logigłówki"
              className="aspect-[4/5] w-full max-w-xs md:max-w-none object-cover rounded-[32px] shadow-2xl shadow-foreground/10"
            />
          </div>

          {/* Text — 3/5 on desktop */}
          <div className="md:col-span-3 text-center md:text-left">
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Oparte na dowodach
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Poznaj Logigłówkę.
            </h1>

            <p className="text-lg leading-relaxed text-foreground/80 mb-8">
              Logigłówka powstała z myślą o świadomych rodzicach, którzy chcą
              wspierać rozwój poznawczy dzieci w oparciu o rzetelną wiedzę, a nie
              przypadkowe porady. Przekładamy skomplikowane procesy zachodzące w
              mózgu dziecka na konkretne, proste do wdrożenia kroki. Pomagamy
              budować kapitał intelektualny od najmłodszych lat.
            </p>

            <a
              href="https://www.facebook.com/profile.php?id=61588242831848"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg bg-accent text-accent-foreground hover:brightness-95 transition-all hover:-translate-y-1 shadow-lg shadow-accent/30"
            >
              <Facebook size={22} />
              Odwiedź nas na Facebooku
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutScreen;
