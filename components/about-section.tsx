"use client"

import { useEffect, useRef } from "react"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-on-scroll")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="apropos" className="py-24 px-4">
      <div className="container mx-auto">
        <div ref={sectionRef} className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              À propos de <span className="text-primary">Kastro</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Basé à Bamako, Kastro Électroniques est votre partenaire de confiance pour tous vos besoins en
              électronique. Nous mettons la qualité et la rapidité au cœur de notre travail.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Notre équipe d'experts passionnés s'engage à fournir des services de réparation professionnels et des
              produits de qualité pour garantir votre satisfaction.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Réparations réussies</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">5★</div>
                <div className="text-sm text-muted-foreground">Note moyenne clients</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/professional-electronics-repair-team-in-modern-wor.jpg"
                alt="Équipe Kastro Électroniques"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
