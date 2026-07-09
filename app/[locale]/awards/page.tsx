"use client";

import { useTranslations } from "next-intl";
import { ExternalLink } from "lucide-react";
import { formatMonthYear } from "@/lib/date";
import { type Honor, honors } from "@/lib/awards";

function HonorCard({
  honor,
  t,
}: {
  honor: Honor;
  t: ReturnType<typeof useTranslations>;
}) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="text-sm text-primary font-medium mb-2">
        {formatMonthYear(honor.date, t)}
        {honor.current && ` – ${t("awardsPage.present")}`}
      </div>
      <h3 className="text-xl font-bold mb-1 text-foreground">
        {t(`awards.honors.${honor.key}.title`)}
      </h3>
      {honor.organizationUrl ? (
        <a
          href={honor.organizationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary font-medium mb-3"
        >
          {honor.organization}
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      ) : (
        <div className="text-muted-foreground font-medium mb-3">
          {honor.organization}
        </div>
      )}
      <p className="text-muted-foreground text-sm mt-2">
        {t(`awards.honors.${honor.key}.description`)}
      </p>
    </div>
  );
}

export default function AwardsPage() {
  const t = useTranslations();
  const fellowships = honors.filter((h) => h.section === "fellowship");
  const juries = honors.filter((h) => h.section === "jury");

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          {t("awardsPage.title")}
        </h1>
        <p className="text-muted-foreground text-lg">
          {t("awardsPage.description")}
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">
          {t("awardsPage.sections.fellowship")}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {fellowships.map((honor) => (
            <HonorCard key={honor.key} honor={honor} t={t} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 text-foreground">
          {t("awardsPage.sections.jury")}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {juries.map((honor) => (
            <HonorCard key={honor.key} honor={honor} t={t} />
          ))}
        </div>
      </section>
    </div>
  );
}
