"use client";

const expertise = [
  {
    area: "frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind", "shadcn/ui"],
    inline: false,
  },
  {
    area: "backend",
    items: ["Node.js", "Hono.js", "C# / .NET", "PostgreSQL", "RabbitMQ", "AWS"],
    inline: false,
  },
  {
    area: "mobile",
    items: ["React Native", "Expo", "Apple Pay", "Capacitor", "Push Notifications"],
    inline: false,
  },
  {
    area: "ai / llm",
    items: ["Claude API", "Gemini", "OpenAI", "MCP Servers", "Tool Use", "Agentic AI"],
    inline: false,
  },
  {
    area: "devops & ci/cd",
    items: ["GitHub Actions", "Jenkins", "Docker", "Codemagic", "Bitrise", "CodePush"],
    inline: true,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="border-b border-border"
      style={{ padding: "clamp(40px,6vw,72px) clamp(16px,4vw,40px) clamp(32px,4vw,56px)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-start">

          {/* ── LEFT ── */}
          <div>
            <div
              style={{
                fontSize: 11,
                color: "var(--muted-foreground)",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                marginBottom: 18,
              }}
            >
              $ whoami
              <span className="cursor-blink" style={{ color: "var(--primary)" }} />
            </div>

            <h1
              style={{
                fontWeight: 700,
                fontSize: "clamp(36px,5vw,64px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "var(--foreground)",
                margin: 0,
              }}
            >
              Alok Kiran
              <br />
              <span style={{ color: "var(--muted-foreground)" }}>// </span>
              <span style={{ color: "var(--primary)" }}>full_stack.engineer()</span>
            </h1>

            <div
              style={{
                marginTop: 28,
                color: "var(--muted-foreground)",
                fontSize: 13.5,
                lineHeight: 1.8,
                maxWidth: "56ch",
              }}
            >
              <div>
                <span style={{ color: "var(--foreground)", fontWeight: 500 }}>const role</span>
                {" = "}
                <span style={{ color: "var(--primary)" }}>&quot;senior-software-engineer&quot;</span>;
              </div>
              <div>
                <span style={{ color: "var(--foreground)", fontWeight: 500 }}>const yoe</span>
                {"  = "}
                <span style={{ color: "var(--primary)" }}>7</span>;
              </div>
              <div style={{ marginBottom: 14 }}>
                <span style={{ color: "var(--foreground)", fontWeight: 500 }}>const stack</span>
                {" = ["}
                <span style={{ color: "var(--primary)" }}>&quot;typescript&quot;</span>
                {", "}
                <span style={{ color: "var(--primary)" }}>&quot;react&quot;</span>
                {", "}
                <span style={{ color: "var(--primary)" }}>&quot;next&quot;</span>
                {", "}
                <span style={{ color: "var(--primary)" }}>&quot;llms&quot;</span>
                {"];"}
              </div>
              <p style={{ margin: 0 }}>
                I build production-grade products end-to-end — from React and Next.js web apps to
                React Native mobile experiences and LLM-powered tools. Shipping at scale across
                Dubai-based startups and Fortune-500 payment infrastructure.
              </p>
            </div>

            <div
              className="flex flex-wrap gap-5 mt-7"
              style={{
                fontSize: 11,
                color: "var(--muted-foreground)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
              }}
            >
              <span>
                <span style={{ color: "var(--primary)", fontWeight: 600 }}>Dubai, UAE</span> · UTC+4
              </span>
              <span>
                <span style={{ color: "var(--primary)", fontWeight: 600 }}>IIT</span> Ropar CS &apos;19
              </span>
              <span>
                <span style={{ color: "var(--primary)", fontWeight: 600 }}>status</span>: consulting-welcome
              </span>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#projects"
                style={{
                  background: "var(--primary)",
                  color: "var(--background)",
                  padding: "10px 22px",
                  fontSize: 12,
                  fontWeight: 700,
                  textDecoration: "none",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  display: "inline-block",
                }}
              >
                ./view_work ↗
              </a>
              <a
                href="#contact"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--muted-foreground)",
                  padding: "10px 22px",
                  fontSize: 12,
                  fontWeight: 700,
                  textDecoration: "none",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  display: "inline-block",
                }}
              >
                ./contact
              </a>
            </div>
          </div>

          {/* ── RIGHT — expertise grid ── */}
          <div>
            <div
              style={{
                fontSize: 10,
                color: "var(--muted-foreground)",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                marginBottom: 14,
              }}
            >
              $ ls ./expertise
            </div>

            {/* 2×2 grid + full-width devops strip */}
            <div
              className="grid grid-cols-2"
              style={{
                border: "1px solid var(--border)",
                background: "var(--border)",
                gap: 1,
              }}
            >
              {/* First 4 domains — 2×2 */}
              {expertise.slice(0, 4).map((e) => (
                <div
                  key={e.area}
                  style={{ background: "var(--card)", padding: "16px 18px" }}
                >
                  <div
                    style={{
                      fontSize: 9,
                      color: "var(--primary)",
                      textTransform: "uppercase",
                      letterSpacing: "0.18em",
                      fontWeight: 700,
                      marginBottom: 10,
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <span style={{ opacity: 0.5 }}>▸</span>
                    {e.area}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    {e.items.map((item) => (
                      <span
                        key={item}
                        style={{ fontSize: 11.5, color: "var(--muted-foreground)", lineHeight: 1 }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {/* DevOps — full-width strip */}
              <div
                className="col-span-2"
                style={{ background: "var(--card)", padding: "14px 18px" }}
              >
                <div
                  style={{
                    fontSize: 9,
                    color: "var(--primary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.18em",
                    fontWeight: 700,
                    marginBottom: 10,
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <span style={{ opacity: 0.5 }}>▸</span>
                  {expertise[4].area}
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {expertise[4].items.map((item) => (
                    <span
                      key={item}
                      style={{ fontSize: 11.5, color: "var(--muted-foreground)", lineHeight: 1 }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
