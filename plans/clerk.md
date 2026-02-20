# Clerk Documentation

Clerk is a comprehensive authentication and user management platform that provides drop-in UI components, flexible APIs, and complete user management for modern web and mobile applications. It handles the complexity of authentication, including sign-up, sign-in, multi-factor authentication, session management, and organization management, allowing developers to implement secure user authentication in minutes rather than months.

The platform offers SDKs for popular frameworks including Next.js, React, React Router, Vue, Nuxt, Astro, Expo, Express, and more. Clerk provides both prebuilt UI components for rapid integration and low-level APIs for building custom authentication flows. Key features include social login (OAuth), passwordless authentication, multi-session support, organization management with role-based access control, JWT template customization, and a robust Backend API for server-side operations.

## ClerkProvider Component

The `<ClerkProvider>` component is required to integrate Clerk into your React application, providing session and user context to Clerk's hooks and components. It should wrap your entire app at the entry point to make authentication globally accessible.

```tsx
// Next.js App Router - app/layout.tsx
import { ClerkProvider } from '@clerk/nextjs'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}

// React with Vite - src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <App />
    </ClerkProvider>
  </React.StrictMode>,
)
```

## clerkMiddleware() for Next.js

The `clerkMiddleware()` function integrates Clerk authentication into Next.js applications through Middleware. It allows you to protect routes and access user authentication state throughout your application.

```typescript
// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Define protected routes using createRouteMatcher
const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/forum(.*)'])
const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)'])

export default clerkMiddleware(async (auth, req) => {
  // Protect routes based on authentication status
  if (isProtectedRoute(req)) {
    await auth.protect()
  }

  // Or protect all routes except public ones
  // if (!isPublicRoute(req)) {
  //   await auth.protect()
  // }
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}

// Protect routes based on authorization (Roles/Permissions)
export default clerkMiddleware(async (auth, req) => {
  const isAdminRoute = createRouteMatcher(['/admin(.*)'])

  if (isAdminRoute(req)) {
    await auth.protect((has) => {
      return has({ permission: 'org:admin:access' }) || has({ role: 'org:admin' })
    })
  }
})
```

## useAuth() Hook

The `useAuth()` hook provides access to the current user's authentication state and methods to manage the active session. Use it to get authentication information like user ID, session ID, and to retrieve session tokens for external API calls.

```tsx
// Next.js - app/external-data/page.tsx
'use client'

import { useAuth } from '@clerk/nextjs'

export default function ExternalDataPage() {
  const { userId, sessionId, getToken, isLoaded, isSignedIn } = useAuth()

  const fetchExternalData = async () => {
    // Get a session token for authenticating with external APIs
    const token = await getToken()

    const response = await fetch('https://api.example.com/data', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return response.json()
  }

  // Handle loading state
  if (!isLoaded) return <div>Loading...</div>

  // Protect the page from unauthenticated users
  if (!isSignedIn) return <div>Sign in to view this page</div>

  return (
    <div>
      <p>Hello, {userId}! Your current active session is {sessionId}.</p>
      <button onClick={fetchExternalData}>Fetch Data</button>
    </div>
  )
}
```

## useUser() Hook

The `useUser()` hook provides access to the current user's `User` object, which contains all user data and provides methods to manage their account. Use it to display user information and update user profiles.

```tsx
// React - src/pages/Profile.tsx
import { useUser } from '@clerk/clerk-react'

export default function Profile() {
  const { isSignedIn, user, isLoaded } = useUser()

  // Handle loading state
  if (!isLoaded) return <div>Loading...</div>

  // Protect the page from unauthenticated users
  if (!isSignedIn) return <div>Sign in to view this page</div>

  // Update user data
  const updateProfile = async () => {
    await user.update({
      firstName: 'John',
      lastName: 'Doe',
    })
  }

  return (
    <div>
      <h1>Hello {user.firstName}!</h1>
      <p>Email: {user.primaryEmailAddress?.emailAddress}</p>
      <img src={user.imageUrl} alt="Profile" />
      <button onClick={updateProfile}>Update Name</button>
    </div>
  )
}
```

## useSession() Hook

The `useSession()` hook provides access to the current user's `Session` object and helpers for managing the active session. It's useful for accessing session-specific data like activity timestamps.

```tsx
// Next.js - app/session/page.tsx
'use client'

import { useSession } from '@clerk/nextjs'

export default function SessionPage() {
  const { isLoaded, session, isSignedIn } = useSession()

  // Handle loading state
  if (!isLoaded) return <div>Loading...</div>

  // Protect the page from unauthenticated users
  if (!isSignedIn) return <div>Sign in to view this page</div>

  return (
    <div>
      <p>Session ID: {session.id}</p>
      <p>Last active: {session.lastActiveAt.toLocaleString()}</p>
      <p>Expires at: {session.expireAt.toLocaleString()}</p>
    </div>
  )
}
```

