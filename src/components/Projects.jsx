import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  const projects = [
    {
      title: "Shoe Store Admin Dashboard",
      description:
        "Building a scalable design system for complex e-commerce data visualization using Tailwind CSS v4.",
      tags: ["React", "Javascript", "TailwindCSS", "Git"],
      github: "https://github.com/MMiiinnn/admin_web",
      live: "#",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500",
    },
    {
      title: "SiuuStore",
      description:
        "An e-commerce website for selling shoes, including product browsing, product detail pages, and shopping features.",
      tags: ["JavaScript", "TailwindCSS", "MySQL", "Git"],
      github: "http://gitlab.com/siuuuuu/backend",
      live: "#",
      image: "images/siuustore.jpg",
    },
    {
      title: "Mini Food Order App",
      description:
        "A front end web application that allow users browse the product, manage a shopping cart, and place orders through a user-friendly interface",
      tags: ["JavaScript", "CSS3", "Git"],
      github: "https://github.com/MMiiinnn/Food_order.git",
      live: "foodorder-contextapi.vercel.app",
      image: "images/foodorder.jpg",
    },
    {
      title: "Redux Global Cart System",
      description:
        "A sophisticated e-commerce solution focusing on global state management. It features real-time cart synchronization, persistent storage logic, and a seamless checkout flow.",
      tags: ["React", "Redux Toolkit", "TailwindCSS"],
      github: "https://github.com/MMiiinnn/Redux_cart",
      live: "redux-cart-cyan-three.vercel.app",
      image: "images/reduxcart.jpg",
    },
  ];

  return (
    <section id="projects" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-text-bright">
            Built Projects
          </h2>
          <div className="h-px bg-white/10 grow"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
