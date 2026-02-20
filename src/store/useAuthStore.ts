/**
 * Auth Store (Zustand)
 * Global state management for auth-related state
 * 
 * Note: Clerk handles most auth state. This store is for
 * additional auth-related UI state that Clerk doesn't manage.
 */

import { create } from 'zustand'

interface AuthState {
  // Track if user has completed onboarding
  hasCompletedOnboarding: boolean
  setHasCompletedOnboarding: (completed: boolean) => void
  
  // Track last login time
  lastLoginAt: Date | null
  setLastLoginAt: (date: Date) => void
  
  // Track if this is first login
  isFirstLogin: boolean
  setIsFirstLogin: (first: boolean) => void
}

export const useAuthStore = create<AuthState>((set) => ({
  hasCompletedOnboarding: false,
  setHasCompletedOnboarding: (completed) => set({ hasCompletedOnboarding: completed }),
  
  lastLoginAt: null,
  setLastLoginAt: (date) => set({ lastLoginAt: date }),
  
  isFirstLogin: false,
  setIsFirstLogin: (first) => set({ isFirstLogin: first }),
}))
