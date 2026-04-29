'use client';

import { useEffect, useRef } from 'react';
import { skills } from '@/data/portfolioData';

const icons: Record<string, string> = {
  'Web & Backend': '🌐',
  'Mobile & AI': '📱',
  'Web3 & DevOps': '⛓️',
};

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20">

      {/* Header */}
      <div className="flex items-center gap-4 mb-4 w-full max-w-5xl">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-indigo-500/30" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold gradient-text-white text-center whitespace-nowrap">
          Technical Expertise
        </h2>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-indigo-500/30" />
      </div>
      <p className="text-slate-500 text-sm text-center mb-12">Technologies I work with daily</p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl w-full">
        {skills.map((skill, i) => (
          <div
            key={skill.category}
            className="glass rounded-3xl p-6 sm:p-8 fade-up hover:-translate-y-2 transition-all duration-300 hover:border-indigo-500/30 group relative overflow-hidden"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            {/* Background glow on hover */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br ${skill.gradient} rounded-3xl`} />

            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{icons[skill.category]}</span>
              <div>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${skill.gradient} text-white`}>
                  {skill.category}
                </div>
              </div>
            </div>

            <ul className="space-y-3">
              {skill.items.map((item, j) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-slate-400 text-sm group-hover:text-slate-300 transition-colors rounded-lg px-2 py-1 hover:bg-white/5 cursor-default"
                  style={{ transitionDelay: `${j * 0.05}s` }}
                >
                  <span className="text-indigo-400 font-bold text-base shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
