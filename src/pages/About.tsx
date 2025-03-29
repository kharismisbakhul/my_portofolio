const About: React.FC = () => {
    return (
      <>
        {/* About Section */}
        <section id="about" className="p-10 text-center bg-gray-800">
          <h2 className="text-3xl font-semibold">About Me</h2>
          <div className="mt-4 text-lg max-w-3xl mx-auto text-gray-300 leading-relaxed">
            <p>
              Hi, I’m Kharis, a Frontend Developer with <strong>6 years of experience</strong> specializing in building and optimizing web applications.
            </p>
            <p className="mt-4">
              My journey began during college, where I took on <strong>internships</strong> and <strong>freelance projects</strong>. After graduating, I joined <strong>KUD Minatani Cooperative</strong> as a Web Developer, developing applications to streamline business operations.
            </p>
            <p className="mt-4">
              Later, I moved to <strong>PT. Infomedia Nusantara</strong>, enhancing my expertise in web development while staying up-to-date with the latest technologies.
            </p>
            <p className="mt-4">
              I’m passionate about <strong>problem-solving, clean code, and continuous learning</strong>. I actively explore new frameworks, tools, and best practices to build high-quality, scalable solutions.
            </p>
            <p className="mt-4">
              Outside of coding, I enjoy <strong>basketball, reading, and watching movies</strong> to balance my professional and personal life.
            </p>
          </div>
        </section>
      </>
    );
  };
  
  export default About;
  