"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown, ChevronRight } from "lucide-react";
import { linkConfig } from "@/components/ProjectLinkIcons";
import { type ProjectEntry, projects, activeProjects, archivedProjects } from "@/lib/projects";

function ProjectCard({ project, t }: { project: ProjectEntry; t: ReturnType<typeof useTranslations> }) {
  return (
    <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:scale-105 bg-card">
      {project.featured && (
        <span className="inline-block px-2 py-1 text-xs font-semibold bg-primary/10 text-primary rounded mb-2 border border-primary/20">
          {t("projectsPage.featured")}
        </span>
      )}
      <h3 className="text-xl font-semibold mb-2 text-foreground">
        {t(`projects.${project.key}.title`)}
      </h3>
      <p className="text-muted-foreground mb-4 min-h-[4rem] text-sm">
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
  );
}

export default function ProjectsPage() {
  const t = useTranslations();
  const [showArchived, setShowArchived] = useState(false);

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">{t("projectsPage.title")}</h1>
        <p className="text-muted-foreground text-lg">
          {t("projectsPage.description", { count: projects.length })}
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">
          {t("projectsPage.activeProjects")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeProjects.map((project) => (
            <ProjectCard key={project.key} project={project} t={t} />
          ))}
        </div>
      </section>

      <section>
        <button
          onClick={() => setShowArchived(!showArchived)}
          className="flex items-center gap-2 text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors mb-6 cursor-pointer"
        >
          {showArchived ? (
            <ChevronDown className="h-5 w-5" />
          ) : (
            <ChevronRight className="h-5 w-5" />
          )}
          {showArchived
            ? t("projectsPage.hideArchived")
            : t("projectsPage.showArchived", { count: archivedProjects.length })}
        </button>

        {showArchived && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {archivedProjects.map((project) => (
              <ProjectCard key={project.key} project={project} t={t} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
