/**
 * Program Types
 * Type definitions for programs/activities
 */

import type { Database } from './supabase.types'

export type Program = Database['public']['Tables']['programs']['Row']
export type ProgramInsert = Database['public']['Tables']['programs']['Insert']
export type ProgramUpdate = Database['public']['Tables']['programs']['Update']

export type ProgramStatus = 'active' | 'completed' | 'upcoming'

export type ProgramCategory =
  | 'Social'
  | 'Education'
  | 'Sports'
  | 'Arts'
  | 'Environment'
  | 'Health'
  | 'Other'

export const PROGRAM_STATUS: ProgramStatus[] = ['active', 'completed', 'upcoming']
export const PROGRAM_CATEGORIES: ProgramCategory[] = [
  'Social',
  'Education',
  'Sports',
  'Arts',
  'Environment',
  'Health',
  'Other',
]
