"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AlokImage from "@/assets/images/alok.png";

const floatingBadges = [
  { label: "React", position: "-top-4 -right-4", border: "border-obsidian/30" },
  { label: "Next.js", position: "top-1/2 -right-8", border: "border-blue-400/30" },
  { label: "React Native", position: "bottom-4 -left-4", border: "border-purple-400/30" },
  { label: "Node.js", position: "-bottom-4 right-1/4", border: "border-green-400/30" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-8 py-20 flex flex-col-reverse lg:flex-row items-center gap-20 min-h-[90vh]"
    >
      <motion.div
        className="flex-1 space-y-8 text-left"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="font-heading text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter gradient-text">
          Computer Science Engineer &amp; Full-Stack Developer
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl font-light leading-relaxed">
          7+ years building scalable web &amp; mobile apps · IIT Ropar.
          Specializing in high-performance architectures and seamless user
          experiences.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="#projects"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-heading font-bold flex items-center gap-2 hover:bg-obsidian hover:text-white transition-colors"
          >
            View My Work
            <span className="material-symbols-outlined text-sm">
              arrow_outward
            </span>
          </a>
          <a
            href="#contact"
            className="glass-card px-8 py-4 rounded-xl font-heading font-bold text-foreground hover:bg-accent/60 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </motion.div>

      <motion.div
        className="relative w-64 h-64 md:w-96 md:h-96 shrink-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-obsidian/20 blur-3xl rounded-full" />
        <div className="absolute -inset-1 bg-gradient-to-tr from-obsidian to-blue-500 rounded-full opacity-30 animate-pulse" />
        <div className="relative w-full h-full rounded-full border-4 border-border/20 overflow-hidden">
          <Image
            src={AlokImage}
            alt="Alok Kiran"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            sizes="(max-width: 768px) 256px, 384px"
            priority
          />
        </div>

        {floatingBadges.map((badge) => (
          <motion.div
            key={badge.label}
            className={`absolute ${badge.position} glass-card px-4 py-2 rounded-full text-xs font-bold border ${badge.border} hidden md:block`}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          >
            {badge.label}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
