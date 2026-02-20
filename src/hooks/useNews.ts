/**
 * useNews Hook
 * Custom hook for news data fetching with React Query
 */

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { newsService } from '@/services/newsService'
import type { NewsInsert, NewsUpdate } from '@/types/news.types'

const QUERY_KEYS = {
  news: {
    all: ['news'] as const,
    lists: () => [...QUERY_KEYS.news.all, 'list'] as const,
    list: (filters: { published?: boolean; category?: string }) => 
      [...QUERY_KEYS.news.lists(), filters] as const,
    details: () => [...QUERY_KEYS.news.all, 'detail'] as const,
    detail: (id: string) => [...QUERY_KEYS.news.details(), id] as const,
  },
}

export const useNews = {
  /**
   * Get all published news
   */
  usePublishedNews: (limit: number = 10) => {
    return useQuery({
      queryKey: QUERY_KEYS.news.list({ published: true }),
      queryFn: () => newsService.getPublishedNews(limit),
    })
  },

  /**
   * Get news by slug
   */
  useBySlug: (slug: string) => {
    return useQuery({
      queryKey: QUERY_KEYS.news.detail(slug),
      queryFn: () => newsService.getBySlug(slug),
      enabled: !!slug,
    })
  },

  /**
   * Get all news (admin)
   */
  useAllNews: () => {
    return useQuery({
      queryKey: QUERY_KEYS.news.list({}),
      queryFn: () => newsService.getAllNews(),
    })
  },

  /**
   * Create news mutation
   */
  useCreateNews: () => {
    const queryClient = useQueryClient()
    
    return useMutation({
      mutationFn: (news: NewsInsert) => newsService.create(news),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.news.all })
      },
    })
  },

  /**
   * Update news mutation
   */
  useUpdateNews: () => {
    const queryClient = useQueryClient()
    
    return useMutation({
      mutationFn: ({ id, news }: { id: string; news: NewsUpdate }) => 
        newsService.update(id, news),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.news.all })
      },
    })
  },

  /**
   * Delete news mutation
   */
  useDeleteNews: () => {
    const queryClient = useQueryClient()
    
    return useMutation({
      mutationFn: (id: string) => newsService.delete(id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.news.all })
      },
    })
  },
}

export { QUERY_KEYS }
