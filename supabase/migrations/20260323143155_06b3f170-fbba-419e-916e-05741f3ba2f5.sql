ALTER TABLE public.leads ADD COLUMN first_name varchar(100);

CREATE POLICY "Anyone can update leads"
ON public.leads
FOR UPDATE
TO public
USING (true)
WITH CHECK (true);