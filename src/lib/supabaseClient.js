import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gchuihzdrckchkiiwxtk.supabase.co ';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjaHVpaHpkcmNrY2hraWl3eHRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4NzE3MzUsImV4cCI6MjA2MjQ0NzczNX0.4VmllLz88IsH82b3N5e_RPV61wrIRF1DbpBXZElnefY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
