"use client";

import { useState } from "react";
import Image from "next/image";
import freshcheckImg from "@/assets/images/freshcheck.jpg";
import pixhaulImg from "@/assets/images/pixhaul.jpg";

type Metric = { v: string; l: string };
type Link = { label: string; href: string };

interface Project {
  slug: string;
  name: string;
  year: string;
  status: string;
  platform: string;
  tagline: string;
  problem: string;
  what: string;
  metrics: Metric[];
  tech: string[];
  links: Link[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  imageAlt: string;
}

const projects: Project[] = [
  {
    slug: "01_freshcheck",
    name: "FreshCheck AI",
    year: "2025",
    status: "live",
    platform: "iOS · Android",
    tagline: "Stop throwing money in the trash.",
    problem:
      "30% of groceries go uneaten. The average household loses ~$1,500/year to expired food — because manual tracking takes too long and nobody sustains it past week one.",
    what:
      "Solo-built an AI-powered mobile app that photographs groceries, reads expiry dates across 12 date formats, and sends a three-tier reminder before anything spoils. Includes AI recipe suggestions for at-risk ingredients, a savings dashboard tracking both monetary and CO₂ impact, and barcode + receipt scanning. Shipped design, code, App Store, and Google Play — alone.",
    metrics: [
      { v: "46+", l: "live users" },
      { v: "1,200+", l: "items recognised" },
      { v: "$1,500", l: "avg annual savings" },
      { v: "6×", l: "faster than manual" },
    ],
    tech: ["React Native", "Expo", "TypeScript", "Supabase", "Gemini AI", "RevenueCat"],
    links: [
      { label: "→ website", href: "https://www.freshcheck.shop/" },
    ],
    image: freshcheckImg,
    imageAlt: "FreshCheck app interface",
  },
  {
    slug: "02_pixhaul",
    name: "PixHaul",
    year: "2024",
    status: "live",
    platform: "Web",
    tagline: "Tools should feel like tools.",
    problem:
      "Every online utility demands sign-ups, slaps on watermarks, or silently uploads your files to a server. They turned single-job utilities into growth funnels — hostile by design.",
    what:
      "Built a suite of 11 client-side browser utilities spanning image conversion, PDF editing, QR generation, and data formatting. Every tool runs entirely in your browser — zero server uploads, no account required, no watermarks, no paywalls, no upsells. Built because I kept needing these tools and kept finding the existing options hostile.",
    metrics: [
      { v: "11", l: "utility tools" },
      { v: "0", l: "sign-ups needed" },
      { v: "100%", l: "client-side" },
      { v: "free", l: "forever" },
    ],
    tech: ["Next.js", "TypeScript", "Web APIs", "Canvas API", "Open-source libs"],
    links: [
      { label: "→ launch app", href: "https://pixhaul.com/" },
    ],
    image: pixhaulImg,
    imageAlt: "PixHaul browser tool suite",
  },
];

const btnBase: React.CSSProperties = {
  background: "none",
  border: "1px solid var(--border)",
  color: "var(--muted-foreground)",
  fontSize: 11,
  padding: "6px 14px",
  cursor: "pointer",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  fontFamily: "var(--font-mono)",
  transition: "color 0.15s, border-color 0.15s",
};

export default function Projects() {
  const [idx, setIdx] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (next: number) => {
    if (next === idx || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setIdx(next);
      setAnimating(false);
    }, 180);
  };

  const prev = () => goTo((idx - 1 + projects.length) % projects.length);
  const next = () => goTo((idx + 1) % projects.length);

  const p = projects[idx];

