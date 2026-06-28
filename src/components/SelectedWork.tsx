"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SelectedWork() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const cards = containerRef.current.querySelectorAll(".project-card");
    
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <section id="work" className="py-32 bg-brand-bg relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-primary mb-4">
          Selected Work
        </h2>
        <p className="font-body text-lg text-brand-muted">
          Three distinct aesthetics. One goal: more booked calls.
        </p>
      </div>

      <div className="flex flex-col">
        {/* CARD 1 */}
        <div className="project-card border-t border-brand-border py-20">
          <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-[45%] flex flex-col items-start">
              <span className="px-4 py-1.5 rounded-full bg-brand-accent-light text-brand-accent text-xs font-bold font-body mb-6">
                Business Coach
              </span>
              <h3 className="font-display font-bold text-3xl md:text-4xl text-brand-primary mb-6">
                Daniel Mercer Coaching
              </h3>
              <p className="font-body text-brand-muted mb-8 text-lg">
                A high-converting landing page for a business growth coach targeting founders at $5k-$15k/month. Dark navy aesthetic with Framer Motion animations and Calendly booking integration.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Next.js", "Tailwind", "Framer Motion", "Calendly"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-brand-surface rounded-md text-xs font-body font-medium text-brand-muted">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-6">
                <a href="#" className="font-body font-bold text-brand-primary hover:text-brand-accent transition-colors flex items-center gap-2 group" data-cursor="view">
                  View Live <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a href="https://github.com/sharjeel-khalid-se/daniel-mercer-coaching" target="_blank" className="font-body font-bold text-brand-muted hover:text-brand-primary transition-colors flex items-center gap-2 group">
                  GitHub <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-[55%] aspect-video bg-[#0F172A] rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-500 flex items-center justify-center p-8 relative group" data-cursor="view">
              <div className="w-full h-full border border-slate-800 rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col overflow-hidden shadow-2xl relative z-10 group-hover:shadow-[0_0_40px_rgba(79,70,229,0.2)] transition-shadow">
                {/* Browser Chrome */}
                <div className="h-8 bg-slate-900/80 border-b border-slate-800 flex items-center px-4 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <div className="mx-auto bg-slate-800 rounded-sm px-4 py-0.5 text-[10px] text-slate-400 font-body">danielmercer.co</div>
                </div>
                <div className="flex-1 relative overflow-hidden w-full h-full min-h-[200px]">
                  <Image 
                    src="/images/daniel-mercer.png" 
                    alt="Daniel Mercer Coaching" 
                    fill 
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="project-card border-t border-brand-border py-20 bg-brand-surface/50">
          <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="w-full lg:w-[45%] flex flex-col items-start">
              <span className="px-4 py-1.5 rounded-full bg-brand-accent-light text-brand-accent text-xs font-bold font-body mb-6">
                Executive Coach
              </span>
              <h3 className="font-display font-bold text-3xl md:text-4xl text-brand-primary mb-6">
                Victoria Hayes Coaching
              </h3>
              <p className="font-body text-brand-muted mb-8 text-lg">
                Editorial light design for a career and executive coach. Warm off-white palette, Playfair Display typography, and AI-generated photography.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Next.js", "Tailwind", "Framer Motion", "Formspree"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white border border-brand-border rounded-md text-xs font-body font-medium text-brand-muted">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-6">
                <a href="#" className="font-body font-bold text-brand-primary hover:text-brand-accent transition-colors flex items-center gap-2 group" data-cursor="view">
                  View Live <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a href="https://github.com/sharjeel-khalid-se/Victoria-Hayes-coaching-site" target="_blank" className="font-body font-bold text-brand-muted hover:text-brand-primary transition-colors flex items-center gap-2 group">
                  GitHub <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-[55%] aspect-video bg-[#FDFBF7] rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-500 flex items-center justify-center p-8 relative group" data-cursor="view">
              <div className="w-full h-full border border-[#E5E0D8] rounded-lg bg-gradient-to-br from-[#FAF9F6] to-[#F0EBE1] flex flex-col overflow-hidden shadow-xl relative z-10">
                {/* Browser Chrome */}
                <div className="h-8 bg-[#FDFBF7] border-b border-[#E5E0D8] flex items-center px-4 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <div className="mx-auto bg-black/5 rounded-sm px-4 py-0.5 text-[10px] text-brand-muted font-body">victoriahayes.co</div>
                </div>
                <div className="flex-1 relative overflow-hidden w-full h-full min-h-[200px]">
                  <Image 
                    src="/images/victoria-hayes.png" 
                    alt="Victoria Hayes Coaching" 
                    fill 
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="project-card border-t border-brand-border py-20">
          <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-[45%] flex flex-col items-start">
              <span className="px-4 py-1.5 rounded-full bg-brand-accent-light text-brand-accent text-xs font-bold font-body mb-6">
                Fitness Coach
              </span>
              <h3 className="font-display font-bold text-3xl md:text-4xl text-brand-primary mb-6">
                Marcus Reid Performance
              </h3>
              <p className="font-body text-brand-muted mb-8 text-lg">
                Awwwards-level cinematic site with Three.js particle field, GSAP clip-path animations, custom magnetic cursor, and Lenis smooth scroll.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Next.js", "Three.js", "GSAP", "React Three Fiber"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-brand-surface rounded-md text-xs font-body font-medium text-brand-muted">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-6">
                <a href="#" className="font-body font-bold text-brand-primary hover:text-brand-accent transition-colors flex items-center gap-2 group" data-cursor="view">
                  View Live <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a href="https://github.com/sharjeel-khalid-se/marcus-reid-coaching" target="_blank" className="font-body font-bold text-brand-muted hover:text-brand-primary transition-colors flex items-center gap-2 group">
                  GitHub <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-[55%] aspect-video bg-[#000000] rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-500 flex items-center justify-center p-8 relative group" data-cursor="view">
              <div className="w-full h-full border border-[#111111] rounded-lg bg-[#050505] flex flex-col overflow-hidden shadow-2xl relative z-10 group-hover:shadow-[0_0_40px_rgba(163,230,53,0.1)] transition-shadow">
                {/* Browser Chrome */}
                <div className="h-8 bg-[#0a0a0a] border-b border-[#1a1a1a] flex items-center px-4 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                  <div className="mx-auto bg-[#111] rounded-sm px-4 py-0.5 text-[10px] text-lime-500/50 font-body">reidperformance.co</div>
                </div>
                <div className="flex-1 relative overflow-hidden w-full h-full min-h-[200px]">
                  <Image 
                    src="/images/marcus-reid.png" 
                    alt="Marcus Reid Performance" 
                    fill 
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
