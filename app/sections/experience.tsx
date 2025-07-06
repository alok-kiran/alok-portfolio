"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import InvygoLogo from '@/assets/images/invygo_logo.png';
import ComoLogo from '@/assets/images/como_logo.png';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: "Como (Acquired by Global Payments GPN:NYSE)",
    role: "Software Engineer - II",
    period: "Dec 2022 - Present",
    location: "Dubai, United Arab Emirates",
    logo: ComoLogo,
    link: "https://www.comosense.com/",
    achievements: [
      "Reduced Next.js application page size by 88% (938 KB to 111 KB) through advanced optimizations",
      "Enhanced user acquisition efficiency by implementing account merge feature with OTP verification",
      "Developed multi-language support dashboard, boosting business acquisition by 20%",
      "Achieved 100% compliance with global accessibility standards",
      "Upgraded React Native app from 0.66.1 to 0.71.1, improving performance by 30%"
    ],
    skills: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Kubernetes"]
  },
  {
    company: "Invygo Tech LLC",
    role: "Software Engineer - I",
    period: "June 2019 - Nov 2022",
    location: "Dubai, United Arab Emirates",
    logo: InvygoLogo,
    link: "https://www.invygo.com/",
    achievements: [
      "Engineered centralized UI component library using Storybook, achieving 75% reduction in build time",
      "Optimized customer service efficiency through Freshdesk implementation",
      "Spearheaded live driver location tracking feature, cutting support volume by 88%",
      "Integrated Apple Pay for seamless mobile payments"
    ],
    skills: ["React Native", "JavaScript", "Node.js", "MongoDB", "Apple Pay", "Bitrise"]
  }
];

export default function Experience() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(".experience-header", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".experience-header",
          start: "top 80%",
        }
      });

      // Timeline line animation
      gsap.from(".timeline-line", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
          end: "bottom 80%",
          scrub: 1
        }
      });

      // Experience cards animation
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        // Entrance animation
        gsap.from(card, {
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          }
        });

        // Hover effect
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

      // Floating dots animation
      gsap.to(".timeline-dot", {
        scale: 1.2,
        duration: 1,
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
        ease: "power1.inOut"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden" id="experience">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="experience-header text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto px-4">
            My journey as a software engineer, creating impact through innovative solutions
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-5xl mx-auto">
          {/* Left timeline line */}
          <div className="timeline-line absolute left-[30px] w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500" />

          {/* Experience cards */}
          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot - positioned on the left line */}
                <div className="timeline-dot absolute left-8 transform -translate-x-1/2 w-4 md:w-6 h-4 md:h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/50 z-10" />

                {/* Card */}
                <div
                  ref={(el) => {
                    if (el) {
                      cardRefs.current[index] = el;
                    }
                  }}
                  className="glass-effect rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 ml-16"
                >
                  {/* Company header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-12 sm:w-16 h-12 sm:h-16 glass-effect rounded-xl p-2 sm:p-3 flex items-center justify-center">
                        <Image src={exp.logo} alt={exp.company} width={32} height={32} className="sm:w-10 sm:h-10" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold leading-tight">{exp.role}</h3>
                        <Link 
                          href={exp.link} 
                          target="_blank"
                          className="text-purple-400 hover:text-purple-300 transition-colors text-sm sm:text-base"
                        >
                          @{exp.company}
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 sm:w-4 h-3 sm:h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 sm:w-4 h-3 sm:h-4" />
                      {exp.location}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {exp.achievements.slice(0, 3).map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2 sm:gap-3">
                        <Star className="w-3 sm:w-4 h-3 sm:h-4 text-purple-400 mt-1 flex-shrink-0" />
                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {exp.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-2 sm:px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}