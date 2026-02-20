/**
 * AboutPage
 * About organization page with trending 2025/2026 design
 */

import { PageWrapper } from '@/components/layout/PageWrapper'
import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Target, 
  Heart, 
  Users, 
  Award, 
  TrendingUp,
  Sparkles,
  CheckCircle2,
  Globe
} from 'lucide-react'

export default function AboutPage() {
  return (
    <PageWrapper>
      <section className="relative overflow-hidden bg-linear-to-b from-primary/5 via-background to-background">
     
        <div className="container min-h-screen flex items-center justify-center relative px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="size-4" />
              <span>About {siteConfig.organization.shortName}</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Our Story &</span>
              <span className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-linear-x bg-size-[200%_auto]">
                Mission
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed">
              {siteConfig.organization.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Who We Are
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in {siteConfig.organization.founded}, {siteConfig.organization.name} has grown from a small initiative into a thriving community dedicated to making a positive impact.
                </p>
                <p>
                  We believe in the power of collective action and meaningful connections. Our organization brings together passionate individuals who share a common vision for a better future.
                </p>
                <p>
                  Through our programs, events, and community initiatives, we strive to create opportunities for growth, learning, and positive change.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: Users, label: '500+ Members', color: 'text-primary' },
                  { icon: Award, label: 'Award Winning', color: 'text-accent' },
                  { icon: Globe, label: 'Nationwide', color: 'text-green-500' },
                  { icon: TrendingUp, label: 'Growing Fast', color: 'text-primary' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 rounded-xl border border-border/50 bg-card/50 p-4">
                    <item.icon className={`size-5 ${item.color}`} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm">
                <div className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-primary/50">
                  <Target className="size-8 text-white" />
                </div>
                <h3 className="mb-4 text-2xl font-bold">Our Mission</h3>
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  To empower individuals and communities through meaningful programs, fostering growth, connection, and positive impact in everything we do.
                </p>
                <ul className="space-y-3">
                  {[
                    'Build strong community connections',
                    'Create impactful programs',
                    'Foster personal & professional growth',
                    'Drive positive social change',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="size-5 text-green-500" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute -right-6 top-1/3 size-32 rounded-2xl bg-linear-to-br from-primary/20 to-accent/20 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20 md:py-32">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Our Core Values</h2>
            <p className="mb-12 text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Heart,
                title: 'Community First',
                description: 'We prioritize the needs and well-being of our community members in every decision we make.',
                linear: 'from-accent/20 to-accent/5',
                iconBg: 'bg-accent/10',
                iconColor: 'text-accent',
              },
              {
                icon: Target,
                title: 'Purpose Driven',
                description: 'Every initiative we undertake is aligned with our mission to create meaningful impact.',
                linear: 'from-primary/20 to-primary/5',
                iconBg: 'bg-primary/10',
                iconColor: 'text-primary',
              },
              {
                icon: Users,
                title: 'Inclusive Growth',
                description: 'We believe in creating opportunities that benefit everyone and leave no one behind.',
                linear: 'from-green-500/20 to-green-500/5',
                iconBg: 'bg-green-500/10',
                iconColor: 'text-green-500',
              },
            ].map((value, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-3xl border border-border/50 bg-background p-8 transition-all hover:shadow-xl"
              >
                <div className={`absolute inset-0 bg-linear-to-br ${value.linear} opacity-0 transition-opacity group-hover:opacity-100`} />
                <div className="relative">
                  <div className={`mb-6 flex size-14 items-center justify-center rounded-2xl ${value.iconBg}`}>
                    <value.icon className={`size-7 ${value.iconColor}`} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-3xl border border-border/50 bg-linear-to-br from-primary/5 via-card to-accent/5 p-10 text-center md:p-16">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Get Involved?
            </h2>
            <p className="mb-8 text-muted-foreground md:text-lg">
              Join our growing community and be part of something meaningful.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/contact">
                <Button size="lg" className="group font-semibold shadow-lg shadow-primary/20">
                  Join Us Today
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/programs">
                <Button size="lg" variant="outline" className="font-semibold">
                  View Our Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
