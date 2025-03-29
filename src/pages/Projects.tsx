  const Projects: React.FC = () => {
    return (
      <>
        {/* Projects Section */}
        <section id="projects" className="p-10 bg-gray-900">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left Column - Title */}
            <div className="flex justify-center items-center">
              <h2 className="text-3xl font-semibold text-center md:text-left">Projects</h2>
            </div>

            {/* Right Column - Project List */}
            <div className="space-y-6">
              {/* Wedding Invitation */}
              <div className="flex flex-col md:flex-row bg-gray-800 p-6 rounded-lg shadow-md items-center">
                <img src="/wedding-invitation.jpg" alt="Wedding Invitation" className="w-40 h-40 rounded-lg shadow-md" />
                <div className="md:ml-6 mt-4 md:mt-0 text-left">
                  <h3 className="text-xl font-bold">Wedding Invitation</h3>
                  <p>A CodeIgniter-based invitation website</p>
                  <p className="text-sm text-gray-400"><strong>Stack:</strong> CodeIgniter, MySQL, jQuery, Bootstrap</p>
                </div>
              </div>

              {/* Digital Agency */}
              <div className="flex flex-col md:flex-row bg-gray-800 p-6 rounded-lg shadow-md items-center">
                <img src="/digital-agency.jpg" alt="Digital Agency" className="w-40 h-40 rounded-lg shadow-md" />
                <div className="md:ml-6 mt-4 md:mt-0 text-left">
                  <h3 className="text-xl font-bold">Digital Agency</h3>
                  <p>A Next.js landing page with Strapi</p>
                  <p className="text-sm text-gray-400"><strong>Stack:</strong> Next.js, TypeScript, Strapi, Tailwind CSS</p>
                </div>
              </div>

              {/* MERN Stack App */}
              <div className="flex flex-col md:flex-row bg-gray-800 p-6 rounded-lg shadow-md items-center">
                <img src="/mern-app.jpg" alt="MERN Stack App" className="w-40 h-40 rounded-lg shadow-md" />
                <div className="md:ml-6 mt-4 md:mt-0 text-left">
                  <h3 className="text-xl font-bold">MERN Stack App</h3>
                  <p>A full-stack web app using MongoDB, Express, React, and Node.js</p>
                  <p className="text-sm text-gray-400"><strong>Stack:</strong> MongoDB, Express.js, React, Node.js</p>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default Projects;
  