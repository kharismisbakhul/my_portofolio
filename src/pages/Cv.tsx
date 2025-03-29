import { FaDownload } from "react-icons/fa";

const Cv: React.FC = () => {
    return (
      <>
        <section id="cv" className="p-10">
            {/* CV Download Section */}
            <div className="text-center">
            <h2 className="text-3xl font-semibold text-center">See my CV</h2>
            <p className="text-gray-400 mt-2">Get a copy of my resume to know more about my experience and skills.</p>
            <a 
                href="/CV_Misbakhul_Kharis.pdf" // Update this with the actual path to your CV file
                download="CV_Misbakhul_Kharis.pdf"
                className="mt-4 inline-flex items-center bg-blue-900 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
                <FaDownload className="mr-2" /> Download
            </a>
            </div>
        </section>
      </>
    );
  };
  
  export default Cv;
  