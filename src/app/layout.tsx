import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PERSONAL } from "@/constants/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://mukizz.dev";
const title = "Mukesh Pandi — Full Stack Developer & AI Builder";
const description =
  "Full-stack developer, AI product builder, and engineering student from Coimbatore. Building ambitious products at the intersection of web and AI.";
const image = `${baseUrl}/og.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: title,
    template: "%s — Mukesh Pandi",
  },
  description,
  keywords: [
    "Mukesh Pandi",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "AI Product Builder",
    "Web Development",
    "TypeScript",
    "Coimbatore",
    "Portfolio",
    "Developer",
  ],
  authors: [{ name: "Mukesh Pandi", url: baseUrl }],
  creator: "Mukesh Pandi",
  publisher: "Mukesh Pandi",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Mukesh Pandi",
    title,
    description,
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: "Mukesh Pandi — Full Stack Developer",
        type: "image/jpeg",
      },
      {
        url: `${baseUrl}/og-square.jpg`,
        width: 400,
        height: 400,
        alt: "Mukesh Pandi",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mukizz_dev",
    creator: "@mukizz_dev",
    title,
    description,
    images: [image],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title,
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f4f7" },
    { media: "(prefers-color-scheme: dark)", color: "#141827" },
  ],
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to external services */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for analytics (optional) */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Structured Data - Person + Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": `${baseUrl}/#person`,
                  name: PERSONAL.name,
                  url: baseUrl,
                  email: PERSONAL.email,
                  image: image,
                  jobTitle: "Full Stack Developer & AI Product Builder",
                  alumniOf: {
                    "@type": "EducationalOrganization",
                    name: "Coimbatore Institute of Technology",
                  },
                  knowsLanguage: [
                    { "@type": "Language", name: "English" },
                    { "@type": "Language", name: "Tamil" },
                  ],
                  knowsAbout: [
                    "Full Stack Development",
                    "React",
                    "Next.js",
                    "TypeScript",
                    "AI/LLM Integration",
                    "Product Design",
                    "Web Development",
                  ],
                  sameAs: [
                    PERSONAL.links.github,
                    PERSONAL.links.linkedin,
                    `https://${PERSONAL.website}`,
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": `${baseUrl}/#website`,
                  name: "Mukesh Pandi",
                  url: baseUrl,
                  description,
                  creator: {
                    "@id": `${baseUrl}/#person`,
                  },
                },
                {
                  "@type": "WebPage",
                  "@id": `${baseUrl}/#webpage`,
                  url: baseUrl,
                  name: title,
                  description,
                  isPartOf: {
                    "@id": `${baseUrl}/#website`,
                  },
                  about: {
                    "@id": `${baseUrl}/#person`,
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className="relative min-h-full flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)]"
        style={{
          colorScheme: "dark",
        }}
      >
        {children}

        {/* Noscript fallback */}
        <noscript>
          <p>
            This website requires JavaScript to display properly. Please enable JavaScript in
            your browser settings.
          </p>
        </noscript>
      </body>
    </html>
  );
}
