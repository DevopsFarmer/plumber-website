const projects = [
    { id: 1, title: "Project 1", image: "/placeholder.png" },
    { id: 2, title: "Project 2", image: "/placeholder.png" },
    { id: 3, title: "Project 3", image: "/placeholder.png" },
    { id: 4, title: "Project 4", image: "/placeholder.png" },
  ];
  
  const Projects = () => {
    return (
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-6 dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  