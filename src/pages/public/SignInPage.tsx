/**
 * SignInPage
 * Clerk sign in page
 */

import { SignIn } from '@clerk/react-router'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { clerkAppearance, clerkConfig } from '@/lib/clerk'

export default function SignInPage() {
  return (
    <PageWrapper>
      <div className="flex items-center justify-center min-h-[80vh]">
        <SignIn
          appearance={clerkAppearance}
          routing="path"
          path="/sign-in"
          signUpUrl="/sign-up"
          fallbackRedirectUrl={clerkConfig.fallbackRedirectUrl}
        />
      </div>
    </PageWrapper>
  )
}
