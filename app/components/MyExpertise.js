
// 'use client';

// import React from 'react';

// export default function MyExpertise() {
//   return (
//     <section
//       id="expertise"
//       className="relative w-full text-white py-28 px-6 md:px-16 transition-all duration-700 bg-[#1a191d]"
//     >
//       {/* Fade-in gradient from transparent to section bg */}
//       <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-t from-transparent to-[#1a191d] z-10 pointer-events-none" />

//       <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">My Expertise</h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         <div className="bg-[#222] p-6 rounded-xl shadow-lg text-center text-lg font-medium">
//           React / Next.js
//         </div>
//         <div className="bg-[#222] p-6 rounded-xl shadow-lg text-center text-lg font-medium">
//           Three.js / Fiber
//         </div>
//         <div className="bg-[#222] p-6 rounded-xl shadow-lg text-center text-lg font-medium">
//           Node.js / MongoDB
//         </div>
//       </div>
//     </section>
//   );
// }
'use client';

import React from 'react';

export default function MyExpertise() {
  return (
    <section
      id="expertise"
      className="relative w-full text-white py-28 px-6 md:px-16 transition-all duration-700 bg-[#1a191d]"
    >
      {/* Fade-in gradient from transparent to section bg */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-t from-transparent to-[#1a191d] z-10 pointer-events-none" />

      <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">My Expertise</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {/* Frontend Dev */}
        <div className="bg-[#222] p-8 rounded-xl shadow-xl">
          <h3 className="text-2xl font-bold mb-2">
            <span className="border-b-4 border-pink-500">Frontend Dev</span><br />React, Next.js
          </h3>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Passionate about creative UI and thoughtful UX. Built and deployed production-ready web apps with
            modern stacks like React, Next.js (App Router), Tailwind, Framer Motion, and Zustand.
          </p>
        </div>

        {/* Backend & Database */}
        <div className="bg-[#222] p-8 rounded-xl shadow-xl">
          <h3 className="text-2xl font-bold mb-2">
            <span className="border-b-4 border-blue-500">Backend Dev</span><br />Node.js, MongoDB
          </h3>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Experienced in building REST APIs, integrating databases with Mongoose/Prisma,
            handling authentication with NextAuth.js and deploying full-stack apps on Vercel.
          </p>
        </div>

        {/* Creative Web */}
        <div className="bg-[#222] p-8 rounded-xl shadow-xl">
          <h3 className="text-2xl font-bold mb-2">
            <span className="border-b-4 border-orange-400">Creative Web</span><br />Three.js, Fiber
          </h3>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Built immersive 3D web experiences using Three.js and React Three Fiber.
            Focused on atmospheric, mood-based design with storytelling elements.
          </p>
        </div>

        {/* AI Experiments */}
        <div className="bg-[#222] p-8 rounded-xl shadow-xl">
          <h3 className="text-2xl font-bold mb-2">
            <span className="border-b-4 border-green-400">AI Integrations</span><br />OpenAI, LangChain
          </h3>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Built experimental tools integrating OpenAI APIs for content generation, chat interfaces, and creative storytelling inside apps.
          </p>
        </div>

        {/* SEO & Analytics */}
        <div className="bg-[#222] p-8 rounded-xl shadow-xl">
          <h3 className="text-2xl font-bold mb-2">
            <span className="border-b-4 border-yellow-400">Growth Stack</span><br />SEO, Analytics
          </h3>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Worked with content writers and video editors to ship SEO-optimized landing pages.
            Integrated Google Analytics & social proof elements for conversions.
          </p>
        </div>

        {/* Tools & Deployment */}
        <div className="bg-[#222] p-8 rounded-xl shadow-xl">
          <h3 className="text-2xl font-bold mb-2">
            <span className="border-b-4 border-purple-500">Dev Tools</span><br />Git, Vercel, Figma
          </h3>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Confident with version control, real-time collaboration on GitHub, 
            shipping fast with Vercel, and using Figma for design, UX flows, and layout prep.
          </p>
        </div>
      </div>
    </section>
  );
}
