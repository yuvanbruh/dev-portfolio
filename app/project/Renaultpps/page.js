
// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

// export default function PoisonTreeCaseStudy() {
//   return (
//     <section className="w-full bg-[#0f0f11] text-white px-4 md:px-10 py-20 relative overflow-hidden">
//       <div className="max-w-[1260px] mx-auto w-full relative">

//         {/* Back Arrow Button */}
//         <button className="absolute top-0 left-0 mt-2 md:mt-3 text-white text-xl p-2 rounded-full hover:bg-white/10 transition">
//           <FiArrowLeft />
//         </button>

//         {/* Breadcrumb */}
//         <div className="text-sm text-gray-400 mb-8 pt-10">
//           <span className="text-white/60">Home &gt; Portfolio &gt; </span>
//           <span className="text-white font-semibold">PPS Renault Dealership Website</span>
//         </div>

//         {/* Project Type */}
//         <p className="text-sm text-[#9CA3AF] font-mono mb-2">Web Development • Internship</p>

//         {/* Title */}
//         <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
//         PPS Renault — Dealership Website
//         </h1>

//         {/* Description */}
//         <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl mb-16">
//      During my internship at PPS Renault (Automotives Manufacturers Pvt. Ltd.), I independently built a production-grade website for their car dealership. The goal was to create a fast, responsive, and SEO-optimized platform for showcasing car models, capturing leads, and enhancing customer engagement. The site is now live and actively used by Renault’s sales team across multiple regions.
// I worked closely with SEO teams and visual designers to ensure performance and brand alignment. The project was delivered on time and is now a key digital asset in their marketing and customer funnel.
//         </p>

//         {/* Technologies and Link */}
//         <div className="flex flex-col md:flex-row justify-between gap-10 border-t border-[#2f2f2f] pt-6 mb-20">
//           <div>
//             <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-1">Technologies</h3>
//             <p className="text-white text-base">HTML, CSS, Wordpress, PHP, SEO Tools, Google Analytics</p>
//           </div>
//           <div>
//             <Link
//               href="https://ppsbharatbenz.co.in/"
//               target="_blank"
//               className="text-white text-base font-medium flex items-center gap-2 hover:underline"
//             >
//               Live Project →
//             </Link>
//           </div>
//         </div>

//         {/* Screenshots */}
//         <div className="space-y-10 mb-24">
//           <img src="/11.png" alt="Login Page" className="rounded-xl shadow-md w-full h-[580px] object-cover" />
//           <img src="/12.png" alt="Home Feed" className="rounded-xl shadow-md w-full h-[580px] object-cover" />
//           <img src="/13.png" alt="Explore Moods" className="rounded-xl shadow-md w-full h-[580px] object-cover" />
//           <img src="/14.png" alt="Mood Map" className="rounded-xl shadow-md w-full h-[580px] object-cover" />
//         </div>

//         {/* Case Study Section */}
//         <div className="mb-32 space-y-12">
//           <div>
//             <h2 className="text-2xl font-bold mb-4"> The Problem</h2>
//             <p className="text-gray-300 leading-relaxed">
//        PPS Renault needed a clean, responsive, and content-driven website to represent their dealership network digitally. Their old site was slow, hard to update, and lacked a modern UI/UX that could support lead generation or brand storytelling.
//             </p>
//           </div>

//           <div>
//             <h2 className="text-2xl font-bold mb-4"> My Role & Solution</h2>
//             <p className="text-gray-300 leading-relaxed">
//              I was brought on as a Web Development Intern to lead the rebuild. I single-handedly developed the site using clean semantic code, ensured pixel-perfect responsiveness across devices, and collaborated with the SEO and design teams to bring their vision to life. I also set up Google Analytics for ongoing performance monitoring.
//             </p>
//           </div>

//           <div>
//             <h2 className="text-2xl font-bold mb-4"> My Process</h2>
//             <ul className="list-disc list-inside text-gray-300 space-y-2">
//                  <li>Planned site structure around SEO goals and customer flow</li>
//       <li>Developed responsive pages using HTML, CSS, JavaScript, and GSAP animations</li>
//       <li>Integrated Google Analytics and lead capture mechanisms</li>
//       <li>Managed updates and iterations with content writers, designers, and senior managers</li>
//             </ul>
//           </div>

//           <div>
//             <h2 className="text-2xl font-bold mb-4"> Results</h2>
//             <p className="text-gray-300 leading-relaxed">
//         The new website launched successfully and was immediately used by PPS Renault for all customer-facing digital activities. It saw improved load times, better mobile engagement, and strong feedback from internal teams and end users. The brand identity was maintained across all devices, helping increase professionalism and lead trust.
//             </p>
//           </div>

//           {/* CTA */}
//           <div className="border-t border-gray-700 pt-10">
//             <h2 className="text-2xl font-bold mb-4">Want something like this for your idea?</h2>
//             <a
//               href="mailto:yuv1n.ashrith@gmail.com"
//               className="inline-block px-6 py-3 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700 transition"
//             >
//               Let’s Work Together
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Next Project Box */}
//       <div className="fixed bottom-10 right-10 z-50">
//         <div className="bg-white text-black rounded-xl px-5 py-4 shadow-lg w-[280px]">
//           <p className="text-sm text-gray-500 mb-1">Next Project</p>
//           <div className="flex items-center justify-between">
//             <p className="font-mono font-bold">AI Lab Granada</p>
//             <div className="flex gap-2">
//               <button className="p-2 rounded-full hover:bg-gray-200">
//                 <FiArrowLeft />
//               </button>
//               <button className="p-2 rounded-full hover:bg-gray-200">
//                 <FiArrowRight />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
'use client';

