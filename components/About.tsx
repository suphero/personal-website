export default function About() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
        <h2 className="text-3xl font-bold mb-6 text-foreground">About Me</h2>
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Hello there! I am <strong className="text-foreground">Harun</strong>, a <strong className="text-foreground">Backend Team Lead</strong> at{" "}
            <a href="https://www.ozan.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Ozan Elektronik Para
            </a>
            , with a strong focus on <strong className="text-foreground">Enterprise Software and Open Source</strong>.
            I earned a <strong className="text-foreground">Telecommunication Engineering</strong> B.Sc. at{" "}
            <a href="http://www.itu.edu.tr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Istanbul Technical University
            </a>.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I love to make my life easier by coding. With over 12 years of professional experience,
            I&apos;ve worked on various enterprise applications, from fleet management systems to banking
            applications, and numerous open-source projects.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I am also into gaming, watching series, and love to research new technologies.
            I like to call myself a <em>beta tester</em> of life.
          </p>
        </div>
      </div>
    </section>
  );
}
