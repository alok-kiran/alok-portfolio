"use client";

const metrics = [
  { v: "7+",   l: "Years shipping" },
  { v: "−88%", l: "Bundle size cut" },
  { v: "+20%", l: "Revenue lift" },
  { v: "46",   l: "App users live" },
];

const ASCII_BOX = `┌─────────────────────────────┐
│ uptime         07 yrs       │
│ deploys/wk     ~12          │
│ favorite tool  next.js      │
│ favorite db    postgres     │
│ allergies      n+1 queries  │
└─────────────────────────────┘`;

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
                <span style={{ color: "var(--primary)" }}>&quot;sr-software-engineer&quot;</span>;
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

          {/* ── RIGHT ── */}
          <div className="flex flex-col gap-3">
            {/* ASCII system status */}
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                padding: 18,
              }}
            >
              <div
                className="flex justify-between"
                style={{
                  fontSize: 10,
                  color: "var(--muted-foreground)",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  marginBottom: 14,
                }}
              >
                <span>system.status</span>
                <span style={{ color: "var(--primary)" }}>● running</span>
              </div>
              <pre
                style={{
                  fontSize: 11,
                  color: "var(--muted-foreground)",
                  whiteSpace: "pre",
                  lineHeight: 1.5,
                  fontFamily: "var(--font-mono)",
                  margin: 0,
                  overflow: "hidden",
                }}
              >
                {ASCII_BOX}
              </pre>
            </div>

            {/* Stats 2×2 */}
            <div className="grid grid-cols-2 gap-2">
              {metrics.map((m) => (
                <div
                  key={m.l}
                  style={{
                    padding: "14px 16px",
                    border: "1px solid var(--border)",
                    background: "var(--card)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 28,
                      color: "var(--primary)",
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    {m.v}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      color: "var(--muted-foreground)",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      marginTop: 8,
                    }}
                  >
                    {m.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
