const Hero: React.FC = () => {
    return (
      <>
        {/* Hero Section */}
        <section id="home" className="h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left p-8 space-y-6 md:space-y-0 md:space-x-12">
            <div className="flex flex-col items-center md:items-start">
            <h1 className="text-2xl sm:text-5xl font-bold">Hi, I'm Misbakhul Kharis</h1>
            <p className="mt-4 text-md sm:text-xl text-slate-300">
              <strong>Full Stack Developer</strong> with <strong>6+ Years Experience</strong>
            </p>
            <p className="mt-2 text-sm sm:text-base text-slate-400">
              Specializing in <strong>React.js, Next.js, TypeScript, TailwindCSS, Node.js, Express.js, Laravel, PostgreSQL, MongoDB,</strong> and <strong>and MySQL</strong>
            </p>
            <p className="mt-2 text-sm sm:text-base text-slate-400">
              Passionate about <strong> turning complex ideas into fast, scalable, and user-friendly web applications</strong>
            </p>
            <p className="mt-2 text-sm sm:text-base text-slate-400">
              Open to <strong>Remote · Full-Time · Freelance</strong> Roles
            </p>
             <div className="flex flex-wrap gap-4 mt-6">
                <a href="#resume" className="btn-primary">
                  📄 View Resume
                </a>
                <a href="#projects" className="btn-outline text-white">
                  💼 See My Projects
                </a>
              </div>
            </div>
            <img src="/kharis_square.webp" alt="Full Stack Developer Misbakhul Kharis Portrait" className="w-96 h-100 rounded-full shadow-lg border-4 border-white" />
        </section>
      </>
    );
  };
  
  export default Hero;