import { FaDownload } from "react-icons/fa";

const Resume: React.FC = () => {
    return (
      <>
        <section id="resume" className="p-10">
            {/* Resume Download Section */}
            <div className="text-center">
            <h2 className="text-3xl font-semibold text-center">See my resume</h2>
            <p className="text-gray-400 mt-2">Get a quick overview of my professional journey and download the full version.</p>
            <a 
                href="/Resume_Misbakhul_Kharis.pdf" // Update this with the actual path to your Resume file
                download="Resume_Misbakhul_Kharis.pdf"
                className="mt-4 inline-flex items-center bg-blue-900 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
                <FaDownload className="mr-2" /> Download My Resume (PDF)
            </a>
            <div className="mt-6 text-center text-sm text-gray-400">
              <p>📅 <span className="text-white font-medium">Last Updated:</span> June 2025</p>
              <p>🔗 <span className="text-white font-medium">Also available on </span> 
                <a href="https://linkedin.com/in/kharismisbakhul" target="_blank" rel="noreferrer" 
                  className="text-blue-400 underline hover:text-blue-300 font-medium">
                  My LinkedIn Profile ↗
                </a>
              </p>
            </div>
            </div>
        </section>
      </>
    );
  };
  
  export default Resume;
  