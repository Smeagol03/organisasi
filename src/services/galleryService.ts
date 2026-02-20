/**
 * Gallery Service
 * Data fetching layer for gallery
 */

import { supabase } from '@/lib/supabase'
import type { Database } from '@/types/supabase.types'

export type Gallery = Database['public']['Tables']['gallery']['Row']
export type GalleryInsert = Database['public']['Tables']['gallery']['Insert']
export type GalleryUpdate = Database['public']['Tables']['gallery']['Update']

export const galleryService = {
  /**
   * Get all gallery images
   */
  async getAllImages() {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  /**
   * Get gallery image by ID
   */
  async getById(id: string): Promise<Gallery | null> {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error && error.code !== 'PGRST116') throw error
    return data
  },

  /**
   * Create gallery image
   */
  async create(image: GalleryInsert) {
    const { data, error } = await supabase
      .from('gallery')
      .insert(image)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  /**
   * Update gallery image
   */
  async update(id: string, image: GalleryUpdate) {
    const { data, error } = await supabase
      .from('gallery')
      .update(image)
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  /**
   * Delete gallery image
   */
  async delete(id: string) {
    const { error } = await supabase
      .from('gallery')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  },

  /**
   * Get images by event
   */
  async getByEvent(eventName: string) {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .ilike('event_name', `%${eventName}%`)
      .order('taken_at', { ascending: false })
    
    if (error) throw error
    return data
  },
}
