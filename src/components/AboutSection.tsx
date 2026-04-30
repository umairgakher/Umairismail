'use client';

import { useEffect, useRef } from 'react';
import { stats } from '@/data/portfolioData';

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // IntersectionObserver for fade-up cards
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

    // GSAP scroll-triggered counter animation
    let gsapLoaded = false;
    const countObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !gsapLoaded) {
          gsapLoaded = true;
          import('gsap').then(({ gsap }) => {
            // Animate stat values counting up
            sectionRef.current?.querySelectorAll('.stat-glow').forEach((el) => {
              gsap.from(el, { opacity: 0, scale: 0.5, duration: 0.6, ease: 'back.out(2)' });
            });
          });
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) countObserver.observe(sectionRef.current);

    return () => { observer.disconnect(); countObserver.disconnect(); };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
      <div className="glass rounded-3xl p-6 sm:p-10 md:p-14 max-w-4xl w-full fade-up">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-indigo-500/30" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold gradient-text-white text-center">About Me</h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-indigo-500/30" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Text */}
          <div className="space-y-5 text-slate-400 text-sm sm:text-base leading-relaxed">
            <p>
              I am a <span className="text-white font-semibold">Full Stack & Mobile Engineer</span> with over{' '}
              <span className="text-indigo-400 font-semibold">3+ years</span> of experience delivering
              production-grade applications. Currently pursuing a{' '}
              <span className="text-white font-semibold">BS in Computer Science</span> (Expected 2025).
            </p>
            <p>
              I specialize in <span className="text-indigo-400 font-semibold">MERN</span>,{' '}
              <span className="text-indigo-400 font-semibold">Next.js</span>,{' '}
              <span className="text-indigo-400 font-semibold">React Native</span>, and{' '}
              <span className="text-indigo-400 font-semibold">Flutter</span>. As an AI-first practitioner, I
              leverage the <span className="text-purple-400 font-semibold">OpenAI API</span> to enhance user
              experiences and automate complex workflows.
            </p>
            <p>
              I have successfully delivered{' '}
              <span className="text-white font-semibold">10+ web apps</span> and{' '}
              <span className="text-white font-semibold">5+ mobile apps</span>, optimizing backend performance
              by <span className="text-indigo-400 font-semibold">40%</span> and maintaining{' '}
              <span className="text-indigo-400 font-semibold">99.9% uptime</span> in high-traffic environments.
            </p>

            {/* Social links */}
            <div className="flex gap-3 pt-2 flex-wrap">
              <a
                href="https://github.com/umairgakher"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-slate-300 hover:border-indigo-500/40 hover:text-indigo-300 transition-all text-xs font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/umair-ismail-gakher-5b412623b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-slate-300 hover:border-indigo-500/40 hover:text-indigo-300 transition-all text-xs font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-inner rounded-2xl p-4 sm:p-6 text-center hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-3xl sm:text-4xl font-extrabold gradient-text mb-1 stat-glow group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
