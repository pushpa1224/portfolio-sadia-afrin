import { Link } from 'react-router-dom';
import { FiArrowLeft, FiDownload, FiMail, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';
import { profileData } from '../data/profileData';
import { skillsData } from '../data/skillsData';
import { projectsData } from '../data/projectsData';

// Show only featured projects on the CV
const cvProjects = projectsData.filter((p) => p.featured);

function CVPage() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 py-8 px-4">

      {/* ── Top Action Bar (hidden on print) ── */}
      <div className="no-print max-w-4xl mx-auto flex items-center justify-between mb-6 flex-wrap gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors"
        >
          <FiArrowLeft size={16} />
          Back to Portfolio
        </Link>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold shadow-md hover:opacity-90 hover:scale-105 transition-all duration-200"
        >
          <FiDownload size={16} />
          Download as PDF
        </button>
      </div>

      {/* ── CV Document ── */}
      <div className="cv-page-wrapper max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden print:shadow-none print:rounded-none print:max-w-full">

        {/* ═══ CV HEADER ═══ */}
        <div className="bg-gradient-to-r from-primary to-secondary p-8 text-white">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img
              src={profileData.avatarUrl}
              alt={profileData.name}
              className="w-24 h-24 rounded-full border-4 border-white/40 object-cover object-top flex-shrink-0"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-extrabold">{profileData.name}</h1>
              <p className="text-indigo-100 text-lg font-medium mt-1">{profileData.title}</p>
              {/* Contact row */}
              <div className="flex flex-wrap gap-x-5 gap-y-1.5 mt-3 text-indigo-100 text-sm justify-center sm:justify-start">
                <a href={`mailto:${profileData.social.email}`} className="flex items-center gap-1.5 hover:text-white">
                  <FiMail size={13} />
                  {profileData.social.email}
                </a>
                <span className="flex items-center gap-1.5">
                  <FiMapPin size={13} />
                  {profileData.location}
                </span>
                <a href={profileData.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white">
                  <FiGithub size={13} />
                  github.com/pushpa1224
                </a>
                <a href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white">
                  <FiLinkedin size={13} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ CV BODY ═══ */}
        <div className="p-8 space-y-8">

          {/* Professional Summary */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-primary border-b-2 border-primary/20 pb-1.5 mb-3">
              Professional Summary
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">{profileData.summary}</p>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-primary border-b-2 border-primary/20 pb-1.5 mb-3">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div>
                <p className="text-slate-800 font-bold text-sm">{profileData.education.degree}</p>
                <p className="text-slate-600 text-sm">{profileData.education.institution}</p>
                <p className="text-slate-400 text-xs mt-0.5 italic">Focus: {profileData.education.focus}</p>
              </div>
              <span className="text-xs text-slate-400 mt-1 sm:mt-0 sm:text-right">Chittagong, Bangladesh</span>
            </div>
          </section>

          {/* Technical Skills */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-primary border-b-2 border-primary/20 pb-1.5 mb-3">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {skillsData.map((cat) => (
                <div key={cat.category}>
                  <p className="text-xs font-bold text-slate-700 mb-2">{cat.category}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map(({ name }) => (
                      <span key={name} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-primary border-b-2 border-primary/20 pb-1.5 mb-3">
              Selected Projects
            </h2>
            <div className="space-y-5">
              {cvProjects.map((project) => (
                <div key={project.id} className="border-l-4 border-primary/30 pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h3 className="text-sm font-bold text-slate-800">{project.title}</h3>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline flex items-center gap-1 w-fit"
                    >
                      <FiGithub size={11} />
                      View on GitHub
                    </a>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mb-1.5">{project.summary}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((t) => (
                      <span key={t} className="px-1.5 py-0.5 rounded bg-primary/10 text-primary text-xs">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Career Goals */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-primary border-b-2 border-primary/20 pb-1.5 mb-3">
              Career Goals
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">{profileData.careerGoals}</p>
          </section>

        </div>
      </div>

      {/* Bottom spacer for screen view */}
      <div className="no-print h-10" />
    </div>
  );
}

export default CVPage;
