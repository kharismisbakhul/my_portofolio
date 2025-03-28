interface Project {
    name: string;
    description: string;
    link: string;
  }
  
  const projects: Project[] = [
    { name: "Wedding Invitation", description: "A CodeIgniter-based invitation website", link: "#" },
    { name: "Digital Agency", description: "A Next.js landing page with Strapi", link: "#" },
    { name: "MERN Stack App", description: "A full-stack web app using MongoDB, Express, React, and Node.js", link: "#" }
  ];
  
  const Projects: React.FC = () => {
    return (
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index} className="border p-4 mb-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="text-blue-400">View Project</a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Projects;
  