"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".about-reveal"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section id="about" className="py-32 bg-brand-surface" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 md:gap-20">
        
        {/* Left Side - Image */}
        <div className="w-full md:w-[45%] relative about-reveal">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
            <Image
              src="/images/Working_Shot_About_Section.png"
              alt="Sharjeel Khalid working"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          {/* Decorative Corner */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-brand-accent rounded-tl-xl z-[-1]" />
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 bg-white px-6 py-4 rounded-xl shadow-xl border border-brand-border flex items-center gap-3">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <span className="font-body font-bold text-sm text-brand-primary">Open to Work</span>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-[55%] flex flex-col items-start pt-10 md:pt-0">
          <span className="about-reveal font-body text-sm font-bold tracking-widest text-brand-accent uppercase mb-4">
            About Me
          </span>
          <h2 className="about-reveal font-display font-bold text-4xl md:text-[40px] leading-tight text-brand-primary mb-8">
            Self-taught developer.<br />
            Full-time builder.
          </h2>
          
          <div className="about-reveal font-body text-brand-muted space-y-4 mb-10 text-base md:text-[16px] leading-relaxed">
            <p>
              I&apos;m Sharjeel Khalid — a BS Software Engineering student at Virtual University of Pakistan and a self-taught full-stack developer.
            </p>
            <p>
              I specialize in building high-converting websites for coaches and consultants — the kind that actually book discovery calls, not just look good.
            </p>
            <p>
              My stack: Next.js, React, TypeScript, Tailwind CSS, Framer Motion, and GSAP. Currently exploring AI Engineering and building toward a full AI-powered web development service.
            </p>
          </div>

          <div className="about-reveal w-full mb-12">
            <div className="grid grid-cols-2 gap-3">
              {[
                "Next.js", "React", "TypeScript", "Node.js",
                "Tailwind CSS", "Framer Motion", "GSAP", "Three.js",
                "MongoDB", "Prisma", "PostgreSQL", "REST APIs"
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/50" />
                  <span className="font-body text-sm font-medium text-brand-primary">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            className="about-reveal font-body font-bold text-brand-accent hover:text-indigo-700 transition-colors flex items-center gap-2 group"
          >
            Download My CV <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
