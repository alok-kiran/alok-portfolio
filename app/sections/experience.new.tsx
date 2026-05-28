"use client";

import React from "react";

const experience = [
  {
    role: "Senior Software Engineer",
    roleNote: null,
    org: "Como",
    orgTag: "acquired · Global Payments (GPN:NYSE)",
    orgUrl: "https://www.comosense.com/",
    from: "Sep 2025",
    to: "Present",
    where: "Dubai, UAE",
    current: true,
    bullets: [
      "Cut Next.js page bundle sizes by 88% via server-component migration, aggressive code splitting, and asset pipeline rework.",
      "Architected a multi-language merchant dashboard supporting 15+ locales, contributing to 20% expansion in global merchant base.",
      "Led WhatsApp Business API integration, automating high-volume customer communication flows across 12+ markets.",
    ],
    tech: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Kubernetes"],
  },
  {
    role: "Software Engineer",
    roleNote: null,
    org: "Como",
    orgTag: "acquired · Global Payments (GPN:NYSE)",
    orgUrl: "https://www.comosense.com/",
    from: "Dec 2022",
    to: "Sep 2025",
    where: "Dubai, UAE",
    current: false,
    bullets: [
      "Delivered merchant-facing loyalty features end-to-end — from design handoff to production deployment — across the core platform.",
      "Migrated shared UI components to TypeScript strict-mode, improving type safety and reducing runtime errors across the frontend codebase.",
      "Integrated third-party payment and analytics SDKs enabling new merchant revenue streams across MENA markets.",
      "Established front-end performance baselines and monitoring practices that laid the groundwork for the 88% bundle-size reduction achieved post-promotion.",
    ],
    tech: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    role: "Software Engineer",
    roleNote: null,
    org: "Invygo Tech LLC",
    orgTag: "car subscription · Series A",
    orgUrl: "https://www.invygo.com/",
    from: "Jun 2019",
    to: "Nov 2022",
    where: "Dubai, UAE",
    current: false,
    bullets: [
      "Built and maintained the Invygo mobile app (React Native) serving thousands of car subscription customers across UAE and Saudi Arabia.",
      "Reduced component build time by 75% by introducing atomic design patterns with a Storybook component library.",
      "Cut support ticket volume by 88% by engineering a real-time driver tracking system with sub-second location updates.",
    ],
    tech: ["React Native", "JavaScript", "Node.js", "MongoDB", "Google Maps API"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-border"
      style={{ padding: "64px clamp(16px,4vw,40px)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          className="flex items-baseline gap-4 mb-11"
          style={{ borderBottom: "1px dashed var(--border)", paddingBottom: 14 }}
        >
          <span style={{ color: "var(--primary)", fontSize: 13, fontWeight: 700 }}>[04]</span>
          <span style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.01em" }}>
            git log --career
          </span>
          <span
            className="ml-auto hidden sm:inline"
            style={{ color: "var(--muted-foreground)", fontSize: 11 }}
          >
            // recent commits
          </span>
        </div>

        <div>
          {experience.map((e, i) => (
            <React.Fragment key={`${e.org}-${e.role}`}>
              {/* Promotion connector between consecutive same-company roles */}
              {i > 0 && experience[i - 1].org === e.org && (
                <div
                  className="flex items-center gap-3"
                  style={{ padding: "2px 0 2px 0" }}
                >
                  <div
                    style={{
                      width: 2,
                      height: 28,
                      background: "var(--primary)",
                      flexShrink: 0,
                      marginLeft: 1,
                      opacity: 0.7,
                    }}
                  />
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span
                      style={{
                        fontSize: 10,
                        color: "var(--primary)",
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        fontWeight: 700,
                      }}
                    >
                      ↑ promoted within {e.org}
                    </span>
                    <span style={{ fontSize: 10, color: "var(--muted-foreground)", letterSpacing: "0.1em" }}>
                      · {experience[i - 1].from}
                    </span>
                  </div>
                  <div style={{ flex: 1, height: 1, background: "var(--border)", opacity: 0.5 }} />
                </div>
              )}

              <div
                className="grid grid-cols-1 lg:grid-cols-[200px_1fr_160px] gap-4 lg:gap-8"
                style={{
                  padding: "22px 0",
                  borderTop: i > 0 && experience[i - 1].org === e.org
                    ? "none"
                    : "1px solid var(--border)",
                }}
              >
                {/* When */}
                <div style={{ fontSize: 12, color: "var(--muted-foreground)" }}>
                  <span
                    style={{
                      color: "var(--foreground)",
                      display: "block",
                      marginBottom: 4,
                      fontWeight: 500,
                    }}
                  >
                    {e.from} → {e.to}
                  </span>
                  <span style={{ color: e.current ? "var(--primary)" : "var(--muted-foreground)" }}>
                    {e.current ? "● HEAD" : "○ tag"}
                  </span>
                </div>

                {/* Main */}
                <div>
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      marginBottom: 2,
                      lineHeight: 1.2,
                    }}
                  >
                    {e.role}
                  </div>
                  <a
                    href={e.orgUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "var(--primary)",
                      fontSize: 13,
                      textDecoration: "none",
                      display: "block",
                      marginBottom: 14,
                    }}
                  >
                    @{e.org}
                    <span style={{ color: "var(--muted-foreground)", marginLeft: 8, fontSize: 11 }}>
                      // {e.orgTag}
                    </span>
                  </a>

                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    {e.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "18px 1fr",
                          color: "var(--muted-foreground)",
                          fontSize: 12.5,
                          lineHeight: 1.65,
                        }}
                      >
                        <span style={{ color: "var(--primary)" }}>→</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className="flex flex-wrap gap-2 mt-4"
                    style={{
                      fontSize: 10,
                      color: "var(--muted-foreground)",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {e.tech.map((t) => (
                      <span
                        key={t}
                        style={{ padding: "2px 6px", border: "1px solid var(--border)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Side */}
                <div
                  className="hidden lg:block"
                  style={{
                    fontSize: 10,
                    color: "var(--muted-foreground)",
                    textTransform: "uppercase",
                    letterSpacing: "0.18em",
                    textAlign: "right",
                  }}
                >
                  <div>{e.where}</div>
                  <div style={{ marginTop: 8, opacity: 0.5 }}>
                    commit · {(e.from + e.to).replace(/\W/g, "").slice(0, 7).toLowerCase()}
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </div>
    </section>
  );
}
