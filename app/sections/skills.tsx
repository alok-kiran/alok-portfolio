"use client";

const capabilities = [
  {
    n: "01",
    t: "Full-Stack Development",
    d: "End-to-end product engineering across React 19, Next.js App Router, TypeScript strict-mode, and Node.js. Server components by default, real-time APIs without the latency tax.",
  },
  {
    n: "02",
    t: "Mobile Engineering",
    d: "Cross-platform iOS and Android with React Native and Expo — from design token to App Store approval. FreshCheck: design → code → deployment, solo, 46 live users.",
  },
  {
    n: "03",
    t: "AI / LLM Engineering",
    d: "Integrating LLMs into production: Gemini 2.5 Flash for structured output, Claude Sonnet for prompt caching, agent patterns, tool use, and multimodal pipelines.",
  },
  {
    n: "04",
    t: "Performance Ops",
    d: "Delivered 88% reduction in Next.js bundle sizes via server-component migration and aggressive code splitting. Every byte and millisecond tracked.",
  },
  {
    n: "05",
    t: "Scalable Architecture",
    d: "Systems designed to grow without breaking — microservices, Docker, Kubernetes, and the discipline to avoid premature complexity until the cost demands it.",
  },
  {
    n: "06",
    t: "Cloud & Infrastructure",
    d: "AWS Lambda, S3, Vercel, Supabase — choosing the right managed service vs. keeping it Lambda-thin. Distributed video rendering at 15s average on AWS Lambda.",
  },
];

const stack = [
  "TypeScript",  "React",        "Next.js",     "Node.js",
  "React Native","Expo",         "PostgreSQL",  "AWS Lambda",
  "Supabase",    "Gemini AI",    "Claude API",  "Docker",
  "Kubernetes",  "GraphQL",      "Tailwind CSS","Remotion",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-b border-border"
      style={{ padding: "64px clamp(16px,4vw,40px)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          className="flex items-baseline gap-4 mb-11"
          style={{ borderBottom: "1px dashed var(--border)", paddingBottom: 14 }}
        >
          <span style={{ color: "var(--primary)", fontSize: 13, fontWeight: 700 }}>[03]</span>
          <span style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.01em" }}>
            capabilities.json
          </span>
          <span
            className="ml-auto hidden sm:inline"
            style={{ color: "var(--muted-foreground)", fontSize: 11 }}
          >
            // stack &amp; focus areas
          </span>
        </div>

        {/* Capabilities — gap-px grid trick for clean cell borders at any col count */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10"
          style={{ border: "1px solid var(--border)", background: "var(--border)", gap: 1 }}
        >
          {capabilities.map((cap) => (
            <div
              key={cap.n}
              style={{ background: "var(--background)", padding: "20px 22px" }}
            >
              <div
                style={{
                  fontSize: 10,
                  color: "var(--primary)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  marginBottom: 10,
                }}
              >
                {cap.n}
              </div>
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  marginBottom: 8,
                  marginTop: 0,
                  lineHeight: 1.2,
                }}
              >
                {cap.t}
              </h3>
              <p
                style={{
                  fontSize: 12,
                  color: "var(--muted-foreground)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {cap.d}
              </p>
            </div>
          ))}
        </div>

        {/* Tech stack grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4"
          style={{ border: "1px solid var(--border)", background: "var(--border)", gap: 1 }}
        >
          {stack.map((s) => (
            <div
              key={s}
              style={{
                background: "var(--background)",
                padding: "15px 18px",
                fontSize: 12,
                color: "var(--foreground)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ color: "var(--primary)", fontSize: 10 }}>▸</span>
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
