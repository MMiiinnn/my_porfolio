export default function ProjectCard({ project }) {
  const { title, description, tags, github, live, image } = project;

  return (
    <div className="group relative bg-bg-card border border-white/5 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-3 shadow-2xl">
      {/* Project Image Container */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-text-bright group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex gap-4">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="text-text-dim hover:text-primary transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a
              href={live.startsWith("http") ? live : `https://${live}`}
              target="_blank"
              rel="noreferrer"
              className="text-text-dim hover:text-secondary transition-colors"
            >
              <svg
                className="w-5 h-5 fill-none stroke-current"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </a>
          </div>
        </div>

        <p className="text-text-dim text-sm leading-relaxed">{description}</p>

        <ul className="flex flex-wrap gap-3 pt-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="text-[10px] font-mono font-bold tracking-widest uppercase px-2 py-1 bg-secondary/10 text-secondary rounded"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
