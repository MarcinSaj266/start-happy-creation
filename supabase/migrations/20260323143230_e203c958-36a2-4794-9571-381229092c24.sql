INSERT INTO storage.buckets (id, name, public) VALUES ('quiz-reports', 'quiz-reports', true);

CREATE POLICY "Public read access for quiz-reports"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'quiz-reports');