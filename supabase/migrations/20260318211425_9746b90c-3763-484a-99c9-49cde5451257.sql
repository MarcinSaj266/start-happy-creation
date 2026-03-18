
-- Create custom enums
CREATE TYPE public.executive_domain AS ENUM ('inhibition', 'working_memory', 'cognitive_flexibility');
CREATE TYPE public.session_status AS ENUM ('in_progress', 'completed', 'abandoned');

-- Create leads table
CREATE TABLE public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    is_verified BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create quiz_sessions table
CREATE TABLE public.quiz_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lead_id UUID REFERENCES public.leads(id) ON DELETE SET NULL,
    status public.session_status DEFAULT 'in_progress',
    score_inhibition INTEGER DEFAULT 0,
    score_working_memory INTEGER DEFAULT 0,
    score_cognitive_flexibility INTEGER DEFAULT 0,
    total_score INTEGER DEFAULT 0,
    started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    completed_at TIMESTAMP WITH TIME ZONE,
    client_hash VARCHAR(255)
);

-- Create quiz_answers table
CREATE TABLE public.quiz_answers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID REFERENCES public.quiz_sessions(id) ON DELETE CASCADE NOT NULL,
    question_number INTEGER NOT NULL CHECK (question_number BETWEEN 1 AND 10),
    domain public.executive_domain NOT NULL,
    score INTEGER NOT NULL CHECK (score BETWEEN 1 AND 3),
    answered_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(session_id, question_number)
);

-- Enable RLS on all tables
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_answers ENABLE ROW LEVEL SECURITY;

-- RLS policies: Allow anonymous inserts and updates (no auth required for quiz)
CREATE POLICY "Anyone can insert leads" ON public.leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can select leads by email" ON public.leads FOR SELECT USING (true);

CREATE POLICY "Anyone can insert quiz sessions" ON public.quiz_sessions FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can update quiz sessions" ON public.quiz_sessions FOR UPDATE USING (true);
CREATE POLICY "Anyone can select quiz sessions" ON public.quiz_sessions FOR SELECT USING (true);

CREATE POLICY "Anyone can insert quiz answers" ON public.quiz_answers FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can select quiz answers" ON public.quiz_answers FOR SELECT USING (true);

-- Trigger for leads updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON public.leads
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
