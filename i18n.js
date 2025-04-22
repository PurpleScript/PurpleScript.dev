export const locales = ['en', 'he'];
export const defaultLocale = 'en';

export default function getLocales() {
    return locales;
}

export function resolveLocale(locale) {
    return locales.includes(locale) ? locale : defaultLocale;
}

export function getMessages(locale) {
    const resolvedLocale = resolveLocale(locale);
    try {
        return require(`./messages/${resolvedLocale}.json`);
    } catch (error) {
        return require(`./messages/${defaultLocale}.json`);
    }
} 