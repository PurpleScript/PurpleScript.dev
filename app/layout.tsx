import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PurpleByte - Custom Technology Solutions",
  description:
    "We help small and medium businesses grow and operate more efficiently through custom technology solutions.",
  icons: {
    icon: "/images/logo.svg",
    shortcut: "/images/logo.svg",
    apple: "/images/logo.svg",
  },
  openGraph: {
    title: "PurpleByte - Custom Technology Solutions",
    description:
      "We help small and medium businesses grow and operate more efficiently through custom technology solutions.",
    url: "https://purple-byte.vercel.app/",
    siteName: "PurpleByte",
    images: [
      {
        url: "/images/logo.svg",
        width: 300,
        height: 300,
        alt: "PurpleByte Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PurpleByte - Custom Technology Solutions",
    description:
      "We help small and medium businesses grow and operate more efficiently through custom technology solutions.",
    images: ["/images/logo.svg"],
  },
  other: {
    "og:image:width": "300",
    "og:image:height": "300",
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
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
