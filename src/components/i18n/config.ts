export type Locale = (typeof locales)[number];

export const locales = ["en", "de", "ja"] as const;
export const defaultLocale: Locale = "ja";
