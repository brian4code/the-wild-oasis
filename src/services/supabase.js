import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tqlsmgegeuskypyesjhr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxbHNtZ2VnZXVza3lweWVzamhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTczMDU4MDUsImV4cCI6MjAxMjg4MTgwNX0.jH5dg6t2HqQdFd0TztEhwXCFhNZv8QizzAjYkUf43-E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
