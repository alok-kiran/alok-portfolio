"use client";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset body overflow when menu state changes
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveSection(href);
    setIsMenuOpen(false);
    
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/90 backdrop-blur-xl shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container">
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-2xl font-bold">
              <span className="gradient-text">AK</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center gap-2 glass-effect rounded-full p-1">
                {navItems.map(item => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`nav-item ${activeSection === item.href ? 'nav-item-active' : ''}`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 glass-effect rounded-lg"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Full-Screen Menu - Rendered via Portal */}
      {mounted && isMenuOpen && createPortal(
        <div 
          className="fixed inset-0 z-[99999]"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(17, 24, 39, 0.95)',
            backdropFilter: 'blur(20px)',
            zIndex: 99999
          }}
        >
          <div className="flex flex-col h-full w-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6">
              <div className="text-2xl font-bold">
                <span style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>AK</span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                style={{
                  padding: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  color: 'white',
                  cursor: 'pointer'
                }}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation */}
            <div className="flex-1 flex flex-col justify-center px-6">
              <nav className="space-y-6">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      padding: '16px 24px',
                      borderRadius: '16px',
                      fontSize: '24px',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      transform: 'scale(1)',
                      cursor: 'pointer',
                      textDecoration: 'none',
                      ...(activeSection === item.href 
                        ? {
                            background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                            color: 'white',
                            boxShadow: '0 20px 40px rgba(168, 85, 247, 0.3)'
                          }
                        : {
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: '#d1d5db'
                          }
                      )
                    }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLElement;
                      if (activeSection !== item.href) {
                        target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        target.style.color = 'white';
                      }
                      target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLElement;
                      if (activeSection !== item.href) {
                        target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                        target.style.color = '#d1d5db';
                      }
                      target.style.transform = 'scale(1)';
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Footer */}
            <div className="p-6 text-center">
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '24px'
              }}>
                <p style={{ color: '#9ca3af', marginBottom: '12px', fontSize: '18px' }}>
                  Let&apos;s connect!
                </p>
                <a 
                  href="mailto:alokkiran777@gmail.com"
                  style={{
                    color: '#a855f7',
                    fontSize: '18px',
                    fontWeight: '500',
                    textDecoration: 'none'
                  }}
                >
                  alokkiran777@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}