/**
 * useMembers Hook
 * Custom hook for members data fetching with React Query
 */

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { membersService } from '@/services/membersService'
import type { MemberInsert, MemberUpdate } from '@/types/member.types'

const QUERY_KEYS = {
  members: {
    all: ['members'] as const,
    lists: () => [...QUERY_KEYS.members.all, 'list'] as const,
    list: (filters: { active?: boolean; division?: string }) => 
      [...QUERY_KEYS.members.lists(), filters] as const,
    details: () => [...QUERY_KEYS.members.all, 'detail'] as const,
    detail: (id: string) => [...QUERY_KEYS.members.details(), id] as const,
  },
}

export const useMembers = {
  /**
   * Get all active members
   */
  useActiveMembers: () => {
    return useQuery({
      queryKey: QUERY_KEYS.members.list({ active: true }),
      queryFn: () => membersService.getActiveMembers(),
    })
  },

  /**
   * Get member by ID
   */
  useById: (id: string) => {
    return useQuery({
      queryKey: QUERY_KEYS.members.detail(id),
      queryFn: () => membersService.getById(id),
      enabled: !!id,
    })
  },

  /**
   * Get all members (admin)
   */
  useAllMembers: () => {
    return useQuery({
      queryKey: QUERY_KEYS.members.list({}),
      queryFn: () => membersService.getAllMembers(),
    })
  },

  /**
   * Create member mutation
   */
  useCreateMember: () => {
    const queryClient = useQueryClient()
    
    return useMutation({
      mutationFn: (member: MemberInsert) => membersService.create(member),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.members.all })
      },
    })
  },

  /**
   * Update member mutation
   */
  useUpdateMember: () => {
    const queryClient = useQueryClient()
    
    return useMutation({
      mutationFn: ({ id, member }: { id: string; member: MemberUpdate }) => 
        membersService.update(id, member),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.members.all })
      },
    })
  },

  /**
   * Delete member mutation
   */
  useDeleteMember: () => {
    const queryClient = useQueryClient()
    
    return useMutation({
      mutationFn: (id: string) => membersService.delete(id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.members.all })
      },
    })
  },
}

export { QUERY_KEYS }
