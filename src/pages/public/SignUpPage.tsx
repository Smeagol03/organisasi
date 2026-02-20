/**
 * SignUpPage
 * Clerk sign up page
 */

import { SignUp } from '@clerk/react-router'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { clerkConfig } from '@/lib/clerk'

export default function SignUpPage() {
  return (
    <PageWrapper>
      <div className="flex items-center justify-center min-h-[80vh]">
        <SignUp
          routing="path"
          path="/sign-up"
          signInUrl="/sign-in"
          fallbackRedirectUrl={clerkConfig.fallbackRedirectUrl}
        />
      </div>
    </PageWrapper>
  )
}
