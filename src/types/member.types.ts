/**
 * Member Types
 * Type definitions for members/organizational structure
 */

import type { Database } from './supabase.types'

export type Member = Database['public']['Tables']['members']['Row']
export type MemberInsert = Database['public']['Tables']['members']['Insert']
export type MemberUpdate = Database['public']['Tables']['members']['Update']

export interface MemberWithDivision extends Member {
  divisionLabel?: string
}
