import { experiences, formatExperienceDate } from "@/lib/experience";
import { Download } from "lucide-react";

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Experience</h1>
        <p className="text-muted-foreground text-lg">
          My professional journey spanning over 12 years in software development
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.dateStart}`}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 -translate-y-1 border-2 border-background">
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                )}
              </div>

              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                <div
                  className={`ml-8 md:ml-0 bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className="text-sm text-primary font-medium mb-2">
                    {formatExperienceDate(exp.dateStart)} -{" "}
                    {exp.current ? "Present" : formatExperienceDate(exp.dateEnd!)}
                    {exp.current && (
                      <span className="ml-2 px-2 py-0.5 bg-primary/10 text-primary rounded text-xs border border-primary/20">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-foreground">{exp.title}</h3>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary font-medium mb-3 inline-block"
                  >
                    {exp.company} →
                  </a>
                  {exp.description && (
                    <p className="text-muted-foreground text-sm mt-2">
                      {exp.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <a
          href="https://github.com/suphero/cv/releases/latest/download/HarunSokullu_en.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors"
        >
          <Download className="w-5 h-5" />
          Download Full CV
        </a>
      </div>
    </div>
  );
}
