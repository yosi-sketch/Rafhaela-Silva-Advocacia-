import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { brand } from "./lib/brand";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const bodyFont = Manrope({
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;
const shareImage = brand.portrait;
const title = "Rafhaela Silva | Advocacia em São Gotardo e Atendimento Online";
const description = "Advocacia e consultoria jurídica com ética, transparência e atenção à sua história. Atendimento em São Gotardo, DF e exterior. WhatsApp (34) 99725-1415.";

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title,
  description,
  keywords: ["Rafhaela Silva", "advocacia", "consultoria jurídica", "advogada em São Gotardo", "atendimento jurídico online"],
  icons: { icon: [{ url: brand.logo, type: "image/png" }] },
  openGraph: {
    title,
    description,
    locale: "pt_BR",
    siteName: brand.businessName,
    type: "website",
    images: metadataBase
      ? [
          {
            url: shareImage,
            width: 845,
            height: 839,
            alt: brand.businessName,
          },
        ]
      : undefined,
  },
  twitter: {
    card: metadataBase ? "summary_large_image" : "summary",
    title,
    description,
    ...(metadataBase ? { images: [shareImage] } : {}),
  },
};

export const viewport: Viewport = {
  themeColor: "#faf5f1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={bodyFont.variable + " " + displayFont.variable}>
      <body className="min-h-screen bg-ivory font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
