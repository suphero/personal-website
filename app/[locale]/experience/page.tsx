"use client";

import { useTranslations } from "next-intl";
import { Download } from "lucide-react";
import { formatMonthYear } from "@/lib/date";

const experienceKeys = [
  { key: "ozan_lead", company: "Ozan Elektronik Para", companyUrl: "https://www.ozan.com", dateStart: "2023-07", current: true },
  { key: "ozan_senior", company: "Ozan Elektronik Para", companyUrl: "https://www.ozan.com", dateStart: "2022-12", dateEnd: "2023-07" },
  { key: "akbank", company: "Akbank", companyUrl: "https://www.akbank.com", dateStart: "2020-11", dateEnd: "2022-12" },
  { key: "dogus_vdf2", company: "Doğuş Technology (VDF Filo)", companyUrl: "https://www.d-teknoloji.com.tr", dateStart: "2018-12", dateEnd: "2020-10" },
  { key: "dogus_ntv", company: "Doğuş Technology (NTV)", companyUrl: "https://www.d-teknoloji.com.tr", dateStart: "2018-09", dateEnd: "2018-12" },
  { key: "dogus_construction", company: "Doğuş Technology (Doğuş Construction)", companyUrl: "https://www.d-teknoloji.com.tr", dateStart: "2018-01", dateEnd: "2018-09" },
  { key: "dogus_vdf1", company: "Doğuş Technology (VDF Filo)", companyUrl: "https://www.d-teknoloji.com.tr", dateStart: "2016-04", dateEnd: "2018-01" },
  { key: "dogus_leaseplan", company: "Doğuş Technology (LeasePlan)", companyUrl: "https://www.d-teknoloji.com.tr", dateStart: "2013-07", dateEnd: "2016-04" },
];

export default function ExperiencePage() {
  const t = useTranslations();

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">{t("experiencePage.title")}</h1>
        <p className="text-muted-foreground text-lg">
          {t("experiencePage.description")}
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />

        <div className="space-y-12">
          {experienceKeys.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.dateStart}`}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 -translate-y-1 border-2 border-background">
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                )}
              </div>

              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                <div
                  className={`ml-8 md:ml-0 bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className="text-sm text-primary font-medium mb-2">
                    {formatMonthYear(exp.dateStart, t)} -{" "}
                    {exp.current ? t("experiencePage.present") : formatMonthYear(exp.dateEnd!, t)}
                    {exp.current && (
                      <span className="ml-2 px-2 py-0.5 bg-primary/10 text-primary rounded text-xs border border-primary/20">
                        {t("experiencePage.current")}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-foreground">
                    {t(`experiences.${exp.key}.title`)}
                  </h3>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary font-medium mb-3 inline-block"
                  >
                    {exp.company} →
                  </a>
                  <p className="text-muted-foreground text-sm mt-2">
                    {t(`experiences.${exp.key}.description`)}
                  </p>
                </div>
              </div>

              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <a
          href="https://github.com/suphero/cv/releases/latest/download/HarunSokullu_en.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors"
        >
          <Download className="w-5 h-5" />
          {t("experiencePage.downloadCV")}
        </a>
      </div>
    </div>
  );
}
