
// 'use client'

// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { ChevronDown, ChevronUp, MapPin, ExternalLink } from 'lucide-react'

// const experiences = [
//   {
//     title: 'Freelance Full-Stack Developer',
//     period: '2024 – Present',
//     description:
//       'Working with early-stage founders to build emotionally resonant, fast-shipping MVPs using Next.js, MongoDB, and Tailwind. Focused on crafting interfaces that feel personal and perform at scale.',
//     tech: ['Next.js', 'Tailwind', 'MongoDB', 'Framer Motion', 'NextAuth'],
//     remote: true,
//     link: '',
//   },
//   {
//     title: 'Website Developer @ PPS Renault (Internship)',
//     period: '2024',
//     description:
//       'Delivered a production-ready WordPress site for PPS Renault (Automotives Manufacturers Ltd) with SEO, analytics, and design team collaboration. Shipped end-to-end in under 4 weeks.',
//     tech: ['WordPress', 'Elementor', 'SEO', 'Google Analytics'],
//     remote: false,
//     link: '',
//   },
//   {
//     title: 'Personal Project — Mood-Based Social App',
//     period: '2024',
//     description:
//       'Built a surreal social platform that maps user emotions to content. Includes ambient posts, echo threads, mood-based feed filters, and vector search powered by Transformers.',
//     tech: ['Next.js', 'MongoDB', 'Tailwind', 'NextAuth', 'Xenova Transformers'],
//     remote: true,
//     link: '',
//   },
//   {
//     title: 'Personal Project — Food Delivery App',
//     period: '2023',
//     description:
//       'Created a full-stack food delivery web app with authentication, cart flow, and admin dashboard. Focused on clean UX and modular code structure.',
//     tech: ['Next.js', 'MongoDB', 'Tailwind', 'Framer Motion'],
//     remote: true,
//     link: '',
//   },
// ]


// export default function ExperiencePage() {
//   const [openIndex, setOpenIndex] = useState(3)

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index)
//   }

//   return (
//     <main className="min-h-screen bg-[#1a191d] text-white px-6 pt-6 pb-16">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-5xl font-bold text-center mb-2">Professional</h1>
//         <h2 className="text-5xl font-bold text-center mb-12">Experience</h2>

//         {experiences.map((item, index) => (
//           <div key={index} className="mb-4">
//             <button
//               onClick={() => toggleAccordion(index)}
//               className={`w-full flex items-center justify-between px-6 py-4 text-left rounded-md transition ${
//                 openIndex === index
//                   ? 'bg-cyan-500 text-white'
//                   : 'bg-cyan-700 hover:bg-cyan-600 text-white'
//               }`}
//             >
//               <span className="font-semibold text-lg">{item.title}</span>
//               <span className="font-semibold">{item.period}</span>
//               {openIndex === index ? (
//                 <ChevronUp className="ml-4" />
//               ) : (
//                 <ChevronDown className="ml-4" />
//               )}
//             </button>

//             <AnimatePresence>
//               {openIndex === index && (
//                 <motion.div
//                   initial={{ height: 0, opacity: 0 }}
//                   animate={{ height: 'auto', opacity: 1 }}
//                   exit={{ height: 0, opacity: 0 }}
//                   className="overflow-hidden bg-[#0e3a42] text-sm px-6 py-4 rounded-b-md"
//                 >
//                   {item.remote && (
//                     <div className="flex items-center mb-2 gap-2 text-cyan-200">
//                       <MapPin size={14} /> Remote
//                       <a
//                         href={item.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="underline inline-flex items-center ml-2"
//                       >
//                         {item.link.replace('https://', '')}
//                         <ExternalLink size={14} className="ml-1" />
//                       </a>
//                     </div>
//                   )}
//                   <p className="mb-4 text-gray-300">{item.description}</p>

//                   <div className="flex flex-wrap gap-2">
//                     {item.tech.map((tech, i) => (
//                       <span
//                         key={i}
//                         className="bg-cyan-800 px-3 py-1 rounded-full text-xs text-white"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         ))}
//       </div>
//     </main>
//   )
// }
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, MapPin, ExternalLink } from 'lucide-react'

