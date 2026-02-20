import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import { ClerkProvider } from '@clerk/react-router'
import './index.css'

import App from './App'
import { queryClient } from '@/lib/queryClient'
import { clerkPublishableKey, clerkConfig } from '@/lib/clerk'

// Validate Clerk publishable key
if (!clerkPublishableKey) {
  throw new Error('Missing VITE_CLERK_PUBLISHABLE_KEY in environment variables')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider 
            publishableKey={clerkPublishableKey} 
            afterSignOutUrl={clerkConfig.afterSignOutUrl}
            signInFallbackRedirectUrl={clerkConfig.fallbackRedirectUrl}
          >
            <App />
          </ClerkProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
