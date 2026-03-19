"use client";
import React from 'react';
import { Github, Linkedin, Instagram, Youtube, Heart } from 'lucide-react';
import Link from 'next/link';

const footerLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/alokkiran/',
    icon: Linkedin
  },
  {
    name: 'Github', 
    href: 'https://github.com/alok-kiran',
    icon: Github
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/alok_.kushwaha/',
    icon: Instagram
  },
  {
    name: 'Youtube',
    href: 'https://www.youtube.com/@world_explorer-y1e',
    icon: Youtube
  }
];

export default function Footer() {
  return (
    <footer className="relative bg-black mt-20 pb-8">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[120px] bg-gradient-to-t from-purple-500/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="border-t border-white/10 pt-8 pb-4">
          {/* Mobile: Column layout */}
          <div className="flex flex-col items-center gap-6 md:hidden">
            {/* Copyright and Made with love - Mobile */}
            <div className="flex flex-col items-center gap-3 text-sm text-gray-400 text-center">
              <p>&copy; 2025 All rights reserved.</p>
              <p className="flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by{' '}
                <Link 
                  href="https://www.linkedin.com/in/alokkiran/" 
                  target="_blank"
                  className="text-white font-semibold hover:text-purple-400 transition-colors"
                >
                  Alok Kiran
                </Link>
              </p>
            </div>

            {/* Social links - Mobile */}
            <div className="flex items-center justify-center gap-4">
              {footerLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="p-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 group"
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5 text-gray-400 group-hover:text-purple-400 group-hover:scale-110 transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop: Row layout */}
          <div className="hidden md:flex items-center justify-between">
            {/* Left side - Desktop */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-4 text-sm text-gray-400">
              <p>&copy; 2025 All rights reserved.</p>
              <p className="flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by{' '}
                <Link 
                  href="https://www.linkedin.com/in/alokkiran/" 
                  target="_blank"
                  className="text-white font-semibold hover:text-purple-400 transition-colors"
                >
                  Alok Kiran
                </Link>
              </p>
            </div>

            {/* Right side - Social links Desktop */}
            <div className="flex items-center gap-4">
              {footerLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="p-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 group"
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5 text-gray-400 group-hover:text-purple-400 group-hover:scale-110 transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}