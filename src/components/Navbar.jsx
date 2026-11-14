import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX, FiFileText } from 'react-icons/fi';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navLinks = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
];
const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];

function Navbar({ isDark, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useScrollSpy(sectionIds);

  function handleNavClick(e, href) {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-dark-bg/90 backdrop-blur-md border-b border-light-border dark:border-dark-border shadow-sm transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Brand ── */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-xl font-bold gradient-text select-none"
          >
            Sadia<span className="text-primary">.</span>dev
          </a>

          {/* ── Desktop Nav Links ── */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium transition-colors duration-200 pb-0.5 border-b-2 ${
                    isActive
                      ? 'text-primary border-primary'
                      : 'text-slate-600 dark:text-slate-300 border-transparent hover:text-primary hover:border-primary'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* ── Right side: CV button + theme toggle + hamburger ── */}
          <div className="flex items-center gap-3">
            {/* CV Button (desktop) */}
            <Link
              to="/cv"
              className="hidden md:flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg bg-primary text-white hover:bg-secondary transition-colors duration-200"
            >
              <FiFileText size={14} />
              CV
            </Link>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            >
              {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            {/* Hamburger (mobile only) */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            >
              {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-dark-card border-t border-light-border dark:border-dark-border animate-fade-in">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <Link
              to="/cv"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 text-sm font-medium py-2 px-3 rounded-lg bg-primary text-white"
            >
              <FiFileText size={14} />
              View / Download CV
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
