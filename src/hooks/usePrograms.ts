/**
 * usePrograms Hook
 * Custom hook for programs data fetching with React Query
 */

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { programsService } from '@/services/programsService'
import type { ProgramInsert, ProgramUpdate } from '@/types/program.types'

const QUERY_KEYS = {
  programs: {
    all: ['programs'] as const,
    lists: () => [...QUERY_KEYS.programs.all, 'list'] as const,
    list: (filters: { status?: string; category?: string }) => 
      [...QUERY_KEYS.programs.lists(), filters] as const,
    details: () => [...QUERY_KEYS.programs.all, 'detail'] as const,
    detail: (id: string) => [...QUERY_KEYS.programs.details(), id] as const,
  },
}

export const usePrograms = {
  /**
   * Get all active programs
   */
  useActivePrograms: () => {
    return useQuery({
      queryKey: QUERY_KEYS.programs.list({ status: 'active' }),
      queryFn: () => programsService.getActivePrograms(),
    })
  },

  /**
   * Get program by slug
   */
  useBySlug: (slug: string) => {
    return useQuery({
      queryKey: QUERY_KEYS.programs.detail(slug),
      queryFn: () => programsService.getBySlug(slug),
      enabled: !!slug,
    })
  },

  /**
   * Get all programs (admin)
   */
  useAllPrograms: () => {
    return useQuery({
      queryKey: QUERY_KEYS.programs.list({}),
      queryFn: () => programsService.getAllPrograms(),
    })
  },

  /**
   * Create program mutation
   */
  useCreateProgram: () => {
    const queryClient = useQueryClient()
    
    return useMutation({
      mutationFn: (program: ProgramInsert) => programsService.create(program),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.programs.all })
      },
    })
  },

  /**
   * Update program mutation
   */
  useUpdateProgram: () => {
    const queryClient = useQueryClient()
    
    return useMutation({
      mutationFn: ({ id, program }: { id: string; program: ProgramUpdate }) => 
        programsService.update(id, program),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.programs.all })
      },
    })
  },

  /**
   * Delete program mutation
   */
  useDeleteProgram: () => {
    const queryClient = useQueryClient()
    
    return useMutation({
      mutationFn: (id: string) => programsService.delete(id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.programs.all })
      },
    })
  },
}

export { QUERY_KEYS }
