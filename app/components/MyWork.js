
'use client';

export default function FeaturedProject() {
  return (
    <>
      {/* Featured Project Section */}
      <section id="work" className="w-full bg-[#1a191d] text-white px-6 md:px-16 pb-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8">My Work</h2>
            <p className="text-lg md:text-xl mb-6 leading-relaxed font-mono">
              Shipped emotion-driven social apps, full-stack food delivery systems, and production-ready brand websites with Next.js, MongoDB, and Tailwind.
              <br />
              Delivered impactful projects — from surreal mood platforms to SEO-optimized dealership sites — blending frontend elegance with backend reliability.
            </p>

            <div className="mt-8 pl-6 md:pl-16">
              <p className="text-white text-lg font-semibold mb-2">Featured Project</p>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Poison Tree App</h3>
              <a
                href="https://poison-tree.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 rounded-md bg-cyan-500 hover:bg-cyan-600 text-white font-semibold hover:bg-[#7b3fe3] transition"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Video Preview */}
          <div className="flex-1 flex items-center justify-center">
            <video
              className="w-[250px] md:w-[320px] lg:w-[380px] rounded-[2rem] shadow-xl"
              src="/iphone-zoom-out-middle-move-out-extended (1).mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </section>

      {/* More Projects Section */}
      <section className="w-full bg-[#1a191d] text-white px-6 md:px-16 pt-10 pb-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-12">Live Projects</h2>

          {/* First Row: 1 Large + 1 Small Card */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
            {/* Large Card */}
            <a
              href="/project/Poisontree"
              className="lg:col-span-2 bg-[#27272a] rounded-xl overflow-hidden hover:scale-[1.01] transition-all duration-300 shadow-md"
            >
              <img
                src="1.png"
                alt="Tryotel"
                className="w-full h-auto block"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold">Poison Tree – Mood Based Social App</h3>
              </div>
            </a>

            {/* Small Card */}
            <a
              href="/"
              className="bg-[#27272a] rounded-xl overflow-hidden hover:scale-[1.01] transition-all duration-300 shadow-md max-w-[380px] w-full mx-auto"
            >
              <img
                src="/18.png"
                alt="Tapy"
                className="w-full object-cover"
                style={{ height: "370px" }}
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1">B2C Food Delivery App</h3>
                <p className="text-sm opacity-70 font-mono">Web Development</p>
              </div>
            </a>
          </div>

          {/* Second Row: 1 Large + 1 Small Card */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
            {/* Large Card */}
            <a
              href="/project/Renaultpps"
              className="lg:col-span-2 bg-[#27272a] rounded-xl overflow-hidden hover:scale-[1.01] transition-all duration-300 shadow-md"
            >
              <img
                src="11.png"
                alt="PPS Renault"
                className="w-full h-auto block"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold">PPS Renault — Live Dealership Website</h3>
              </div>
            </a>

            {/* Small Card */}
            <a
              href="/project/Solaxy"
              className="bg-[#27272a] rounded-xl overflow-hidden hover:scale-[1.01] transition-all duration-300 shadow-md max-w-[380px] w-full mx-auto"
            >
              <img
                src="/20.png"
                alt="solaxy"
                className="w-full object-cover"
                style={{ height: "370px" }}
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1">Solaxy-Freelance Project</h3>
                <p className="text-sm opacity-70 font-mono">Web Development</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
