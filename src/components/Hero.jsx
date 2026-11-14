import { Link } from 'react-router-dom';
import { FiArrowDown, FiFileText, FiGithub, FiLinkedin } from 'react-icons/fi';
import { profileData } from '../data/profileData';

function Hero() {
  function scrollToProjects(e) {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-violet-50/20 dark:from-dark-bg dark:via-slate-900 dark:to-slate-900"
    >
      <div className="section w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* ── Left: Text Content ── */}
          <div className="flex-1 text-center md:text-left animate-slide-up">
            {/* Greeting badge */}
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-bounce-slow"></span>
              Available for opportunities
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
              Hi, I&apos;m{' '}
              <span className="gradient-text">{profileData.name}</span>
            </h1>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-600 dark:text-slate-300 mb-5">
              {profileData.title}
            </h2>

            {/* Short bio */}
            <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              I specialize in building responsive interfaces with <strong className="text-primary">React.js</strong> and
              scalable backend systems with <strong className="text-primary">Python &amp; Django</strong>.
              Passionate about crafting clean, user-friendly web experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <Link
                to="/cv"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
              >
                <FiFileText size={18} />
                View / Download CV
              </Link>
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300"
              >
                <FiArrowDown size={18} />
                View Projects
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <a
                href={profileData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors duration-200"
              >
                <FiGithub size={22} />
              </a>
              <a
                href={profileData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors duration-200"
              >
                <FiLinkedin size={22} />
              </a>
            </div>
          </div>

          {/* ── Right: Profile Image ── */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-xl opacity-30 scale-110"></div>
              {/* Inner ring border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                <div className="w-full h-full rounded-full bg-light-bg dark:bg-dark-bg p-1">
                  <img
                    src={profileData.avatarUrl}
                    alt={`${profileData.name} profile photo`}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
