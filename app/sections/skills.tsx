"use client";

const capabilities = [
  {
    n: "01",
    t: "Full-Stack Development",
    d: "End-to-end product engineering: React, Next.js App Router, TypeScript, Hono.js, shadcn/ui. REST and GraphQL APIs, server components by default, real-time where it earns its keep.",
  },
  {
    n: "02",
    t: "Mobile Engineering",
    d: "Cross-platform iOS and Android with React Native and Expo — design token to App Store. Apple Pay, Stripe, push notifications, Capacitor WebViews, and payment gateway integrations shipped to production.",
  },
  {
    n: "03",
    t: "AI / LLM Engineering",
    d: "Production AI across Claude, Gemini, and OpenAI: tool use, prompt caching, MCP servers, agentic workflows. Bulk generation pipelines via Bull Queue, multimodal inputs, and structured output at scale.",
  },
  {
    n: "04",
    t: "Scalable Architecture",
    d: "Microservices and event-driven systems built to grow — RabbitMQ message queues, API gateway patterns, distributed tracing. Comfortable moving between monolith and micro when the cost demands it.",
  },
  {
    n: "05",
    t: "DevOps & CI/CD",
    d: "Automated delivery pipelines via GitHub Actions and Jenkins. Mobile CI with Codemagic and Bitrise. React Native OTA updates via CodePush. Infrastructure as YAML — repeatable, auditable, fast.",
  },
  {
    n: "06",
    t: "Cloud & Infrastructure",
    d: "AWS (S3, EC2, Lambda), Supabase, Vercel — right-sized managed services vs. Lambda-thin. Containerised workloads on Docker and Kubernetes. Distributed video rendering averaging 15s on Lambda.",
  },
];

const stack = [
  "TypeScript",    "React",          "Next.js",       "Hono.js",
  "Node.js",       "C# / .NET",      "React Native",  "Expo",
  "PostgreSQL",    "RabbitMQ",       "AWS",           "Supabase",
  "Docker",        "Kubernetes",     "Claude API",    "Gemini",
  "OpenAI",        "shadcn/ui",      "Tailwind CSS",  "GitHub Actions",
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

        {/* Capabilities grid */}
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
                padding: "13px 18px",
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
