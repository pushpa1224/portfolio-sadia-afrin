import { skillsData } from '../data/skillsData';
import SkillCard from './SkillCard';

function Skills() {
  return (
    <section id="skills" className="bg-slate-50 dark:bg-dark-bg">
      <div className="section">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">What I Know</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category) => (
            <SkillCard
              key={category.category}
              category={category.category}
              skills={category.skills}
              colorClass={category.colorClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
