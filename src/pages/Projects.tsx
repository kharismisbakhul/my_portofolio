import { useState } from "react";
import { FaImages } from "react-icons/fa";

import projectsData from "../data/projects.json";
import getStackIcon from "../utils/getStackIcon";

type Project = {
  title: string;
  description: string;
  stacks: string;
  stacksIcons: string[];
  image1: string;
  screenshots: string[];
};

const dataLeft: Project[] = projectsData.dataLeft;
const dataRight: Project[] = projectsData.dataRight;

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      {/* Projects Section */}
      <section id="projects" className="p-10 bg-gray-900">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Left Column */}
          <div className="space-y-6">
            {dataLeft.map((project, id) => (
              <div key={id} className="flex flex-col md:flex-row bg-gray-800 p-6 rounded-lg shadow-md items-center">
                <img
                  src={project.image1}
                  alt={project.title}
                  className="w-40 h-40 rounded-lg shadow-md"
                />
                <div className="md:ml-6 mt-4 md:mt-0 text-left space-y-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p>{project.description}</p>
                  {/* <p className="text-sm text-gray-400 flex items-center space-x-2">
                    <strong>Stacks: {project.stacks}</strong>
                  </p> */}
                  <div className="flex flex-wrap gap-3 text-sm text-gray-300 mt-2">
                    {project.stacksIcons.map((stackIcon, index) => {
                      const Icon = getStackIcon(stackIcon);
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-1 bg-gray-700 px-2 py-1 rounded"
                          title={stackIcon} // optional tooltip
                        >
                          {Icon && <Icon className="w-4 h-4" />}
                          <span>{stackIcon}</span>
                        </div>
                      );
                    })}
                  </div>
                  <button
                    onClick={() => openModal(project)}
                    className="flex items-center gap-2 px-4 py-2 text-sm rounded bg-blue-900 hover:bg-blue-700 text-white"
                  >
                    <FaImages className="w-4 h-4" />
                    View Screenshot
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {dataRight.map((project, id)=> (
              <div key={id} className="flex flex-col md:flex-row bg-gray-800 p-6 rounded-lg shadow-md items-center">
                <img
                  src={project.image1}
                  alt={project.title}
                  className="w-40 h-40 rounded-lg shadow-md"
                />
                <div className="md:ml-6 mt-4 md:mt-0 text-left space-y-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p>{project.description}</p>
                  {/* <p className="text-sm text-gray-400 flex items-center space-x-2">
                    <strong>Stacks: {project.stacks}</strong>
                  </p> */}
                  <div className="flex flex-wrap gap-3 text-sm text-gray-300 mt-2">
                    {project.stacksIcons.map((stackIcon, index) => {
                      const Icon = getStackIcon(stackIcon);
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-1 bg-gray-700 px-2 py-1 rounded"
                          title={stackIcon} // optional tooltip
                        >
                          {Icon && <Icon className="w-4 h-4" />}
                          <span>{stackIcon}</span>
                        </div>
                      );
                    })}
                  </div>
                  <button
                    onClick={() => openModal(project)}
                    className="flex items-center gap-2 px-4 py-2 text-sm rounded bg-blue-900 hover:bg-blue-700 text-white"
                  >
                    <FaImages className="w-4 h-4" />
                    View Screenshot
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {isModalOpen && selectedProject && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out">
              <div className="bg-blue-900 max-w-3xl w-full p-6 rounded-lg overflow-y-auto max-h-[90vh] relative transform transition-all duration-300 ease-in-out scale-100 opacity-100">
                <button
                  className="absolute top-3 right-3 text-white hover:text-black text-2xl"
                  onClick={closeModal}
                >
                  ✕
                </button>
                <h2 className="text-2xl font-bold mb-4">
                  {selectedProject.title} - Screenshots
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedProject.screenshots?.map(
                    (img: string, idx: number) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`Screenshot ${idx + 1}`}
                        className="w-full rounded shadow"
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;
