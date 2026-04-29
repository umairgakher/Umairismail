'use client';

import { useState, useEffect } from 'react';
import { navLinks } from '@/data/portfolioData';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 glass ${
        scrolled ? 'shadow-lg shadow-indigo-500/10' : ''
      }`}
    >
      {/* Logo */}
      <span className="text-xl font-extrabold gradient-text font-[Outfit] tracking-tight">
        UI.
      </span>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <button
        id="hamburger-btn"
        className="md:hidden flex flex-col gap-[5px] cursor-pointer z-50"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-[3px] bg-white rounded-full transition-all duration-300 ${
            menuOpen ? 'rotate-[-45deg] translate-y-[8px]' : ''
          }`}
        />
        <span
          className={`block w-6 h-[3px] bg-white rounded-full transition-all duration-300 ${
            menuOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`block w-6 h-[3px] bg-white rounded-full transition-all duration-300 ${
            menuOpen ? 'rotate-[45deg] -translate-y-[8px]' : ''
          }`}
        />
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-[calc(100%+12px)] left-0 right-0 rounded-2xl bg-slate-900 border border-white/10 shadow-2xl shadow-black/50 py-6 px-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              onClick={closeMenu}
              className="text-base font-medium text-slate-300 hover:text-indigo-400 transition-colors text-center py-1"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