## SignIn Component

The `<SignIn />` component renders a complete UI for signing in users. It supports multiple authentication methods including email/password, social login, and passwordless options configured in the Clerk Dashboard.

```tsx
// Next.js - app/sign-in/[[...sign-in]]/page.tsx
'use client'

import { SignIn, useUser } from '@clerk/nextjs'

export default function SignInPage() {
  const { isSignedIn } = useUser()

  if (isSignedIn) {
    return <div>You are already signed in!</div>
  }

  return (
    <SignIn
      appearance={{
        elements: {
          rootBox: 'mx-auto',
          card: 'bg-white shadow-lg',
        },
      }}
      fallbackRedirectUrl="/dashboard"
      signUpUrl="/sign-up"
    />
  )
}

// React - Custom mounting
import { Clerk } from '@clerk/clerk-js'

const clerk = new Clerk(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY)
await clerk.load()

const signInDiv = document.getElementById('sign-in')
clerk.mountSignIn(signInDiv, {
  fallbackRedirectUrl: '/dashboard',
})
```

## UserButton Component

The `<UserButton />` component renders a user avatar button that opens a dropdown menu with options to manage account settings and sign out. It's the standard way to display the authenticated user in your app header.

```tsx
// Next.js - app/layout.tsx
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/nextjs'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header className="flex justify-between items-center p-4">
            <h1>My App</h1>
            <SignedIn>
              <UserButton
                showName
                userProfileMode="modal"
                afterSignOutUrl="/"
              />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal" />
            </SignedOut>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
```

## Express.js Integration

The `@clerk/express` SDK provides middleware and utilities for integrating Clerk authentication into Express.js backends. Use `clerkMiddleware()` to parse authentication tokens and `requireAuth()` to protect routes.

```typescript
// index.ts
import 'dotenv/config'
import express from 'express'
import { clerkMiddleware, clerkClient, requireAuth, getAuth } from '@clerk/express'

const app = express()
const PORT = 3000

// Add Clerk middleware to parse authentication tokens
app.use(clerkMiddleware())

// Public route - accessible to everyone
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' })
})

// Protected route - requires authentication
app.get('/protected', requireAuth(), async (req, res) => {
  // Get the user's ID from the auth context
  const { userId } = getAuth(req)

  // Fetch the full user object from Clerk
  const user = await clerkClient.users.getUser(userId)

  return res.json({
    message: 'Protected data',
    user: {
      id: user.id,
      email: user.emailAddresses[0]?.emailAddress,
      firstName: user.firstName,
    },
  })
})

// Check auth status without requiring it
app.get('/maybe-auth', (req, res) => {
  const { userId } = getAuth(req)

  if (userId) {
    return res.json({ authenticated: true, userId })
  }

  return res.json({ authenticated: false })
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
```

## Backend API - User Management

The Clerk Backend SDK provides methods for managing users server-side. Use `clerkClient.users` to create, retrieve, update, and list users.

```typescript
// User management examples
import { createClerkClient } from '@clerk/backend'

const clerkClient = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY,
})

// Get a single user by ID
const user = await clerkClient.users.getUser('user_123')
console.log(user.firstName, user.emailAddresses)

// List users with filtering and pagination
const { data: users, totalCount } = await clerkClient.users.getUserList({
  limit: 10,
  offset: 0,
  orderBy: '-created_at',
  // Filter by email addresses
  emailAddress: ['user@example.com'],
  // Or search across multiple fields
  query: 'john',
})

// Create a new user
const newUser = await clerkClient.users.createUser({
  firstName: 'John',
  lastName: 'Doe',
  emailAddress: ['john@example.com'],
  password: 'securePassword123',
  publicMetadata: {
    role: 'customer',
  },
})

// Update a user
const updatedUser = await clerkClient.users.updateUser('user_123', {
  firstName: 'Jane',
  publicMetadata: {
    role: 'admin',
  },
})

// Delete a user
await clerkClient.users.deleteUser('user_123')
```

## authenticateRequest() - Token Verification

The `authenticateRequest()` method verifies tokens passed from the frontend. It can perform networkless verification when a JWT key is provided.

```typescript
// API route example - Next.js App Router
import { clerkClient } from '@clerk/nextjs/server'

export async function GET(req: Request) {
  const client = await clerkClient()

  // Verify the request token
  const { isAuthenticated, toAuth } = await client.authenticateRequest(req, {
    authorizedParties: ['https://example.com', 'https://myapp.com'],
  })

  if (!isAuthenticated) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Get the auth object with user details
  const auth = toAuth()

  return Response.json({
    userId: auth.userId,
    sessionId: auth.sessionId,
  })
}

// Machine-to-machine authentication
const { isAuthenticated } = await client.authenticateRequest(request, {
  acceptsToken: 'api_key', // or 'oauth_token', 'm2m_token'
})
```

## useOrganization() Hook

