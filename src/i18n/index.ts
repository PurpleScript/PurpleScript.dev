export const locales = ["en", "he"];
export const defaultLocale = "en";

export default function getLocales() {
  return locales;
}

export function resolveLocale(locale: string) {
  return locales.includes(locale) ? locale : defaultLocale;
}

export async function getMessages(locale: string) {
  const resolvedLocale = resolveLocale(locale);
  try {
    return (await import(`../../messages/${resolvedLocale}.json`)).default;
  } catch (error) {
    return (await import(`../../messages/${defaultLocale}.json`)).default;
  }
}
