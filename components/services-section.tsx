"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Wrench, ShoppingBag, Settings } from "lucide-react"
import { useEffect, useRef } from "react"

const services = [
  {
    icon: Wrench,
    title: "Réparation rapide",
    description: "Écrans, batteries, déblocages et plus encore. Service rapide et professionnel.",
    delay: "delay-100",
  },
  {
    icon: ShoppingBag,
    title: "Accessoires & pièces",
    description: "Chargeurs, écouteurs, coques, câbles et tous vos accessoires tech.",
    delay: "delay-200",
  },
  {
    icon: Settings,
    title: "Maintenance pro",
    description: "Nettoyage, diagnostic et optimisation pour prolonger la vie de vos appareils.",
    delay: "delay-300",
  },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".service-card")
            cards.forEach((card) => {
              card.classList.add("animate-on-scroll")
            })
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
    <section id="services" ref={sectionRef} className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Nos <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Des solutions complètes pour tous vos besoins en électronique
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`service-card ${service.delay} border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group`}
            >
              <CardContent className="p-8 space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
