import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kastro Électroniques - Réparation Téléphone & Électronique Bamako Mali | Service Rapide",
  description:
    "Expert en réparation de téléphones, smartphones et appareils électroniques à Bamako. Service rapide, pièces d'origine, garantie. Vente d'accessoires et maintenance professionnelle. Appelez +223 76 53 53 55",
  keywords: [
    "réparation téléphone Bamako",
    "réparation smartphone Mali",
    "réparation iPhone Bamako",
    "réparation Samsung Bamako",
    "réparation écran téléphone",
    "accessoires téléphone Bamako",
    "maintenance électronique Mali",
    "service réparation rapide Bamako",
    "Kastro Électroniques",
    "atelier réparation Bamako",
    "pièces détachées téléphone Mali",
    "réparation tablette Bamako",
  ],
  authors: [{ name: "Kastro Électroniques" }],
  creator: "Kastro Électroniques",
  publisher: "Kastro Électroniques",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL("https://kastro-electroniques.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_ML",
    url: "https://kastro-electroniques.vercel.app",
    title: "Kastro Électroniques - Réparation Téléphone & Électronique Bamako Mali",
    description:
      "Expert en réparation de téléphones et appareils électroniques à Bamako. Service rapide, pièces d'origine, garantie. Appelez +223 76 53 53 55",
    siteName: "Kastro Électroniques",
    images: [
      {
        url: "/modern-electronics-repair-workshop-with-smartphone.jpg",
        width: 1200,
        height: 630,
        alt: "Atelier de réparation Kastro Électroniques Bamako",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kastro Électroniques - Réparation Téléphone Bamako Mali",
    description:
      "Expert en réparation de téléphones et électronique à Bamako. Service rapide et professionnel. +223 76 53 53 55",
    images: ["/modern-electronics-repair-workshop-with-smartphone.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://kastro-electroniques.vercel.app",
              name: "Kastro Électroniques",
              image: "https://kastro-electroniques.vercel.app/modern-electronics-repair-workshop-with-smartphone.jpg",
              description:
                "Expert en réparation de téléphones, smartphones et appareils électroniques à Bamako. Service rapide, pièces d'origine, garantie.",
              telephone: "+223 76 53 53 55",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Bamako",
                addressLocality: "Bamako",
                addressCountry: "ML",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "12.6392",
                longitude: "-8.0029",
              },
              url: "https://kastro-electroniques.vercel.app",
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "08:00",
                  closes: "18:00",
                },
              ],
              sameAs: ["https://www.facebook.com/kastroelectroniques", "https://www.tiktok.com/@kastroelectroniques"],
              areaServed: {
                "@type": "City",
                name: "Bamako",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Services de réparation",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Réparation de téléphones",
                      description: "Réparation rapide et professionnelle de tous types de smartphones",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Vente d'accessoires",
                      description: "Large gamme d'accessoires pour téléphones et appareils électroniques",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Maintenance professionnelle",
                      description: "Entretien et maintenance préventive de vos appareils électroniques",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
