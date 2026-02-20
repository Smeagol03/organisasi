/**
 * ProtectedRoute - Guard route untuk admin (Clerk auth)
 * Redirects to sign-in if user is not authenticated
 */

import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@clerk/react-router'
import { Skeleton } from '@/components/ui/skeleton'

export const ProtectedRoute = () => {
  const { isLoaded, isSignedIn } = useAuth()

  // Handle loading state
  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Skeleton className="w-10 h-10 rounded-full" />
      </div>
    )
  }

  // Redirect to sign-in if not authenticated
  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace />
  }

  // Render child routes
  return <Outlet />
}
