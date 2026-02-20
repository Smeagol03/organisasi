/**
 * Programs Service
 * Data fetching layer for programs
 */

import { supabase } from '@/lib/supabase'
import type { Program, ProgramInsert, ProgramUpdate } from '@/types/program.types'

export const programsService = {
  /**
   * Get all active programs
   */
  async getActivePrograms() {
    const { data, error } = await supabase
      .from('programs')
      .select('*')
      .eq('status', 'active')
      .order('start_date', { ascending: true })
    
    if (error) throw error
    return data
  },

  /**
   * Get program by slug
   */
  async getBySlug(slug: string): Promise<Program | null> {
    const { data, error } = await supabase
      .from('programs')
      .select('*')
      .eq('slug', slug)
      .single()
    
    if (error && error.code !== 'PGRST116') throw error
    return data
  },

  /**
   * Get program by ID
   */
  async getById(id: string): Promise<Program | null> {
    const { data, error } = await supabase
      .from('programs')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error && error.code !== 'PGRST116') throw error
    return data
  },

  /**
   * Get all programs (admin)
   */
  async getAllPrograms() {
    const { data, error } = await supabase
      .from('programs')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  /**
   * Create program
   */
  async create(program: ProgramInsert) {
    const { data, error } = await supabase
      .from('programs')
      .insert(program)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  /**
   * Update program
   */
  async update(id: string, program: ProgramUpdate) {
    const { data, error } = await supabase
      .from('programs')
      .update(program)
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  /**
   * Delete program
   */
  async delete(id: string) {
    const { error } = await supabase
      .from('programs')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  },

  /**
   * Get programs by category
   */
  async getByCategory(category: string) {
    const { data, error } = await supabase
      .from('programs')
      .select('*')
      .eq('category', category)
      .order('start_date', { ascending: true })
    
    if (error) throw error
    return data
  },

  /**
   * Get programs by status
   */
  async getByStatus(status: 'active' | 'completed' | 'upcoming') {
    const { data, error } = await supabase
      .from('programs')
      .select('*')
      .eq('status', status)
      .order('start_date', { ascending: true })
    
    if (error) throw error
    return data
  },
}
