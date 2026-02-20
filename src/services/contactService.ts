/**
 * Contact Messages Service
 * Data fetching layer for contact messages
 */

import { supabase } from '@/lib/supabase'
import type { Database } from '@/types/supabase.types'

export type ContactMessage = Database['public']['Tables']['contact_messages']['Row']
export type ContactMessageInsert = Database['public']['Tables']['contact_messages']['Insert']

export const contactService = {
  /**
   * Send contact message (public)
   */
  async sendMessage(message: ContactMessageInsert) {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert(message)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  /**
   * Get all messages (admin)
   */
  async getAllMessages() {
    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  /**
   * Get unread messages
   */
  async getUnreadMessages() {
    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .eq('is_read', false)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  /**
   * Mark message as read
   */
  async markAsRead(id: string) {
    const { data, error } = await supabase
      .from('contact_messages')
      .update({ is_read: true })
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  /**
   * Delete message
   */
  async delete(id: string) {
    const { error } = await supabase
      .from('contact_messages')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  },
}
