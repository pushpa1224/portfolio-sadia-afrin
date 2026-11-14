import { FiGithub, FiExternalLink } from 'react-icons/fi';

function ProjectCard({ project }) {
  const { title, summary, image, technologies, githubUrl, liveUrl } = project;

  return (
    <article className="flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-dark-card border border-light-border dark:border-dark-border hover:shadow-2xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group">

      {/* Project Image */}
      <div className="relative overflow-hidden h-48 bg-slate-100 dark:bg-slate-800">
        <img
          src={image}
          alt={`${title} screenshot`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            // Fallback: replace broken image with a gradient placeholder
            e.target.style.display = 'none';
            e.target.parentNode.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-primary/20', 'to-secondary/20');
            const span = document.createElement('span');
            span.className = 'text-primary font-bold text-lg';
            span.textContent = title.charAt(0);
            e.target.parentNode.appendChild(span);
          }}
        />
        {/* Category badge overlay */}
        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-primary/90 text-white text-xs font-semibold backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 flex-1">
          {summary}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md bg-primary/10 dark:bg-primary/20 text-primary text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-colors duration-200"
          >
            <FiGithub size={15} />
            GitHub
          </a>
          <a
            href={liveUrl}
            target={liveUrl === '#' ? '_self' : '_blank'}
            rel="noopener noreferrer"
            title={liveUrl === '#' ? 'Live demo coming soon' : 'View live demo'}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
              liveUrl === '#'
                ? 'bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90'
            }`}
          >
            <FiExternalLink size={15} />
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
