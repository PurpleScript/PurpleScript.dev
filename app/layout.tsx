import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PurpleScript - Custom Technology Solutions",
  description:
    "We help small and medium businesses grow and operate more efficiently through custom technology solutions.",
  icons: {
    icon: "/images/logo.svg",
    shortcut: "/images/logo.svg",
    apple: "/images/logo.svg",
  },
  openGraph: {
    title: "PurpleScript - Custom Technology Solutions",
    description:
      "We help small and medium businesses grow and operate more efficiently through custom technology solutions.",
    url: "https://www.purplescript.dev/",
    siteName: "PurpleScript",
    images: [
      {
        url: "/images/social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "PurpleScript - Custom Technology Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PurpleScript - Custom Technology Solutions",
    description:
      "We help small and medium businesses grow and operate more efficiently through custom technology solutions.",
    images: ["/images/social-preview.jpg"],
  },
  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
