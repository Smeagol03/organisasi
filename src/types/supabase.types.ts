/**
 * Supabase Database Types
 * Generated from Supabase schema
 * 
 * To regenerate: supabase gen types typescript --project-id YOUR_PROJECT_ID > src/types/supabase.types.ts
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      news: {
        Row: {
          id: string
          title: string
          slug: string
          excerpt: string | null
          content: string | null
          cover_image: string | null
          category: string | null
          author_id: string | null
          published: boolean
          published_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          excerpt?: string | null
          content?: string | null
          cover_image?: string | null
          category?: string | null
          author_id?: string | null
          published?: boolean
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          excerpt?: string | null
          content?: string | null
          cover_image?: string | null
          category?: string | null
          author_id?: string | null
          published?: boolean
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      programs: {
        Row: {
          id: string
          title: string
          slug: string
          description: string | null
          category: string | null
          status: 'active' | 'completed' | 'upcoming'
          start_date: string | null
          end_date: string | null
          cover_image: string | null
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          description?: string | null
          category?: string | null
          status?: 'active' | 'completed' | 'upcoming'
          start_date?: string | null
          end_date?: string | null
          cover_image?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          description?: string | null
          category?: string | null
          status?: 'active' | 'completed' | 'upcoming'
          start_date?: string | null
          end_date?: string | null
          cover_image?: string | null
          created_at?: string
        }
      }
      members: {
        Row: {
          id: string
          name: string
          position: string | null
          division: string | null
          photo_url: string | null
          bio: string | null
          email: string | null
          is_active: boolean
          period: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          position?: string | null
          division?: string | null
          photo_url?: string | null
          bio?: string | null
          email?: string | null
          is_active?: boolean
          period?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          position?: string | null
          division?: string | null
          photo_url?: string | null
          bio?: string | null
          email?: string | null
          is_active?: boolean
          period?: string | null
          created_at?: string
        }
      }
      gallery: {
        Row: {
          id: string
          title: string | null
          image_url: string
          event_name: string | null
          taken_at: string | null
          created_at: string
        }
        Insert: {
          id?: string
          title?: string | null
          image_url: string
          event_name?: string | null
          taken_at?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          title?: string | null
          image_url?: string
          event_name?: string | null
          taken_at?: string | null
          created_at?: string
        }
      }
      contact_messages: {
        Row: {
          id: string
          name: string
          email: string
          subject: string | null
          message: string
          is_read: boolean
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          subject?: string | null
          message: string
          is_read?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          subject?: string | null
          message?: string
          is_read?: boolean
          created_at?: string
        }
      }
      users: {
        Row: {
          id: string
          clerk_id: string
          email: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          clerk_id: string
          email?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          clerk_id?: string
          email?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
