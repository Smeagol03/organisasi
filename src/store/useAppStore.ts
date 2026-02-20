/**
 * App Store (Zustand)
 * Global state management for app-wide UI state
 */

import { create } from 'zustand'

interface AppState {
  // Mobile menu state
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
  
  // Theme state (if not using next-themes)
  theme: 'light' | 'dark' | 'system'
  setTheme: (theme: 'light' | 'dark' | 'system') => void
  
  // Sidebar state (admin)
  isSidebarOpen: boolean
  setIsSidebarOpen: (open: boolean) => void
  
  // Loading state
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

export const useAppStore = create<AppState>((set) => ({
  // Mobile menu
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
  
  // Theme
  theme: 'system',
  setTheme: (theme) => set({ theme }),
  
  // Sidebar
  isSidebarOpen: false,
  setIsSidebarOpen: (open) => set({ isSidebarOpen: open }),
  
  // Loading
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
}))
