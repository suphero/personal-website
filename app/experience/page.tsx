import { experiences, formatExperienceDate } from "@/lib/experience";

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Experience</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          My professional journey spanning over 12 years in software development
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 transform md:-translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.dateStart}`}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full transform md:-translate-x-1/2 -translate-y-1">
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-blue-600 dark:bg-blue-400 animate-ping opacity-75" />
                )}
              </div>

              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                <div
                  className={`ml-8 md:ml-0 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {formatExperienceDate(exp.dateStart)} -{" "}
                    {exp.current ? "Present" : formatExperienceDate(exp.dateEnd!)}
                    {exp.current && (
                      <span className="ml-2 px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium mb-3 inline-block"
                  >
                    {exp.company} →
                  </a>
                  {exp.description && (
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
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
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Full CV
        </a>
      </div>
    </div>
  );
}
