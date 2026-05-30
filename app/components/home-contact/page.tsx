"use client";

import React, { useRef, useState } from 'react';
import { ArrowRight, Mail, MapPin, Send } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [sending, setSending] = useState<boolean>(false);

  // Unified high-end orchestration variants matching your design tokens
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

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);

    emailjs
      .sendForm(
        "service_xqn0j0l",
        "template_mkbunnj",
        formRef.current,
        "Lci5RQHZh1v6a4ayY"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        formRef.current?.reset();
        setSending(false);
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.");
        setSending(false);
      });
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, margin: "-10% 0px" }}
      className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 bg-dominant text-secondary transition-colors duration-300"
      id='contact'
    >
      {/* 1. Header Layout Module: Matching Design Flow Matrix */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-x-16 gap-y-8 md:items-start mb-16 md:mb-24">
        {/* Left Column: Bold Headline */}
        <motion.div variants={fadeInUpVariants} className="space-y-3">
          <span className="md:text-lg font-medium text-accent uppercase tracking-wider block">
            Get In Touch
          </span>
          <h2 className="w-[90vw] md:w-[38vw] text-3xl md:text-5xl lg:text-5xl font-bold tracking-tight leading-[1.05] text-secondary">
            Let's Build Something <span className='text-accent'>Meaningful Together</span> 
          </h2>
        </motion.div>

        {/* Right Column: Description Text */}
        <motion.div variants={fadeInUpVariants} className="flex flex-col gap-8 md:pt-4">
          <p className="text-lg md:text-xl text-secondary/90 leading-relaxed font-semi-bold max-w-xl">
            Whether you need structural packaging, premium brand identities, or optimized interfaces—drop a line. Let's make your brand impossible to ignore.
          </p>
        </motion.div>
      </div>

      {/* 2. Interactive Section Layout: Divided into Info Block & Premium Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
        
        {/* Left Column: Essential Communications Context (5 Columns) */}
        <motion.div variants={fadeInUpVariants} className="lg:col-span-5 flex flex-col gap-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold tracking-tight text-secondary">Contact Information</h3>
            <p className="text-sm text-secondary/60">Expect a response within 24 business hours.</p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-secondary/5 border border-secondary/10 flex items-center justify-center text-accent group-hover:bg-accent/10 transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-secondary/40 font-mono">Email Me Directly</span>
                <a href="mailto:ikechukwujosh081@gmail.com" className="text-base font-semibold text-secondary hover:text-accent transition-colors">
                  ikechukwujosh081@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-secondary/5 border border-secondary/10 flex items-center justify-center text-accent group-hover:bg-accent/10 transition-colors duration-300">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-secondary/40 font-mono">Location</span>
                <span className="text-base font-semibold text-secondary">Enugu, Nigeria // Remote Available</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Premium High-Contrast Form Engine (7 Columns) */}
        <motion.div variants={fadeInUpVariants} className="lg:col-span-7 w-full">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="w-full flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full px-6 py-4 rounded-2xl bg-secondary/5 border border-secondary/10 text-secondary placeholder:text-secondary/40 focus:outline-none focus:border-accent/40 focus:bg-secondary/10 transition-all duration-300 font-medium text-sm"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                required
                className="w-full px-6 py-4 rounded-2xl bg-secondary/5 border border-secondary/10 text-secondary placeholder:text-secondary/40 focus:outline-none focus:border-accent/40 focus:bg-secondary/10 transition-all duration-300 font-medium text-sm"
              />
            </div>

            <textarea
              name="message"
              rows={6}
              placeholder="Tell me about your brand goals, project scope, or timelines..."
              required
              className="w-full px-6 py-4 rounded-2xl bg-secondary/5 border border-secondary/10 text-secondary placeholder:text-secondary/40 focus:outline-none focus:border-accent/40 focus:bg-secondary/10 transition-all duration-300 font-medium text-sm resize-none"
            />

            <div className="flex justify-end mt-2">
              <button
                type="submit"
                disabled={sending}
                className="flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold transition-all active:scale-95 bg-accent text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm cursor-pointer group"
              >
                {sending ? "Transmitting..." : "Send Message"}
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white text-accent overflow-hidden relative">
                  <Send className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </span>
              </button>
            </div>
          </form>
        </motion.div>

      </div>
    </motion.section>
  );
}