const experiences = [
  {
    title: 'Freelance Full-Stack Developer',
    period: '2024 – Present',
    description:
      'Working with early-stage founders to build emotionally resonant, fast-shipping MVPs using Next.js, MongoDB, and Tailwind. Focused on crafting interfaces that feel personal and perform at scale.',
    tech: ['Next.js', 'Tailwind', 'MongoDB', 'Framer Motion', 'NextAuth'],
    remote: true,
    link: '',
  },
  {
    title: 'Website Developer @ PPS Renault (Internship)',
    period: '2024',
    description:
      'Delivered a production-ready WordPress site for PPS Renault (Automotives Manufacturers Ltd) with SEO, analytics, and design team collaboration. Shipped end-to-end in under 4 weeks.',
    tech: ['WordPress', 'Elementor', 'SEO', 'Google Analytics'],
    remote: false,
    link: '',
  },
  {
    title: 'Personal Project — Mood-Based Social App',
    period: '2024',
    description:
      'Built a surreal social platform that maps user emotions to content. Includes ambient posts, echo threads, mood-based feed filters, and vector search powered by Transformers.',
    tech: ['Next.js', 'MongoDB', 'Tailwind', 'NextAuth', 'Xenova Transformers'],
    remote: true,
    link: '',
  },
  {
    title: 'Personal Project — Food Delivery App',
    period: '2023',
    description:
      'Created a full-stack food delivery web app with authentication, cart flow, and admin dashboard. Focused on clean UX and modular code structure.',
    tech: ['Next.js', 'MongoDB', 'Tailwind', 'Framer Motion'],
    remote: true,
    link: '',
  },
]

export default function ExperiencePage() {
  const [openIndex, setOpenIndex] = useState(3)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <main className="bg-[#1a191d] text-white" id='experience'>
      {/* Experience Section */}
      <section className="px-6 pt-6 pb-16 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-2">Professional</h1>
        <h2 className="text-5xl font-bold text-center mb-12">Experience</h2>

        {experiences.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleAccordion(index)}
              className={`w-full flex items-center justify-between px-6 py-4 text-left rounded-md transition ${
                openIndex === index
                  ? 'bg-cyan-500 text-white'
                  : 'bg-cyan-700 hover:bg-cyan-600 text-white'
              }`}
            >
              <span className="font-semibold text-lg">{item.title}</span>
              <span className="font-semibold">{item.period}</span>
              {openIndex === index ? (
                <ChevronUp className="ml-4" />
              ) : (
                <ChevronDown className="ml-4" />
              )}
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden bg-[#0e3a42] text-sm px-6 py-4 rounded-b-md"
                >
                  {item.remote && (
                    <div className="flex items-center mb-2 gap-2 text-cyan-200">
                      <MapPin size={14} /> Remote
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline inline-flex items-center ml-2"
                        >
                          {item.link.replace('https://', '')}
                          <ExternalLink size={14} className="ml-1" />
                        </a>
                      )}
                    </div>
                  )}
                  <p className="mb-4 text-gray-300">{item.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-cyan-800 px-3 py-1 rounded-full text-xs text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </section>

      {/* Freelance Contact Section */}
<section className="w-full bg-black text-white px-6 pb-24 pt-16 sm:px-10 md:px-20" id='contact'>
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
      Open for freelance <br /> and collaboration opportunities
    </h2>

    <p className="text-lg text-gray-400 mb-8 leading-relaxed">
      Got a product idea or a feature you want to ship fast? <br />
      I work with founders and early teams to bring ideas to life — with clean design, solid code, and a sense of mood.
    </p>

    <a
      href="mailto:yuv1n.ashrith@gmail.com"
      className="inline-block text-lg font-semibold text-purple-400 border-b-2 border-purple-500 hover:text-purple-300 hover:border-purple-400 transition duration-300 mb-10"
    >
      yuv1n.ashrith@gmail.com
    </a>

    <div className="mt-10 flex flex-wrap justify-center gap-6 text-base font-mono text-gray-300">
      <a
        href="https://www.linkedin.com/in/yuvan-ashrith-a3281224b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition duration-200"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/yuvanbruh"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition duration-200"
      >
        GitHub
      </a>
      <a
        href="https://x.com/YOUR_USERNAME"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition duration-200"
      >
        Twitter
      </a>
    </div>
  </div>
</section>

    </main>
  )
}
