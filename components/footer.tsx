import { Facebook, MessageCircle, Smartphone } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary rounded-lg p-2">
                <Smartphone className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                Kastro <span className="text-primary">Électroniques</span>
              </span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Votre partenaire de confiance pour la réparation et la vente d'électronique à Bamako.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Liens rapides</h3>
            <nav className="flex flex-col gap-2">
              <Link href="#accueil" className="text-background/70 hover:text-primary transition-colors">
                Accueil
              </Link>
              <Link href="#services" className="text-background/70 hover:text-primary transition-colors">
                Nos services
              </Link>
              <Link href="#apropos" className="text-background/70 hover:text-primary transition-colors">
                À propos
              </Link>
              <Link href="#contact" className="text-background/70 hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Suivez-nous</h3>
            <div className="flex gap-4">
              <a
                href="https://wa.me/22376535355"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 hover:bg-primary p-3 rounded-lg transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 hover:bg-primary p-3 rounded-lg transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 hover:bg-primary p-3 rounded-lg transition-colors"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center text-background/70">
          <p>© {currentYear} Kastro Électroniques — Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
