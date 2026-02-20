/**
 * GallerySection
 * Gallery preview section for homepage
 */

import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export const GallerySection = () => {
  return (
    <section className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Gallery</h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Browse through photos from our events and activities.
        </p>
        <Link to="/gallery">
          <Button>View Gallery</Button>
        </Link>
      </div>
    </section>
  )
}
