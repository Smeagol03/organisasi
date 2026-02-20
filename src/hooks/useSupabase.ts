/**
 * useSupabase Hook
 * Custom hook for Supabase client access
 */

import { supabase } from '@/lib/supabase'

/**
 * Get the Supabase client instance
 * @returns The Supabase client
 */
export const useSupabase = () => {
  return supabase
}

/**
 * Get the current auth status from Supabase
 * @returns Auth status and user info
 */
export const useSupabaseAuth = () => {
  // This is a simplified version - in production you'd want to use React Query
  // to subscribe to auth state changes
  const getSession = async () => {
    const { data: { session }, error } = await supabase.auth.getSession()
    return { session, error }
  }

  const getUser = async () => {
    const { data: { user }, error } = await supabase.auth.getUser()
    return { user, error }
  }

  return {
    getSession,
    getUser,
    signOut: () => supabase.auth.signOut(),
  }
}
