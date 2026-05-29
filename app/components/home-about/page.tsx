"use client";
import Button from '@/app/components/ui/button/button'
import { ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

interface ShowcaseItem {
  src: string;
  alt: string;
  wrapperClass: string;
}

export default function HomeAbout() {
  // Clean, high-end orchestration variants for a premium brand feel with explicit TypeScript typing
  const containerVariants: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeInUpVariants: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  // Structured array mapping for the image showcase columns to maintain clean, professional code
  const showcaseItems: ShowcaseItem[] = [
    {
      src: "/flyer/flyer1.jpg",
      alt: "premium flyer placeholder",
      wrapperClass: "",
    },
    {
      src: "/packaging/packaging4.jpg",
      alt: "premium packaging design placeholder",
      wrapperClass: "md:mt-12",
    },
    {
      src: "/flyer/flyer3.jpg",
      alt: "Premium flyer placeholder",
      wrapperClass: "md:mt-24",
    },
  ];

  return (
    <motion.section 
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, margin: "-10% 0px" }} // Set once to false so it re-triggers every time you scroll to the page
      className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 bg-dominant text-secondary transition-colors duration-300"
    >
      {/* 1. The Dynamic Top Grid: Split Text Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-x-16 gap-y-8 md:items-start mb-16 md:mb-20">
        
        {/* Left Column: Bold Headline */}
        <motion.div variants={fadeInUpVariants} className="space-y-3">
          {/* Label (Using locked-in Accent color) */}
          <span className="text-lg font-medium text-accent uppercase tracking-wider block">
            Behind the Designs
          </span>
          {/* Main Headline */}
          <h2 className="md:w-[38vw] text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight leading-[1.05] text-secondary">
            Crafting Designs <span className='text-accent'>That Gets You Noticed</span> 
          </h2>
        </motion.div>

        {/* Right Column: Description & Cobalt Button */}
        <motion.div variants={fadeInUpVariants} className="flex flex-col gap-8 md:pt-4">
          <p className="text-lg md:text-xl text-secondary/90 leading-relaxed font-semi-bold">
            With over 3 years of experience, we've built visual identities, logos, and brand systems making businesses clear and confident
          </p>
          
          {/* Action Area: Muted text & High-Contrast Button */}
          <div className="flex items-center justify-between md:justify-start gap-x-2 gap-y-4">
            <span className="text-sm font-medium text-secondary/60 leading-relaxed max-w-[200px]">
              Let's Build Something Meaningful Together!
            </span>
            
            {/* The "Get in Touch" Button (Utilizing locked-in Cobalt) */}
            <Button variant="accent" href="#about">
              About Me
            </Button>
          </div>
        </motion.div>
      </div>

      {/* 2. The Project/Image Showcase Grid: 3 Staggered Columns via Array Map */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 md:mt-24">
        {showcaseItems.map((item, index) => (
          <motion.div 
            key={index}
            variants={fadeInUpVariants}
            className={`aspect-[3/4] w-full overflow-hidden rounded-[2rem] border border-secondary/5 shadow-inner ${item.wrapperClass}`}
          >
            <img 
              src={item.src} 
              alt={item.alt} 
              className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
            />
          </motion.div>
        ))}
      </div>

    </motion.section>
  );
}