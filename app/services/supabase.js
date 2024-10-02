import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qmiohtgepjofwfcxjqtx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtaW9odGdlcGpvZndmY3hqcXR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MDA4ODQsImV4cCI6MjA0MzM3Njg4NH0.GrnH2LMU_Maa4XLCT-l1lsOG8XZ_-ggNFxSGtzbVM0w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
