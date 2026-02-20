/**
 * Supabase Client
 * @see https://supabase.com/docs/reference/javascript/introduction
 */
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
})

/**
 * Sync Clerk user to Supabase
 * This ensures the user exists in Supabase after Clerk authentication
 */
export const syncClerkUserToSupabase = async (clerkUserId: string) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .insert({
        clerk_id: clerkUserId,
        updated_at: new Date().toISOString(),
      })

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    console.error('Error syncing Clerk user to Supabase:', error)
    return { data: null, error }
  }
}
