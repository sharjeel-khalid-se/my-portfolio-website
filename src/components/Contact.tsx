"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.3 6.5-1.5 6.5-7.1a5.8 5.8 0 0 0-1.6-4.1 5.4 5.4 0 0 0-.1-4s-1.3-.4-4 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-4-1.4-4-1.4a5.4 5.4 0 0 0-.1 4 5.8 5.8 0 0 0-1.6 4.1c0 5.6 3.3 6.8 6.5 7.1a4.8 4.8 0 0 0-1 3.03V22"/><path d="M9 20c-5 1.5-5-2.5-7-3"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
    
    try {
      const response = await fetch("https://formspree.io/f/xgojyrpe", {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        setFormState("success");
      } else {
        setFormState("idle");
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      setFormState("idle");
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-32 bg-[#1A1A2E] text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-20">
        
        {/* Left Side */}
        <div className="w-full lg:w-[45%] flex flex-col justify-between">
          <div>
            <h2 className="font-display font-bold text-5xl md:text-[64px] leading-[1.1] mb-6">
              Let&apos;s build<br />
              something<br />
              great.
            </h2>
            <p className="font-body text-lg text-[#94A3B8] max-w-sm mb-12">
              I&apos;m currently available for new projects. If you need a website that actually converts — let&apos;s talk.
            </p>
          </div>

          <div>
            <a 
              href="mailto:sharjeel.khalid.se@gmail.com" 
              className="font-body font-bold text-xl text-brand-accent hover:text-indigo-400 transition-colors mb-8 inline-block"
            >
              sharjeel.khalid.se@gmail.com
            </a>
            <div className="flex gap-6">
              <a href="https://github.com/sharjeel-khalid-se" target="_blank" className="text-white hover:text-brand-accent transition-colors">
                <GithubIcon />
              </a>
              <a href="https://linkedin.com/in/sharjeel-khalid-dev" target="_blank" className="text-white hover:text-brand-accent transition-colors">
                <LinkedinIcon />
              </a>
              <a href="https://www.upwork.com/freelancers/~01157dd14870c2171e" target="_blank" className="text-white hover:text-brand-accent font-body font-bold flex items-center transition-colors">
                <span className="text-xl leading-none">U<span className="text-[10px] align-top">p</span></span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-[55%]">
          {formState === "success" ? (
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center bg-white/5 rounded-2xl border border-white/10 p-12 text-center">
              <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mb-6">
                <Check size={32} className="text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4">Message sent!</h3>
              <p className="font-body text-[#94A3B8]">I&apos;ll reply within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6" action="https://formspree.io/f/xgojyrpe" method="POST">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-body text-sm font-medium text-[#94A3B8]">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="bg-white text-brand-primary font-body px-4 py-3 rounded-lg border border-[#4B5563] focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-body text-sm font-medium text-[#94A3B8]">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="bg-white text-brand-primary font-body px-4 py-3 rounded-lg border border-[#4B5563] focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="projectType" className="font-body text-sm font-medium text-[#94A3B8]">Project Type</label>
                  <div className="relative">
                    <select 
                      id="projectType" 
                      name="projectType" 
                      className="w-full bg-white text-brand-primary font-body px-4 py-3 rounded-lg border border-[#4B5563] focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all appearance-none"
                    >
                      <option>Landing Page</option>
                      <option>Full Website</option>
                      <option>Web Animations</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="budget" className="font-body text-sm font-medium text-[#94A3B8]">Budget Range</label>
                  <div className="relative">
                    <select 
                      id="budget" 
                      name="budget" 
                      className="w-full bg-white text-brand-primary font-body px-4 py-3 rounded-lg border border-[#4B5563] focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all appearance-none"
                    >
                      <option>Under $500</option>
                      <option>$500 - $1,500</option>
                      <option>$1,500 - $3,000</option>
                      <option>$3,000+</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-body text-sm font-medium text-[#94A3B8]">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  required 
                  className="bg-white text-brand-primary font-body px-4 py-3 rounded-lg border border-[#4B5563] focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={formState === "submitting"}
                className="w-full bg-brand-accent hover:bg-indigo-500 text-white font-body font-bold py-4 rounded-lg mt-2 transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {formState === "submitting" ? "Sending..." : "Send Message →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
