import { FaGithub, FaLinkedin, FaInstagram, FaTelegram, FaFacebook, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact: React.FC = () => {
    return (
      <>
        {/* Contact Section */}
        <section id="contact" className="p-10 bg-gray-800 text-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-20 items-start mt-5">
            
            {/* Left Column - Description */}
            <div>
              <h2 className="text-3xl font-semibold mb-4">Let’s Work Together 🤝 </h2>
              <p className="text-gray-400">
                Open to freelance, full-time, or collaboration opportunities. Just drop a message — I’ll reply soon!
              </p>
            </div>

            {/* Center Column - Social Links (First Half) */}
            <div className="grid gap-4 text-base">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-gray-400" />
                <a href="mailto:kharismisbakhul@gmail.com" className="hover:text-gray-400">Email: kharismisbakhul@gmail.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <FaLinkedin className="text-gray-400" />
                <a href="https://linkedin.com/in/kharismisbakhul" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">LinkedIn: linkedin.com/in/kharismisbakhul</a>
              </div>
              <div className="flex items-center space-x-3">
                <FaGithub className="text-gray-400" />
                <a href="https://github.com/kharismisbakhul" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">GitHub: github.com/kharismisbakhul</a>
              </div>
              <div className="flex items-center space-x-3">
                <SiLeetcode className="text-gray-400" />
                <a href="https://leetcode.com/u/kharismisbakhul" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Leetcode: leetcode.com/u/kharismisbakhul</a>
              </div>
            </div>

            {/* Right Column - Social Links (Second Half) */}
            <div className="grid gap-4 text-base">
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="text-gray-400" />
                <a href="https://wa.me/6285607872843" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">WhatsApp: +62 856-0787-2843</a>
              </div>
              <div className="flex items-center space-x-3">
                <FaInstagram className="text-gray-400" />
                <a href="https://instagram.com/kharismisbakhul" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Instagram: kharismisbakhul</a>
              </div>
              <div className="flex items-center space-x-3">
                <FaTelegram className="text-gray-400" />
                <a href="https://t.me/kharismisbakhul" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Telegram: kharismisbakhul</a>
              </div>
              <div className="flex items-center space-x-3">
                <FaFacebook className="text-gray-400" />
                <a href="https://facebook.com/misbakhulkharis" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Facebook: Misbakhul Kharis</a>
              </div>
            </div>

          </div>

        </section>
      </>
    );
  };
  
  export default Contact;
  