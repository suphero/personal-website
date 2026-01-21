"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();

  const cvUrl = locale === "tr"
    ? "https://github.com/suphero/cv/releases/latest/download/HarunSokullu_tr.pdf"
    : "https://github.com/suphero/cv/releases/latest/download/HarunSokullu_en.pdf";

  return (
    <section className="container mx-auto px-4 py-20 md:py-32 max-w-6xl">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
          <Image
            src="/profile.png"
            alt="Harun Sokullu"
            fill
            className="rounded-full object-cover"
            priority
          />
        </div>

        <div className="flex flex-col space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            {t("greeting")} <span className="text-primary">{t("name")}</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground">
            {t("role")}{" "}
            <a href="https://www.ozan.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              {t("company")}
            </a>
          </p>

          <p
            className="text-lg md:text-xl text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: t.raw("description") }}
          />

          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <Link
              href="/experience"
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors"
            >
              {t("experience")}
            </Link>
            <Link
              href="/projects"
              className="px-6 py-3 border border-border hover:bg-accent rounded-lg font-medium transition-colors text-foreground"
            >
              {t("viewProjects")}
            </Link>
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border hover:bg-accent rounded-lg font-medium transition-colors text-foreground"
            >
              {t("downloadCV")}
            </a>
          </div>

          <div className="flex gap-3 flex-wrap justify-center md:justify-start pt-6 text-sm text-muted-foreground">
            <span className="px-3 py-1 bg-secondary rounded-full">{t("skills.enterprise")}</span>
            <span className="px-3 py-1 bg-secondary rounded-full">{t("skills.openSource")}</span>
            <span className="px-3 py-1 bg-secondary rounded-full">{t("skills.problemSolving")}</span>
            <span className="px-3 py-1 bg-secondary rounded-full">{t("skills.backend")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
