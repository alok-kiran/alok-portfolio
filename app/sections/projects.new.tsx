"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";

const projects = [
  {
    id: 1,
    title: "Graphic Design SaaS Tool",
    company: "Design Sphere",
    description:
      "A Canva-like SaaS platform with drag-and-drop design features for shapes, images, and text.",
    image: darkSaasLandingPage,
    tech: ["Next.js", "React", "Tailwind CSS", "Node.js", "PostgreSQL"],
    liveUrl: "https://graphic-master.vercel.app/",
    githubUrl: "https://github.com/alok-kiran",
    highlights: [
      "Intuitive drag-and-drop interface",
      "Google and GitHub authentication",
      "Real-time collaboration features",
      "Professional design templates",
    ],
    techColor: "text-obsidian",
  },
  {
    id: 2,
    title: "Project Management SaaS Tool",
    company: "Sprintly",
    description:
      "A Trello-like project management platform with boards, lists, and drag-and-drop functionality.",
    image: aiStartupLandingPage,
    tech: ["Next.js", "React", "Tailwind CSS", "MySQL", "Node.js"],
    liveUrl: "https://trell-master.vercel.app/",
    githubUrl: "https://github.com/alok-kiran",
    highlights: [
      "Drag-and-drop task management",
      "Real-time activity tracking",
      "Team collaboration tools",
      "Advanced project analytics",
    ],
    techColor: "text-blue-400",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-8 py-24">
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-obsidian" />
          <span className="text-[11px] uppercase tracking-[0.4em] text-obsidian font-bold">
            Portfolio
          </span>
        </div>
        <h2 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight">
          Selected <span className="text-obsidian">Projects</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="relative overflow-hidden rounded-xl aspect-video mb-6 bg-card">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            <h3 className="text-2xl font-bold mb-2 font-heading">
              {project.title}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className={`text-[10px] uppercase font-bold tracking-widest bg-card px-3 py-1 rounded ${project.techColor}`}
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground text-background px-6 py-2 rounded-lg font-heading font-bold text-sm hover:opacity-90 transition-all"
              >
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card px-6 py-2 rounded-lg font-heading font-bold text-sm text-foreground hover:bg-accent transition-all"
              >
                View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
