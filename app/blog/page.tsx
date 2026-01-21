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
        <h1 className="text-4xl font-bold mb-4 text-foreground">Blog</h1>
        <p className="text-muted-foreground text-lg">
          Thoughts on software development, team leadership, and technology
        </p>
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow bg-card"
          >
            <div className="text-sm text-muted-foreground mb-2">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <h2 className="text-2xl font-bold mb-2 text-foreground hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="text-muted-foreground mb-4">{post.description}</p>
            <span className="text-primary hover:underline cursor-pointer">
              Read more →
            </span>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center text-muted-foreground">
        <p>More articles coming soon...</p>
      </div>
    </div>
  );
}
