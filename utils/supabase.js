import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nacxpfuwluqkropjezyu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hY3hwZnV3bHVxa3JvcGplenl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY2NjE3NzYsImV4cCI6MjA1MjIzNzc3Nn0.83vvoztxgObhhBscNfC1orBqDrd9Ba9FnqL0jLIjZ1g";

export const supabase = createClient(supabaseUrl, supabaseKey);
