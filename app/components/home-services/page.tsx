"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, FileText } from 'lucide-react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import Button from '@/app/components/ui/button/button'

interface ServiceSection {
  id: string;
  tag: string;
  title: string;
  description: string;
  images: string[];
  pdfUrl?: string;   // Retained for single document links
  pdfUrls?: string[]; // Added to handle a unique PDF per slide layout
}

export default function ServicesPage() {
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

  const servicesData: ServiceSection[] = [
    {
      id: "flyers",
      tag: "01 Marketing Assets",
      title: "Premium Flyer & Poster Design",
      description: "High-impact visual assets designed to grab attention immediately. From digital events to printed brand collateral, every composition balances typography and layout structure perfectly.",
      images: [
        "/flyer/flyer1.jpg",
        "/flyer/flyer2.jpg",
        "/flyer/flyer3.jpg",
      ]
    },
    {
      id: "packaging",
      tag: "02 Product Experience",
      title: "Structural Packaging & Label Design",
      description: "Turning physical products into tactile brand experiences. We design dimensional layouts, custom boxes, container labels, and premium finishes that dominate retail shelves.",
      images: [
        "/packaging/packaging1.jpg",
        "/packaging/packaging2.jpg",
        "/packaging/packaging4.jpg",
      ]
    },
    {
      id: "branding",
      tag: "03 Ecosystem Architecture",
      title: "Complete Brand Identity Systems",
      description: "Comprehensive logo systems, style matrices, asset kits, and guidelines. We build scalable identity structures that stay consistent across digital products and real-world mediums.",
      images: [
        "/cover/cover3.jpg", 
        "/cover/cover2.jpg",
        "/cover/cover1.jpg",
      ],
      pdfUrls: [
        "/branding/branding3.pdf", 
        "/branding/branding2.pdf",
        "/branding/branding1.pdf",
      ]
    }
  ];

  return (
    <motion.section 
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, margin: "-10% 0px" }}
      className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 bg-dominant text-secondary transition-colors duration-300"
      id='services'
    >
      {/* 1. Header Layout Module */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-x-16 gap-y-8 md:items-start mb-20 md:mb-28">
        <motion.div variants={fadeInUpVariants} className="space-y-3">
          <span className="text-lg font-medium text-accent uppercase tracking-wider block">
            What We Deliver
          </span>
          <h2 className="md:w-[38vw] text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight leading-[1.05] text-secondary">
            Strategic Services <span className='text-accent'>Built to Scale Your Brand</span> 
          </h2>
        </motion.div>

        <motion.div variants={fadeInUpVariants} className="flex flex-col gap-8 md:pt-4">
          <p className="text-lg md:text-xl text-secondary/90 leading-relaxed font-semi-bold max-w-xl">
            We bridge the gap between production engineering and visual art, offering specialized design execution across physical and digital storefronts.
          </p>
          
          <div className="flex items-center justify-between md:justify-start gap-x-2 gap-y-4">
            <span className="text-sm font-medium text-secondary/60 leading-relaxed max-w-[200px]">
              Ready to redefine your visual presence?
            </span>
            
            <Button variant="accent" href="#about">
              Projects
            </Button>
          </div>
        </motion.div>
      </div>

      {/* 2. Content Showcase Section */}
      <div className="flex flex-col gap-24 md:gap-32">
        {servicesData.map((service) => (
          <motion.div 
            key={service.id}
            variants={fadeInUpVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Content Description Block */}
            <div className="lg:col-span-5 flex flex-col gap-4 items-start">
              <span className="text-sm font-mono text-accent uppercase tracking-widest">{service.tag}</span>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-secondary">{service.title}</h3>
              <p className="text-base text-secondary/80 leading-relaxed mt-2">{service.description}</p>
              
              {/* Fallback single document link if pdfUrls collection is absent */}
              {service.pdfUrl && !service.pdfUrls && (
                <a 
                  href={service.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full text-sm font-semibold border border-accent text-accent hover:bg-accent/5 transition-colors duration-200 active:scale-95"
                >
                  <FileText className="w-4 h-4" />
                  View Document
                </a>
              )}
            </div>

            {/* Right Interactive Carousel Module */}
            <div className="lg:col-span-7 w-full">
              <ServiceCarousel 
                images={service.images} 
                altContext={service.title} 
                pdfUrls={service.pdfUrls} 
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

/* --- ISOLATED CAROUSEL SYSTEM COMPONENT --- */
interface CarouselProps {
  images: string[];
  altContext: string;
  pdfUrls?: string[];
}

function ServiceCarousel({ images, altContext, pdfUrls }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  // Added direct explicit typing context to address internal layout array tuples
  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    })
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full aspect-[4/3] rounded-[2rem] border border-secondary/5 overflow-hidden shadow-inner bg-accent/5 group">
      
      {/* Floating Action: Dynamic PDF Opener linked directly to active image index */}
      {pdfUrls && pdfUrls[currentIndex] && (
        <a 
          href={pdfUrls[currentIndex]}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-6 right-6 z-20 inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-dominant/90 backdrop-blur-md text-secondary border border-secondary/10 shadow-md hover:bg-dominant transition-all duration-200 active:scale-95"
        >
          <FileText className="w-3.5 h-3.5 text-accent" />
          View Document
        </a>
      )}

      {/* Structural Sliding Track Container */}
      <div className="absolute inset-0 w-full h-full p-4 flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${altContext} illustration frame ${currentIndex + 1}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute max-w-[90%] max-h-[90%] object-contain select-none transition-transform duration-500"
          />
        </AnimatePresence>
      </div>

      {/* Interactive Navigation Overlays */}
      <div className="absolute inset-x-6 bottom-6 flex justify-between items-center z-10 pointer-events-none">
        
        {/* Frame Progress Bubble Mapping Indicator */}
        <div className="flex gap-1.5 bg-dominant/80 backdrop-blur-md px-3 py-2 rounded-full border border-secondary/10 shadow-xs pointer-events-auto">
          {images.map((_, dotIndex) => (
            <div
              key={dotIndex}
              onClick={() => {
                setDirection(dotIndex > currentIndex ? 1 : -1);
                setCurrentIndex(dotIndex);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === dotIndex ? "w-6 bg-accent" : "w-1.5 bg-secondary/30"
              }`}
            />
          ))}
        </div>

        {/* Action Controls Container */}
        <div className="flex gap-2 pointer-events-auto">
          <button 
            onClick={handlePrev}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-dominant/80 backdrop-blur-md text-secondary border border-secondary/10 transition-all duration-200 active:scale-90 hover:bg-dominant shadow-xs cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={handleNext}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-dominant/80 backdrop-blur-md text-secondary border border-secondary/10 transition-all duration-200 active:scale-90 hover:bg-dominant shadow-xs cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
}