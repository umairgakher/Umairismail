'use client';

import { useEffect, useRef } from 'react';
import { contactInfo } from '@/data/portfolioData';

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative z-10 min-h-[80vh] flex flex-col items-center justify-center px-4 py-24">
      <div className="glass rounded-3xl p-8 md:p-14 max-w-4xl w-full fade-up flex flex-col items-center">
        
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold gradient-text-white text-center mb-4">
          Let's Connect
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-lg">
          I'm currently available for new opportunities. Whether you have a question, a project proposal, or just want to say hi, feel free to reach out!
        </p>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 w-full max-w-3xl">
          
          {/* Email */}
          <a 
            href={`mailto:${contactInfo.email}`}
            className="glass-inner rounded-2xl p-6 flex flex-col items-center gap-4 hover:border-indigo-500/50 hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-center">
              <h3 className="text-white font-semibold mb-1">Email</h3>
              <p className="text-sm text-slate-400 group-hover:text-indigo-300 transition-colors">
                {contactInfo.email}
              </p>
            </div>
          </a>

          {/* Phone */}
          <a 
            href={`tel:${contactInfo.phone}`}
            className="glass-inner rounded-2xl p-6 flex flex-col items-center gap-4 hover:border-purple-500/50 hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="text-center">
              <h3 className="text-white font-semibold mb-1">Phone</h3>
              <p className="text-sm text-slate-400 group-hover:text-purple-300 transition-colors">
                {contactInfo.phone}
              </p>
            </div>
          </a>

          {/* Location */}
          <div className="glass-inner rounded-2xl p-6 flex flex-col items-center gap-4 hover:border-cyan-500/50 hover:-translate-y-2 transition-all duration-300 group cursor-default">
            <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="text-center">
              <h3 className="text-white font-semibold mb-1">Location</h3>
              <p className="text-sm text-slate-400 group-hover:text-cyan-300 transition-colors">
                {contactInfo.location}
              </p>
            </div>
          </div>

        </div>

        {/* Action Button */}
        <div className="mt-12">
          <a
            href={`mailto:${contactInfo.email}`}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-1 transition-all duration-300 text-center text-sm inline-flex items-center gap-2"
          >
            Say Hello <span>👋</span>
          </a>
        </div>
      </div>
    </section>
  );
}
