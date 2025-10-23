"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, MapPin, Mail, Phone } from "lucide-react"
import { useEffect, useRef } from "react"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".contact-card")
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

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/22376535355", "_blank")
  }

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Contactez-<span className="text-primary">nous</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Contactez-nous dès maintenant pour une réparation ou un devis gratuit
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="contact-card delay-100 border-2 hover:border-primary transition-all">
            <CardContent className="p-8 space-y-4">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Adresse</h3>
              <p className="text-muted-foreground leading-relaxed">
                Bamako, Mali
                <br />
                Moribabougou sur la route de Koulikoro face au poste de police
              </p>
            </CardContent>
          </Card>

          <Card className="contact-card delay-200 border-2 hover:border-primary transition-all">
            <CardContent className="p-8 space-y-4">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Téléphone</h3>
              <p className="text-muted-foreground leading-relaxed">
                +223 76 53 53 55
                <br />
                Lun - Sam: 8h - 22h
              </p>
            </CardContent>
          </Card>

          <Card className="contact-card delay-300 border-2 hover:border-primary transition-all">
            <CardContent className="p-8 space-y-4">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Email</h3>
              <p className="text-muted-foreground leading-relaxed">
                kastro-electronics@gmail.com
                <br />
                Réponse sous 24h
              </p>
            </CardContent>
          </Card>

          <Card className="contact-card delay-400 border-2 hover:border-primary transition-all">
            <CardContent className="p-8 space-y-4">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">WhatsApp</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Contactez-nous directement
                <br />
                Réponse rapide garantie
              </p>
              <Button onClick={handleWhatsAppClick} className="w-full" size="lg">
                <MessageCircle className="mr-2 h-5 w-5" />
                Ouvrir WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
