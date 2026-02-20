/**
 * ProgramsSection
 * Featured programs section for homepage
 */

import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export const ProgramsSection = () => {
  return (
    <section className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Programs</h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Discover the various programs and activities we organize for our community.
        </p>
        <Link to="/programs">
          <Button>View All Programs</Button>
        </Link>
      </div>
    </section>
  )
}
