import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32 max-w-6xl">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
          <Image
            src="/profile.png"
            alt="Harun Sokullu"
            fill
            className="rounded-full object-cover"
            priority
          />
        </div>

        <div className="flex flex-col space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Hi, I&apos;m <span className="text-primary">Harun Sokullu</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground">
            Backend Team Lead at <a href="https://www.ozan.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ozan Elektronik Para</a>
          </p>

          <p className="text-lg md:text-xl text-muted-foreground">
            12+ years of professional experience in <strong className="text-foreground">Enterprise Software</strong> and <strong className="text-foreground">Open Source</strong>.
            I love to make my life easier by coding.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <Link
              href="/experience"
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors"
            >
              Experience
            </Link>
            <Link
              href="/projects"
              className="px-6 py-3 border border-border hover:bg-accent rounded-lg font-medium transition-colors text-foreground"
            >
              View Projects
            </Link>
            <a
              href="https://github.com/suphero/cv/releases/latest/download/HarunSokullu_en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border hover:bg-accent rounded-lg font-medium transition-colors text-foreground"
            >
              Download CV
            </a>
          </div>

          <div className="flex gap-3 flex-wrap justify-center md:justify-start pt-6 text-sm text-muted-foreground">
            <span className="px-3 py-1 bg-secondary rounded-full">Enterprise Software</span>
            <span className="px-3 py-1 bg-secondary rounded-full">Open Source</span>
            <span className="px-3 py-1 bg-secondary rounded-full">Problem Solving</span>
            <span className="px-3 py-1 bg-secondary rounded-full">Backend Development</span>
          </div>
        </div>
      </div>
    </section>
  );
}
