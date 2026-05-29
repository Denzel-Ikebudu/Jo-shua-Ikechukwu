"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '../ThemeProvider';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/app/components/ui/button/button';

interface PageCanvasProps {
  activeRoute: 'home' | 'about' | 'projects';
  gradientStyle: string;       
  bgImageUrl?: string;           
  children: React.ReactNode;     // Layout content INSIDE the card
  underContent?: React.ReactNode; // Unique layout content UNDERNEATH the card
}

export default function PageCanvas({
  activeRoute,
  gradientStyle,
  bgImageUrl,
  children,
  underContent
}: PageCanvasProps) {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen w-full bg-dominant transition-colors duration-300">
      
      {/* Dynamic Colorful Card Shell */}
      <div 
        className="relative w-full rounded-b-[2.5rem] overflow-hidden px-6 pt-6 pb-12 md:px-12 md:pt-8 md:pb-16 flex flex-col justify-between min-h-[85vh] shadow-xl transition-all duration-500"
        style={{ background: gradientStyle }}
      >
        {/* BACKGROUND IMAGE PROVISION: Heavy image overlay with mix-blend-mode for an editorial feel */}
        {bgImageUrl && (
          <div 
            className="absolute inset-0 bg-auto bg-top bg-no-repeat md:bg-repeat md:bg-contain bg-center opacity-90 md:opacity-70 mix-blend-luminosity pointer-events-none transition-opacity duration-500 group-hover:opacity-40"
            style={{ backgroundImage: `url(${bgImageUrl})` }}
          />
        )}

        {/* Top Navigation Bar (Routing to real pages) */}
        <nav className="relative z-20 flex items-center justify-between w-full">
          <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight text-white">
            Ikechukwu Joshua
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
            <Link 
              href="/" 
              className={`hover:text-white transition-colors ${activeRoute === 'home' ? 'text-white underline underline-offset-4 font-semibold' : ''}`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`hover:text-white transition-colors ${activeRoute === 'about' ? 'text-white underline underline-offset-4 font-semibold' : ''}`}
            >
              About
            </Link>
            <Link 
              href="/project" 
              className={`hover:text-white transition-colors ${activeRoute === 'projects' ? 'text-white underline underline-offset-4 font-semibold' : ''}`}
            >
              Projects
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={toggleTheme} 
              className="p-2 border border-white/20 rounded-full hover:bg-white/10 text-white transition-all active:scale-95 cursor-pointer"
              aria-label="Toggle structural theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" strokeWidth={2} />
              ) : (
                <Sun className="w-5 h-5" strokeWidth={2} />
              )}
            </button>

            {/* Desktop Only Button */}
            <div className="hidden md:block">
              <Button variant="light" href="#contact">
                Get in touch
              </Button>
            </div>

            {/* Mobile Only Hamburger Menu Control */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 border border-white/20 rounded-full hover:bg-white/10 text-white transition-all active:scale-95"
              aria-label="Toggle responsive menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Animated Responsive Dropdown Menu Module */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-14 left-0 right-0 z-30 md:hidden bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex flex-col gap-5 shadow-2xl mt-2 origin-top"
              >
                <div className="flex flex-col gap-3 text-base font-medium text-white/90">
                  <Link 
                    href="/" 
                    onClick={() => setIsMenuOpen(false)}
                    className={`hover:text-white transition-colors py-1 ${activeRoute === 'home' ? 'text-white font-semibold underline underline-offset-4' : ''}`}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/about" 
                    onClick={() => setIsMenuOpen(false)}
                    className={`hover:text-white transition-colors py-1 ${activeRoute === 'about' ? 'text-white font-semibold underline underline-offset-4' : ''}`}
                  >
                    About
                  </Link>
                  <Link 
                    href="/project" 
                    onClick={() => setIsMenuOpen(false)}
                    className={`hover:text-white transition-colors py-1 ${activeRoute === 'projects' ? 'text-white font-semibold underline underline-offset-4' : ''}`}
                  >
                    Projects
                  </Link>
                </div>
                <hr className="border-white/10" />
                <div onClick={() => setIsMenuOpen(false)} className="w-full">
                  <Button variant="light" href="#contact" className="w-full justify-center">
                    Get in touch
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Content Inside Card */}
        <div className="relative z-10 w-full flex-grow flex flex-col justify-center">
          {children}
        </div>

      </div>

      {/* Content Underneath Card (Completely unique per page) */}
      <div className="w-full mt-2">
        {underContent}
      </div>

    </main>
  );
}