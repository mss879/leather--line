import type { Metadata } from "next";
import "@/index.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Hijab Boutique - Elegant Collection of Premium Hijabs | Modest Fashion",
  description:
    "Discover our curated selection of premium hijabs, scarves, and modest fashion. Timeless designs crafted with the finest materials for the modern woman who values both style and modesty. Shop luxury hijabs online.",
  keywords: [
    "hijab",
    "modest fashion",
    "premium hijabs",
    "luxury scarves",
    "islamic fashion",
    "women's hijabs",
    "elegant hijabs",
    "designer hijabs",
    "modest clothing",
    "hijab boutique",
    "hijab online shopping",
  ],
  authors: [{ name: "Hijab Boutique" }],
  robots: "index, follow",
  icons: {
    icon: "/hijab boutique logo.png",
    shortcut: "/hijab boutique logo.png",
    apple: "/hijab boutique logo.png",
  },
  openGraph: {
    title: "Hijab Boutique - Elegant Collection of Premium Hijabs | Modest Fashion",
    description:
      "Discover our curated selection of premium hijabs, scarves, and modest fashion. Timeless designs crafted with the finest materials for the modern woman who values both style and modesty.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/hijab boutique logo.png",
        alt: "Hijab Boutique Logo - Premium Modest Fashion",
      },
    ],
    siteName: "Hijab Boutique",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hijab Boutique - Elegant Collection of Premium Hijabs",
    description:
      "Discover our curated selection of premium hijabs and modest fashion. Timeless designs for the modern woman.",
    images: [
      {
        url: "/hijab boutique logo.png",
        alt: "Hijab Boutique Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              name: "Hijab Boutique",
              description:
                "Premium hijabs and modest fashion boutique offering elegant designs crafted with the finest materials",
              url: "/",
              logo: "/hijab boutique logo.png",
              image: "/hijab boutique logo.png",
              priceRange: "$$",
              sameAs: [],
              offers: {
                "@type": "AggregateOffer",
                category: "Clothing & Fashion",
                itemCondition: "https://schema.org/NewCondition",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Hijab Collection",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Premium Hijabs",
                      category: "Modest Fashion",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
