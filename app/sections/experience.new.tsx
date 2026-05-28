"use client";

import React from "react";

const experience = [
  {
    role: "Senior Software Engineer",
    org: "Como",
    orgTag: "loyalty SaaS · acquired by Global Payments (NYSE: GPN)",
    orgUrl: "https://www.comosense.com/",
    from: "Sep 2025",
    to: "Present",
    where: "Dubai, UAE",
    current: true,
    bullets: [
      "Sole ownership of the React Native mobile app end-to-end — requirement gathering, architecture decisions, solutioning for junior engineers, code review, and production deployments.",
      "Optimised per-page bundle sizes across the customer portal, cutting average page weight by ~55% and improving LCP across all major routes.",
      "Upgraded the customer portal from Next.js 13 → 15 (App Router + Turbopack), reducing cold build time by ~40% and setting a maintainable baseline for the team.",
      "Architected a multi-tenant WhatsApp campaign service in C# via Unifonic — supports OTP delivery, image campaigns, and promotional offers with deep links across 12+ business accounts.",
      "Built a C# integration layer exposing Como's loyalty engine to third-party platforms — partner apps can query user points, credits, purchases, and gifts via API without onboarding to the main product, opening a new B2B revenue channel for Como.",
    ],
    tech: ["React Native", "Next.js 15", "TypeScript", "C# / .NET", "Unifonic", "Docker", "Kubernetes"],
  },
  {
    role: "Software Engineer",
    org: "Como",
    orgTag: "loyalty SaaS · acquired by Global Payments (NYSE: GPN)",
    orgUrl: "https://www.comosense.com/",
    from: "Dec 2022",
    to: "Sep 2025",
    where: "Dubai, UAE",
    current: false,
    bullets: [
      "Upgraded React Native from 0.66 → 0.77 — migrated entire codebase from class to functional components, eliminating lifecycle-related bug classes and unblocking the full modern hooks ecosystem.",
      "Introduced React Hook Form across the mobile app, cutting form boilerplate by ~60% and halving the time to ship new form screens.",
      "Added i18n to the customer portal (web) via i18next with server-fetched translation keys — eliminated app store resubmissions for copy changes and enabled same-day text updates across 5+ locales.",
      "Built the merchant onboarding platform from scratch (Next.js + Tailwind + C#) — reduced business setup time from days to under an hour.",
      "Re-architected the mobile catalog to support unlimited nesting depth, replacing a fixed 2-level structure — unblocked restaurant and retail clients with complex multi-tier menu hierarchies.",
      "Implemented push notifications with deep linking from scratch, enabling campaigns to route users directly to deeply nested app screens — increased 7-day reactivation rate by ~25%.",
    ],
    tech: ["React Native", "Next.js", "TypeScript", "i18next", "React Hook Form", "Tailwind CSS", "C# / .NET"],
  },
  {
    role: "Software Engineer",
    org: "Invygo Tech LLC",
    orgTag: "car subscription · Series A · UAE & KSA",
    orgUrl: "https://www.invygo.com/",
    from: "Jun 2019",
    to: "Nov 2022",
    where: "Dubai, UAE",
    current: false,
    bullets: [
      "Co-engineered the full Invygo app rebrand from scratch in a 3-person team — redesigned architecture and UI end-to-end, shipping a smooth modern experience to the App Store and Google Play.",
      "Built an operations dashboard giving the customer-service team a full booking lifecycle view (request → dealer accepted → in progress → return → completed) — cut average support resolution time by ~35%.",
      "Integrated Customer.io as the CRM layer — enabled segmented drip campaigns and A/B testing across multiple channels, improving retention campaign engagement.",
      "Integrated Freshdesk for the support team, replacing ad-hoc email tracking with structured ticketing and reducing manual triage overhead by ~30%.",
      "Integrated ZIWO calling suite into the CS workflow, consolidating outbound call tooling and reducing per-call setup time.",
      "Integrated Intercom live chat, adding a direct in-app support channel and reducing first-contact response time.",
      "Built the in-app invoices and payments screen — users could view and settle subscription costs, Salik charges, and traffic fines directly in the app, eliminating the need for external payment channels.",
    ],
    tech: ["React Native", "TypeScript", "Node.js", "Customer.io", "Freshdesk", "ZIWO", "Intercom", "Stripe"],
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
                  borderTop:
                    i > 0 && experience[i - 1].org === e.org
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
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {e.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          padding: "3px 8px",
                          border: "1px solid var(--primary)",
                          color: "var(--primary)",
                          opacity: 0.85,
                        }}
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
