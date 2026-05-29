"use client";
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Unified social configurations with custom inline path dimensions
  const socialLinks = [
    {
      name: "X (Twitter)",
      url: "https://x.com",
      svg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      svg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      svg: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      url: "https://tiktok.com",
      svg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.14 1.02.9 2.33 1.42 3.73 1.45v3.88c-1.33-.03-2.65-.39-3.8-1.07-.63-.37-1.19-.85-1.65-1.42v7.06c.04 1.83-.49 3.67-1.55 5.15-1.59 2.05-4.23 3.19-6.78 2.82-2.6-.26-4.94-2.03-5.78-4.52-.94-2.58-.33-5.61 1.51-7.65 1.61-1.92 4.18-2.87 6.67-2.45v3.91c-1.28-.31-2.67.12-3.52 1.13-.74.83-.97 2.05-.56 3.11.4 1.16 1.58 1.94 2.81 1.9 1.14.04 2.19-.71 2.54-1.79.13-.49.17-1 .16-1.51V0h.01z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "https://facebook.com",
      svg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      ),
    }
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/project" },
    { label: "Contact", href: "/#contact" }
  ];

  return (
    <footer className="w-full bg-dominant border-t border-secondary/10 transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 flex flex-col gap-12 md:gap-16">
        
        {/* Top Content Row: Dynamic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Brand Focus (5 Columns) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold tracking-tight text-secondary">
              IKECHUKWU JOSHUA<span className="text-accent">.</span>
            </h3>
            <p className="text-sm text-secondary/60 max-w-sm leading-relaxed">
              Architecting high-fidelity digital platforms and structural physical branding layers across multi-dimensional environments.
            </p>
          </div>

          {/* Column 2: Navigation Map (3 Columns) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="block text-xs font-mono uppercase tracking-widest text-secondary/40">Navigation</span>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="inline-block text-sm font-medium text-secondary/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect Portal (4 Columns) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="block text-xs font-mono uppercase tracking-widest text-secondary/40">Have an Idea?</span>
            <a 
              href="/#contact" 
              className="inline-flex items-center gap-2 group text-base font-bold text-secondary hover:text-accent transition-colors duration-200"
            >
              Let's kickstart your project
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 text-secondary" />
            </a>
            <p className="text-xs text-secondary/50 leading-relaxed max-w-xs">
              Drop us a line to discuss product engineering, standard asset design frameworks, or scaling architecture.
            </p>
          </div>

        </div>

        <div className="w-full h-px bg-secondary/10" />

        {/* Bottom Metadata Bar: Copyright & Fluid Social Matrices */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">
          
          {/* Copyright Metadata */}
          <div className="text-xs font-medium text-secondary/40 tracking-tight text-center md:text-left">
            &copy; {currentYear}. All rights reserved. Built with pixel precision.
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl bg-secondary/5 border border-secondary/10 flex items-center justify-center text-secondary/70 hover:text-white hover:bg-accent hover:border-accent transition-all duration-300"
              >
                {social.svg}
              </motion.a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}
