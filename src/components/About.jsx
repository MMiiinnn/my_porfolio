export default function About() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React (Hooks, Context API, Redux)",
    "Tailwind CSS",
    "Git & GitHub",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl w-full">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold text-text-bright">About Me</h2>
          <div className="h-px bg-white/10 grow"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-lg">
            <p>
              Hello! My name is Nguyen Trung Nghia. I am a Front-end Developer
              with a strong interest in building clean, responsive, and
              user-focused web interfaces. I enjoy turning designs and ideas
              into real products that users can interact with smoothly and
              intuitively.
            </p>
            <p>
              While my current focus is Front-end development, I am actively
              expanding my knowledge of backend technologies and databases. My
              long-term goal is to grow into a Full-stack Developer who can
              understand and contribute to both the client-side and server-side
              of web applications.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>

            <ul className="grid grid-cols-2 gap-2 font-mono text-sm text-secondary">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <span className="text-xs">▹</span> {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Profile Picture Placeholder */}
          <div className="relative group mx-auto md:mx-0">
            <div className="w-74 h-74 border-2 border-primary rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            <div className="absolute inset-0 w-74 h-74 bg-primary/20 rounded group-hover:bg-transparent transition-colors duration-300"></div>
            <img
              src="/public/images/Embe.jpg"
              alt="Profile"
              className="absolute inset-0 w-74 h-74 object-cover rounded transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
