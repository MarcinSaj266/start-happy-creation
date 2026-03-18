import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, ArrowRight, CheckCircle, Lock } from "lucide-react";
import { z } from "zod";

const emailSchema = z.string().trim().email("Podaj prawidłowy adres e-mail").max(255);

const ResultScreen = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }
    setError("");
    console.log("Email submitted:", result.data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center text-center px-6 py-16 md:py-24"
      >
        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
          <CheckCircle className="text-accent-foreground" size={32} />
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-3">
          Sprawdź swoją skrzynkę mailową!
        </h2>
        <p className="text-muted-foreground max-w-sm">
          Twój spersonalizowany protokół PDF został wysłany na podany adres e-mail.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col items-center text-center px-6 py-10 md:py-16 md:px-12"
    >
      {/* Icon */}
      <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6">
        <Lightbulb className="text-accent" size={30} />
      </div>

      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-8">
        Diagnoza zakończona sukcesem.
      </h2>

      {/* Teaser Card */}
      <div className="w-full bg-foreground text-card rounded-2xl p-6 md:p-8 text-left mb-8">
        <p className="text-sm md:text-base leading-relaxed opacity-90">
          <span className="font-semibold opacity-100">Wstępna analiza:</span>{" "}
          Twój profil wskazuje na bardzo dobrą pamięć roboczą dziecka, ale układ
          hamowania impulsów znajduje się w kluczowej fazie neuroplastycznej
          i wymaga Twojego wsparcia.
        </p>
      </div>

      {/* CTA Text */}
      <p className="text-muted-foreground text-sm md:text-base max-w-md mb-6 leading-relaxed">
        Podaj adres e-mail, na który wyślemy pełny profil i{" "}
        <span className="font-semibold text-foreground">
          3-krokowy protokół ratunkowy w PDF.
        </span>
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            placeholder="twoj@email.com"
            className="w-full px-5 py-4 rounded-xl border-2 border-secondary bg-card text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/30 transition-all text-base"
          />
          {error && (
            <p className="text-destructive text-sm mt-2 text-left">{error}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-accent text-accent-foreground font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 hover:brightness-95 hover:-translate-y-0.5 active:translate-y-0 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
        >
          Odbieram mój protokół PDF
          <ArrowRight size={18} />
        </button>
      </form>

      {/* GDPR note */}
      <div className="flex items-center gap-2 mt-6 text-muted-foreground/70 text-xs max-w-sm">
        <Lock size={12} className="flex-shrink-0" />
        <p>
          Twoje dane są bezpieczne. Nie udostępniamy ich osobom trzecim.
          Polityka prywatności zgodna z RODO.
        </p>
      </div>
    </motion.div>
  );
};

export default ResultScreen;
