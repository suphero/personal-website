"use client";

import { useTranslations } from "next-intl";

const projectKeys = [
  { key: "swipd", tags: ["Mobile", "Shopping", "Affiliate"], featured: true },
  { key: "wayout", tags: ["Mobile", "Productivity", "Wellness"], featured: true },
  { key: "balano", tags: ["Mobile", "Finance", "Productivity"], featured: true },
  { key: "dinkardesim", tags: ["Mobile", "Religion", "Productivity"] },
  { key: "smartforecast", tags: ["Web", "AI", "Analytics"] },
  { key: "trafficdetective", tags: ["Web", "OpenCV", "Computer Vision"] },
  { key: "steamitemmanager", tags: ["Desktop", "Gaming", "Tool"] },
  { key: "speedcorridor", tags: ["Web", "Computer Vision", "Analytics"] },
  { key: "porscheteknik", tags: ["Web", "Enterprise", "CRM"] },
  { key: "findyourrecipe", tags: ["Mobile", "Web", "Food"], github: "https://github.com/suphero/find-your-recipe" },
  { key: "messaginebot", tags: ["Bot", "Automation", "Messaging"] },
  { key: "coronastats", tags: ["Web", "Data Viz", "Healthcare"] },
  { key: "asgariucret", tags: ["Web", "Tool", "Finance"] },
  { key: "cvgenerator", tags: ["Tool", "LaTeX", "Automation"], github: "https://github.com/suphero/cv" },
  { key: "personalwebsite", tags: ["Web", "Next.js", "Portfolio"], link: "https://harunsokullu.com", github: "https://github.com/suphero/personal-website" },
  { key: "deploymentscript", tags: ["Tool", "DevOps", "Automation"] },
  { key: "commonfunctions", tags: ["Library", ".NET", "Open Source"] },
  { key: "byefails", tags: ["Tool", "Testing", "DevOps"] },
  { key: "automationsuite", tags: ["Automation", "Tool", "Productivity"] },
  { key: "googleformstosql", tags: ["Tool", "Integration", "Database"] },
  { key: "iptvmanager", tags: ["Tool", "Media", "Entertainment"] },
  { key: "livestreamdownloader", tags: ["Tool", "Media", "Automation"] },
  { key: "telegramtracker", tags: ["Tool", "Bot", "Monitoring"] },
  { key: "udemyaddon", tags: ["Add-on", "Tool", "Education"] },
  { key: "weglotapi", tags: ["Library", "API", "i18n"] },
];

export default function ProjectsPage() {
  const t = useTranslations();

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">{t("projectsPage.title")}</h1>
        <p className="text-muted-foreground text-lg">
          {t("projectsPage.description", { count: projectKeys.length })}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectKeys.map((project) => (
          <div
            key={project.key}
            className="border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:scale-105 bg-card"
          >
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
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3 text-sm">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {t("projectsPage.viewLive")}
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  {t("projectsPage.github")}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
