/**
 * NewsDetailPage
 * Single news article page
 */

import { PageWrapper } from '@/components/layout/PageWrapper'
import { useParams } from 'react-router-dom'

export default function NewsDetailPage() {
  const { slug } = useParams()

  return (
    <PageWrapper>
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <h1 className="text-4xl font-bold tracking-tight">News Detail</h1>
        <p className="mt-4 text-muted-foreground">
          Article: {slug}
        </p>
      </div>
    </PageWrapper>
  )
}
