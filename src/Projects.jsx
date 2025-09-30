import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Web Portföy Sitesi", description: "React ve Tailwind ile modern portföy sitesi.", link: "#" },
  { title: "E-Ticaret Platformu", description: "Full-stack e-ticaret projesi.", link: "#" },
  { title: "Blog Uygulaması", description: "React + Firebase blog uygulaması.", link: "#" }
];

const Projects = () => (
  <section id="projects" className="py-16 px-4 sm:px-6 bg-gray-900 text-center">
    <h2 className="text-3xl sm:text-4xl font-bold mb-8">Projelerim</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
      {projects.map(project => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,255,255,0.3)" }}
          className="bg-gray-800 p-4 sm:p-6 rounded-lg cursor-pointer transition"
        >
          <h3 className="text-lg sm:text-xl font-bold mb-1">{project.title}</h3>
          <p className="text-xs sm:text-sm">{project.description}</p>
          <a href={project.link} className="text-blue-400 mt-2 inline-block text-xs sm:text-sm">Detay</a>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
