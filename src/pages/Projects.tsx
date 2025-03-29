import { SiCodeigniter, SiMysql, SiBootstrap, SiMongodb, SiExpress, SiReact, SiTypescript, SiVite, SiTailwindcss, SiStrapi, SiPostgresql, SiLaravel } from "react-icons/si";
import { FaNodeJs, FaVuejs  } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

const Projects: React.FC = () => {
  return (
    <>
      {/* Projects Section */}
      <section id="projects" className="p-10 bg-gray-900">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Project 1 */}
            <div className="flex flex-col md:flex-row bg-gray-800 p-6 rounded-lg shadow-md items-center">
              <img
                src="/wedding-invitation.jpg"
                alt="Project 1"
                className="w-40 h-40 rounded-lg shadow-md"
              />
              <div className="md:ml-6 mt-4 md:mt-0 text-left">
                <h3 className="text-xl font-bold">Project 1</h3>
                <p>A CodeIgniter-based invitation website</p>
                <p className="text-sm text-gray-400 flex items-center space-x-2">
                  <strong>Stack:</strong> <SiCodeigniter size={32} /> <SiMysql size={32} /> <SiBootstrap size={32} />
                </p>
              </div>
            </div>
            {/* Project 2 */}
            <div className="flex flex-col md:flex-row bg-gray-800 p-6 rounded-lg shadow-md items-center">
              <img
                src="/digital-agency.jpg"
                alt="Project 2"
                className="w-40 h-40 rounded-lg shadow-md"
              />
              <div className="md:ml-6 mt-4 md:mt-0 text-left">
                <h3 className="text-xl font-bold">Project 2</h3>
                <p>A Next.js landing page with Strapi</p>
                <p className="text-sm text-gray-400">
                  <strong>Stack:</strong> Next.js, TypeScript, Strapi, Tailwind
                  CSS
                </p>
              </div>
            </div>
            {/* Project 3 */}
            <div className="flex flex-col md:flex-row bg-gray-800 p-6 rounded-lg shadow-md items-center">
              <img
                src="/mern-app.jpg"
                alt="Project 3"
                className="w-40 h-40 rounded-lg shadow-md"
              />
              <div className="md:ml-6 mt-4 md:mt-0 text-left">
                <h3 className="text-xl font-bold">Project 3</h3>
                <p>
                  A full-stack web app using MongoDB, Express, React, and
                  Node.js
                </p>
                <p className="text-sm text-gray-400">
                  <strong>Stack:</strong> MongoDB, Express.js, React, Node.js
                </p>
              </div>
            </div>
            {/* Project 4 */}
            <div className="flex flex-col md:flex-row bg-gray-800 p-6 rounded-lg shadow-md items-center">
              <img
                src="/mern-app.jpg"
                alt="Project 4"
                className="w-40 h-40 rounded-lg shadow-md"
              />
              <div className="md:ml-6 mt-4 md:mt-0 text-left">
                <h3 className="text-xl font-bold">Project 4</h3>
                <p>
                  A full-stack web app using MongoDB, Express, React, and
                  Node.js
                </p>
                <p className="text-sm text-gray-400">
                  <strong>Stack:</strong> MongoDB, Express.js, React, Node.js
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Project 5 */}
            <div className="flex flex-col md:flex-row bg-gray-800 p-6 rounded-lg shadow-md items-center">
              <img
                src="/mern-app.jpg"
                alt="Project 5"
                className="w-40 h-40 rounded-lg shadow-md"
              />
              <div className="md:ml-6 mt-4 md:mt-0 text-left">
                <h3 className="text-xl font-bold">Project 5</h3>
                <p>
                  A full-stack web app using MongoDB, Express, React, and
                  Node.js
                </p>
                <p className="text-sm text-gray-400">
                  <strong>Stack:</strong> MongoDB, Express.js, React, Node.js
                </p>
              </div>
            </div>
            {/* Project 6 */}
            <div className="flex flex-col md:flex-row bg-gray-800 p-6 rounded-lg shadow-md items-center">
              <img
                src="/mern-app.jpg"
                alt="Project 6"
                className="w-40 h-40 rounded-lg shadow-md"
              />
              <div className="md:ml-6 mt-4 md:mt-0 text-left">
                <h3 className="text-xl font-bold">Project 6</h3>
                <p>
                  A full-stack web app using MongoDB, Express, React, and
                  Node.js
                </p>
                <p className="text-sm text-gray-400">
                  <strong>Stack:</strong> MongoDB, Express.js, React, Node.js
                </p>
              </div>
            </div>
            {/* Project 7 */}
            <div className="flex flex-col md:flex-row bg-gray-800 p-6 rounded-lg shadow-md items-center">
              <img
                src="/mern-app.jpg"
                alt="Project 7"
                className="w-40 h-40 rounded-lg shadow-md"
              />
              <div className="md:ml-6 mt-4 md:mt-0 text-left">
                <h3 className="text-xl font-bold">Project 7</h3>
                <p>
                  A full-stack web app using MongoDB, Express, React, and
                  Node.js
                </p>
                <p className="text-sm text-gray-400">
                  <strong>Stack:</strong> MongoDB, Express.js, React, Node.js
                </p>
              </div>
            </div>
            {/* Project 8 */}
            <div className="flex flex-col md:flex-row bg-gray-800 p-6 rounded-lg shadow-md items-center">
              <img
                src="/mern-app.jpg"
                alt="Project 8"
                className="w-40 h-40 rounded-lg shadow-md"
              />
              <div className="md:ml-6 mt-4 md:mt-0 text-left">
                <h3 className="text-xl font-bold">Project 8</h3>
                <p>
                  A full-stack web app using MongoDB, Express, React, and
                  Node.js
                </p>
                <p className="text-sm text-gray-400">
                  <strong>Stack:</strong> MongoDB, Express.js, React, Node.js
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
