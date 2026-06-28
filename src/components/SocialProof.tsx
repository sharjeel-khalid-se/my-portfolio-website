"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SocialProof() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section className="py-12 bg-brand-surface border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-6 text-center" ref={textRef}>
        <p className="font-body text-sm font-medium text-brand-muted mb-4">
          Built for coaches and consultants at:
        </p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {[
            "Business Coaches",
            "Executive Coaches",
            "Career Coaches",
            "Performance Coaches",
            "Consultants",
            "Founders",
          ].map((item, index) => (
            <span
              key={item}
              className="font-display font-semibold text-lg md:text-xl text-brand-primary opacity-60 flex items-center gap-8"
            >
              {item}
              {index !== 5 && <span className="text-brand-accent">•</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
