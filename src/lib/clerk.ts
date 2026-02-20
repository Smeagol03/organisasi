/**
 * Clerk Client Configuration
 * @see https://clerk.com/docs/references/react/overview
 */

// Clerk publishable key from environment
export const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!clerkPublishableKey) {
  throw new Error('Missing VITE_CLERK_PUBLISHABLE_KEY environment variable')
}

// Clerk configuration options
export const clerkConfig = {
  publishableKey: clerkPublishableKey,
  afterSignOutUrl: '/',
  fallbackRedirectUrl: '/admin/dashboard',
  forceRedirectUrl: undefined,
}

// Appearance customization for Clerk components
export const clerkAppearance = {
  elements: {
    rootBox: 'mx-auto',
    card: 'bg-card shadow-lg',
    formFieldLabel: 'text-foreground',
    formFieldInput: 'bg-background border-border',
    footerActionLink: 'text-primary hover:underline',
  },
}
