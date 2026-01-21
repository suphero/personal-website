import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">All Projects</h1>
        <p className="text-muted-foreground text-lg">
          A collection of {projects.length} projects I&apos;ve worked on over the years,
          ranging from enterprise applications to open-source tools.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:scale-105 bg-card"
          >
            {project.featured && (
              <span className="inline-block px-2 py-1 text-xs font-semibold bg-primary/10 text-primary rounded mb-2 border border-primary/20">
                Featured
              </span>
            )}
            <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
            <p className="text-muted-foreground mb-4 min-h-[4rem] text-sm">
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
            <div className="flex gap-3 text-sm">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View Live →
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
