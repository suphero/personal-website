"use client";

import { useTranslations } from "next-intl";
import { ExternalLink } from "lucide-react";
import { formatMonthYear } from "@/lib/date";
import { mediaStories } from "@/lib/media";

export default function MediaPage() {
  const t = useTranslations();

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          {t("mediaPage.title")}
        </h1>
        <p className="text-muted-foreground text-lg">
          {t("mediaPage.description")}
        </p>
      </div>

      <div className="space-y-8">
        {mediaStories.map((story) => (
          <article
            key={story.key}
            className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="text-sm text-primary font-medium mb-2">
              {formatMonthYear(story.date, t)}
            </div>
            <h2 className="text-xl font-bold mb-4 text-foreground">
              {t(`media.stories.${story.key}.title`)}
            </h2>
            <div className="text-sm text-muted-foreground mb-2">
              {t("mediaPage.appearedIn")}
            </div>
            <div className="flex flex-wrap gap-2">
              {story.outlets.map((outlet) => (
                <a
                  key={outlet.url}
                  href={outlet.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm px-3 py-1 rounded-full border border-border bg-secondary text-secondary-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  {outlet.name}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
