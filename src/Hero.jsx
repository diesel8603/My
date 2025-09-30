import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import heroAnimation from "./hero.json";

const Hero = () => (
  <section id="hero" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-600 to-purple-600 relative px-4">
    <motion.h1
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-3xl sm:text-5xl font-bold mb-4 z-10"
    >
      Merhaba, Ben İbrahim
    </motion.h1>
    <motion.p
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="text-base sm:text-xl z-10"
    >
      Web geliştirici | Modern & Etkileşimli projeler
    </motion.p>
    <motion.a
      href="#projects"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-white text-black rounded-full font-bold z-10 shadow-lg hover:bg-gray-200 transition"
    >
      Projelerime Bak
    </motion.a>
    <div className="absolute bottom-0 w-full max-w-xs sm:max-w-lg">
      <Lottie animationData={heroAnimation} loop={true} />
    </div>
  </section>
);

export default Hero;
