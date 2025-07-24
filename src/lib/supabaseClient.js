import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fsmeukevntrzvnemeaen.supabase.co'; // Replace with yours
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzbWV1a2V2bnRyenZuZW1lYWVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzODQ4NTcsImV4cCI6MjA2ODk2MDg1N30.82h2QrymHB2lPubwMi1cA0qd9b_ec_9QK0dYY_Y_MbA'; // Replace with the one you copied

export const supabase = createClient(supabaseUrl, supabaseKey);
