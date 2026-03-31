const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
  "Tailwind CSS",
  "React Native",
  "Redis",
  "Git",
  "Python",
  "Kubernetes",
  "GraphQL",
];

export default function TechMarquee() {
  const items = [...techStack, ...techStack];

  return (
    <section id="tech" className="py-20 bg-card/50 overflow-hidden">
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex whitespace-nowrap animate-marquee">
          {items.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className={`text-4xl font-black uppercase tracking-widest font-heading mx-6 ${
                tech === "PostgreSQL" || tech === "Tailwind CSS"
                  ? "text-obsidian/30"
                  : "text-muted-foreground/20"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
