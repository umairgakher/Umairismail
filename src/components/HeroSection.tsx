'use client';

import { useEffect } from 'react';

export default function HeroSection() {


  // ── GSAP entrance animation ──
  useEffect(() => {
    import('gsap').then(({ gsap }) => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      tl.from('#hero-content > *', {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.15,
        delay: 0.3,
      });
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-12"
    >
      <div id="hero-content" className="max-w-3xl mx-auto flex flex-col items-center gap-5 w-full">

        {/* Profile Image */}
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 mb-2 float-anim">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-40 blur-2xl scale-125" />
          <div className="glass rounded-full p-2 w-full h-full relative z-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile.jpeg"
              alt="Umair Ismail"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          {/* Rotating ring */}
          <div className="absolute inset-[-6px] rounded-full border-2 border-transparent"
            style={{ background: 'linear-gradient(#020617, #020617) padding-box, linear-gradient(135deg, #6366f1, #a855f7, #22d3ee) border-box', animation: 'spin 6s linear infinite' }} />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-indigo-500/30 text-xs font-semibold text-indigo-300 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight gradient-text-white cursor-default select-none leading-none"
        >
          Umair Ismail
        </h1>

        {/* Animated subtitle */}
        <h2 className="text-base sm:text-lg md:text-xl font-normal text-indigo-400 max-w-lg">
          Full Stack & Mobile Engineer
        </h2>

        {/* Tech stack pills */}
        <div className="flex flex-wrap justify-center gap-2 max-w-lg">
          {['MERN', 'Next.js', 'FastAPI', 'React Native', 'Flutter', 'Web3', 'Stripe', 'QuickBooks'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-semibold glass border border-white/10 text-slate-300 hover:border-indigo-500/50 hover:text-indigo-300 transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
          Delivering scalable architectures and AI-augmented production applications with{' '}
          <span className="text-white font-semibold">3+ years</span> of industry experience.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-2">
          <a
            href="#projects"
            id="explore-btn"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-1 transition-all duration-300 text-center text-sm"
          >
            🚀 Explore Projects
          </a>
          <a
            href="https://www.linkedin.com/in/umair-ismail-gakher-5b412623b/"
            target="_blank"
            rel="noopener noreferrer"
            id="linkedin-btn"
            className="px-8 py-3 rounded-full glass border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 text-center text-sm"
          >
            LinkedIn ↗
          </a>
        </div>

        {/* Scroll hint */}
        <div className="mt-6 flex flex-col items-center gap-1 text-slate-600 text-xs">
          <span>Scroll to explore</span>
          <div className="w-px h-8 bg-gradient-to-b from-indigo-500/50 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
