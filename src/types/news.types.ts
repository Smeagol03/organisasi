/**
 * News Types
 * Type definitions for news/articles
 */

import type { Database } from './supabase.types'

export type News = Database['public']['Tables']['news']['Row']
export type NewsInsert = Database['public']['Tables']['news']['Insert']
export type NewsUpdate = Database['public']['Tables']['news']['Update']

export type NewsCategory = 
  | 'Organization'
  | 'Event'
  | 'Achievement'
  | 'Announcement'
  | 'Other'

export const NEWS_CATEGORIES: NewsCategory[] = [
  'Organization',
  'Event',
  'Achievement',
  'Announcement',
  'Other',
]
