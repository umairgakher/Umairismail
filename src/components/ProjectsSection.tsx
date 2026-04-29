'use client';

import { useEffect, useRef } from 'react';
import { projects } from '@/data/portfolioData';

export default function ProjectsSection() {
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
    <section id="projects" ref={sectionRef} className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-24">
      <h2 className="text-4xl md:text-5xl font-extrabold gradient-text-white text-center mb-4">
        Technical Projects
      </h2>
      <p className="text-slate-500 text-center mb-14 text-sm">
        {projects.length} projects across Web, Mobile, Web3 & AI
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {projects.map((project, i) => (
          <div
            key={project.name}
            className="glass rounded-3xl overflow-hidden fade-up project-card-shine hover:-translate-y-2 transition-all duration-300 hover:border-indigo-500/30 group flex flex-col"
            style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
          >
            {/* Gradient Banner */}
            <div className={`h-44 w-full bg-gradient-to-br ${project.gradient} relative`}>
              {/* Project initial badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-extrabold text-white/20 select-none tracking-tight">
                  {project.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
              {/* Live badge */}
              {project.link && (
                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/30 backdrop-blur-sm rounded-full px-2.5 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] text-white font-medium">Live</span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-5 flex flex-col flex-1 gap-3">
              <h3 className="text-base font-bold text-white">{project.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-indigo-400 text-sm font-semibold hover:text-indigo-300 transition-colors mt-1 group/link"
                >
                  View Live
                  <span className="group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                </a>
              ) : (
                <span className="text-slate-600 text-xs mt-1">Private / In Development</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
