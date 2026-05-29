"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, FileText, Eye, X } from 'lucide-react';
import { projectsData } from '@/app/data/projectsData';// Import your data

export default function DetailedProjectsView() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'branding' | 'packaging' | 'flyer'>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Work' },
    { id: 'branding', label: 'Branding' },
    { id: 'packaging', label: 'Packaging' },
    { id: 'flyer', label: 'Flyer' },
  ] as const;

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 bg-dominant">
      
      {/* 1. Category Filter */}
      <div className="flex flex-wrap items-center justify-start gap-2 mb-12 border-b border-secondary/10 pb-6">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`relative px-5 py-2.5 text-sm font-semibold transition-colors rounded-full cursor-pointer outline-none ${
              activeFilter === tab.id ? 'text-white' : 'text-secondary/60 hover:text-secondary'
            }`}
          >
            <span className="relative z-10">{tab.label}</span>
            {activeFilter === tab.id && (
              <motion.div
                layoutId="galleryFilterTab"
                className="absolute inset-0 bg-accent rounded-full z-0"
              />
            )}
          </button>
        ))}
      </div>

      {/* 2. Gallery Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              key={project.id}
              className="group relative rounded-[2.5rem] bg-secondary/5 border border-secondary/10 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300"
            >
              {/* Image with Hover Eye */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={project.imageSrc} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div 
                  onClick={() => setSelectedImage(project.imageSrc)}
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-center"
                >
                  <div className="p-4 rounded-full bg-white/90 text-black scale-90 group-hover:scale-100 transition-transform">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Simple Footer */}
              <div className="p-6">
                <div className="flex flex-col gap-1 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent font-bold">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-secondary tracking-tight">
                    {project.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between border-t border-secondary/10 pt-4">
                  {project.pdfUrl ? (
                    <a href={project.pdfUrl} target="_blank" className="flex items-center gap-1.5 text-xs font-bold text-secondary/60 hover:text-accent transition-colors">
                      <FileText className="w-3.5 h-3.5" />
                      View Document
                    </a>
                  ) : <div />}
                  <ArrowUpRight className="w-4 h-4 text-secondary/30 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* 3. Full Image Modal (Lightbox) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 p-3 text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors">
              <X className="w-6 h-6" />
            </button>
            
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent close on image click
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}