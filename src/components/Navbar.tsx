"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) setScrolled(true);
    else setScrolled(false);
  });

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-[100] transition-colors duration-300"
      initial={{ backgroundColor: "rgba(248, 247, 243, 0)", boxShadow: "none" }}
      animate={{
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(248, 247, 243, 0)",
        boxShadow: scrolled ? "0 1px 0 #E5E0D8" : "none",
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" data-cursor="view">
          <div className="w-2 h-2 rounded-full bg-brand-accent transition-transform group-hover:scale-150" />
          <span className="font-display font-bold text-xl tracking-tight text-brand-primary">
            Sharjeel Khalid
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Work", "About", "Services", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-body text-sm font-medium text-brand-muted hover:text-brand-accent transition-colors"
            >
              {item}
            </Link>
          ))}
          <Link
            href="#contact"
            className="px-6 py-2.5 bg-brand-accent text-white rounded-full font-body text-sm font-medium hover:scale-105 transition-transform"
          >
            Let&apos;s Talk
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-primary relative z-[101]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        className="fixed inset-0 bg-brand-bg flex flex-col items-center justify-center gap-8 md:hidden"
        style={{ zIndex: 100 }}
        initial={{ opacity: 0, y: "-100%" }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          y: mobileMenuOpen ? "0%" : "-100%",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {["Work", "About", "Services", "Contact"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMobileMenuOpen(false)}
            className="font-display text-4xl text-brand-primary font-bold hover:text-brand-accent transition-colors"
          >
            {item}
          </Link>
        ))}
      </motion.div>
    </motion.header>
  );
}
