"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Graphic Design SaaS Tool",
    company: "Design Sphere",
    description: "A Canva-like SaaS platform with drag-and-drop design features for shapes, images, and text.",
    image: darkSaasLandingPage,
    tech: ["Next.js", "React", "Tailwind CSS", "Node.js", "PostgreSQL"],
    liveUrl: "https://graphic-master.vercel.app/",
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
  const sectionRef = useRef(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(".projects-header", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-header",
          start: "top 80%",
        }
      });

      // Project cards animation
      projectRefs.current.forEach((project, index) => {
        if (!project) return;

        // 3D tilt effect
        project.addEventListener('mousemove', (e) => {
          const rect = project.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = (y - centerY) / 10;
          const rotateY = (centerX - x) / 10;

          gsap.to(project, {
            rotationY: rotateY,
            rotationX: rotateX,
            transformPerspective: 1000,
            duration: 0.5,
            ease: "power2.out"
          });
        });

        project.addEventListener('mouseleave', () => {
          gsap.to(project, {
            rotationY: 0,
            rotationX: 0,
            duration: 0.5,
            ease: "power2.out"
          });
        });

        // Scroll animation
        gsap.from(project, {
          y: 100,
          opacity: 0,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: project,
            start: "top 85%",
          }
        });

        // Image parallax
        const image = project.querySelector('.project-image');
        if (image) {
          gsap.to(image, {
            y: -50,
            ease: "none",
            scrollTrigger: {
              trigger: project,
              start: "top bottom",
              end: "bottom top",
              scrub: 1
            }
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden" id="projects">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="projects-header text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto px-4">
            Showcasing my recent work and the impact I&apos;ve made through innovative solutions
          </p>
        </div>

        {/* Projects grid */}
        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) {
                  projectRefs.current[index] = el;
                }
              }}
              className="relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={`space-y-4 sm:space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 glass-effect rounded-full text-xs sm:text-sm">
                    <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`} />
                    {project.company}
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">{project.title}</h3>
                  <p className="text-gray-400 text-base sm:text-lg leading-relaxed">{project.description}</p>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="font-semibold text-purple-400 text-sm sm:text-base">Key Features</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} mt-2 flex-shrink-0`} />
                          <span className="text-gray-400 text-sm sm:text-base leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 sm:px-3 py-1 glass-effect rounded-full text-xs sm:text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Link 
                      href={project.liveUrl} 
                      target="_blank"
                      className={`group px-4 sm:px-6 py-3 bg-gradient-to-r ${project.gradient} rounded-full font-medium hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2 text-sm sm:text-base`}
                    >
                      View Live Site
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-2xl opacity-20`} />
                  <div className="relative glass-effect rounded-2xl p-2 overflow-hidden">
                    <div className="project-image relative h-[250px] sm:h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        className="object-cover object-top w-full h-full"
                        fill
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more */}
        <div className="text-center mt-16">
          <Link 
            href="https://github.com/alok-kiran" 
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 glass-effect rounded-full font-medium hover:bg-white/10 transition-all duration-300 group"
          >
            View More on GitHub
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}