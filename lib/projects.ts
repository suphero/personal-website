export type ProjectLinkType = "website" | "ios" | "android" | "github" | "shopify" | "telegram" | "chrome";

export type ProjectLink = {
  type: ProjectLinkType;
  url: string;
};

export type ProjectEntry = {
  key: string;
  tags: string[];
  featured?: boolean;
  archived?: boolean;
  links?: ProjectLink[];
};

export const projects: ProjectEntry[] = [
  {
    key: "silencecut",
    tags: ["extension", "youtube", "productivity"],
    links: [
      {
        type: "chrome",
        url: "https://chromewebstore.google.com/detail/pegbadeiflnbmappkiaalpibmebgkhdl",
      },
      { type: "github", url: "https://github.com/suphero/silence-cut" },
    ],
  },
  {
    key: "swipd",
    tags: ["mobile", "shopping", "affiliate"],
    featured: true,
    links: [
      { type: "website", url: "https://swipd.app" },
      { type: "ios", url: "https://apps.apple.com/app/id6748888107" },
      {
        type: "android",
        url: "https://play.google.com/store/apps/details?id=com.suphero.Swipd",
      },
    ],
  },
  {
    key: "wayout",
    tags: ["mobile", "productivity", "wellness"],
    featured: true,
    links: [{ type: "ios", url: "https://apps.apple.com/app/id6756630160" }],
  },
  {
    key: "balano",
    tags: ["mobile", "finance", "productivity"],
    links: [
      { type: "ios", url: "https://apps.apple.com/app/id6755980039" },
      {
        type: "android",
        url: "https://play.google.com/store/apps/details?id=com.suphero.balano",
      },
    ],
  },
  {
    key: "dinkardesim",
    tags: ["mobile", "religion", "productivity"],
    links: [
      { type: "ios", url: "https://apps.apple.com/app/id6755084769" },
      {
        type: "android",
        url: "https://play.google.com/store/apps/details?id=com.suphero.dinkardesim",
      },
    ],
  },
  {
    key: "focusblocker",
    tags: ["extension", "tool", "productivity"],
    links: [
      {
        type: "chrome",
        url: "https://chromewebstore.google.com/detail/hafibifkmnaepcndbbionnhdcgkonmfj",
      },
      { type: "github", url: "https://github.com/suphero/FocusBlocker" },
    ],
  },
  {
    key: "fixit",
    tags: ["web", "ai", "analytics"],
    featured: true,
    links: [
      { type: "shopify", url: "https://apps.shopify.com/smart-forecast" },
    ],
  },
  {
    key: "trafficdetective",
    tags: ["web", "opencv", "computerVision"],
    archived: true,
  },
  {
    key: "personalwebsite",
    tags: ["web", "nextjs", "portfolio"],
    links: [
      { type: "website", url: "https://harunsokullu.com" },
      { type: "github", url: "https://github.com/suphero/personal-website" },
    ],
  },
  {
    key: "steamitemmanager",
    tags: ["desktop", "gaming", "tool"],
    archived: true,
  },
  {
    key: "speedcorridor",
    tags: ["web", "computerVision", "analytics"],
    archived: true,
  },
  {
    key: "porscheteknik",
    tags: ["web", "enterprise", "crm"],
    links: [{ type: "website", url: "https://www.porscheteknik.com/" }],
    archived: true,
  },
  {
    key: "findyourrecipe",
    tags: ["mobile", "web", "food"],
    archived: true,
    links: [
      { type: "github", url: "https://github.com/suphero/find-your-recipe" },
    ],
  },
  {
    key: "messaginebot",
    tags: ["bot", "automation", "messaging"],
    featured: true,
    links: [{ type: "telegram", url: "https://t.me/MessagineBot" }],
  },
  {
    key: "coronastats",
    tags: ["web", "dataViz", "healthcare"],
    archived: true,
  },
  { key: "asgariucret", tags: ["web", "tool", "finance"], archived: true },
  {
    key: "cvgenerator",
    tags: ["tool", "latex", "automation"],
    links: [{ type: "github", url: "https://github.com/suphero/cv" }],
  },
  {
    key: "deploymentscript",
    tags: ["tool", "devops", "automation"],
    archived: true,
  },
  {
    key: "commonfunctions",
    tags: ["library", "dotnet", "openSource"],
    archived: true,
  },
  { key: "byefails", tags: ["tool", "testing", "devops"], archived: true },
  {
    key: "automationsuite",
    tags: ["automation", "tool", "productivity"],
    archived: true,
  },
  {
    key: "googleformstosql",
    tags: ["tool", "integration", "database"],
    archived: true,
  },
  {
    key: "iptvmanager",
    tags: ["tool", "media", "entertainment"],
    archived: true,
  },
  {
    key: "livestreamdownloader",
    tags: ["tool", "media", "automation"],
    archived: true,
  },
  {
    key: "telegramtracker",
    tags: ["tool", "bot", "monitoring"],
    archived: true,
  },
  { key: "udemyaddon", tags: ["addon", "tool", "education"], archived: true },
  { key: "weglotapi", tags: ["library", "api", "i18n"], archived: true },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const activeProjects = projects.filter((p) => !p.archived);
export const archivedProjects = projects.filter((p) => p.archived);
