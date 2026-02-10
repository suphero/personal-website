"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { linkConfig } from "@/components/ProjectLinkIcons";
import { featuredProjects } from "@/lib/projects";

export default function FeaturedProjects() {
  const t = useTranslations();

  return (
    <section className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2 text-foreground">{t("featuredProjects.title")}</h2>
          <p className="text-muted-foreground">{t("featuredProjects.subtitle")}</p>
        </div>
        <Link
          href="/projects"
          className="text-primary hover:underline font-medium"
        >
          {t("featuredProjects.viewAll")}
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <div
            key={project.key}
            className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow bg-card"
          >
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              {t(`projects.${project.key}.title`)}
            </h3>
            <p className="text-muted-foreground mb-4 min-h-[3rem]">
              {t(`projects.${project.key}.description`)}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
                >
                  {t(`tags.${tag}`)}
                </span>
              ))}
            </div>
            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap gap-3 text-sm">
                {project.links.map((link) => {
                  const config = linkConfig[link.type];
                  const Icon = config.icon;
                  return (
                    <a
                      key={link.type}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                      {t(config.labelKey)}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
