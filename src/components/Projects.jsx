import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  const projects = [
    {
      title: "Shoe Store Admin Dashboard",
      description:
        "A web-based admin dashboard for managing products, users, and orders in an e-commerce system.",
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
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=500",
    },
    {
      title: "Mini Food Order App",
      description:
        "A front end web application that allow users browse the product, manage a shopping cart, and place orders through a user-friendly interface",
      tags: ["JavaScript", "CSS3", "Git"],
      github: "https://github.com/MMiiinnn/Food_order.git",
      live: "food-order-five-liart.vercel.app",
      image: "images/foodorder.jpg",
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
