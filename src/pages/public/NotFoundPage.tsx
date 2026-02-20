/**
 * NotFoundPage
 * 404 page
 */

import { Link } from 'react-router-dom'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { Button } from '@/components/ui/button'

export default function NotFoundPage() {
  return (
    <PageWrapper>
      <div className="container flex items-center justify-center px-4 py-32">
        <div className="text-center">
          <h1 className="text-9xl font-bold">404</h1>
          <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
          <p className="mt-2 text-muted-foreground">
            The page you're looking for doesn't exist.
          </p>
          <Link to="/" className="mt-6 inline-block">
            <Button>Go Back Home</Button>
          </Link>
        </div>
      </div>
    </PageWrapper>
  )
}
