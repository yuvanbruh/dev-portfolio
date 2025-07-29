
'use client';

import React from 'react';
import Link from 'next/link';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

export default function PoisonTreeCaseStudy() {
  return (
    <section className="w-full bg-[#0f0f11] text-white px-4 md:px-10 py-20 relative overflow-hidden">
      <div className="max-w-[1260px] mx-auto w-full relative">

        {/* Back Arrow Button */}
        <button className="absolute top-0 left-0 mt-2 md:mt-3 text-white text-xl p-2 rounded-full hover:bg-white/10 transition">
          <FiArrowLeft />
        </button>

        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-8 pt-10">
          <span className="text-white/60">Home &gt; Portfolio &gt; </span>
          <span className="text-white font-semibold">Poison Tree (B2C Mood based App)</span>
        </div>

        {/* Project Type */}
        <p className="text-sm text-[#9CA3AF] font-mono mb-2">Web Development •</p>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
          Poison Tree (B2C<br />Mood based App)
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl mb-16">
          Poison Tree is an emotionally-driven social app that lets users share moods and thoughts anonymously through poetic micro-posts. 
          Designed with a surreal, david lynchish, distraction-free UI, it offers a calming space to express feelings without the pressure of social validation.
          The interface blends smooth transitions and ambient design to immerse users in their emotions. Ideal for those seeking quiet digital refuge over loud social feeds.
        </p>

        {/* Technologies and Link */}
        <div className="flex flex-col md:flex-row justify-between gap-10 border-t border-[#2f2f2f] pt-6 mb-20">
          <div>
            <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-1">Technologies</h3>
            <p className="text-white text-base">Next.js, MongoDB, TailwindCSS, Framer Motion, Vercel</p>
          </div>
          <div>
            <Link
              href="https://poison-tree.vercel.app"
              target="_blank"
              className="text-white text-base font-medium flex items-center gap-2 hover:underline"
            >
              Live Project →
            </Link>
          </div>
        </div>

        {/* Screenshots */}
        <div className="space-y-10 mb-24">
          <img src="/1.png" alt="Login Page" className="rounded-xl shadow-md w-full h-[580px] object-cover" />
          <img src="/2.png" alt="Home Feed" className="rounded-xl shadow-md w-full h-[580px] object-cover" />
          <img src="/3.png" alt="Explore Moods" className="rounded-xl shadow-md w-full h-[580px] object-cover" />
          <img src="/4.png" alt="Mood Map" className="rounded-xl shadow-md w-full h-[580px] object-cover" />
        </div>

        {/* Case Study Section */}
        <div className="mb-32 space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-4"> The Problem</h2>
            <p className="text-gray-300 leading-relaxed">
       Most platforms for expression are noisy and overly social. I wanted something quiet, david lynch, introspective, something like tumblrish pinterest
              and deeply atmospheric — a platform where mood and journal came before likes and followers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4"> My Role & Solution</h2>
            <p className="text-gray-300 leading-relaxed">
              I designed and developed the full front end using Next.js and TailwindCSS, integrated Framer Motion animations,
              and deployed the application via Vercel. The dark poetic theme, mobile responsiveness, and ambient UI kept users
              emotionally engaged and friction-free.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4"> My Process</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Planned UX around emotion-driven flow and poetic interaction</li>
              <li>Built responsive UI using TailwindCSS and Framer Motion</li>
              <li>Implemented mood tagging, animated transitions, and mobile-first views</li>
              <li>Deployed via Vercel with blazing-fast CDN for optimized load times</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4"> Results</h2>
            <p className="text-gray-300 leading-relaxed">
              The interface resonated well with test users. It loaded in under 2 seconds, worked flawlessly on mobile, and created an emotional space 
              where users felt free to write without judgment. The surreal UI design was called “refreshing and meditative.”
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
      <div className="fixed bottom-10 right-10 z-50">
        <div className="bg-white text-black rounded-xl px-5 py-4 shadow-lg w-[280px]">
          <p className="text-sm text-gray-500 mb-1">Next Project</p>
          <div className="flex items-center justify-between">
            <p className="font-mono font-bold">AI Lab Granada</p>
            <div className="flex gap-2">
              <button className="p-2 rounded-full hover:bg-gray-200">
                <FiArrowLeft />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-200">
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
