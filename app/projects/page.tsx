import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">All Projects</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          A collection of {projects.length} projects I&apos;ve worked on over the years,
          ranging from enterprise applications to open-source tools.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-all hover:scale-105"
          >
            {project.featured && (
              <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded mb-2">
                Featured
              </span>
            )}
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 min-h-[4rem] text-sm">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded"
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
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Live →
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
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
