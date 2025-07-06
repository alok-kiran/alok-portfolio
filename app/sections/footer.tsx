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
    <footer className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-gradient-to-t from-purple-500/20 to-transparent rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left side */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
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

            {/* Right side - Social links */}
            <div className="flex items-center gap-4">
              {footerLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="p-3 glass-effect rounded-full hover:bg-white/10 transition-all duration-300 group"
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}