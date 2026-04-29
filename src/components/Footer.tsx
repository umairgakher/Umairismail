export default function Footer() {
  return (
    <footer className="relative z-10 glass border-t border-white/5 rounded-none py-12 px-6 mt-12">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* Logo */}
        <span className="text-2xl font-extrabold gradient-text">UI.</span>

        {/* Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/umairgakher"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-indigo-400 transition-colors text-sm font-medium"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/umair-ismail-gakher-5b412623b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-indigo-400 transition-colors text-sm font-medium"
          >
            LinkedIn
          </a>
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

        {/* Copy */}
        <p className="text-slate-600 text-xs text-center">
          © {new Date().getFullYear()} Umair Ismail — Full Stack & Mobile Engineer
        </p>
      </div>
    </footer>
  );
}
