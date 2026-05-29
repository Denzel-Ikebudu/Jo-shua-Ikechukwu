"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'light' | 'accent';
  href?: string;
  children: React.ReactNode;
}

export default function Button({ variant, href, children, className = '', ...props }: ButtonProps) {
  
  // Base classes handling general styles and responsive downscaling
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all active:scale-95 shrink-0 select-none cursor-pointer";

  // Variant design systems with mobile-first layout mapping
  const variantStyles = {
    light: "bg-white text-[#111111] hover:bg-white/90 gap-1.5 px-4 py-2 text-xs md:gap-2 md:px-5 md:py-2.5 md:text-sm font-medium",
    accent: "bg-accent text-white hover:opacity-90 gap-2 px-4 py-2.5 text-xs md:gap-3 md:px-6 md:py-3.5 md:text-sm md:font-semibold"
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  // Embedded internal asset modules for strict layout isolation
  const renderIcon = () => {
    if (variant === 'light') {
      return (
        <span className="flex items-center justify-center w-4 h-4 md:w-5 md:h-5 rounded-full bg-black text-white shrink-0">
          <ArrowUpRight className="w-2.5 h-2.5 md:w-3 md:h-3" />
        </span>
      );
    }

    if (variant === 'accent') {
      return (
        <motion.span 
          animate={{ x: [-8, 10] }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear"
          }}
          className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full bg-white text-accent overflow-hidden relative shrink-0"
        >
          <span className="flex items-center justify-center absolute layout">
            <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" />
          </span>
        </motion.span>
      );
    }

    return null;
  };

  // If href is present, change the polymorphic layout context to a client-side link
  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
        {renderIcon()}
      </Link>
    );
  }

  // Fallback to strict standard functional button elements
  return (
    <button className={combinedClasses} {...props}>
      {children}
      {renderIcon()}
    </button>
  );
}