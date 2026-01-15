export default function Contact() {
  const socials = [
    {
      name: "GitHub",
      handle: "@MMiiinnn",
      link: "https://github.com/MMiiinnn",
      icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
    },
    {
      name: "LinkedIn",
      handle: "nguyen-trung-nghia-dev",
      link: "https://linkedin.com/in/nguyen-trung-nghia-dev/",
      icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    },
    {
      name: "Gmail",
      handle: "nghiantn9@gmail.com",
      link: "mailto:nghiantn9@gmail.com",
      icon: "M3 8L10.89 13.26C11.56 13.71 12.44 13.71 13.11 13.26L21 8M5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5H5C3.9 5 3 5.9 3 7V17C3 18.1 3.9 19 5 19Z",
    },
  ];

  return (
    <section id="contact" className="px-6 py-24 max-w-4xl mx-auto text-center">
      <h2 className="text-primary font-mono text-sm mb-4 tracking-widest">
        WHAT'S NEXT?
      </h2>
      <h1 className="text-5xl font-bold text-text-bright mb-6">
        Let's Connect
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            className="group p-8 bg-bg-card border border-white/5 rounded-xl hover:border-primary/50 transition-all duration-300 flex flex-col items-center gap-4"
          >
            <svg
              className="w-10 h-10 fill-white group-hover:fill-primary transition-colors duration-300"
              viewBox="0 0 24 24"
              {...(social.name === "Gmail"
                ? { stroke: "currentColor", strokeWidth: "0.5" }
                : {})}
            >
              <path d={social.icon} />
            </svg>
            <div>
              <h3 className="text-text-bright font-bold">{social.name}</h3>
              <p className="text-sm text-text-dim group-hover:text-secondary transition-colors truncate max-w-37.5">
                {social.handle}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
