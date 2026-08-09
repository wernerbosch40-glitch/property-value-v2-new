import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hfnqmkzkrmfqbsgpfgzg.supabase.co'
const supabaseKey = 'sb_publishable_7D6DV01nqROwu_60mTbAig_JEtjdjTF'

export const supabase = createClient(supabaseUrl, supabaseKey)