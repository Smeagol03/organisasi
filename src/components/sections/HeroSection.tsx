/**
 * HeroSection
 * Main hero section for homepage
 */

import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'

export const HeroSection = () => {
  return (
    <section className="container px-4 py-12 md:px-6 md:py-24 lg:py-32">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            {siteConfig.organization.name}
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            {siteConfig.organization.description}
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link to="/about">
              <Button size="lg">Learn More</Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative h-[300px] w-full max-w-[500px] rounded-lg bg-gradient-to-br from-primary/20 to-accent/20" />
        </div>
      </div>
    </section>
  )
}
