"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function AboutPage() {
  const containerVariants: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.12,
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
    <motion.section 
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, margin: "-10% 0px" }}
      className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32 bg-dominant text-secondary transition-colors duration-300"
      id="about"
    >
      {/* Asymmetric Design Grid System split to match the uploaded composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Core Headline Module (5 Columns) */}
        <motion.div variants={fadeInUpVariants} className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
          <span className="text-lg font-semibold text-[#7A9A86] uppercase tracking-wider block">
            Who I Am
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-secondary">
            Design with <span className='text-[#7a9a86]'>Purpose and Personality</span>
          </h2>
        </motion.div>

        {/* Right Column: Strategic Narrative Blocks (7 Columns) */}
        <div className="lg:col-span-7 flex flex-col gap-8 lg:pt-12">
          
          {/* Bold Intro Statement */}
          <motion.h3 
            variants={fadeInUpVariants} 
            className="text-2xl md:text-3xl font-bold tracking-tight text-secondary leading-snug"
          >
            Shaping meaningful brands through <span className='text-[#7a9a86]'>strategy, creativity, and collaboration.</span>
          </motion.h3>

          {/* Deep Narrative Copy Blocks */}
          <motion.div variants={fadeInUpVariants} className="flex flex-col gap-6 text-base md:text-lg text-secondary/70 leading-relaxed font-light">
            <p>
              I'm a Senior Brand Identity Designer with over 3 years of experience building visual identities,
              logos, and brand systems for businesses looking to stand out with clarity and confidence 
            </p>
            
            <p>
              My journey into design wasn't perfect or easy. Like many creatives, I started with limited 
              resources, self-doubt, and the challenge of trying to find my own style in a highly competitive
              industry. There were moments of rejection, inconsistency, creative burnout, and projects that didnt
              go as plannedb - but those experiences became part of the process that shaped me as a designer.
            </p>
            
            <p>
              Today, I focus on creating brand identities that are not only visually strong, but meaningfully
              memorable, and built with purpose. From logo systems to packaging and marketing visuals, my goal
              is to help brands communicate confidently and leave a strong impression.
            </p>
            <p>
              Whether you're launching something new or refining an existing 
              brand, I'm here to guide you through the journey—offering not just 
              design, but direction, partnership, and care every step of the way.
            </p>
          </motion.div>

        </div>

      </div>
    </motion.section>
  );
}