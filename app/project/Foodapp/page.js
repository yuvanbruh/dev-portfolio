
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
//           <span className="text-white font-semibold">Food Delivery B2C App</span>
//         </div>

//         {/* Project Type */}
//         <p className="text-sm text-[#9CA3AF] font-mono mb-2">Web Development •</p>

//         {/* Title */}
//         <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
//           Food Delivery B2C App
//         </h1>

//         {/* Description */}
//         <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl mb-16">
//            This is a full-stack food delivery platform I built from scratch, inspired by the needs of a college canteen environment. The app allows users to browse menus, customize orders, pay securely, and track order status. Though not deployed publicly yet, it has been tested with peers and functions as a scalable MVP ready for real-world use.
// The admin panel includes full control over orders and authentication via Google and JWT. The project demonstrates my ability to build and deploy complete production-grade systems end-to-end.
//         </p>

//         {/* Technologies and Link */}
//         <div className="flex flex-col md:flex-row justify-between gap-10 border-t border-[#2f2f2f] pt-6 mb-20">
//           <div>
//             <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-1">Technologies</h3>
//             <p className="text-white text-base">React, Next.js, Node.js, MongoDB, Razorpay, JWT, TailwindCSS</p>
//           </div>
//           <div>
//             <Link
//               href="https://poison-tree.vercel.app"
//               target="_blank"
//               className="text-white text-base font-medium flex items-center gap-2 hover:underline"
//             >
//               Live Project →
//             </Link>
//           </div>
//         </div>

//         {/* Screenshots */}
//         <div className="space-y-10 mb-24">
//           <img src="/15.png" alt="Login Page" className="rounded-xl shadow-md w-full h-[580px] object-cover" />
//           <img src="/16.png" alt="Home Feed" className="rounded-xl shadow-md w-full h-[580px] object-cover" />
//           <img src="/17.png" alt="Explore Moods" className="rounded-xl shadow-md w-full h-[580px] object-cover" />
//           <img src="/18.png" alt="Mood Map" className="rounded-xl shadow-md w-full h-[580px] object-cover" />
//            <img src="/19.png" alt="Mood Map" className="rounded-xl shadow-md w-full h-[580px] object-cover" />
//         </div>

//         {/* Case Study Section */}
//         <div className="mb-32 space-y-12">
//           <div>
//             <h2 className="text-2xl font-bold mb-4"> The Problem</h2>
//             <p className="text-gray-300 leading-relaxed">
//        I noticed many small food joints and college canteens lack digital ordering systems, which causes long queues, delays, and mismanagement. I wanted to build a solution that simplified the process for both users and admins.
//             </p>
//           </div>

//           <div>
//             <h2 className="text-2xl font-bold mb-4"> My Role & Solution</h2>
//             <p className="text-gray-300 leading-relaxed">
//                    I single-handedly designed and developed the app using the MERN stack and integrated Razorpay for payments. It includes a user-facing food ordering interface and an admin dashboard to manage menu items, orders, and status updates.
//             </p>
//           </div>

//           <div>
//             <h2 className="text-2xl font-bold mb-4"> My Process</h2>
//             <ul className="list-disc list-inside text-gray-300 space-y-2">
//             <li>Planned UX flow for food browsing, customization, and checkout</li>
//               <li>Built a responsive UI using TailwindCSS</li>
//               <li>Implemented secure authentication using JWT</li>
//               <li>Integrated Razorpay to handle real payments (in test mode)</li>
//               <li>Developed a protected admin dashboard to view and manage orders</li>
//             </ul>
//           </div>

//           <div>
//             <h2 className="text-2xl font-bold mb-4"> Results</h2>
//             <p className="text-gray-300 leading-relaxed">
//           The application is now fully deployed and publicly accessible. It performs efficiently across devices, loads in under 2 seconds, and offers a smooth end-to-end ordering experience. Users found it intuitive and practical, especially for small food vendors or college-style use cases. With its live payment integration, real-time order tracking, and admin panel, the app is production-ready and adaptable to real business environments.
//             </p>
//           </div>

//           {/* CTA */}
//           <div className="border-t border-gray-700 pt-10">
//             <h2 className="text-2xl font-bold mb-4">Building something similar for your restaurant or outlet?</h2>
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

