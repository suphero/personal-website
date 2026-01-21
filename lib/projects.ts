export type Project = {
  title: string;
  description: string;
  tags: string[];
  date: string;
  link?: string;
  github?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Smart Stores",
    description: "Helping stores become smarter with various Shopify applications for inventory management, automation, and analytics",
    tags: ["Web", "Shopify", "E-commerce", "SaaS"],
    date: "2022-06",
    link: "https://smart-stores.net",
    github: "https://github.com/suphero/smart-stores-web",
    featured: true,
  },
  {
    title: "Smart Forecast",
    description: "AI-powered demand forecasting application for retail businesses",
    tags: ["Web", "AI", "Analytics"],
    date: "2022-01",
    featured: true,
  },
  {
    title: "Traffic Detective",
    description: "Traffic violation detection and analysis system using computer vision",
    tags: ["Web", "OpenCV", "Computer Vision"],
    date: "2021-01",
    featured: true,
  },
  {
    title: "Steam Item Manager",
    description: "Advanced Steam inventory management tool for traders and collectors",
    tags: ["Desktop", "Gaming", "Tool"],
    date: "2020-01",
  },
  {
    title: "Speed Corridor",
    description: "Traffic speed monitoring and corridor analysis application",
    tags: ["Web", "Computer Vision", "Analytics"],
    date: "2020-01",
  },
  {
    title: "Porsche Teknik",
    description: "Service management system for Porsche technical service centers",
    tags: ["Web", "Enterprise", "CRM"],
    date: "2019-01",
  },
  {
    title: "Find Your Recipe",
    description: "Recipe discovery app that helps you find recipes based on available ingredients",
    tags: ["Mobile", "Web", "Food"],
    date: "2018-01",
    github: "https://github.com/suphero/find-your-recipe",
  },
  {
    title: "Messagine Bot",
    description: "Multi-platform messaging bot with automation capabilities",
    tags: ["Bot", "Automation", "Messaging"],
    date: "2018-01",
  },
  {
    title: "Corona Stats",
    description: "COVID-19 statistics tracker and visualization dashboard",
    tags: ["Web", "Data Viz", "Healthcare"],
    date: "2020-03",
  },
  {
    title: "Asgari Ücret (Minimum Wage)",
    description: "Turkish minimum wage calculator with historical data and comparisons",
    tags: ["Web", "Tool", "Finance"],
    date: "2019-01",
  },
  {
    title: "Curriculum Vitae Generator",
    description: "Automated CV generation tool with LaTeX templates",
    tags: ["Tool", "LaTeX", "Automation"],
    date: "2017-01",
    github: "https://github.com/suphero/cv",
  },
  {
    title: "Personal Website",
    description: "This portfolio website built with Next.js and TypeScript",
    tags: ["Web", "Next.js", "Portfolio"],
    date: "2024-01",
    link: "https://harunsokullu.com",
    github: "https://github.com/suphero/personal-website",
  },
  {
    title: "Deployment Script Generator",
    description: "Automated deployment script generation for various platforms",
    tags: ["Tool", "DevOps", "Automation"],
    date: "2018-01",
  },
  {
    title: "Common Functions Library",
    description: "Collection of reusable utility functions for .NET projects",
    tags: ["Library", ".NET", "Open Source"],
    date: "2016-01",
  },
  {
    title: "Bye Fails",
    description: "Test failure analysis and tracking tool",
    tags: ["Tool", "Testing", "DevOps"],
    date: "2017-01",
  },
  {
    title: "Automation Suite",
    description: "Collection of automation scripts and tools for daily tasks",
    tags: ["Automation", "Tool", "Productivity"],
    date: "2016-01",
  },
  {
    title: "Google Forms to SQL",
    description: "Tool to export Google Forms responses directly to SQL database",
    tags: ["Tool", "Integration", "Database"],
    date: "2017-01",
  },
  {
    title: "IPTV Manager",
    description: "IPTV playlist manager and player",
    tags: ["Tool", "Media", "Entertainment"],
    date: "2019-01",
  },
  {
    title: "Live Stream Downloader",
    description: "Tool for downloading and archiving live streams",
    tags: ["Tool", "Media", "Automation"],
    date: "2019-01",
  },
  {
    title: "Telegram Tracker",
    description: "Telegram channel and group monitoring tool",
    tags: ["Tool", "Bot", "Monitoring"],
    date: "2020-01",
  },
  {
    title: "Udemy Google Spreadsheet Add-on",
    description: "Google Sheets add-on for tracking Udemy course analytics",
    tags: ["Add-on", "Tool", "Education"],
    date: "2018-01",
  },
  {
    title: "Weglot API Integration",
    description: "API wrapper for Weglot translation service",
    tags: ["Library", "API", "i18n"],
    date: "2020-01",
  },
];
