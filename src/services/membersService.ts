/**
 * Members Service
 * Data fetching layer for members
 */

import { supabase } from '@/lib/supabase'
import type { Member, MemberInsert, MemberUpdate } from '@/types/member.types'

export const membersService = {
  /**
   * Get all active members
   */
  async getActiveMembers() {
    const { data, error } = await supabase
      .from('members')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  /**
   * Get member by ID
   */
  async getById(id: string): Promise<Member | null> {
    const { data, error } = await supabase
      .from('members')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error && error.code !== 'PGRST116') throw error
    return data
  },

  /**
   * Get all members (admin)
   */
  async getAllMembers() {
    const { data, error } = await supabase
      .from('members')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  /**
   * Create member
   */
  async create(member: MemberInsert) {
    const { data, error } = await supabase
      .from('members')
      .insert(member)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  /**
   * Update member
   */
  async update(id: string, member: MemberUpdate) {
    const { data, error } = await supabase
      .from('members')
      .update(member)
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  /**
   * Delete member
   */
  async delete(id: string) {
    const { error } = await supabase
      .from('members')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  },

  /**
   * Get members by division
   */
  async getByDivision(division: string) {
    const { data, error } = await supabase
      .from('members')
      .select('*')
      .eq('is_active', true)
      .eq('division', division)
      .order('name')
    
    if (error) throw error
    return data
  },

  /**
   * Get members by period
   */
  async getByPeriod(period: string) {
    const { data, error } = await supabase
      .from('members')
      .select('*')
      .eq('is_active', true)
      .eq('period', period)
      .order('name')
    
    if (error) throw error
    return data
  },
}
