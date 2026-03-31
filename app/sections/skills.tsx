"use client";

import { useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface SkillCardProps {
  icon: string;
  title: string;
  description?: string;
  number: string;
  className?: string;
  children?: React.ReactNode;
}

function SkillCard({ icon, title, description, number, className = "", children }: SkillCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty("--mouse-x", `${x}%`);
    cardRef.current.style.setProperty("--mouse-y", `${y}%`);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`skill-card rounded-2xl group ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      {children || (
        <>
          <div className="flex justify-between items-center mb-6">
            <span className="material-symbols-outlined text-obsidian/60 text-2xl group-hover:scale-110 transition-transform">
              {icon}
            </span>
            <span className="text-[9px] font-mono text-muted-foreground uppercase">
              {number}
            </span>
          </div>
          <div>
            <h3 className="font-heading text-xl font-bold mb-2 tracking-tight">
              {title}
            </h3>
            {description && (
              <p className="text-muted-foreground text-xs leading-relaxed font-light">
                {description}
              </p>
            )}
          </div>
        </>
      )}
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 technical-grid-bg pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-obsidian/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-obsidian/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-obsidian" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-obsidian font-bold">
              Capabilities
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
            Technical <span className="text-obsidian">Domain</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-3 gap-6">
          {/* Full-Stack Development - Featured */}
          <SkillCard
            icon="layers"
            title="Full-Stack Development"
            number="01 / Core Focus"
            className="md:col-span-8 md:row-span-2 p-10"
          >
            <div className="flex justify-between items-start">
              <div className="w-16 h-16 rounded-2xl bg-obsidian/10 border border-obsidian/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-obsidian text-3xl">
                  layers
                </span>
              </div>
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                01 / Core Focus
              </span>
            </div>
            <div className="mt-20">
              <h3 className="font-heading text-3xl font-bold mb-4 tracking-tight group-hover:text-obsidian transition-colors">
                Full-Stack Development
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed max-w-2xl font-light">
                End-to-end development of complex web systems using modern
                frameworks like React, Next.js, and Node.js. Focused on
                type-safety, high-performance backends, and scalable frontend
                architectures that grow with your users.
              </p>
              <div className="flex gap-4 mt-8 opacity-40 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-mono">React</span>
                <span className="text-xs font-mono">/</span>
                <span className="text-xs font-mono">Node.js</span>
                <span className="text-xs font-mono">/</span>
                <span className="text-xs font-mono">TypeScript</span>
              </div>
            </div>
          </SkillCard>

          {/* Mobile Engineering */}
          <SkillCard
            icon="smartphone"
            title="Mobile Engineering"
            description="Fluid, native-feeling mobile experiences with React Native for iOS and Android."
            number="02"
            className="md:col-span-4 md:row-span-1 p-8"
          />

          {/* Performance Ops */}
          <SkillCard
            icon="speed"
            title="Performance Ops"
            description="Optimizing critical paths, reducing bundle sizes, and ensuring sub-second response times."
            number="03"
            className="md:col-span-4 md:row-span-1 p-8"
          />

          {/* Scalable Architecture */}
          <SkillCard
            icon="architecture"
            title="Scalable Architecture"
            number="04"
            className="md:col-span-6 md:row-span-1 p-8"
          >
            <div className="flex items-center gap-8">
              <div className="w-14 h-14 shrink-0 rounded-full border border-border/20 flex items-center justify-center group-hover:border-obsidian/40 transition-colors">
                <span className="material-symbols-outlined text-obsidian/60 text-2xl">
                  architecture
                </span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold mb-1 tracking-tight">
                  Scalable Architecture
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed font-light">
                  Architecting robust solutions for technical debt and
                  eliminating scaling bottlenecks.
                </p>
              </div>
            </div>
          </SkillCard>

          {/* Problem Solving */}
          <SkillCard
            icon="psychology"
            title="Problem Solving"
            number="05"
            className="md:col-span-3 md:row-span-1 p-8"
          >
            <div className="flex flex-col justify-center items-center text-center h-full">
              <span className="material-symbols-outlined text-obsidian/40 text-3xl mb-4 group-hover:scale-110 transition-transform">
                psychology
              </span>
              <h3 className="font-heading text-lg font-bold tracking-tight">
                Problem Solving
              </h3>
            </div>
          </SkillCard>

          {/* Technical Leadership */}
          <SkillCard
            icon="groups"
            title="Technical Leadership"
            number="06"
            className="md:col-span-3 md:row-span-1 p-8"
          >
            <div className="flex flex-col justify-center items-center text-center h-full">
              <span className="material-symbols-outlined text-obsidian/40 text-3xl mb-4 group-hover:scale-110 transition-transform">
                groups
              </span>
              <h3 className="font-heading text-lg font-bold tracking-tight">
                Technical Leadership
              </h3>
            </div>
          </SkillCard>
        </div>
      </div>
    </section>
  );
}
