export default function BlogPage() {
  const posts = [
    {
      title: "Effective Daily Scrum",
      description: "Best practices for running effective daily scrum meetings that actually help the team",
      date: "2021-05-15",
      slug: "effective-daily-scrum",
    },
    {
      title: "Increasing Sales Through Technology",
      description: "How technology and automation can significantly boost business sales",
      date: "2020-08-20",
      slug: "increasing-sales",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Thoughts on software development, team leadership, and technology
        </p>
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <h2 className="text-2xl font-bold mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{post.description}</p>
            <span className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
              Read more →
            </span>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
        <p>More articles coming soon...</p>
      </div>
    </div>
  );
}
