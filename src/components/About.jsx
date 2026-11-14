import { FiMapPin, FiBook, FiBriefcase, FiCheckCircle } from 'react-icons/fi';
import { profileData } from '../data/profileData';

const highlights = [
  { icon: FiBriefcase, label: 'Projects',    value: '6+ Real-World Projects' },
  { icon: FiBook,      label: 'Education',   value: 'B.Sc. in CSE, East Delta University' },
  { icon: FiMapPin,    label: 'Location',    value: 'Chittagong, Bangladesh' },
  { icon: FiCheckCircle, label: 'Status',   value: 'Open to Opportunities' },
];

function About() {
  return (
    <section id="about" className="bg-white dark:bg-dark-card border-y border-light-border dark:border-dark-border">
      <div className="section">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Who I Am</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Left: Bio & Goals */}
          <div className="flex-1 space-y-6">
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              {profileData.summary}
            </p>

            {/* Education Card */}
            <div className="p-5 rounded-xl border border-primary/20 bg-primary/5 dark:bg-primary/10">
              <h3 className="text-base font-bold text-primary mb-2 flex items-center gap-2">
                <FiBook size={16} />
                Education
              </h3>
              <p className="text-slate-700 dark:text-slate-200 font-semibold text-sm">
                {profileData.education.degree}
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">
                {profileData.education.institution}
              </p>
              <p className="text-slate-400 dark:text-slate-500 text-xs mt-1 italic">
                Focus: {profileData.education.focus}
              </p>
            </div>

            {/* Career Goals */}
            <div>
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-2">Career Goals</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {profileData.careerGoals}
              </p>
            </div>
          </div>

          {/* Right: Highlight Cards */}
          <div className="w-full lg:w-80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-light-border dark:border-dark-border hover:border-primary/40 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wide">{label}</p>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mt-0.5">{value}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
