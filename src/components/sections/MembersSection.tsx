/**
 * MembersSection
 * Members preview section for homepage
 */

import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export const MembersSection = () => {
  return (
    <section className="container px-4 py-12 md:px-6 md:py-24 bg-muted/50">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Members</h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Meet the dedicated people who make our organization possible.
        </p>
        <Link to="/members">
          <Button variant="outline">Meet the Team</Button>
        </Link>
      </div>
    </section>
  )
}
