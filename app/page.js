
'use client';

import React from 'react';
import './globals.css';
import { Github, Linkedin } from 'lucide-react';
import FloatingSpheres from './components/FloatingSphere';
import SiteLogo from './components/SiteLogo';
import Navbar from './components/Navbar';
import MyExpertise from './components/MyExpertise';
import MyWork from './components/MyWork';
import ExperiencePage from './components/Experience';
// import FreelanceContact from './components/Contact';

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Background and Floating Spheres */}
      <main className="relative min-h-screen bg-gradient-to-b from-[#0d1117] to-[#1a1f2b] text-white flex flex-col items-center justify-center overflow-hidden px-4">
        <Navbar />

        {/* Hero Content with CTA */}
        <section className="text-center z-10 w-full max-w-4xl mx-auto">
          <h1 className="text-[2.8rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem] font-extrabold tracking-tight leading-tight">
            Yuvan Ashrith
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-mono mt-4">
            BUILDING SOFTWARE THAT FEELS LIKE A MEMORY.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-mono px-6 py-3 rounded-full transition-all shadow-md text-center"
            >
              Let’s build something
            </a>
            <a
              href="#work"
              className="border border-gray-400 text-gray-300 font-mono px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all text-center"
            >
              See my work
            </a>
          </div>
        </section>

        {/* AS FEATURED IN Section */}
        <section className="absolute bottom-24 w-full text-center z-10 px-4">
       <p className="text-gray-400 uppercase tracking-widest text-xs sm:text-sm md:text-base mb-4">
  Brands I&apos;ve worked with
</p>

          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-16 opacity-70">
            {['Upwork', 'Automotives Manufacturers Pvt Ltd'].map((brand) => (
              <span
                key={brand}
                className="text-gray-300 font-semibold text-sm sm:text-base md:text-lg tracking-wide"
              >
                {brand}
              </span>
            ))}
          </div>
        </section>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#1a191d] to-transparent z-10 pointer-events-none" />

        {/* Floating Animation Background */}
        <FloatingSpheres />
      </main>

      {/* About Me Section */}
      <section
        id="about"
        className="relative z-20 bg-[#1a191d] py-12 px-4 sm:px-6 text-white"
      >
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-t from-transparent to-[#1a191d] z-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-20">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 tracking-tight text-gray-100">
            About Me
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-mono text-gray-300 leading-relaxed text-justify sm:text-center">
            I’m a full-stack developer crafting emotionally resonant software apps that feel more like memories than interfaces.
            <br />
            <br />
            My recent work includes a surreal, mood-driven social platform built
            to prioritize feeling over algorithm with ambient posts, echo
            threads, and emotion-based feeds.
            <br />
            <br />
            I’ve also delivered real world products: a Renault dealership site
            (SEO, analytics, on-time launch) and a live food delivery app built
            from scratch using Next.js, Tailwind, MongoDB, and NextAuth.
            <br />
            <br />
            Every build I touch blends frontend and backend into one cohesive
            atmosphere equal parts logic, emotion, and intention.
          </p>
        </div>
      </section>

      {/* Expertise + Work + Experience Sections */}
      <section className="relative z-20 bg-[#1a1f2b]">
        <div className="absolute top-0 w-full h-16 bg-gradient-to-b from-transparent to-[#1a191d] z-10 pointer-events-none" />
        <MyExpertise />
        <MyWork />
        <ExperiencePage />
        {/* <FreelanceContact /> */}
      </section>
    </>
  );
}
