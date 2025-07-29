
'use client';

import React from 'react';
import Link from 'next/link';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

export default function PoisonTreeCaseStudy() {
  return (
    <section className="w-full bg-[#0f0f11] text-white px-4 sm:px-6 md:px-10 py-20 relative overflow-hidden">
      <div className="max-w-[1260px] mx-auto w-full relative">

        {/* Back Arrow Button */}
        <Link href="/project/Foodapp" className="absolute top-4 left-4 text-white text-xl p-2 rounded-full hover:bg-white/10 transition">
          <FiArrowLeft />
        </Link>

        {/* Breadcrumb */}
    {/* Breadcrumb */}
<div className="text-sm text-gray-400 mb-8 pt-16 sm:pt-20">
  <Link href="/" className="text-white/60 hover:underline">Home</Link>
  <span> &gt; </span>
  <span className="text-white/60">Portfolio</span>
  <span> &gt; </span>
  <span className="text-white font-semibold">Solaxy – Freelance Client Website</span>
</div>


        {/* Project Type */}
        <p className="text-sm text-[#9CA3AF] font-mono mb-2">Web Development •</p>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
          Solaxy – Freelance<br className="hidden sm:block" />Client Website
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mb-16">
          Solxy is a clean, responsive SaaS-style website built for a real freelance client. The goal was to design and ship a production-grade business presence under tight deadlines with pixel precision and fast load speeds. This project demonstrates my ability to turn vague client requirements into a polished, live web product—delivered fully mobile-optimized and SEO-ready.
        </p>

        {/* Technologies and Link */}
        <div className="flex flex-col md:flex-row justify-between gap-6 sm:gap-10 border-t border-[#2f2f2f] pt-6 mb-20">
          <div>
            <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-1">Technologies</h3>
            <p className="text-white text-base">Next.js, TailwindCSS, Framer Motion, Vercel, SEO Meta Tags</p>
          </div>
          <div>
            <Link
              href="https://solaxy-project.vercel.app"
              target="_blank"
              className="text-white text-base font-medium flex items-center gap-2 hover:underline"
            >
              Live Project →
            </Link>
          </div>
        </div>

        {/* Screenshots */}
        <div className="space-y-8 sm:space-y-10 mb-24">
          {["20.png", "21.png", "22.png", "23.png"].map((src, idx) => (
            <img
              key={idx}
              src={`/${src}`}
              alt={`Screenshot ${idx + 1}`}
              className="rounded-xl shadow-md w-full h-[300px] sm:h-[400px] md:h-[580px] object-cover"
            />
          ))}
        </div>

        {/* Case Study Section */}
        <div className="mb-32 space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">The Problem</h2>
            <p className="text-gray-300 leading-relaxed">
              The client needed a fully responsive website for their SaaS-like product offering. Their existing web presence was minimal and lacked professionalism, speed, and visual consistency across devices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">My Role & Solution</h2>
            <p className="text-gray-300 leading-relaxed">
              I designed and built the entire frontend from scratch using TailwindCSS and Next.js. With Framer Motion, I added elegant micro-animations to keep the UX smooth and engaging. I also structured SEO metadata and deployed the project using Vercel for fast global performance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">My Process</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Wireframed layout and user flow based on client inputs</li>
              <li>Built responsive UI with mobile-first breakpoints</li>
              <li>Optimized all pages for performance and crawlability</li>
              <li>Deployed on Vercel and conducted real device testing</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Results</h2>
            <p className="text-gray-300 leading-relaxed">
              The client was extremely satisfied with the result, especially the clean layout and mobile performance. The site now serves as the company’s main online presence and has improved their professional credibility in client demos.
            </p>
          </div>

          {/* CTA */}
          <div className="border-t border-gray-700 pt-10">
            <h2 className="text-2xl font-bold mb-4">Need a high-quality site like this?</h2>
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
      <Link href="/project/Poisontree" className="font-mono font-bold text-sm sm:text-base hover:underline">
        Poison Tree
      </Link>
      <div className="flex gap-1 sm:gap-2">
        <Link href="/project/Renaultpps">
          <div className="p-2 rounded-full hover:bg-gray-200 text-sm cursor-pointer" title="Previous Project">
            <FiArrowLeft />
          </div>
        </Link>
        <Link href="/project/Poisontree">
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