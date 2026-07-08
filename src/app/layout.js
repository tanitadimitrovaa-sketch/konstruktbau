import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://konstruktbau.ch"),

  title: {
    default: "KonstruktBau GmbH | Trockenbau in der Schweiz",
    template: "%s | KonstruktBau GmbH",
  },

  description:
    "Professionelle Trockenbauarbeiten in der Schweiz. Spezialisiert auf Trockenbau, Gipskartonwände, Akustikdecken, Brandschutzdecken, Spachtelarbeiten und Deckensysteme.",

  keywords: [
    "Trockenbau",
    "Trockenbau Schweiz",
    "Trockenbau Luzern",
    "Trockenbau Zürich",
    "Gipskarton",
    "Gipskartonwände",
    "Brandschutz",
    "Brandschutzdecken",
    "Akustikdecken",
    "Deckensysteme",
    "Spachtelarbeiten",
    "Trockenbaumonteur",
    "KonstruktBau GmbH",
  ],

  authors: [
    {
      name: "KonstruktBau GmbH",
    },
  ],

  creator: "KonstruktBau GmbH",

  publisher: "KonstruktBau GmbH",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://konstruktbau.ch",
  },

  openGraph: {
    title: "KonstruktBau GmbH | Trockenbau in der Schweiz",
    description:
      "Professionelle Trockenbauarbeiten in der Schweiz. Akustikdecken, Brandschutz, Gipskarton, Deckensysteme und Spachtelarbeiten.",

    url: "https://konstruktbau.ch",

    siteName: "KonstruktBau GmbH",

    locale: "de_CH",

    type: "website",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "KonstruktBau GmbH",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "KonstruktBau GmbH",

    description:
      "Professionelle Trockenbauarbeiten in der Schweiz.",

    images: ["/logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  category: "Construction",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}