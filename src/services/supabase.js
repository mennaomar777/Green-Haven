import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://nnsnujpuyxgfriipbrwc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5uc251anB1eXhnZnJpaXBicndjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExMDU1NTYsImV4cCI6MjA3NjY4MTU1Nn0.qGFD0VYAL6FJH55odH8xagc8dj7NLzD5h2IWKgAQc6w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
