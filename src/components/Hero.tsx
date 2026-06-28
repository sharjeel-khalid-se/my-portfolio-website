"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[100svh] w-full relative bg-brand-bg overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col-reverse md:flex-row items-center justify-between pt-32 pb-20 md:pb-0 md:pt-20 gap-12 md:gap-0">
        
        {/* Left Side - Text */}
        <div className="w-full md:w-[55%] flex flex-col justify-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent-light text-brand-accent font-body text-sm font-semibold w-max mb-8"
          >
            Available for new projects
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
          </motion.div>

          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-[64px] leading-[1.1] text-brand-text mb-6">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              I Build Websites
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.75 }}
            >
              That Book
            </motion.span>
            <motion.span
              className="block text-brand-accent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.9 }}
            >
              Clients.
            </motion.span>
          </h1>

          <motion.p
            className="font-body text-lg text-brand-muted max-w-md mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.1 }}
          >
            Full-stack developer specializing in high-converting websites for coaches
            and consultants. Based in Pakistan, working with clients worldwide.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.3 }}
          >
            <Link
              href="#work"
              className="px-8 py-4 bg-brand-accent text-white rounded-full font-body font-semibold hover:scale-105 transition-transform"
            >
              View My Work
            </Link>
            <a
              href="/resume.pdf"
              download="Sharjeel_Khalid_CV.pdf"
              className="px-8 py-4 border-2 border-brand-border text-brand-text rounded-full font-body font-semibold hover:border-brand-accent transition-colors"
            >
              Download CV
            </a>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
          >
            {["3 Sites Launched", "Next.js + Framer", "International Clients"].map((stat) => (
              <span
                key={stat}
                className="px-4 py-2 rounded-full border border-brand-border text-xs font-body font-medium text-brand-muted"
              >
                {stat}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Side - Headshot */}
        <div className="w-full md:w-[45%] flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]"
          >
            {/* Soft backdrop glow */}
            <div className="absolute inset-0 bg-brand-accent/20 rounded-full blur-3xl transform translate-y-4" />
            
            <motion.div 
              className="w-full h-full relative rounded-full overflow-hidden shadow-2xl border-4 border-[#E5E0D8]/50"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <Image 
                src="/images/headshot.png"
                alt="Sharjeel Khalid"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 400px, 450px"
              />
            </motion.div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
