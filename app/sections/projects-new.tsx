"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { ExternalLink, Github } from "lucide-react";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Graphic Design SaaS Tool",
    company: "Design Sphere",
    description: "A Canva-like SaaS platform with drag-and-drop design features for shapes, images, and text.",
    image: darkSaasLandingPage,
    tech: ["Next.js", "React", "Tailwind CSS", "Node.js", "PostgreSQL"],
    liveUrl: "https://graphic-master.vercel.app/",
    githubUrl: "https://github.com/alok-kiran",
    highlights: [
      "Intuitive drag-and-drop interface",
      "Google and GitHub authentication",
      "Real-time collaboration features",
      "Professional design templates"
    ],
    gradient: "from-blue-500 to-purple-500"
  },
  {
    id: 2,
    title: "Project Management SaaS Tool",
    company: "Sprintly",
    description: "A Trello-like project management platform with boards, lists, and drag-and-drop functionality.",
    image: aiStartupLandingPage,
    tech: ["Next.js", "React", "Tailwind CSS", "MySQL", "Node.js"],
    liveUrl: "https://trell-master.vercel.app/",
    githubUrl: "https://github.com/alok-kiran",
    highlights: [
      "Drag-and-drop task management",
      "Real-time activity tracking",
      "Team collaboration tools",
      "Advanced project analytics"
    ],
    gradient: "from-purple-500 to-pink-500"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen overflow-hidden bg-black flex flex-col justify-center py-20">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto px-4">
            Showcasing my recent work and the impact I&apos;ve made through innovative solutions
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {project.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
                  >
                    {project.description}
                  </CardItem>
                  
                  <CardItem translateZ="100" className="w-full mt-4">
                    <div className="relative h-48 w-full overflow-hidden rounded-xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover/card:shadow-xl transition-all duration-300"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover/card:opacity-20 transition-opacity duration-300`} />
                    </div>
                  </CardItem>

                  {/* Tech stack */}
                  <CardItem translateZ="50" className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </CardItem>

                  <div className="flex justify-between items-center mt-6">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={project.liveUrl}
                      target="_blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white flex items-center gap-2 hover:bg-gray-800 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={project.githubUrl}
                      target="_blank"
                      className={`px-4 py-2 rounded-xl bg-gradient-to-r ${project.gradient} text-white text-xs font-bold flex items-center gap-2`}
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}