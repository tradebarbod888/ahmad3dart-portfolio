import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, DM_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AHMAD3DART — Photorealistic Interior Visualization",
  description:
    "Ahmad Tajik is a world-class architectural visualization artist based in Türkiye, delivering photorealistic interior renders for residential and commercial projects worldwide.",
  keywords: [
    "architectural visualization",
    "interior rendering",
    "3D visualization",
    "photorealistic renders",
    "interior design",
    "CGI",
    "architectural CGI",
    "Ahmad Tajik",
    "AHMAD3DART",
  ],
  authors: [{ name: "Ahmad Tajik", url: "https://ahmad3dart.com" }],
  creator: "Ahmad Tajik",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahmad3dart.com",
    title: "AHMAD3DART — Photorealistic Interior Visualization",
    description:
      "Transforming architectural concepts into extraordinary visual narratives. Premium interior visualization studio based in Türkiye.",
    siteName: "AHMAD3DART",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AHMAD3DART Architectural Visualization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AHMAD3DART — Photorealistic Interior Visualization",
    description:
      "Transforming architectural concepts into extraordinary visual narratives.",
    images: ["/og-image.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${dmMono.variable}`}>
      <body className="bg-void text-ivory antialiased overflow-x-hidden">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
