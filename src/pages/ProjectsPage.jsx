import React from 'react';
import { motion } from 'framer-motion';
import project1 from '../assets/jaydip.jpg'; 
import project2 from '../assets/jaydip.jpg';
import project3 from '../assets/jaydip.jpg';

const projects = [
  {
    title: 'Business Planning',
    category: 'Full Stack',
    desc: 'A comprehensive tool for business strategy and resource management.',
    image: project1,
    link: '#'
  },
  {
    title: 'Social Marketing',
    category: 'Frontend',
    desc: 'Interactive dashboard for social media campaign tracking and analytics.',
    image: project2,
    link: '#'
  },
  {
    title: 'Link Building',
    category: 'SEO Tool',
    desc: 'Automated platform for managing and tracking backlink profiles.',
    image: project3,
    link: '#'
  },
  {
    title: 'Report Analysis',
    category: 'Data Viz',
    desc: 'Deep data analysis tool with interactive charts and reporting.',
    image: project1,
    link: '#'
  },
  {
    title: 'CRM Marketing',
    category: 'Business',
    desc: 'Customer relationship management system with integrated marketing.',
    image: project2,
    link: '#'
  },
  {
    title: 'Search Strategy',
    category: 'Backend',
    desc: 'Algorithmic search optimization engine for enterprise websites.',
    image: project3,
    link: '#'
  }
];

const ProjectsPage = () => {
  return (
    <div className="bg-white pb-24 min-h-screen">
      {/* Page Header */}
      <section className="bg-light mb-20 py-20">
        <div className="mx-auto px-4 text-center container">
          <h1 className="mb-4 font-extrabold text-primary text-5xl">My Portfolio</h1>
          <p className="mx-auto max-w-2xl text-gray-500">A showcase of my recent projects, featuring a mix of frontend, backend, and full-stack solutions.</p>
        </div>
      </section>

      <div className="mx-auto px-4 container">
        <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative shadow-lg group-hover:shadow-2xl mb-6 rounded-[30px] h-[350px] overflow-hidden transition-all duration-500">
                <div className="w-full h-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto transition-transform duration-[3s] ease-in-out group-hover:translate-y-[-50%]" 
                  />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 p-8 transition-opacity duration-500">
                  <a href={project.link} className="bg-white px-6 py-2 rounded-full font-bold text-primary transition-transform translate-y-10 group-hover:translate-y-0 duration-500 transform">
                    View Case Study
                  </a>
                </div>
              </div>
              <div className="px-2">
                <span className="block mb-2 font-bold text-secondary text-sm uppercase tracking-wider">{project.category}</span>
                <h3 className="mb-2 font-bold text-primary group-hover:text-secondary text-2xl transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-500 line-clamp-2">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent hover:bg-primary shadow-lg px-12 py-4 rounded-full font-bold text-white transition-all"
          >
            Load More Projects
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;