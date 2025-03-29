const Hero: React.FC = () => {
    return (
      <>
        {/* Hero Section */}
        <section id="home" className="h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left p-8 space-y-6 md:space-y-0 md:space-x-12">
            <div className="flex flex-col items-center md:items-start">
            <h1 className="text-5xl font-bold">Hi, It's me Kharis</h1>
            <p className="text-xl mt-4">A Web Developer with 6 years Experience</p>
            </div>
            <img src="/kharis_square.png" alt="Kharis" className="w-96 h-100 rounded-full shadow-lg border-4 border-white" />
        </section>
      </>
    );
  };
  
  export default Hero;