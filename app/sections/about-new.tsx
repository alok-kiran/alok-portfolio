"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code2, Smartphone, Rocket, Users, Brain, Zap } from "lucide-react";
import Image from "next/image";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import AlokImage from "@/assets/images/alok.png";

const skills = [
  { icon: Code2, title: "Full-Stack Development", description: "Building scalable applications with React, Node.js, and modern frameworks" },
  { icon: Smartphone, title: "App Development", description: "Creating intuitive and beautiful user interfaces with attention to detail" },
  { icon: Rocket, title: "Performance", description: "Optimizing applications for speed and efficiency" },
  { icon: Users, title: "Collaboration", description: "Working effectively in teams and mentoring junior developers" },
  { icon: Brain, title: "Problem Solving", description: "Tackling complex challenges with innovative solutions" },
  { icon: Zap, title: "Fast Learner", description: "Quickly adapting to new technologies and frameworks" }
];

const techStack = [
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", icon: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
  { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
];

export default function About() {
  return (
    <section id="about" className="relative min-h-screen overflow-hidden bg-black flex flex-col justify-center py-20">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto px-4">
            Passionate full-stack developer with {new Date().getFullYear() - 2019} years of experience building innovative solutions
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-30" />
              <div className="relative border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-8">
                <Image
                  src={AlokImage}
                  alt="Alok Kiran"
                  className="rounded-xl w-full"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
              I&apos;m Alok Kiran, a{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Full-Stack Developer
              </span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              With a Computer Science & Engineering degree from Indian Institute of Technology Ropar,
              I bring over {new Date().getFullYear() - 2019} years of experience in building scalable and innovative web and mobile applications.
              I thrive on transforming ideas into seamless digital experiences.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My expertise lies in modern technologies like React.js, React Native, Node.js, and Next.js,
              enabling me to craft responsive and robust applications tailored to diverse business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#experience" 
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-center"
              >
                View Experience
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-white/20 bg-white/5 backdrop-blur-sm rounded-full font-medium hover:bg-white/10 transition-all duration-300 text-center"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-8">What I Do Best</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="border border-white/10 bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group"
              >
                <skill.icon className="w-10 h-10 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold mb-2">{skill.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative"
        >
          <h3 className="text-2xl font-bold text-center mb-12">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tech Arsenal
            </span>
          </h3>

          <div className="rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={techStack}
              direction="right"
              speed="slow"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}