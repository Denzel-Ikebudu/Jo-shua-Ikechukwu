"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useTheme } from '../ThemeProvider'; // Adjust the import path
import { Sun, Moon } from 'lucide-react';

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
            className="absolute inset-0 bg-cover md:bg-contain bg-center opacity-80 mix-blend-luminosity pointer-events-none transition-opacity duration-500 group-hover:opacity-40"
            style={{ backgroundImage: `url(${bgImageUrl})` }}
          />
        )}

        {/* Top Navigation Bar (Routing to real pages) */}
        <nav className="relative z-10 flex items-center justify-between w-full">
          <Link href="/" className="text-xl md:text2xl font-bold tracking-tight text-white">
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
              href="/projects" 
              className={`hover:text-white transition-colors ${activeRoute === 'projects' ? 'text-white underline underline-offset-4 font-semibold' : ''}`}
            >
              Projects
            </Link>
          </div>

          <div className="flex items-center gap-2">
          <button 
          onClick={toggleTheme} 
          className="p-2 border border-secondary rounded-full hover:bg-secondary/10 transition-all active:scale-95"
          aria-label="Toggle structural theme"
        >
          {theme === 'light' ? (
            <Moon className="w-5 h-5 text-secondary" strokeWidth={2} />
          ) : (
            <Sun className="w-5 h-5 text-secondary" strokeWidth={2} />
          )}
          </button>

          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all active:scale-95 bg-white text-[#111111] hover:bg-white/90">
            Get in touch
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent text-white">
              <ArrowUpRight className="w-3 h-3" />
            </span>
          </button>
          </div>
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