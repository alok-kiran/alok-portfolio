"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Smartphone, Rocket, Users, Brain, Zap } from 'lucide-react';
import Image from 'next/image';
import AlokImage from '@/assets/images/alok.png';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { icon: Code2, title: "Full-Stack Development", description: "Building scalable applications with React, Node.js, and modern frameworks" },
  { icon: Smartphone, title: "App Development", description: "Creating intuitive and beautiful user interfaces with attention to detail" },
  { icon: Rocket, title: "Performance", description: "Optimizing applications for speed and efficiency" },
  { icon: Users, title: "Collaboration", description: "Working effectively in teams and mentoring junior developers" },
  { icon: Brain, title: "Problem Solving", description: "Tackling complex challenges with innovative solutions" },
  { icon: Zap, title: "Fast Learner", description: "Quickly adapting to new technologies and frameworks" }
];

const techStack = {
  "Frontend": [
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "Shadcn/ui", icon: "https://ui.shadcn.com/favicon.ico" },
    { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
  ],
  "Backend": [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" }
  ],
  "Tools": [
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" }
  ],
  "Cloud": [
    { name: "AWS", icon: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
    { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Vercel", icon: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" }
  ]
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure cards are visible by default
    gsap.set(".skill-card", { opacity: 1, y: 0 });
    
    const ctx = gsap.context(() => {
      // Image animation
      gsap.from(imageRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        }
      });
      // Content animation
      const contentChildren = contentRef.current?.children ? Array.from(contentRef.current.children) : [];
      gsap.from(contentChildren, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        }
      });

      // Skills animation
      const skillCards = document.querySelectorAll(".skill-card");
      if (skillCards.length > 0) {
        gsap.fromTo(skillCards, 
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: skillsRef.current,
              start: "top 80%",
              once: true
            }
          }
        );
      }

      // Tech stack animation
      gsap.from(".tech-category", {
        x: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: techRef.current,
          start: "top 80%",
        }
      });

      // Floating animation for image
      gsap.to(imageRef.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden" id="about">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto px-4">
            Passionate full-stack developer with {new Date().getFullYear() - 2019} years of experience building innovative solutions
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div ref={imageRef} className="relative w-full max-w-sm sm:max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-30" />
              <div className="relative glass-effect rounded-2xl p-4 sm:p-8">
                <Image 
                  src={AlokImage} 
                  alt="Alok Kiran" 
                  className="rounded-xl w-full"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
              I&apos;m Alok Kiran, a <span className="gradient-text">Full-Stack Developer</span>
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              With a Computer Science & Engineering degree from Indian Institute of Technology Ropar, 
              I bring over {new Date().getFullYear() - 2019} years of experience in building scalable and innovative web and mobile applications. 
              I thrive on transforming ideas into seamless digital experiences.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              My expertise lies in modern technologies like React.js, React Native, Node.js, and Next.js, 
              enabling me to craft responsive and robust applications tailored to diverse business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <a href="#experience" className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-center">
                View Experience
              </a>
              <a href="#contact" className="px-6 py-3 glass-effect rounded-full font-medium hover:bg-white/10 transition-all duration-300 text-center">
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div ref={skillsRef} className="mb-16 sm:mb-20">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">What I Do Best</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card glass-effect p-4 sm:p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <skill.icon className="w-8 sm:w-10 h-8 sm:h-10 text-purple-400 mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold mb-2 text-sm sm:text-base">{skill.title}</h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div ref={techRef} className="relative">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-12">
            My <span className="gradient-text">Tech Arsenal</span>
          </h3>
          
          <div className="grid gap-6 sm:gap-8 lg:gap-10">
            {Object.entries(techStack).map(([category, techs], categoryIndex) => (
              <div 
                key={category} 
                className="tech-category relative group"
                style={{
                  animationDelay: `${categoryIndex * 200}ms`,
                }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
                    <span className="text-white font-bold text-sm sm:text-base">
                      {categoryIndex + 1}
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    {category}
                  </h4>
                  <div className="flex-1 h-px bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                </div>

                {/* Tech Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                  {techs.map((tech, techIndex) => (
                    <div
                      key={tech.name}
                      className="tech-item"
                      style={{
                        animationDelay: `${(categoryIndex * 200) + (techIndex * 100)}ms`,
                      }}
                    >
                      {/* Content */}
                      <div className="glass-effect rounded-xl p-3 sm:p-4 h-full flex flex-col items-center justify-center text-center">
                        <div className="mb-2 sm:mb-3">
                          <img 
                            src={tech.icon} 
                            alt={tech.name}
                            className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 mx-auto"
                            style={{ 
                              filter: 'brightness(0.9) drop-shadow(0 0 10px rgba(168, 85, 247, 0.3))'
                            }}
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-white leading-tight">
                          {tech.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category Bottom Line */}
                <div className="mt-6 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
              </div>
            ))}
          </div>

          {/* Floating Background Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-500/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>
    </section>
  );
}