import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', icon: 'fab fa-html5', color: 'text-[#E34F26]' },
  { name: 'CSS', icon: 'fab fa-css3-alt', color: 'text-[#2965F1]' },
  { name: 'Tailwind CSS', icon: 'fab fa-css3-alt', color: 'text-[#38B2AC]' },
  { name: 'JavaScript', icon: 'fab fa-js', color: 'text-[#F7DF1E]' },
  { name: 'React.js', icon: 'fab fa-react', color: 'text-[#61DAFB]' },
  { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-[#339933]' },
  { name: 'Express.js', icon: 'fas fa-server', color: 'text-gray-600' },
  { name: 'PostgreSQL', icon: 'fas fa-database', color: 'text-[#336791]' },
  { name: 'Git & GitHub', icon: 'fab fa-github', color: 'text-black' }
];

const SkillsPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-light py-20">
        <div className="mx-auto px-4 text-center container">
          <h1 className="mb-4 font-extrabold text-primary text-5xl">My Skills</h1>
          <p className="mx-auto max-w-2xl text-gray-500">Technical expertise and tools I use to bring digital ideas to life.</p>
        </div>
      </section>

      {/* Skills Content */}
      <section className="py-24">
        <div className="mx-auto px-4 container">
          <div className="flex md:flex-row flex-col items-center gap-20">
            <div className="flex-1">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block mb-4 font-bold text-secondary uppercase tracking-widest"
              >
                My Expertise
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mb-8 font-extrabold text-primary text-4xl md:text-5xl leading-tight"
              >
                I Develop MY skill <br />
                <span className="bg-clip-text bg-gradient-to-r from-secondary to-primary font-outline text-secondary text-transparent">Regularly</span> to Keep me <br />
                Upgrade
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mb-8 text-gray-600 text-lg leading-relaxed"
              >
                I believe in continuous learning and staying updated with the latest trends in the tech industry. My technical stack is carefully chosen to build efficient, scalable, and maintainable applications.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="gap-4 grid grid-cols-2"
              >
                <div className="bg-light p-6 border border-gray-100 rounded-2xl">
                  <h4 className="mb-2 font-bold text-primary text-xl">Frontend</h4>
                  <p className="text-gray-500 text-sm">UI/UX, React, Tailwind</p>
                </div>
                <div className="bg-light p-6 border border-gray-100 rounded-2xl">
                  <h4 className="mb-2 font-bold text-primary text-xl">Backend</h4>
                  <p className="text-gray-500 text-sm">Node, Express, APIs</p>
                </div>
              </motion.div>
            </div>
            <div className="flex-1 gap-6 grid grid-cols-2 sm:grid-cols-3 w-full">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5, scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex flex-col items-center bg-white shadow-lg hover:shadow-2xl p-8 border border-gray-50 rounded-[30px] transition-all"
                >
                  <div className={'text-5xl ' + skill.color + ' mb-6 transition-transform group-hover:scale-110'}>
                    <i className={skill.icon}></i>
                  </div>
                  <span className="font-bold text-primary text-lg">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;