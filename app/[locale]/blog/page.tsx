import { usePathname } from "next/navigation";

// Simple translations
const translations = {
  en: {
    title: "Blog",
    comingSoon: "Blog posts will appear here soon.",
  },
  he: {
    title: "בלוג",
    comingSoon: "פוסטים יופיעו כאן בקרוב.",
  },
};

export default function BlogPage({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  const t =
    translations[locale as keyof typeof translations] || translations.en;

  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold mb-6">{t.title}</h1>
      <p>{t.comingSoon}</p>
    </div>
  );
}
