import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import HeaderFooterGate from "@/components/common/HeaderFooterGate";
import ScrollToTop from "@/components/ScrollToTop";
import TrailingSlashRedirect from "@/components/common/TrailingSlashRedirect";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#4f46e5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://printsbasket.com'),
  title: {
    default: "Prints Basket - Premium Printers & Office Printing Solutions Online | 2026",
    template: "%s | Prints Basket"
  },
  description: "Shop Prints Basket for top-quality printers, replacement ink cartridges, and toner. Reliable inkjet, laser, and all-in-one printers with free shipping, expert support & 30-day refund policy.",
  keywords: ["printers", "buy printers online", "cartridges", "toner cartridges", "inkjet printer", "laser printer", "all-in-one printer", "office printing solutions", "Prints Basket"],
  authors: [{ name: "Prints Basket" }],
  creator: "Prints Basket",
  publisher: "Prints Basket",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/',
      'en-CA': '/',
    },
  },
  openGraph: {
    type: "website",
    title: "Prints Basket - Premium Printers & Office Printing Solutions",
    description: "Shop high-quality inkjet, laser, and all-in-one printers online with Prints Basket. Enjoy free shipping, expert customer support and a 30-day guarantee.",
    url: "https://printsbasket.com/",
    siteName: "Prints Basket",
    images: [
      {
        url: "https://printsbasket.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Prints Basket Logo",
      }
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prints Basket - Premium Printers & Supplies",
    description: "Shop printers and supplies online with free shipping across North America. Inkjet, laser, and all-in-one printers.",
    images: ["https://printsbasket.com/logo.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  other: {
    "language": "English",
    "distribution": "global",
    "revisit-after": "7 days",
    "msapplication-TileColor": "#4f46e5",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "mobile-web-app-capable": "yes",
    "application-name": "Prints Basket",
    "apple-mobile-web-app-title": "Prints Basket",
    "format-detection": "telephone=no",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col antialiased bg-slate-50 text-slate-800`}>
        <Providers>
          <TrailingSlashRedirect />
          <HeaderFooterGate />
          <ScrollToTop />
          <main className="flex-grow">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
