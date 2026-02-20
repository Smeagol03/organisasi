/**
 * Footer Component
 * Main footer for public pages
 */

import { Link } from 'react-router-dom'
import { siteConfig } from '@/config/site'
import { footerNav } from '@/config/navigation'
import { Instagram, Twitter, Facebook, Youtube, Linkedin } from 'lucide-react'

const socialIcons = {
  instagram: Instagram,
  twitter: Twitter,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
}

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Organization Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{siteConfig.organization.name}</h3>
            <p className="text-sm text-muted-foreground">
              {siteConfig.organization.description}
            </p>
            <div className="flex space-x-4">
              {Object.entries(siteConfig.social).map(([platform, url]) => {
                const Icon = socialIcons[platform as keyof typeof socialIcons]
                if (!Icon || !url) return null
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{platform}</span>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <nav className="space-y-3">
              {footerNav.main.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block text-sm text-muted-foreground hover:text-foreground"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact</h3>
            <address className="space-y-2 text-sm text-muted-foreground not-italic">
              <p>{siteConfig.organization.email}</p>
              <p>{siteConfig.organization.phone}</p>
              <p>
                {siteConfig.organization.address.street}<br />
                {siteConfig.organization.address.city}, {siteConfig.organization.address.state} {siteConfig.organization.address.zipCode}<br />
                {siteConfig.organization.address.country}
              </p>
            </address>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <nav className="space-y-3">
              {footerNav.legal.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block text-sm text-muted-foreground hover:text-foreground"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} {siteConfig.organization.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