The `useOrganization()` hook retrieves attributes of the currently active Organization, including members, invitations, and domains. It supports pagination for large datasets.

```tsx
// Organization member list with pagination
'use client'

import { useOrganization } from '@clerk/nextjs'

export default function MemberList() {
  const { organization, memberships } = useOrganization({
    memberships: {
      infinite: true, // Append new data to existing list
      keepPreviousData: true,
    },
  })

  if (!memberships) return <div>Loading...</div>

  return (
    <div>
      <h2>{organization?.name} Members</h2>
      <ul>
        {memberships.data?.map((membership) => (
          <li key={membership.id}>
            {membership.publicUserData?.firstName} {membership.publicUserData?.lastName}
            - {membership.role}
          </li>
        ))}
      </ul>

      <button
        disabled={!memberships.hasNextPage}
        onClick={memberships.fetchNext}
      >
        Load more
      </button>
    </div>
  )
}
```

## Backend API - Organization Management

The Backend SDK provides methods for managing organizations server-side, including creating organizations, managing members, and handling invitations.

```typescript
// Organization management examples
import { clerkClient } from '@clerk/nextjs/server'

// Get an organization by ID or slug
const client = await clerkClient()

const orgById = await client.organizations.getOrganization({
  organizationId: 'org_123',
})

const orgBySlug = await client.organizations.getOrganization({
  slug: 'my-organization',
})

// Create a new organization
const newOrg = await client.organizations.createOrganization({
  name: 'Acme Corp',
  slug: 'acme-corp',
  createdBy: 'user_123', // The user who creates the org
  publicMetadata: {
    plan: 'enterprise',
  },
})

// List organization memberships
const memberships = await client.organizations.getOrganizationMembershipList({
  organizationId: 'org_123',
  limit: 10,
})

// Update organization membership role
await client.organizations.updateOrganizationMembership({
  organizationId: 'org_123',
  userId: 'user_456',
  role: 'org:admin',
})
```

## useSignIn() Hook

The `useSignIn()` hook provides access to the `SignIn` object for building custom sign-in flows. Use it when Clerk's prebuilt components don't meet your specific requirements.

```tsx
// Custom email/password sign-in flow
'use client'

import { useSignIn } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function CustomSignIn() {
  const { isLoaded, signIn, setActive } = useSignIn()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isLoaded) return

    try {
      const result = await signIn.create({
        identifier: email,
        password,
      })

      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId })
        router.push('/dashboard')
      } else {
        // Handle additional steps (MFA, etc.)
        console.log('Additional verification needed:', result.status)
      }
    } catch (err: any) {
      setError(err.errors?.[0]?.message || 'Sign in failed')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      {error && <p className="error">{error}</p>}
      <button type="submit">Sign In</button>
    </form>
  )
}
```

## JWT Templates

JWT templates allow you to create custom JSON Web Tokens with specific claims for integrating with third-party services. Templates support static values and dynamic shortcodes for user data.

```json
// JWT Template configuration in Clerk Dashboard
{
  "aud": "https://api.myservice.com",
  "user_id": "{{user.id}}",
  "email": "{{user.primary_email_address}}",
  "full_name": "{{user.first_name}} {{user.last_name}}",
  "org_id": "{{org.id}}",
  "org_role": "{{org_membership.role}}",
  "plan": "{{user.public_metadata.plan || 'free'}}",
  "custom_claims": {
    "interests": "{{user.public_metadata.interests}}",
    "verified": "{{user.email_verified || user.phone_number_verified}}"
  }
}
```

```typescript
// Using JWT templates in your application
'use client'

import { useAuth } from '@clerk/nextjs'

export default function IntegrationPage() {
  const { getToken } = useAuth()

  const callExternalAPI = async () => {
    // Get a token using your custom JWT template
    const token = await getToken({ template: 'my-custom-template' })

    const response = await fetch('https://api.thirdparty.com/data', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return response.json()
  }

  return <button onClick={callExternalAPI}>Call External API</button>
}
```

## Summary

Clerk provides a complete authentication and user management solution that integrates seamlessly with modern web frameworks. The primary use cases include: adding authentication to React/Next.js applications using prebuilt components like `<SignIn />`, `<SignUp />`, and `<UserButton />`; protecting API routes and pages using middleware (`clerkMiddleware()` for Next.js, `requireAuth()` for Express); accessing user data through hooks (`useAuth()`, `useUser()`, `useSession()`); and managing users and organizations server-side through the Backend API.

Integration patterns typically involve wrapping your application with `<ClerkProvider>`, setting up middleware to protect routes, and using Clerk's hooks to access authentication state in components. For backend services, the pattern involves initializing `clerkClient` with your secret key, using `authenticateRequest()` to verify tokens, and calling Backend API methods for user/organization management. Custom authentication flows can be built using the `useSignIn()` and `useSignUp()` hooks, while JWT templates enable integration with third-party services that require custom token formats.