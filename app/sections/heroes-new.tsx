"use client";
import React, { useRef } from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { SpotlightButton } from "../components/ui/spotlight-button";
import { Code2, Smartphone, Rocket, Users, Brain, Zap } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import AlokImage from "@/assets/images/alok.png";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);


  const skills = [
    { icon: Code2, title: "Full-Stack Development", description: "Building scalable applications with React, Node.js, and modern frameworks" },
    { icon: Smartphone, title: "Mobile Development", description: "Creating cross-platform mobile apps with React Native" },
    { icon: Rocket, title: "Performance Optimization", description: "Reducing load times and improving user experience" },
    { icon: Users, title: "Team Leadership", description: "Leading development teams and mentoring junior developers" },
    { icon: Brain, title: "Problem Solving", description: "Architecting solutions for complex technical challenges" },
    { icon: Zap, title: "Innovation", description: "Staying ahead with latest technologies and best practices" }
  ];

  return (
    <>
      {/* Main Hero Section */}
      <section ref={containerRef} id="home" className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center">
        <BackgroundBeams className="absolute inset-0" />
        
        <motion.div 
          style={{ y, opacity }}
          className="container relative z-10 py-20"
        >
          {/* Hero Content */}
          <div className="max-w-6xl mx-auto">
            {/* Main heading with parallax */}
     
            {/* About Me Section with Photo */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid lg:grid-cols-2 gap-12 items-center mb-16"
            >
              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="relative order-2 lg:order-1"
              >
                <div className="relative w-full max-w-sm mx-auto">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-30"
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                  <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
                    <Image
                      src={AlokImage}
                      alt="Alok Kiran"
                      className="w-full h-auto"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
              </motion.div>

              {/* About Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="space-y-6 order-1 lg:order-2"
              >
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
                >
                  Computer Science Engineer &{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Full-Stack Developer
                  </span>
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="text-gray-400 leading-relaxed text-lg"
                >
                  With a Computer Science & Engineering degree from Indian Institute of Technology Ropar,
                  I bring over {new Date().getFullYear() - 2019} years of experience in building scalable and innovative web and mobile applications.
                </motion.p>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                  className="text-gray-400 leading-relaxed text-lg"
                >
                  My expertise lies in React.js, React Native, Node.js, and Next.js,
                  enabling me to craft responsive applications tailored to diverse business needs.
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2 }}
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                  <SpotlightButton className="px-8 py-4 text-lg">
                    <Link href="#projects">View My Work</Link>
                  </SpotlightButton>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-sm rounded-full font-medium hover:bg-white/10 transition-all duration-300"
                  >
                    <Link href="#contact">Get In Touch</Link>
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.2 }}
              className="flex justify-center mt-8"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer"
                onClick={() => {
                  document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1 h-3 bg-white/60 rounded-full mt-2"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What I Do Best - Separate Section */}
      <section id="skills" className="relative min-h-screen bg-black flex items-center justify-center py-20">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl -translate-y-1/2" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-20%" }}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16"
            >
              What I Do{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Best
              </span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
                  >
                    <Icon className="w-10 h-10 text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="text-xl font-semibold mb-3 text-white">{skill.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{skill.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}