import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import WhatsAppButton from "../components/WhatsAppButton";
import EmailButton from "../components/EmailButton";
import HeroSection from "../components/HeroSection";
import ScrollToContactButton from "../components/ScrollToContactButton";
import ProfilePicture from "../components/ProfilePicture";
import {
  CheckCircle,
  Code,
  LayoutDashboard,
  MessageCircle,
  ShoppingBag,
  Zap,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

// Translations for section headings and other content
const translations = {
  en: {
    ourServices: "Our Services",
    customTechnologySolutions: "Custom Technology Solutions",
    helpBusinesses:
      "We help small and medium businesses grow and operate more efficiently through tailored technology solutions.",
  },
  he: {
    ourServices: "השירותים שלנו",
    customTechnologySolutions: "פתרונות טכנולוגיים מותאמים אישית",
    helpBusinesses:
      "אנו עוזרים לעסקים קטנים ובינוניים לצמוח ולפעול ביעילות רבה יותר באמצעות פתרונות טכנולוגיים מותאמים.",
  },
};

export default function Home({ params }: { params: { locale: string } }) {
  const locale = params.locale || "en";
  const t =
    translations[locale as keyof typeof translations] || translations.en;

  // Add RTL class for Hebrew
  const rtlClass = locale === "he" ? "rtl" : "";

  return (
    <main className={`min-h-screen ${rtlClass}`}>
      <HeroSection />

      {/* Services Section */}
      <section className="py-20 bg-white" id="services">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
              {t.ourServices}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {t.customTechnologySolutions}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t.helpBusinesses}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                  <LayoutDashboard className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  High-Converting Landing Pages
                </h3>
                <p className="text-muted-foreground">
                  Beautifully designed landing pages that convert visitors into
                  customers with clear CTAs and optimized user flows.
                </p>
              </CardContent>
            </Card>

            {/* Rest of the component remains the same */}
            {/* ... */}
          </div>
        </div>
      </section>

      {/* Additional sections remain the same */}
      {/* ... */}
    </main>
  );
}
