function SkillCard({ category, skills, colorClass }) {
  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-light-border dark:border-dark-border hover:shadow-xl hover:border-primary/30 transition-all duration-300">
      {/* Category Header */}
      <div className={`inline-block mb-5 px-3 py-1 rounded-lg bg-gradient-to-r ${colorClass} text-white text-xs font-bold uppercase tracking-wider`}>
        {category}
      </div>

      {/* Skills list with progress bars */}
      <div className="space-y-3">
        {skills.map(({ name, level }) => (
          <div key={name}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{name}</span>
              <span className="text-xs text-slate-400 dark:text-slate-500">{level}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${colorClass} rounded-full transition-all duration-700`}
                style={{ width: `${level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;
