"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download } from 'lucide-react';
import Link from 'next/link'
import PageCanvas from './components/page-canvas';
import HomeAbout from '@/app/components/home-about/page';
import HomeServices from '@/app/components/home-services/page';
import HomeContact from '@/app/components/home-contact/page';


export default function LandingPage() {
  // Animation presets for clean, high-end motion design aesthetics
  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <PageCanvas
      activeRoute="home"
      gradientStyle="linear-gradient(135deg, #0047FF 0%, #0d111c 100%)"
      bgImageUrl="/josh.jpg"
      underContent={
        <div className="w-full flex flex-col gap-4">
          {/* Brief About Section */}
          <HomeAbout />
          <HomeServices />
          <HomeContact />
          
        </div>
      }
    >
      {/* Content Inside Card - Interactive Presentation Structure via Framer Motion */}
      <motion.div 
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="flex flex-col h-full justify-between pt-30 md:pt-40 pb-6 text-white"
      >
        {/* Main Header Grid Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-24">
          <motion.div variants={fadeInUp} className="lg:col-span-7">
            <p className="text-lg font-medium text-white/80 mb-2">Hey, I'm a</p>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-[0.95]">
              Senior Brand <br />
              <span className="text-accent drop-shadow-[1px_1px_0_black]">Identity Designer</span>
            </h1>
          </motion.div>

          <motion.div variants={fadeInUp} className="lg:col-span-5 flex flex-col justify-end lg:pb-4">
            <h2 className="text-xl md:text-3xl leading-snug max-w-md">
              Building Distinct Brands <span className="text-accent">Through Strategy & Design</span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/70 max-w-sm leading-relaxed">
              I help businesses stand out through strategic brand identities, logo systems, packaging, and impactful visual communications
            </p>
            
            {/* Optimized CTA Buttons with Clean Micro-Interactions */}
            <div className="flex flex-wrap gap-4 pt-10">
              <Link 
                href="#services" 
                className="text-sm md:text-md inline-flex items-center gap-2 bg-accent text-white text-base font-semibold px-6 py-3.5 rounded-full hover:bg-accent/90 transition-all duration-200 shadow-lg active:scale-95 group"
              >
                View Services
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link 
                href="#cv" 
                className="text-sm md:text-md inline-flex items-center gap-2 border border-white/20 text-white text-base font-semibold px-6 py-3.5 rounded-full hover:bg-white/10 transition-all duration-200 active:scale-95"
              >
                Download CV
                <Download className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Premium Horizontal Description Metrics Bar at the Base of the Card */}
        <motion.div 
          variants={fadeInUp}
          className="w-full border-t border-white/10 pt-8 mt-auto flex flex-col sm:flex-row items-start sm:items-center gap-8 md:gap-16 text-white"
        >
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold tracking-tight text-accent">3+</span>
            <span className="text-sm font-medium tracking-wide text-white/70 uppercase font-mono">Years Experience</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold tracking-tight text-accent">80+</span>
            <span className="text-sm font-medium tracking-wide text-white/70 uppercase font-mono">Projects</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold tracking-tight text-accent">45+</span>
            <span className="text-sm font-medium tracking-wide text-white/70 uppercase font-mono">Happy Clients</span>
          </div>
        </motion.div>
      </motion.div>
    </PageCanvas>
  );
}