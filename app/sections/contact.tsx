"use client";
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MessageSquare, Send, Sparkles, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(".contact-header", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-header",
          start: "top 80%",
        }
      });

      // Form animation
      gsap.from(".contact-form", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
        }
      });

      // Info cards animation
      gsap.from(".contact-info", {
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-info-wrapper",
          start: "top 80%",
        }
      });

      // Sparkles animation
      gsap.to(".sparkle", {
        rotation: 360,
        duration: 3,
        repeat: -1,
        ease: "none",
        stagger: 0.5
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        const errorData = await response.json();
        console.error('Error sending email:', errorData);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Network error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden" id="contact">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-purple-500/10 to-transparent rounded-full blur-3xl" />
      
      {/* Floating sparkles */}
      <Sparkles className="sparkle absolute top-20 left-10 w-6 h-6 text-purple-400/20" />
      <Sparkles className="sparkle absolute top-40 right-20 w-8 h-8 text-pink-400/20" />
      <Sparkles className="sparkle absolute bottom-20 left-20 w-5 h-5 text-blue-400/20" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="contact-header text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto px-4">
            Have a project in mind or just want to chat? I&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact info */}
          <div className="contact-info-wrapper space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="contact-info">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Get in Touch</h3>
              <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                I&apos;m always open to discussing new opportunities, innovative projects, 
                or just having a friendly conversation about technology.
              </p>
            </div>

            {/* Contact methods */}
            <div className="contact-info space-y-4 sm:space-y-6">
              <Link 
                href="mailto:alokkiran777@gmail.com"
                className="flex items-center gap-3 sm:gap-4 glass-effect p-4 sm:p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 sm:w-6 h-5 sm:h-6" />
                </div>
                <div>
                  <p className="font-semibold group-hover:text-purple-400 transition-colors text-sm sm:text-base">Email</p>
                  <p className="text-gray-400 text-xs sm:text-sm">alokkiran777@gmail.com</p>
                </div>
              </Link>

              <Link 
                href="https://www.linkedin.com/in/alokkiran/"
                target="_blank"
                className="flex items-center gap-3 sm:gap-4 glass-effect p-4 sm:p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 sm:w-6 h-5 sm:h-6" />
                </div>
                <div>
                  <p className="font-semibold group-hover:text-purple-400 transition-colors text-sm sm:text-base">LinkedIn</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Let&apos;s connect professionally</p>
                </div>
              </Link>
            </div>

            {/* Fun fact */}
            <div className="contact-info glass-effect rounded-xl p-4 sm:p-6">
              <p className="text-xs sm:text-sm text-gray-400 mb-2">Fun fact</p>
              <p className="text-base sm:text-lg">
                I respond to messages faster than a <span className="gradient-text font-semibold">Promise.resolve()</span> 🚀
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="contact-form order-1 lg:order-2">
            <form ref={formRef} onSubmit={handleSubmit} className="glass-effect rounded-2xl p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {status === 'idle' && (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
                {status === 'sending' && (
                  <>
                    Sending...
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  </>
                )}
                {status === 'success' && (
                  <>
                    Message Sent!
                    <CheckCircle className="w-5 h-5" />
                  </>
                )}
                {status === 'error' && (
                  <>
                    Error. Try Again
                    <AlertCircle className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}