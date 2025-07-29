
// 'use client';

// import React from 'react';
// import Link from 'next/link';

// export default function Navbar() {
//   const menuItems = ['home', 'about', 'expertise', 'work', 'experience', 'contact'];

//   return (
//     <div>
//       <header className="absolute top-8 left-10 text-xl md:text-4xl font-mono font-semibold z-20">
//         <Link href="/" className="text-cyan-400">
//           YuvanAshrith
//         </Link>
//       </header>

//       <nav className="absolute top-8 left-1/2 transform -translate-x-1/2 flex space-x-10 font-mono text-base md:text-lg z-20">
//         {menuItems.map((item, i) => {
//           const isHome = item === 'home';
//           const href = isHome ? '/' : `#${item}`;

//           const content = (
//             <span>
//               <span className="text-gray-400 mr-1">{String(i + 1).padStart(2, '0')}</span>
//               {item}
//             </span>
//           );

//           return isHome ? (
//             <Link
//               key={item}
//               href={href}
//               className="cursor-pointer text-gray-300 hover:text-purple-300 focus-visible:text-purple-300 transition-all"
//             >
//               {content}
//             </Link>
//           ) : (
//             <a
//               key={item}
//               href={href}
//               className="cursor-pointer text-gray-300 hover:text-purple-300 focus-visible:text-purple-300 transition-all"
//             >
//               {content}
//             </a>
//           );
//         })}
//       </nav>
//     </div>
//   );
// }
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Hamburger + Close Icons

export default function Navbar() {
  const menuItems = ['home', 'about', 'expertise', 'work', 'experience', 'contact'];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Logo */}
      <header className="absolute top-6 left-6 text-lg sm:text-xl md:text-3xl font-mono font-semibold z-30">
        <Link href="/" className="text-cyan-400">
          YuvanAshrith
        </Link>
      </header>

      {/* Desktop Nav */}
      <nav className="hidden md:flex absolute top-6 left-1/2 transform -translate-x-1/2 space-x-8 text-sm lg:text-base font-mono z-20">
        {menuItems.map((item, i) => {
          const isHome = item === 'home';
          const href = isHome ? '/' : `#${item}`;

          const content = (
            <span>
              <span className="text-gray-400 mr-1">{String(i + 1).padStart(2, '0')}</span>
              {item}
            </span>
          );

          return isHome ? (
            <Link
              key={item}
              href={href}
              className="cursor-pointer text-gray-300 hover:text-purple-300 transition-all"
            >
              {content}
            </Link>
          ) : (
            <a
              key={item}
              href={href}
              className="cursor-pointer text-gray-300 hover:text-purple-300 transition-all"
            >
              {content}
            </a>
          );
        })}
      </nav>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden absolute top-6 right-6 z-30 text-gray-300"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#0d1117] border-t border-gray-700 z-20 shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-6 font-mono text-base">
            {menuItems.map((item, i) => {
              const isHome = item === 'home';
              const href = isHome ? '/' : `#${item}`;

              const content = (
                <span>
                  <span className="text-gray-400 mr-1">{String(i + 1).padStart(2, '0')}</span>
                  {item}
                </span>
              );

              return isHome ? (
                <Link
                  key={item}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-purple-300 transition-all"
                >
                  {content}
                </Link>
              ) : (
                <a
                  key={item}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-purple-300 transition-all"
                >
                  {content}
                </a>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
