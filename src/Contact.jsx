import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => (
  <section id="contact" className="py-16 px-4 sm:px-6 bg-gray-800 text-center">
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-3xl sm:text-4xl font-bold mb-8"
    >
      İletişim
    </motion.h2>
    <div className="flex justify-center gap-6">
      <motion.a
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        href="mailto:example@mail.com"
        className="bg-blue-600 p-4 rounded-full text-white text-2xl shadow-lg hover:bg-blue-500 transition"
      >
        <FaEnvelope />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        href="https://instagram.com/username"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 p-4 rounded-full text-white text-2xl shadow-lg hover:bg-pink-400 transition"
      >
        <FaInstagram />
      </motion.a>
    </div>
  </section>
);

export default Contact;
