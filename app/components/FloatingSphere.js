
// 'use client';

// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Sphere, Stars } from '@react-three/drei';

// export default function FloatingSpheres() {
//   return (
//     <div className="absolute inset-0 z-0">
//       <Canvas camera={{ position: [0, 0, 10], fov: 40 }}>
//         <ambientLight intensity={0.2} />
//         <pointLight position={[10, 10, 10]} intensity={0.6} />

//         {/* Dimmer stars */}
//         <Stars
//           radius={100}
//           depth={50}
//           count={5000}
//           factor={4}
//           saturation={0}
//           fade
//           speed={1}
//         />

//         {/* Soft glowing spheres */}
//         <Sphere args={[1, 32, 32]} position={[2, 1, 0]}>
//           <meshStandardMaterial
//             emissive="#4c2b16"
//             emissiveIntensity={0.4}
//             color="#ff7a18"
//             toneMapped={false}
//           />
//         </Sphere>
//         <Sphere args={[0.6, 32, 32]} position={[-2, -1, 0]}>
//           <meshStandardMaterial
//             emissive="#280067"
//             emissiveIntensity={0.4}
//             color="#6a00ff"
//             toneMapped={false}
//           />
//         </Sphere>
//         <Sphere args={[0.8, 32, 32]} position={[0, 2, -2]}>
//           <meshStandardMaterial
//             emissive="#007c77"
//             emissiveIntensity={0.4}
//             color="#00ffe7"
//             toneMapped={false}
//           />
//         </Sphere>

//         <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
//       </Canvas>
//     </div>
//   );
// }
'use client';

import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Stars } from '@react-three/drei';

export default function FloatingSpheres() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    handleResize(); // initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowSize.width < 768;

  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, isMobile ? 12 : 10], fov: 40 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.6} />

        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        {/* Slightly reposition spheres on smaller screens */}
        <Sphere args={[1, 32, 32]} position={[2, 1, 0]}>
          <meshStandardMaterial
            emissive="#4c2b16"
            emissiveIntensity={0.4}
            color="#ff7a18"
            toneMapped={false}
          />
        </Sphere>
        <Sphere args={[0.6, 32, 32]} position={isMobile ? [-1.5, -1.2, 0] : [-2, -1, 0]}>
          <meshStandardMaterial
            emissive="#280067"
            emissiveIntensity={0.4}
            color="#6a00ff"
            toneMapped={false}
          />
        </Sphere>
        <Sphere args={[0.8, 32, 32]} position={isMobile ? [0, 1.5, -2] : [0, 2, -2]}>
          <meshStandardMaterial
            emissive="#007c77"
            emissiveIntensity={0.4}
            color="#00ffe7"
            toneMapped={false}
          />
        </Sphere>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
}
