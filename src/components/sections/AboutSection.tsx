/**
 * AboutSection
 * Brief about section for homepage with trending 2025/2026 design
 */

import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { ArrowRight, Users, Target, Heart, Sparkles } from 'lucide-react'

export const AboutSection = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background via-muted/30 to-background py-20 md:py-32">
    
      <div className="container relative px-4 md:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="size-4" />
              <span>About Us</span>
            </div>

            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              <span className="block">We're Building</span>
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                Something Greater
              </span>
            </h2>

            <p className="mb-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              {siteConfig.organization.description} Since {siteConfig.organization.founded}, we've been dedicated to creating positive impact and fostering meaningful connections within our community.
            </p>

            <div className="mb-8 grid grid-cols-2 gap-6">
              <div className="group">
                <div className="mb-3 flex size-12 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Target className="size-6 text-primary" />
                </div>
                <h3 className="mb-1 font-semibold">Our Mission</h3>
                <p className="text-sm text-muted-foreground">Driving positive change</p>
              </div>
              <div className="group">
                <div className="mb-3 flex size-12 items-center justify-center rounded-2xl bg-accent/10 transition-colors group-hover:bg-accent/20">
                  <Heart className="size-6 text-accent" />
                </div>
                <h3 className="mb-1 font-semibold">Our Values</h3>
                <p className="text-sm text-muted-foreground">Community first always</p>
              </div>
            </div>

            <Link to="/about">
              <Button size="lg" className="group font-semibold shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30">
                Discover Our Story
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="relative rounded-3xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm">
                <div className="mb-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-linear-to-br from-primary/10 to-primary/5 p-6 text-center">
                    <div className="mb-2 text-4xl font-bold text-primary">{siteConfig.organization.founded}</div>
                    <div className="text-sm text-muted-foreground">Founded</div>
                  </div>
                  <div className="rounded-2xl bg-linear-to-br from-accent/10 to-accent/5 p-6 text-center">
                    <div className="mb-2 text-4xl font-bold text-accent">500+</div>
                    <div className="text-sm text-muted-foreground">Members</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 rounded-xl border border-border/50 bg-background/50 p-4">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-green-500/10">
                      <Users className="size-5 text-green-500" />
                    </div>
                    <div>
                      <div className="font-semibold">Active Community</div>
                      <div className="text-sm text-muted-foreground">Engaged members nationwide</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-xl border border-border/50 bg-background/50 p-4">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                      <Target className="size-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">50+ Programs</div>
                      <div className="text-sm text-muted-foreground">Impact-driven initiatives</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 -top-4 size-24 rounded-2xl bg-linear-to-br from-accent/20 to-primary/20 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 size-28 rounded-2xl bg-linear-to-br from-primary/20 to-accent/20 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
