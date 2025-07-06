"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const floatingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], {
        opacity: 0,
        y: 50
      });

      // Title animation
      gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out"
      });

      // Subtitle animation
      gsap.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.4,
        ease: "power3.out"
      });

      // CTA animation
      gsap.to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.6,
        ease: "power3.out"
      });

      // Floating animation
      gsap.to(floatingRef.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // Background gradient animation
      gsap.to(".gradient-bg", {
        backgroundPosition: "200% center",
        duration: 20,
        repeat: -1,
        ease: "none"
      });

      // Mouse move effect
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const xPos = (clientX / innerWidth - 0.5) * 20;
        const yPos = (clientY / innerHeight - 0.5) * 20;

        gsap.to(".floating-element", {
          x: xPos,
          y: yPos,
          duration: 1,
          ease: "power2.out"
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const socialLinks = [
    { icon: Github, href: "https://github.com/alok-kiran", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/alokkiran/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:alokkiran777@gmail.com", label: "Email" },
    { icon: FileText, href: "https://drive.google.com/file/d/1WUv2QkDbba3RX2ExS2_IlSzaO5Tmvlo7/view?usp=sharing", label: "Resume" }
  ];

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="gradient-bg absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20 animate-gradient" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%239C92AC' fill-opacity='0.05'%3e%3cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
        }} />
      </div>

      {/* Floating elements */}
      <div className="floating-element absolute top-20 left-10 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl" />
      <div className="floating-element absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
      <div className="floating-element absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}

          {/* Main heading */}
          <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Hi, I&apos;m <span className="gradient-text text-glow">Alok Kiran</span>
          </h1>

          {/* Subtitle */}
          <p ref={subtitleRef} className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Full-Stack Developer crafting exceptional digital experiences with modern technologies
          </p>

          {/* CTA section */}
          <div ref={ctaRef} className="flex flex-col gap-4 justify-center items-center mb-16 px-4 max-w-sm mx-auto md:max-w-none md:flex-row">
            <Link href="#projects" className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 text-center">
              View My Work
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link href="#contact" className="w-full md:w-auto px-8 py-4 glass-effect rounded-full font-medium hover:bg-white/10 transition-all duration-300 text-center">
              Let&apos;s Talk
            </Link>
          </div>

          {/* Social links */}
          <div className="flex gap-4 justify-center">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                className="p-3 glass-effect rounded-full hover:bg-white/10 transition-all duration-300 group"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}