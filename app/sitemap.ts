import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";

const baseUrl = "https://harunsokullu.com";

// Locale-prefixed routes (next-intl localePrefix: "always")
const routes = ["", "/experience", "/projects", "/media", "/awards"];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = (route: string) =>
    Object.fromEntries(locales.map((l) => [l, `${baseUrl}/${l}${route}`]));

  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${route}`,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
      alternates: { languages: languages(route) },
    }))
  );
}
