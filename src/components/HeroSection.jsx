export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
      <h2 className="text-blue-500 font-mono mb-4 text-lg">Hi, my name is</h2>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
        Your Name. <br />
        <span className="text-slate-400">I build things for the web.</span>
      </h1>
      <p className="max-w-xl text-slate-400 text-lg mb-10 leading-relaxed">
        I’m a software engineer specializing in building exceptional digital
        experiences. Currently, I’m focused on building accessible,
        human-centered products.
      </p>
      <button className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded hover:bg-primary/10 transition-colors duration-300">
        Check out my work!
      </button>
    </section>
  );
}
