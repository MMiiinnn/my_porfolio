import { NavHashLink } from "react-router-hash-link";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-start px-6 md:px-24 lg:px-48 bg-bg-dark"
    >
      <div className="space-y-5">
        <p className="font-mono text-primary text-xl ml-1">Hi, my name is</p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-bright tracking-tight">
          Nghia Nguyen.
        </h1>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-text-dim leading-tight">
          I build scalable web experiences.
        </h2>

        <p className="max-w-xl text-text-dim text-lg md:text-xl leading-relaxed">
          I’m a <span className="text-secondary">Software Engineer</span>{" "}
          specializing in building (and occasionally designing) exceptional
          digital experiences. Currently, I’m focused on building accessible,
          human-centered products at my current company.
        </p>

        <div className="pt-10 flex flex-wrap gap-4">
          <NavHashLink
            smooth
            to="/#projects"
            className="px-8 py-4 border-2 border-primary text-primary font-bold rounded hover:bg-primary/10 transition-all duration-300"
          >
            Check out my work!
          </NavHashLink>

          <button
            onClick={() => window.open("/cv/CV_NguyenTrungNghia.pdf", "_blank")}
            className="px-8 py-4 bg-primary/10 text-primary font-bold rounded hover:bg-primary/20 transition-all duration-300 font-mono text-sm border border-primary/20"
          >
            View Resume
          </button>
        </div>
      </div>
    </section>
  );
}
