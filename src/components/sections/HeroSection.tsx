/**
 * HeroSection
 * Modern 2025/2026 trending hero design
 * Features: Bold typography, glassmorphism, bento grid, animated linears
 */

import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { 
  Users, 
  TrendingUp, 
  Award, 
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  Heart
} from 'lucide-react'

export const HeroSection = () => {
  return (
    <section className="relative pt-28 md:pt-32 min-h-[90vh] overflow-hidden bg-background">
      
      <div className="container relative px-4">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm animate-fade-in mb-8">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            <Sparkles className="size-4" />
            <span>Welcome to {siteConfig.organization.shortName}</span>
          </div>

          <h1 className="max-w-5xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl animate-fade-in mb-6" style={{ animationDelay: '0.1s' }}>
            <span className="block bg-linear-to-r from-foreground via-foreground to-foreground/70 bg-clip-text">
              {siteConfig.organization.name.split(' ').slice(0, 2).join(' ')}
            </span>
            <span className="block pb-4 bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-linear-x bg-size-[200%_auto]">
              {siteConfig.organization.name.split(' ').slice(2).join(' ') || 'Organisasi'}
            </span>
          </h1>

          <p className="max-w-2xl text-lg text-muted-foreground md:text-xl lg:text-2xl leading-relaxed animate-fade-in mb-10" style={{ animationDelay: '0.2s' }}>
            {siteConfig.organization.description}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row animate-fade-in mb-16" style={{ animationDelay: '0.3s' }}>
            <Link to="/about">
              <Button 
                size="lg" 
                className="group relative h-14 px-8 text-lg font-semibold shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
              >
                <span className="flex items-center gap-2">
                  Explore Now
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="h-14 border-2 px-8 text-lg font-semibold backdrop-blur-sm transition-all hover:bg-accent/10 hover:text-accent hover:border-accent"
              >
                <span className="flex items-center gap-2">
                  Get Involved
                  <Heart className="size-5" />
                </span>
              </Button>
            </Link>
          </div>

          <div className="grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-3 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-primary/20 to-primary/5">
                  <Users className="size-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Community</h3>
                <p className="text-muted-foreground">Building lasting connections through meaningful engagement</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                  <span>500+ Members</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-accent/50 bg-linear-to-br from-accent/10 via-accent/5 to-transparent p-6 backdrop-blur-sm transition-all hover:shadow-xl hover:shadow-accent/10 md:-mt-4 md:mb-4">
              <div className="absolute -right-4 -top-4 size-24 rounded-full bg-accent/20 blur-2xl" />
              <div className="relative">
                <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-accent/30 to-accent/10">
                  <Zap className="size-6 text-accent" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Impact</h3>
                <p className="text-muted-foreground">Creating positive change in communities everywhere</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-accent">
                  <span>50+ Programs</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-green-500/20 to-green-500/5">
                  <Award className="size-6 text-green-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Excellence</h3>
                <p className="text-muted-foreground">Recognized for outstanding achievements and impact</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-green-500">
                  <span>{siteConfig.organization.founded}+ Years</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground/60 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2">
              <Target className="size-5" />
              <span className="text-sm">Mission Driven</span>
            </div>
            <div className="size-1 rounded-full bg-muted-foreground/30" />
            <div className="flex items-center gap-2">
              <TrendingUp className="size-5" />
              <span className="text-sm">Growing Community</span>
            </div>
            <div className="size-1 rounded-full bg-muted-foreground/30" />
            <div className="flex items-center gap-2">
              <Heart className="size-5" />
              <span className="text-sm">Making Impact</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
