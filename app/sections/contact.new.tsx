"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

type Status = "idle" | "sending" | "success" | "error";

const contactLinks = [
  {
    icon: "mail",
    label: "Email",
    value: "alokkiran777@gmail.com",
    href: "mailto:alokkiran777@gmail.com",
  },
  {
    icon: "code",
    label: "GitHub",
    value: "@alok-kiran",
    href: "https://github.com/alok-kiran",
  },
  {
    icon: "person",
    label: "LinkedIn",
    value: "alok-kiran",
    href: "https://www.linkedin.com/in/alokkiran/",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
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
    <section id="contact" className="max-w-7xl mx-auto px-8 py-24 pb-32">
      <motion.div
        className="glass-card rounded-2xl overflow-hidden flex flex-col lg:flex-row"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Left info panel */}
        <div className="lg:w-1/3 p-12 bg-card/50">
          <h2 className="font-heading text-4xl font-bold mb-8">
            Let&apos;s build something epic.
          </h2>
          <p className="text-muted-foreground mb-12 leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="space-y-6">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-card flex items-center justify-center group-hover:bg-obsidian transition-colors">
                  <span className="material-symbols-outlined text-foreground">
                    {link.icon}
                  </span>
                </div>
                <div>
                  <div className="text-xs uppercase text-muted-foreground font-bold font-mono">
                    {link.label}
                  </div>
                  <div className="font-bold font-heading">{link.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right form */}
        <div className="flex-1 p-12">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <span className="material-symbols-outlined text-obsidian text-5xl">
                check_circle
              </span>
              <h3 className="font-heading text-2xl font-bold">
                Message Sent!
              </h3>
              <p className="text-muted-foreground">
                Thank you for your message! I&apos;ll get back to you soon.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="text-obsidian font-bold hover:underline mt-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase text-muted-foreground font-bold font-mono">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-transparent border-0 border-b border-border focus:border-obsidian focus:ring-0 transition-all px-0 py-3 text-foreground placeholder:text-muted-foreground/40 font-heading outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase text-muted-foreground font-bold font-mono">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-transparent border-0 border-b border-border focus:border-obsidian focus:ring-0 transition-all px-0 py-3 text-foreground placeholder:text-muted-foreground/40 font-heading outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase text-muted-foreground font-bold font-mono">
                  Message
                </label>
                <textarea
                  placeholder="Tell me about your project..."
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-transparent border-0 border-b border-border focus:border-obsidian focus:ring-0 transition-all px-0 py-3 text-foreground placeholder:text-muted-foreground/40 font-heading resize-none outline-none"
                />
              </div>

              {status === "error" && (
                <p className="text-destructive text-sm">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-heading font-bold hover:bg-obsidian hover:text-white transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === "sending" ? (
                  <>
                    Sending...
                    <span className="material-symbols-outlined animate-spin">
                      progress_activity
                    </span>
                  </>
                ) : (
                  <>
                    Send Message
                    <span className="material-symbols-outlined">send</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}
