export default function About() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Hello there! I am <strong>Harun</strong>, a <strong>Backend Team Lead</strong> at{" "}
            <a href="https://www.ozan.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
              Ozan Elektronik Para
            </a>
            , with a strong focus on <strong>Enterprise Software and Open Source</strong>.
            I earned a <strong>Telecommunication Engineering</strong> B.Sc. at{" "}
            <a href="http://www.itu.edu.tr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
              Istanbul Technical University
            </a>.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
            I love to make my life easier by coding. With over 12 years of professional experience,
            I&apos;ve worked on various enterprise applications, from fleet management systems to banking
            applications, and numerous open-source projects.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
            I am also into gaming, watching series, and love to research new technologies.
            I like to call myself a <em>beta tester</em> of life.
          </p>
        </div>
      </div>
    </section>
  );
}
