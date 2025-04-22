import { getRequestConfig } from "next-intl/server";
import { defaultLocale } from ".";

export default getRequestConfig(async ({ locale }) => {
  // Ensure locale is never undefined
  const resolvedLocale = locale || defaultLocale;

  return {
    locale: resolvedLocale,
    messages: (await import(`../../messages/${resolvedLocale}.json`)).default,
  };
});
