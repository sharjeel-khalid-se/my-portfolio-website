"use client";

import { useEffect, useRef } from "react";
import { Code2, Layout, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    icon: Code2,
    title: "Landing Pages",
    description: "High-converting single-page sites designed to turn visitors into booked calls. Full animations, Calendly integration, mobile-optimized.",
    price: "From $800"
  },
  {
    icon: Layout,
    title: "Full Websites",
    description: "Multi-page websites with CMS integration, blog, services pages, and complete brand identity implementation.",
    price: "From $1,500"
  },
  {
    icon: Zap,
    title: "Web Animations",
    description: "GSAP and Framer Motion animation layers added to existing sites. Scroll reveals, hero animations, interactive elements.",
    price: "From $400"
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".service-card"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
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
    <section id="services" className="py-32 bg-brand-bg" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-4xl md:text-[48px] text-brand-primary mb-6">
            What I Build
          </h2>
          <p className="font-body text-lg text-brand-muted">
            Every project is built around one outcome: more clients for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="service-card bg-white border border-brand-border rounded-2xl p-8 hover:border-brand-accent hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="w-14 h-14 bg-brand-accent-light rounded-xl flex items-center justify-center text-brand-accent mb-8">
                  <Icon size={28} strokeWidth={2} />
                </div>
                <h3 className="font-display font-bold text-2xl text-brand-primary mb-4">
                  {service.title}
                </h3>
                <p className="font-body text-brand-muted leading-relaxed mb-8 flex-1">
                  {service.description}
                </p>
                <div className="pt-6 border-t border-brand-border flex items-center justify-between">
                  <span className="font-body font-semibold text-brand-primary">Starting at</span>
                  <span className="font-body font-bold text-brand-accent">{service.price}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
