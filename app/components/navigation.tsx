"use client";

import { useState } from "react";

const navItems = [
  { name: "portfolio", href: "#projects" },
  { name: "career", href: "#experience" },
  { name: "contact", href: "#contact" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-border"
      style={{ background: "var(--background)", fontFamily: "var(--font-mono)" }}
    >
      <div
        className="flex items-center justify-between px-6"
        style={{ fontSize: 12, height: 46 }}
      >
        <div className="flex items-center gap-4 min-w-0">
          <span
            className="shrink-0 w-2 h-2 rounded-full"
            style={{
              background: "var(--primary)",
              boxShadow: "0 0 8px var(--primary)",
            }}
          />
          <span style={{ color: "var(--primary)", fontWeight: 600, whiteSpace: "nowrap" }}>
            ❯ alok@dxb:~$
            <span className="cursor-blink" style={{ color: "var(--primary)" }} />
          </span>
          <nav className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-primary transition-colors duration-150"
                style={{ color: "var(--muted-foreground)", textDecoration: "none" }}
              >
                <span style={{ opacity: 0.45 }}>~/</span>
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4" style={{ fontSize: 11 }}>
          <span className="hidden sm:inline" style={{ color: "var(--muted-foreground)" }}>
            v2026.05
          </span>
          <span style={{ color: "var(--primary)" }}>● online</span>
          <button
            className="md:hidden p-1 text-lg leading-none"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{ color: "var(--foreground)", background: "none", border: "none", cursor: "pointer" }}
          >
            {mobileOpen ? "✕" : "≡"}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden border-t border-border flex flex-col gap-4 px-6 py-4"
          style={{ background: "var(--card)", fontSize: 13 }}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="hover:text-primary transition-colors"
              style={{ color: "var(--muted-foreground)", textDecoration: "none" }}
            >
              <span style={{ color: "var(--primary)" }}>~/</span>
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
