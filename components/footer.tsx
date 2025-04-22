"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { usePathname } from "next/navigation";

// Simple translations object
const translations = {
  en: {
    copyright: "© 2025 PurpleScript. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    subscribe: "Subscribe",
    subscribeText: "Stay updated with our latest news and offers.",
    emailPlaceholder: "Your email",
    company: "Company",
    aboutUs: "About Us",
    blog: "Blog",
    services: "Services",
    landingPages: "Landing Pages",
    customCRMs: "Custom CRMs",
    businessAutomations: "Business Automations",
    whatsAppBusiness: "WhatsApp Business",
    shopifyIntegrations: "Shopify Integrations",
    customSolutions:
      "Custom technology solutions for small and medium businesses.",
  },
  he: {
    copyright: "© 2025 PurpleScript. כל הזכויות שמורות.",
    privacy: "מדיניות פרטיות",
    terms: "תנאי שימוש",
    subscribe: "הירשם",
    subscribeText: "הישאר מעודכן עם החדשות והמבצעים האחרונים שלנו.",
    emailPlaceholder: "האימייל שלך",
    company: "חברה",
    aboutUs: "אודותינו",
    blog: "בלוג",
    services: "שירותים",
    landingPages: "דפי נחיתה",
    customCRMs: "מערכות CRM מותאמות אישית",
    businessAutomations: "אוטומציות עסקיות",
    whatsAppBusiness: "וואטסאפ עסקי",
    shopifyIntegrations: "אינטגרציות לשופיפיי",
    customSolutions: "פתרונות טכנולוגיים מותאמים אישית לעסקים קטנים ובינוניים.",
  },
};

export default function Footer() {
  const pathname = usePathname() || "";
  // Determine current locale from URL path or default to 'en'
  const locale = pathname.startsWith("/he") ? "he" : "en";
  const t = translations[locale as keyof typeof translations];

  // Build localized links
  const getLocalizedHref = (path: string) => {
    // Keep the current locale in the path
    return locale === "en" ? path : `/he${path}`;
  };

  // For RTL in Hebrew
  const rtlClass = locale === "he" ? "rtl" : "";

  return (
    <footer className={`bg-purple-900 text-white py-12 md:py-16 ${rtlClass}`}>
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">PurpleScript</h3>
            <p className="text-white/70 mb-4">{t.customSolutions}</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/70 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.services}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/70 hover:text-white">
                  {t.landingPages}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white">
                  {t.customCRMs}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white">
                  {t.businessAutomations}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white">
                  {t.whatsAppBusiness}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white">
                  {t.shopifyIntegrations}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.company}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={getLocalizedHref("/#about")}
                  className="text-white/70 hover:text-white"
                >
                  {t.aboutUs}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/blog")}
                  className="text-white/70 hover:text-white"
                >
                  {t.blog}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white">
                  {t.privacy}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white">
                  {t.terms}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.subscribe}</h3>
            <p className="text-white/70 mb-4">{t.subscribeText}</p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder={t.emailPlaceholder}
                className="bg-purple-800 border-purple-700 text-white placeholder:text-white/50"
              />
              <Button className="w-full bg-white text-purple-700 hover:bg-purple-100">
                {t.subscribe}
              </Button>
            </form>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-white/70">
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
