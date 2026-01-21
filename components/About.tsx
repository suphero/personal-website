"use client";

import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  return (
    <section className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
        <h2 className="text-3xl font-bold mb-6 text-foreground">{t("title")}</h2>
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            {t.rich("intro", {
              strong: (chunks) => <strong className="text-foreground">{chunks}</strong>,
              link: (chunks) => (
                <a href="https://www.ozan.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  {chunks}
                </a>
              ),
              ituLink: (chunks) => (
                <a href="http://www.itu.edu.tr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  {chunks}
                </a>
              ),
            })}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {t("experience")}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {t.rich("hobbies", {
              em: (chunks) => <em>{chunks}</em>,
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