  return (
    <section
      id="projects"
      className="border-b border-border"
      style={{ padding: "64px clamp(16px,4vw,40px)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          className="flex items-baseline gap-4 mb-11"
          style={{ borderBottom: "1px dashed var(--border)", paddingBottom: 14 }}
        >
          <span style={{ color: "var(--primary)", fontSize: 13, fontWeight: 700 }}>[02]</span>
          <span style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.01em" }}>
            live_products/
          </span>
          <span
            className="ml-auto hidden sm:inline"
            style={{ color: "var(--muted-foreground)", fontSize: 11 }}
          >
            // shipped · in production
          </span>
        </div>

        {/* Carousel card */}
        <div style={{ border: "1px solid var(--border)", background: "var(--card)" }}>

          {/* Top bar */}
          <div
            className="flex items-center justify-between"
            style={{
              borderBottom: "1px solid var(--border)",
              padding: "10px clamp(14px,2vw,22px)",
            }}
          >
            <span
              style={{
                fontSize: 10,
                color: "var(--muted-foreground)",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
              }}
            >
              ./{p.slug}
            </span>
            <div className="flex items-center gap-4">
              <span
                style={{
                  fontSize: 10,
                  color: "var(--muted-foreground)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                }}
              >
                {p.platform}
              </span>
              <span
                style={{
                  fontSize: 10,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "var(--foreground)",
                }}
              >
                <span style={{ color: "var(--primary)" }}>●</span> {p.status} · {p.year}
              </span>
            </div>
          </div>

          {/* Main content — stacked: image on top, details below */}
          <div
            style={{
              opacity: animating ? 0 : 1,
              transition: "opacity 180ms ease",
            }}
          >
            {/* Full-width image */}
            <div
              className="relative overflow-hidden"
              style={{
                height: "clamp(200px, 38vw, 420px)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <Image
                src={p.image}
                alt={p.imageAlt}
                fill
                sizes="100vw"
                className="object-cover object-top"
                style={{ filter: "grayscale(10%) contrast(1.02)" }}
              />
              {/* Bottom fade into card */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 45%, #131313 100%)",
                }}
              />
            </div>

            {/* Detail panel — 2 cols on desktop */}
            <div
              className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12"
              style={{ padding: "clamp(20px,3vw,36px)" }}
            >
              {/* Left: name + tagline + problem + what I built */}
              <div>
                <h3
                  style={{
                    fontSize: "clamp(22px,2.5vw,30px)",
                    fontWeight: 700,
                    marginTop: 0,
                    marginBottom: 4,
                    lineHeight: 1.1,
                  }}
                >
                  {p.name}
                </h3>
                <p
                  style={{
                    color: "var(--primary)",
                    fontSize: 14,
                    fontWeight: 600,
                    margin: "0 0 22px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  &ldquo;{p.tagline}&rdquo;
                </p>

                {/* Problem */}
                <div style={{ marginBottom: 20 }}>
                  <div
                    style={{
                      fontSize: 9,
                      color: "var(--muted-foreground)",
                      textTransform: "uppercase",
                      letterSpacing: "0.2em",
                      marginBottom: 8,
                    }}
                  >
                    // the problem
                  </div>
                  <p
                    style={{
                      fontSize: 12.5,
                      color: "var(--muted-foreground)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {p.problem}
                  </p>
                </div>

                {/* What I built */}
                <div>
                  <div
                    style={{
                      fontSize: 9,
                      color: "var(--muted-foreground)",
                      textTransform: "uppercase",
                      letterSpacing: "0.2em",
                      marginBottom: 8,
                    }}
                  >
                    // what i built
                  </div>
                  <p
                    style={{
                      fontSize: 12.5,
                      color: "var(--muted-foreground)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {p.what}
                  </p>
                </div>
              </div>

              {/* Right: metrics + tech + links */}
              <div className="flex flex-col gap-6">
                {/* Metrics 2×2 */}
                <div
                  className="grid grid-cols-2"
                  style={{
                    border: "1px solid var(--border)",
                    background: "var(--border)",
                    gap: 1,
                  }}
                >
                  {p.metrics.map((m) => (
                    <div
                      key={m.l}
                      style={{
                        background: "var(--background)",
                        padding: "14px 12px",
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "clamp(18px,2vw,24px)",
                          fontWeight: 700,
                          color: "var(--primary)",
                          lineHeight: 1,
                          marginBottom: 6,
                        }}
                      >
                        {m.v}
                      </div>
                      <div
                        style={{
                          fontSize: 9,
                          color: "var(--muted-foreground)",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          lineHeight: 1.3,
                        }}
                      >
                        {m.l}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 9,
                        color: "var(--muted-foreground)",
                        border: "1px solid var(--border)",
                        padding: "2px 8px",
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-70 transition-opacity"
                      style={{
                        color: "var(--primary)",
                        fontSize: 12,
                        textDecoration: "none",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation bar */}
          <div
            className="flex items-center justify-between"
            style={{
              borderTop: "1px solid var(--border)",
              padding: "12px clamp(14px,2vw,22px)",
            }}
          >
            <button
              onClick={prev}
              style={btnBase}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color =
                  "var(--foreground)";
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "var(--foreground)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color =
                  "var(--muted-foreground)";
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "var(--border)";
              }}
            >
              ← prev
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to project ${i + 1}`}
                  style={{
                    width: i === idx ? 28 : 8,
                    height: 2,
                    background:
                      i === idx ? "var(--primary)" : "var(--border)",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "width 0.25s ease, background 0.2s ease",
                  }}
                />
              ))}
              <span
                style={{
                  fontSize: 10,
                  color: "var(--muted-foreground)",
                  marginLeft: 10,
                  letterSpacing: "0.12em",
                }}
              >
                0{idx + 1}&nbsp;/&nbsp;0{projects.length}
              </span>
            </div>

            <button
              onClick={next}
              style={btnBase}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color =
                  "var(--foreground)";
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "var(--foreground)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color =
                  "var(--muted-foreground)";
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "var(--border)";
              }}
            >
              next →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
