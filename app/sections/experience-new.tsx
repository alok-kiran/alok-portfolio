"use client";
import React from "react";
import { Timeline } from "../components/ui/timeline";
import { Calendar, MapPin, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import InvygoLogo from "@/assets/images/invygo_logo.png";
import ComoLogo from "@/assets/images/como_logo.png";
import { motion } from "framer-motion";

// Tech icons mapping
const techIcons: { [key: string]: string } = {
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Apple Pay": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
  "Bitrise": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
};

export default function Experience() {
  const data = [
    {
      title: "2022-Present",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-12 rounded-lg bg-white/10 p-2 flex items-center justify-center">
                <Image src={ComoLogo} alt="Como" width={32} height={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-1">Software Engineer - II</h3>
                <Link
                  href="https://www.comosense.com/"
                  target="_blank"
                  className="text-purple-400 hover:text-purple-300 transition-colors text-sm"
                >
                  @Como (Acquired by Global Payments GPN:NYSE)
                </Link>
                <div className="flex flex-wrap gap-3 text-xs text-gray-400 mt-1">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Dec 2022 - Present
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Dubai, UAE
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <h4 className="text-xs font-semibold text-purple-400">Key Achievements</h4>
              {[
                "Reduced Next.js application page size by 88% (938 KB to 111 KB) through optimizations",
                "Enhanced user acquisition efficiency by implementing account merge feature",
                "Developed multi-language support dashboard, boosting business acquisition by 20%"
              ].map((achievement, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Star className="w-3 h-3 text-purple-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-xs leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <h5 className="text-xs font-semibold text-purple-400">Tech Stack</h5>
              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Kubernetes"].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 px-3 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg text-xs text-purple-300 hover:bg-purple-500/20 transition-colors"
                  >
                    <img 
                      src={techIcons[skill]} 
                      alt={skill}
                      className="w-4 h-4"
                    />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      title: "2019-2022",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-12 rounded-lg bg-white/10 p-2 flex items-center justify-center">
                <Image src={InvygoLogo} alt="Invygo" width={32} height={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-1">Software Engineer - I</h3>
                <Link
                  href="https://www.invygo.com/"
                  target="_blank"
                  className="text-purple-400 hover:text-purple-300 transition-colors text-sm"
                >
                  @Invygo Tech LLC
                </Link>
                <div className="flex flex-wrap gap-3 text-xs text-gray-400 mt-1">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    June 2019 - Nov 2022
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Dubai, UAE
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <h4 className="text-xs font-semibold text-purple-400">Key Achievements</h4>
              {[
                "Engineered centralized UI component library using Storybook, achieving 75% reduction in build time",
                "Optimized customer service efficiency through Freshdesk implementation",
                "Spearheaded live driver location tracking feature, cutting support volume by 88%"
              ].map((achievement, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Star className="w-3 h-3 text-purple-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-xs leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <h5 className="text-xs font-semibold text-purple-400">Tech Stack</h5>
              <div className="flex flex-wrap gap-3">
                {["React Native", "JavaScript", "Node.js", "MongoDB", "Apple Pay", "Bitrise"].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 px-3 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg text-xs text-purple-300 hover:bg-purple-500/20 transition-colors"
                  >
                    <img 
                      src={techIcons[skill]} 
                      alt={skill}
                      className="w-4 h-4"
                    />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ),
    },
  ];

  return (
    <section id="experience" className="relative min-h-screen overflow-hidden flex flex-col justify-center bg-black py-20">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 pt-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Professional{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto px-4 text-sm">
            My journey as a software engineer, creating impact through innovative solutions
          </p>
        </motion.div>

        <Timeline data={data} />
      </div>
    </section>
  );
}