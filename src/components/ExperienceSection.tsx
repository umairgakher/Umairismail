'use client';

import { useEffect, useRef } from 'react';
import { experiences } from '@/data/portfolioData';

export default function ExperienceSection() {
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
    <section id="experience" ref={sectionRef} className="relative z-10 min-h-screen flex items-center justify-center px-4 py-24">
      <div className="glass rounded-3xl p-8 md:p-12 max-w-4xl w-full fade-up">
        <h2 className="text-4xl md:text-5xl font-extrabold gradient-text-white text-center mb-14">
          Professional Experience
        </h2>

        {/* Timeline */}
        <div className="relative timeline-line pl-8 space-y-10">
          {experiences.map((exp, i) => (
            <div key={i} className="relative fade-up" style={{ transitionDelay: `${i * 0.15}s` }}>
              {/* Dot */}
              <div className="absolute -left-[38px] top-1 w-3 h-3 bg-indigo-500 rounded-full dot-glow" />

              {/* Card */}
              <div className="glass-inner rounded-2xl p-6 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1">
                {/* Header */}
                <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                    {exp.period}
                  </span>
                </div>

                <h4 className="text-sm text-slate-400 mb-4">
                  {exp.company}
                  <span className="mx-2 text-slate-600">·</span>
                  {exp.location}
                </h4>

                <ul className="space-y-2">
                  {exp.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                      <span className="text-indigo-400 font-bold mt-0.5 shrink-0">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