import React from 'react';
import Link from 'next/link';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

export default function PPSRenaultCaseStudy() {
  return (
    <section className="w-full bg-[#0f0f11] text-white px-4 md:px-10 py-20 relative overflow-hidden">
      <div className="max-w-[1260px] mx-auto w-full relative">

        {/* Back Arrow Button */}
        <Link href="/project/Poisontree">
          <button className="absolute top-2 left-2 md:top-4 md:left-4 text-white text-xl p-2 rounded-full hover:bg-white/10 transition">
            <FiArrowLeft />
          </button>
        </Link>

      

{/* Breadcrumb */}
<div className="text-sm text-gray-400 mb-8 pt-16 sm:pt-20">
  <Link href="/" className="text-white/60 hover:underline">Home</Link>
  <span> &gt; </span>
  <span className="text-white/60">Portfolio</span>
  <span> &gt; </span>
  <span className="text-white font-semibold">PPS Renault Dealership Website</span>
</div>

        {/* Project Type */}
        <p className="text-sm text-[#9CA3AF] font-mono mb-2">Web Development • Internship</p>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
          PPS Renault — Dealership Website
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-4xl mb-16">
          During my internship at PPS Renault (Automotives Manufacturers Pvt. Ltd.), I independently built a production-grade website for their car dealership. The goal was to create a fast, responsive, and SEO-optimized platform for showcasing car models, capturing leads, and enhancing customer engagement. The site is now live and actively used by Renault’s sales team across multiple regions.
          I worked closely with SEO teams and visual designers to ensure performance and brand alignment. The project was delivered on time and is now a key digital asset in their marketing and customer funnel.
        </p>

        {/* Technologies and Link */}
        <div className="flex flex-col md:flex-row justify-between gap-10 border-t border-[#2f2f2f] pt-6 mb-20">
          <div>
            <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-1">Technologies</h3>
            <p className="text-white text-base">HTML, CSS, Wordpress, PHP, SEO Tools, Google Analytics</p>
          </div>
          <div>
            <Link
              href="https://ppsbharatbenz.co.in/"
              target="_blank"
              className="text-white text-base font-medium flex items-center gap-2 hover:underline"
            >
              Live Project →
            </Link>
          </div>
        </div>

        {/* Screenshots */}
        <div className="space-y-10 mb-24">
          {["/11.png", "/12.png", "/13.png", "/14.png"].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Screenshot ${idx + 1}`}
              className="rounded-xl shadow-md w-full h-[280px] sm:h-[400px] md:h-[580px] object-cover"
            />
          ))}
        </div>

        {/* Case Study Section */}
        <div className="mb-32 space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">The Problem</h2>
            <p className="text-gray-300 leading-relaxed">
              PPS Renault needed a clean, responsive, and content-driven website to represent their dealership network digitally. Their old site was slow, hard to update, and lacked a modern UI/UX that could support lead generation or brand storytelling.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">My Role & Solution</h2>
            <p className="text-gray-300 leading-relaxed">
              I was brought on as a Web Development Intern to lead the rebuild. I single-handedly developed the site using clean semantic code, ensured pixel-perfect responsiveness across devices, and collaborated with the SEO and design teams to bring their vision to life. I also set up Google Analytics for ongoing performance monitoring.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">My Process</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Planned site structure around SEO goals and customer flow</li>
              <li>Developed responsive pages using HTML, CSS, JavaScript, and GSAP animations</li>
              <li>Integrated Google Analytics and lead capture mechanisms</li>
              <li>Managed updates and iterations with content writers, designers, and senior managers</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Results</h2>
            <p className="text-gray-300 leading-relaxed">
              The new website launched successfully and was immediately used by PPS Renault for all customer-facing digital activities. It saw improved load times, better mobile engagement, and strong feedback from internal teams and end users. The brand identity was maintained across all devices, helping increase professionalism and lead trust.
            </p>
          </div>

          {/* CTA */}
          <div className="border-t border-gray-700 pt-10">
            <h2 className="text-2xl font-bold mb-4">Want something like this for your idea?</h2>
            <a
              href="mailto:yuv1n.ashrith@gmail.com"
              className="inline-block px-6 py-3 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700 transition"
            >
              Let’s Work Together
            </a>
          </div>
        </div>
      </div>

      {/* Next Project Box */}
    <div className="fixed bottom-6 right-4 sm:bottom-10 sm:right-10 z-50">
  <div className="bg-white text-black rounded-xl px-4 py-3 sm:px-5 sm:py-4 shadow-lg w-[240px] sm:w-[280px]">
    <p className="text-xs sm:text-sm text-gray-500 mb-1">Next Project</p>
    <div className="flex items-center justify-between">
      <Link
        href="/project/Solaxy"
        className="font-mono font-bold text-sm sm:text-base hover:underline"
      >
        Solaxy
      </Link>
      <div className="flex gap-1 sm:gap-2">
        <Link href="/project/Foodapp">
          <div
            className="p-2 rounded-full hover:bg-gray-200 text-sm cursor-pointer"
            title="Previous Project"
          >
            <FiArrowLeft />
          </div>
        </Link>
        <Link href="/project/Solaxy">
          <div
            className="p-2 rounded-full hover:bg-gray-200 text-sm cursor-pointer"
            title="Next Project"
          >
            <FiArrowRight />
          </div>
        </Link>
      </div>
    </div>
  </div>
</div>

    </section>
  );
}
