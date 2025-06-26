import { FaCertificate } from "react-icons/fa";

const Experience: React.FC = () => {
  return (
    <>
      {/* Experience & Education Section */}
      <section id="experience" className="p-10 bg-gray-800">
        <h2 className="text-3xl font-semibold text-center">
          Experience & Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
          {/* Experience Column */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Experience
            </h3>
            <br />

            {/* Dibilabs.id */}
            <div className="mb-8 text-center">
              <h3 className="text-xl font-semibold">
                Dibilabs.id – Jakarta, Indonesia (Remote)
              </h3>
              <p className="text-gray-400">
                Full Stack Developer (March 2025 – June 2025)
              </p>
            </div>
            
            {/* Belanja Mobil Aunction */}
            <div className="mb-8 text-center">
              <h3 className="text-xl font-semibold">
                Belanja Mobil Aunction – Jakarta, Indonesia (Remote)
              </h3>
              <p className="text-gray-400">
                Full Stack Developer (September 2024 – December 2024)
              </p>
            </div>

            {/* PT. INFOMEDIA NUSANTARA */}
            <div className="mb-8 text-center">
              <h3 className="text-xl font-semibold">
                PT. INFOMEDIA NUSANTARA – Jakarta, Indonesia (Remote)
              </h3>
              <p className="text-gray-400">
                Full Stack Developer (June 2022 – August 2024)
              </p>
            </div>

            {/* Kharis Dev */}
            <div className="mb-8 text-center">
              <h3 className="text-xl font-semibold">
                Kharis Dev – Lamongan, Indonesia (Remote)
              </h3>
              <p className="text-gray-400">
                Full Stack Developer (November 2022 – April 2023)
              </p>
            </div>

            {/* KUD MINATANI */}
            <div className="mb-8 text-center">
              <h3 className="text-xl font-semibold">
                KUD MINATANI – Lamongan, Indonesia (On-site)
              </h3>
              <p className="text-gray-400">
                Full Stack Developer (September 2020 – May 2022)
              </p>
            </div>

            {/* PSIK, FACULTY OF ECONOMICS AND BUSINESS, BRAWIJAYA UNIVERSITY */}
            <div className="mb-8 text-center">
              <h3 className="text-xl font-semibold">
                PSIK, Faculty of Economics and Business, Brawijaya University –
                Malang, Indonesia (Hybrid)
              </h3>
              <p className="text-gray-400">
                Full Stack Developer (June 2019 – April 2021)
              </p>
            </div>

            {/* FACULTY OF COMPUTER SCIENCE, BRAWIJAYA UNIVERSITY */}
            <div className="mb-8 text-center">
              <h3 className="text-xl font-semibold">
                Faculty of Computer Science (FILKOM), Brawijaya University – Malang,
                Indonesia (On-site)
              </h3>
              <p className="text-gray-400">
                Practical Teaching Assistant (February 2018 – May 2019)
              </p>
            </div>
          </div>
          {/* Education Column */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Education
            </h3>
            <br />

            <div className="flex flex-col items-center text-center my-auto">
              <img
                src="/brawijaya_university.png"
                alt="Brawijaya University Logo"
                className="w-32 h-32 md:w-40 md:h-40 object-contain mb-4"
              />
              <div>
                <h3 className="text-xl font-bold">Brawijaya University</h3>
                <br />
                <p>
                  📍 Bachelor’s Degree <strong>Informatics Engineering</strong> (2016 – 2020)
                </p>
                <p>
                  🎓 GPA: <strong>3.70 / 4.00</strong>
                </p>
                <br />
                <div className="inline"></div>
                <p>
                  You can view my official degree certificate here:
                </p>
                <a
                  href="/Bachrelors_Degree_Certificate.pdf" // Update this with the actual path to your Certificate file
                  download="Bachrelors_Degree_Certificate.pdf"
                  className="mt-4 inline-flex items-center bg-blue-900 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                  <FaCertificate /> <span className="ml-4">View Certificate</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
