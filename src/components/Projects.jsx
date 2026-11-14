import { useState } from 'react';
import { projectsData } from '../data/projectsData';
import ProjectCard from './ProjectCard';

const filters = ['All', 'React', 'Django / Python'];

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="bg-white dark:bg-dark-card border-y border-light-border dark:border-dark-border">
      <div className="section">

        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">What I&apos;ve Built</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md shadow-primary/30'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid — MUST use .map() on the filtered array */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <p className="text-center text-slate-400 dark:text-slate-500 mt-10 text-sm">
            No projects match this filter.
          </p>
        )}

      </div>
    </section>
  );
}

export default Projects;
