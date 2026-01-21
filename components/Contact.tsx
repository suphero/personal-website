import { Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-foreground">Get In Touch</h2>
        <p className="text-muted-foreground mb-8">
          Interested in collaborating or have a question? Feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/suphero"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-border hover:bg-accent rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2 text-foreground"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/suphero"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
