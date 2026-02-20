/**
 * News Service
 * Data fetching layer for news/articles
 */

import { supabase } from '@/lib/supabase'
import type { News, NewsInsert, NewsUpdate } from '@/types/news.types'

export const newsService = {
  /**
   * Get all published news
   */
  async getPublishedNews(limit: number = 10, offset: number = 0) {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('published', true)
      .order('published_at', { ascending: false })
      .range(offset, offset + limit - 1)
    
    if (error) throw error
    return data
  },

  /**
   * Get news by slug
   */
  async getBySlug(slug: string): Promise<News | null> {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('slug', slug)
      .single()
    
    if (error && error.code !== 'PGRST116') throw error // PGRST116 = not found
    return data
  },

  /**
   * Get news by ID
   */
  async getById(id: string): Promise<News | null> {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error && error.code !== 'PGRST116') throw error
    return data
  },

  /**
   * Get all news (admin)
   */
  async getAllNews() {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  /**
   * Create news
   */
  async create(news: NewsInsert) {
    const { data, error } = await supabase
      .from('news')
      .insert(news)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  /**
   * Update news
   */
  async update(id: string, news: NewsUpdate) {
    const { data, error } = await supabase
      .from('news')
      .update(news)
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  /**
   * Delete news
   */
  async delete(id: string) {
    const { error } = await supabase
      .from('news')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  },

  /**
   * Search news by title
   */
  async search(query: string) {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('published', true)
      .ilike('title', `%${query}%`)
      .order('published_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  /**
   * Get news by category
   */
  async getByCategory(category: string, limit: number = 10) {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('published', true)
      .eq('category', category)
      .order('published_at', { ascending: false })
      .limit(limit)
    
    if (error) throw error
    return data
  },
}
