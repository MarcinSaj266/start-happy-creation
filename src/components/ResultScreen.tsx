import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, ArrowRight, CheckCircle, Lock } from "lucide-react";
import { z } from "zod";
import type { ResultProfile } from "@/data/profiles";

const nameSchema = z.string().trim().min(2, "Imię musi mieć co najmniej 2 znaki").max(50, "Imię może mieć maksymalnie 50 znaków");
const emailSchema = z.string().trim().email("Podaj prawidłowy adres e-mail").max(255);

interface ResultScreenProps {
  profile: ResultProfile;
  onEmailSubmit: (email: string, name: string) => Promise<boolean>;
}

const ResultScreen = ({ profile, onEmailSubmit }: ResultScreenProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nameResult = nameSchema.safeParse(name);
    if (!nameResult.success) {
      setError(nameResult.error.errors[0].message);
      return;
    }

    const emailResult = emailSchema.safeParse(email);
    if (!emailResult.success) {
      setError(emailResult.error.errors[0].message);
      return;
    }

    setError("");
    setLoading(true);

    const success = await onEmailSubmit(emailResult.data, nameResult.data);
    setLoading(false);

    if (success) {
      setSubmitted(true);
    } else {
      setError("Wystąpił błąd. Spróbuj ponownie.");
    }
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
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">Sprawdź swoją skrzynkę mailową!</h2>
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
      <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6">
        <Lightbulb className="text-accent" size={30} />
      </div>

      <h1 className="text-xl md:text-2xl font-semibold text-foreground mb-2 leading-tight">
        {profile.title}
      </h1>
      <h2 className="text-base md:text-lg text-muted-foreground font-medium mb-8">
        {profile.subtitle}
      </h2>

      <div className="w-full bg-foreground text-card rounded-2xl p-6 md:p-8 text-left mb-8">
        <p className="text-sm md:text-base leading-relaxed opacity-90 whitespace-pre-line">
          {profile.description}
        </p>
      </div>

      <p className="text-muted-foreground text-sm md:text-base max-w-md mb-6 leading-relaxed">
        {profile.ctaSubtext}
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (error) setError("");
            }}
            placeholder="Twoje imię"
            disabled={loading}
            className="w-full px-5 py-4 rounded-xl border-2 border-secondary bg-card text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/30 transition-all text-base disabled:opacity-50"
          />
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            placeholder="twoj@email.com"
            disabled={loading}
            className="w-full px-5 py-4 rounded-xl border-2 border-secondary bg-card text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/30 transition-all text-base disabled:opacity-50"
          />
        </div>
        {error && <p className="text-destructive text-sm text-left">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-accent text-accent-foreground font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 hover:brightness-95 hover:-translate-y-0.5 active:translate-y-0 shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:translate-y-0"
        >
          {loading ? "Wysyłanie..." : profile.ctaText}
          {!loading && <ArrowRight size={18} />}
        </button>
      </form>

      <div className="flex items-center gap-2 mt-6 text-muted-foreground/70 text-xs max-w-sm">
        <Lock size={12} className="flex-shrink-0" />
        <p>Twoje dane są bezpieczne. Nie udostępniamy ich osobom trzecim. Polityka prywatności zgodna z RODO.</p>
      </div>
    </motion.div>
  );
};

export default ResultScreen;
