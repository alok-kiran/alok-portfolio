"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Como",
    companyNote: "Acquired by Global Payments GPN:NYSE",
    url: "https://www.comosense.com/",
    dates: "Dec 2022 - Present",
    location: "Dubai, UAE",
    isCurrent: true,
    achievements: [
      "Engineered 88% reduction in Next.js page sizes through aggressive code splitting and asset optimization.",
      "Architected a multi-language dashboard system leading to 20% growth in global business footprint.",
      "Lead integration of WhatsApp Business features, automating customer communication flows.",
    ],
    metrics: [
      { label: "Impact", value: "-88% Size" },
      { label: "Growth", value: "+20% Rev" },
    ],
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    title: "Software Engineer",
    company: "Invygo Tech LLC",
    url: "https://www.invygo.com/",
    dates: "June 2019 - Nov 2022",
    location: "Dubai, UAE",
    isCurrent: false,
    achievements: [
      "Achieved 75% build time reduction by implementing atomic design patterns with Storybook.",
      "Reduced support volume by 88% via implementation of high-accuracy live driver tracking systems.",
    ],
    metrics: [
      { label: "Efficiency", value: "-75% Build" },
      { label: "Support", value: "-88% Tickets" },
    ],
    tech: [
      "React Native",
      "JavaScript",
      "Node.js",
      "MongoDB",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-8 py-24">
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-8 h-px bg-obsidian" />
          <span className="text-[11px] uppercase tracking-[0.4em] text-obsidian font-bold">
            Career Journey
          </span>
          <span className="w-8 h-px bg-obsidian" />
        </div>
        <h2 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight">
          Work <span className="text-obsidian">Experience</span>
        </h2>
      </motion.div>

      <div className="relative ml-4 md:ml-8">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border/20" />

        <div className="space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            className="relative pl-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            {/* Timeline dot — centered on the line */}
            <div
              className={`absolute left-0 top-1.5 w-4 h-4 rounded-full -translate-x-[calc(50%-1px)] ${
                exp.isCurrent
                  ? "bg-obsidian shadow-[0_0_15px_var(--obsidian-accent)]"
                  : "bg-muted-foreground border-4 border-background"
              }`}
            />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
              <h3 className="text-2xl font-bold font-heading">{exp.title}</h3>
              <span
                className={`font-bold text-sm px-3 py-1 rounded font-heading ${
                  exp.isCurrent
                    ? "text-obsidian bg-obsidian/10"
                    : "text-muted-foreground bg-card"
                }`}
              >
                {exp.dates}
              </span>
            </div>

            <a
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground font-medium text-lg mb-6 block font-heading hover:text-obsidian transition-colors"
            >
              {exp.company}
              {exp.companyNote && (
                <span className="text-muted-foreground text-sm ml-2">
                  ({exp.companyNote})
                </span>
              )}
            </a>

            <ul className="space-y-4 text-muted-foreground leading-relaxed">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className={`material-symbols-outlined text-lg mt-1 ${
                      exp.isCurrent ? "text-obsidian" : "text-muted-foreground"
                    }`}
                  >
                    check_circle
                  </span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 mt-8">
              {exp.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="px-4 py-2 bg-card rounded-xl border border-border/10"
                >
                  <span className="block text-[10px] uppercase text-muted-foreground mb-1 font-mono">
                    {metric.label}
                  </span>
                  <span
                    className={`font-bold ${
                      exp.isCurrent ? "text-obsidian" : "text-foreground"
                    }`}
                  >
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}
