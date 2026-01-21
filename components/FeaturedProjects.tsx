import Link from "next/link";

const featuredProjects = [
  {
    title: "Smart Stores",
    description: "Helping stores become smarter with Shopify applications",
    tags: ["Web", "Shopify", "E-commerce"],
    link: "https://smart-stores.net",
    github: "https://github.com/suphero/smart-stores-web",
  },
  {
    title: "Traffic Detective",
    description: "Traffic violation detection and analysis system",
    tags: ["Web", "OpenCV", "Computer Vision"],
    link: "/projects",
    github: null,
  },
  {
    title: "Steam Item Manager",
    description: "Advanced Steam inventory management tool",
    tags: ["Desktop", "Gaming", "Tool"],
    link: "/projects",
    github: null,
  },
];

export default function FeaturedProjects() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400">Some of my notable work</p>
        </div>
        <Link
          href="/projects"
          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          View all projects →
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <div
            key={project.title}
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 min-h-[3rem]">
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
            <div className="flex gap-3">
              <a
                href={project.link}
                target={project.link.startsWith("http") ? "_blank" : undefined}
                rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                View Project
              </a>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
