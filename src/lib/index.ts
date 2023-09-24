import { createClient } from '@supabase/supabase-js'
import { env } from '$env/dynamic/private'

export const supabase = createClient('https://qdszsftibozlcagzhiri.supabase.co', env.SUPABASE_ANON_KEY)

