import { FiGithub, FiLinkedin, FiFacebook, FiMail, FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { profileData } from '../data/profileData';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Brand */}
          <div>
            <span className="text-xl font-bold gradient-text">Sadia<span className="text-primary">.</span>dev</span>
            <p className="text-xs text-slate-500 mt-1">{profileData.title}</p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-5 text-sm">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-primary transition-colors duration-200"
              >
                {item}
              </a>
            ))}
            <Link to="/cv" className="hover:text-primary transition-colors duration-200">CV</Link>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a href={profileData.social.github} target="_blank" rel="noopener noreferrer"
               className="text-slate-400 hover:text-primary transition-colors duration-200" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
            <a href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer"
               className="text-slate-400 hover:text-primary transition-colors duration-200" aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </a>
            <a href={profileData.social.facebook} target="_blank" rel="noopener noreferrer"
               className="text-slate-400 hover:text-primary transition-colors duration-200" aria-label="Facebook">
              <FiFacebook size={20} />
            </a>
            <a href={`mailto:${profileData.social.email}`}
               className="text-slate-400 hover:text-primary transition-colors duration-200" aria-label="Email">
              <FiMail size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-6 text-center">
          <p className="text-xs text-slate-500 flex items-center justify-center gap-1 flex-wrap">
            &copy; {year} {profileData.name}. All rights reserved. Made with
            <FiHeart size={12} className="text-red-500 fill-red-500 mx-0.5" />
            using React &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
