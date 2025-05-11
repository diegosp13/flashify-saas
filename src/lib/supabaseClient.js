import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rottmjxohxfasidalliam.supabase.co ';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvdHJtanhvaHhmYXNpZGFsaWFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4MDIyNDAsImV4cCI6MjA2MjM3ODI0MH0.S0baPJhF2jF-E9uEFOEp9F5SnqKwCrg3cGF4NHbhYiI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