export default function PoisonTreeCaseStudy() {
  return (
    <section className="w-full bg-[#0f0f11] text-white px-4 sm:px-6 md:px-10 py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-[1260px] mx-auto w-full relative">

        {/* Back Arrow Button */}
        <button className="absolute top-4 left-4 text-white text-lg p-2 rounded-full hover:bg-white/10 transition md:top-0 md:left-0 md:mt-2">
          <FiArrowLeft />
        </button>

        {/* Breadcrumb */}
        {/* <div className="text-sm text-gray-400 mb-6 pt-14 sm:pt-16 md:pt-10">
          <span className="text-white/60">Home &gt; Portfolio &gt; </span>
          <span className="text-white font-semibold">Food Delivery B2C App</span>
        </div> */}
       <div className="text-sm text-gray-400 mb-8 pt-16 sm:pt-20">
  <Link href="/" className="text-white/60 hover:underline">Home</Link>
  <span> &gt; </span>
  <span className="text-white/60">Portfolio</span>
  <span> &gt; </span>
  <span className="text-white font-semibold">Food Delivery B2C App</span>
</div>
        {/* Project Type */}
        <p className="text-xs sm:text-sm text-[#9CA3AF] font-mono mb-2">Web Development •</p>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
          Food Delivery B2C App
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl mb-14">
          This is a full-stack food delivery platform I built from scratch, inspired by the needs of a college canteen environment. The app allows users to browse menus, customize orders, pay securely, and track order status. Though not deployed publicly yet, it has been tested with peers and functions as a scalable MVP ready for real-world use.
          <br /><br />
          The admin panel includes full control over orders and authentication via Google and JWT. The project demonstrates my ability to build and deploy complete production-grade systems end-to-end.
        </p>

        {/* Technologies and Live Link */}
        <div className="flex flex-col md:flex-row justify-between gap-6 border-t border-[#2f2f2f] pt-6 mb-16">
          <div>
            <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-1">Technologies</h3>
            <p className="text-white text-sm sm:text-base">
              React, Next.js, Node.js, MongoDB, Razorpay, JWT, TailwindCSS
            </p>
          </div>
          <div>
            <Link
              href="https://poison-tree.vercel.app"
              target="_blank"
              className="text-white text-sm sm:text-base font-medium flex items-center gap-2 hover:underline"
            >
              Live Project →
            </Link>
          </div>
        </div>

        {/* Screenshots */}
        <div className="space-y-6 sm:space-y-10 mb-20">
          {['15', '16', '17', '18', '19'].map((img, index) => (
            <img
              key={index}
              src={`/${img}.png`}
              alt={`Screenshot ${index + 1}`}
              className="rounded-xl shadow-md w-full h-64 sm:h-[400px] md:h-[580px] object-cover"
            />
          ))}
        </div>

        {/* Case Study Content */}
        <div className="mb-28 space-y-12">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">The Problem</h2>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              I noticed many small food joints and college canteens lack digital ordering systems, which causes long queues, delays, and mismanagement. I wanted to build a solution that simplified the process for both users and admins.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">My Role & Solution</h2>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              I single-handedly designed and developed the app using the MERN stack and integrated Razorpay for payments. It includes a user-facing food ordering interface and an admin dashboard to manage menu items, orders, and status updates.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">My Process</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm sm:text-base">
              <li>Planned UX flow for food browsing, customization, and checkout</li>
              <li>Built a responsive UI using TailwindCSS</li>
              <li>Implemented secure authentication using JWT</li>
              <li>Integrated Razorpay to handle real payments (in test mode)</li>
              <li>Developed a protected admin dashboard to view and manage orders</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Results</h2>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              The application is now fully deployed and publicly accessible. It performs efficiently across devices, loads in under 2 seconds, and offers a smooth end-to-end ordering experience. Users found it intuitive and practical, especially for small food vendors or college-style use cases. With its live payment integration, real-time order tracking, and admin panel, the app is production-ready and adaptable to real business environments.
            </p>
          </div>

          {/* CTA */}
          <div className="border-t border-gray-700 pt-10">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Building something similar for your restaurant or outlet?</h2>
            <a
              href="mailto:yuv1n.ashrith@gmail.com"
              className="inline-block px-5 py-3 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700 transition text-sm sm:text-base"
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
      {/* Project Name → Clicking it goes to Renaultpps */}
      <Link href="/project/Renaultpps" className="font-mono font-bold text-sm sm:text-base hover:underline">
        PPS Renault
      </Link>

      {/* Arrows */}
      <div className="flex gap-1 sm:gap-2">
        {/* Left Arrow — Back to PoisonTree */}
        <Link href="/project/Poisontree">
          <div className="p-2 rounded-full hover:bg-gray-200 text-sm cursor-pointer" title="Previous Project">
            <FiArrowLeft />
          </div>
        </Link>

        {/* Right Arrow — Forward to RenaultPPS */}
        <Link href="/project/Renaultpps">
          <div className="p-2 rounded-full hover:bg-gray-200 text-sm cursor-pointer" title="Next Project">
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
