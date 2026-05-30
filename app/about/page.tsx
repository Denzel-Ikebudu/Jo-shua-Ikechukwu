"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import PageCanvas from '../components/page-canvas';
import DetailedAboutView from '@/app/pages/about/about'; 

export default function AboutRoute() {
  // Reusing your established high-fidelity motion tokens for cross-page physics continuity
  const containerVariants: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUpVariants: Variants = {
    initial: { opacity: 0, y: 40 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <PageCanvas
      activeRoute="about"
      gradientStyle="linear-gradient(135deg, #1e1b4b 0%, #090514 100%)"
      bgImageUrl=""
      underContent={
        <div className="w-full flex flex-col gap-4">
          <DetailedAboutView />
        </div>
      }
    >
      {/* Transformed layout boundary into an orchestrated motion matrix */}
      <motion.div 
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-5% 0px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-16 pb-12 text-white"
      >
        {/* Left Column Heading Block */}
        <div className="lg:col-span-6 flex flex-col justify-end">
          <motion.h1 
            variants={fadeInUpVariants}
            className="text-6xl md:text-8xl font-bold tracking-tight text-indigo-200"
          >
            About Me
          </motion.h1>
        </div>

        {/* Right Column Meta Narrative Block */}
        <div className="lg:col-span-6 flex flex-col justify-end max-w-md">
          <motion.h2 
            variants={fadeInUpVariants}
            className="text-2xl md:text-3xl font-semibold text-indigo-200"
          >
            The Person Behind the Work
          </motion.h2>
          
          <motion.p 
            variants={fadeInUpVariants}
            className="mt-4 text-sm md:text-base text-white leading-relaxed"
          >
            Rooted in engineering precision, driven by creative design. I combine structural logic with beautiful UI frameworks.
          </motion.p>
        </div>
      </motion.div>
    </PageCanvas>
  );
}