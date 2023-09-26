import { createClient } from '@supabase/supabase-js'
import { env } from '$env/dynamic/private'
import OpenAI from "openai";

export const supabase = createClient('https://qdszsftibozlcagzhiri.supabase.co', env.SUPABASE_ANON_KEY)

export const openai = new OpenAI({
	apiKey: env.OPENAI_API_KEY,
  });

