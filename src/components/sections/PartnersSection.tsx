/**
 * PartnersSection
 * Partners/sponsors section for homepage
 */

export const PartnersSection = () => {
  return (
    <section className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Partners</h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          We collaborate with amazing organizations to make a greater impact.
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex h-24 items-center justify-center rounded-lg bg-muted"
            >
              <span className="text-muted-foreground">Partner {i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
