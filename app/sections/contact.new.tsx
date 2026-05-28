"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

const contactRows = [
  {
    k: "email",
    v: "alokkiran777@gmail.com",
    href: "mailto:alokkiran777@gmail.com",
    a: "write ↗",
  },
  {
    k: "github",
    v: "github.com/alok-kiran",
    href: "https://github.com/alok-kiran",
    a: "visit ↗",
  },
  {
    k: "linkedin",
    v: "linkedin.com/in/alokkiran",
    href: "https://www.linkedin.com/in/alokkiran/",
    a: "visit ↗",
  },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid var(--border)",
  color: "var(--foreground)",
  fontSize: 13,
  padding: "8px 0",
  outline: "none",
  fontFamily: "var(--font-mono)",
};

const labelStyle: React.CSSProperties = {
  fontSize: 9,
  textTransform: "uppercase",
  letterSpacing: "0.2em",
  color: "var(--muted-foreground)",
  display: "block",
  marginBottom: 8,
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      style={{ padding: "72px clamp(16px,4vw,40px) 80px" }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          style={{
            border: "1px solid var(--primary)",
            background: "var(--card)",
            padding: "clamp(24px,4vw,48px)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(26px,4vw,38px)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginTop: 0,
              marginBottom: 32,
            }}
          >
            <span style={{ color: "var(--primary)" }}>▌ ready to ship?</span>
            <br />
            let&apos;s spec something serious.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact rows */}
            <div>
              <div>
                {contactRows.map((row, i) => (
                  <div
                    key={row.k}
                    className="grid items-center"
                    style={{
                      gridTemplateColumns: "90px 1fr 70px",
                      padding: "15px 0",
                      borderTop: i === 0 ? "none" : "1px solid var(--border)",
                      fontSize: 13,
                    }}
                  >
                    <span
                      style={{
                        color: "var(--muted-foreground)",
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        fontSize: 10,
                      }}
                    >
                      {row.k}
                    </span>
                    <span
                      style={{
                        color: "var(--foreground)",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {row.v}
                    </span>
                    <a
                      href={row.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-70 transition-opacity"
                      style={{
                        textAlign: "right",
                        color: "var(--primary)",
                        fontSize: 11,
                        textDecoration: "none",
                      }}
                    >
                      {row.a}
                    </a>
                  </div>
                ))}
              </div>
              <p
                style={{
                  color: "var(--muted-foreground)",
                  fontSize: 12,
                  lineHeight: 1.75,
                  marginTop: 0,
                  marginBottom: 0,
                  borderTop: "1px solid var(--border)",
                  paddingTop: 16,
                }}
              >
                Available for consulting engagements, technical advisory, and select full-time
                opportunities. Based in Dubai — working globally.
              </p>
            </div>

            {/* Form */}
            <div>
              {status === "success" ? (
                <div style={{ paddingTop: 8 }}>
                  <div
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      color: "var(--primary)",
                      marginBottom: 12,
                    }}
                  >
                    ✓ message received.
                  </div>
                  <p style={{ color: "var(--muted-foreground)", fontSize: 13, marginTop: 0 }}>
                    I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    style={{
                      color: "var(--primary)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: 12,
                      padding: 0,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontFamily: "var(--font-mono)",
                      marginTop: 12,
                    }}
                  >
                    → send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label style={labelStyle}>name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>email</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={inputStyle}
                      />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>message</label>
                    <textarea
                      placeholder="Tell me about your project..."
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ ...inputStyle, resize: "none" }}
                    />
                  </div>

                  {status === "error" && (
                    <p style={{ color: "var(--destructive)", fontSize: 12, margin: 0 }}>
                      Something went wrong. Try emailing me directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    style={{
                      background: "var(--primary)",
                      color: "var(--background)",
                      border: "none",
                      padding: "13px 0",
                      fontSize: 12,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      cursor: status === "sending" ? "not-allowed" : "pointer",
                      fontFamily: "var(--font-mono)",
                      opacity: status === "sending" ? 0.6 : 1,
                      width: "100%",
                    }}
                  >
                    {status === "sending" ? "sending..." : "→ send message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
