import Link from "next/link";

const featuredProjects = [
  {
    title: "WayOut",
    description: "Break free from endless scrolling. WayOut is your escape route from screen addiction.",
    tags: ["Mobile", "Productivity", "Wellness"],
    date: "2026-01",
    featured: true,
    link: "/projects",
  },
  {
    title: "Balano",
    description: "Balance management mobile app for personal finance",
    tags: ["Mobile", "Finance", "Productivity"],
    date: "2025-12",
    featured: true,
    link: "/projects",
  },
  {
    title: "Din Kardeşim",
    description: "Mobile app for daily Islamic prayers, Quran, and religious content",
    tags: ["Mobile", "Religion", "Productivity"],
    date: "2025-11",
    featured: true,
    link: "/projects",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2 text-foreground">Featured Projects</h2>
          <p className="text-muted-foreground">Some of my notable work</p>
        </div>
        <Link
          href="/projects"
          className="text-primary hover:underline font-medium"
        >
          View all projects →
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <div
            key={project.title}
            className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow bg-card"
          >
            <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
            <p className="text-muted-foreground mb-4 min-h-[3rem]">
              {project.description}
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
            <div className="flex gap-3">
              <a
                href={project.link}
                target={project.link.startsWith("http") ? "_blank" : undefined}
                rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-primary hover:underline text-sm"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
