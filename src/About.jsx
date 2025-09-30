import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

const Cube = () => (
  <mesh rotation={[0.4, 0.2, 0]}>
    <boxGeometry args={[2, 2, 2]} />
    <meshStandardMaterial color="#4ade80" />
  </mesh>
);

const skills = ["React", "TailwindCSS", "Framer Motion", "JavaScript", "HTML & CSS"];

const About = () => (
  <section id="about" className="py-16 px-4 sm:px-6 bg-gray-800 text-center">
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-3xl sm:text-4xl font-bold mb-4"
    >
      Hakkımda
    </motion.h2>
    <p className="mb-6 text-sm sm:text-lg">Web geliştirme alanında modern ve etkileşimli projeler üretiyorum.</p>
    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
      {skills.map(skill => (
        <motion.div
          key={skill}
          whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgba(255,255,255,0.8)" }}
          className="bg-gray-700 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm cursor-pointer"
        >
          {skill}
        </motion.div>
      ))}
    </div>
    <div className="h-64 w-full sm:h-80">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Cube />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  </section>
);

export default About;
