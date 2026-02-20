/**
 * ContactSection
 * Contact CTA section for homepage
 */

import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'

export const ContactSection = () => {
  return (
    <section className="container px-4 py-12 md:px-6 md:py-24 bg-muted/50">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get In Touch</h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Have questions? We'd love to hear from you.
        </p>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Link to="/contact">
            <Button>Contact Us</Button>
          </Link>
          <a href={`mailto:${siteConfig.organization.email}`}>
            <Button variant="outline">{siteConfig.organization.email}</Button>
          </a>
        </div>
      </div>
    </section>
  )
}
