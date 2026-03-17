import React from 'react';
import { motion } from 'framer-motion';
import aboutPic from '../assets/jaydip.jpg';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const expertise = [
    { name: 'React.js', icon: 'fab fa-react', color: 'text-[#61DAFB]' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-[#339933]' },
    { name: 'PostgreSQL', icon: 'fas fa-database', color: 'text-[#336791]' },
    { name: 'Tailwind CSS', icon: 'fab fa-css3-alt', color: 'text-[#38B2AC]' },
    { name: 'JavaScript', icon: 'fab fa-js', color: 'text-[#F7DF1E]' },
    { name: 'Express.js', icon: 'fas fa-server', color: 'text-gray-600' },
  ];

  const education = [
    {
      title: 'Full Stack Development',
      institution: 'Red & White Multimedia Education',
      duration: '2024 - 2026',
      desc: 'Successfully completed an intensive Full Stack Development course, specializing in modern technologies like React, Node.js, Express, and PostgreSQL to build high-performance, scalable web solutions.'
    },
    {
      title: 'Higher Secondary Education',
      institution: 'Desai Education',
      duration: '2023 - 2024',
      desc: 'Completed 12th grade with a strong academic record, focusing on technical and analytical subjects that built a solid foundation for my career in technology.'
    },
    {
      title: 'Secondary Education',
      institution: 'Shree Saurashtra Gyanpith Barvala',
      duration: '2021 - 2022',
      desc: 'Completed 10th grade with a focus on core academic excellence, developing strong analytical thinking and fundamental problem-solving abilities that sparked my interest in technical fields.'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. PAGE HEADER */}
      <section className="bg-[#f8faff] py-20 border-gray-100 border-b">
        <div className="mx-auto px-4 text-center container">
          <h1 className="mb-4 font-extrabold text-primary text-5xl">About</h1>
          <div className="flex justify-center items-center gap-2 font-medium text-gray-500">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary">About</span>
          </div>
        </div>
      </section>

      {/* 2. ABOUT HERO SECTION (Image 1 Style) */}
      <section className="py-24">
        <div className="mx-auto px-4 container">
          <div className="flex lg:flex-row flex-col items-center gap-16 lg:gap-24">
            {/* Image Column */}
            <div className="relative flex-1">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative mx-auto w-fit"
              >
                {/* Circular Profile Container */}
                <div className="z-10 relative shadow-2xl border-[12px] border-white rounded-full w-[300px] md:w-[450px] h-[300px] md:h-[450px] overflow-hidden">
                  <img src={aboutPic} alt="Jaydip Vora" className="w-full h-full object-cover" />
                </div>
                
                {/* Blue Badge (Fresher Style: Projects instead of Years) */}
                <div className="top-1/2 -right-6 md:-right-10 z-20 absolute -translate-y-1/2 transform">
                  <div className="flex flex-col justify-center items-center bg-secondary shadow-xl border-4 border-white rounded-full w-24 md:w-32 h-24 md:h-32 text-white animate-bounce-slow">
                    <span className="font-black text-2xl md:text-3xl">05+</span>
                    <span className="px-2 font-bold text-[10px] md:text-xs text-center uppercase leading-tight">Projects<br/>Done</span>
                  </div>
                </div>

                {/* Decorative Background Arc */}
                <div className="-z-10 absolute inset-0 -m-4 border-[20px] border-secondary/10 rounded-full"></div>
              </motion.div>
            </div>

            {/* Content Column */}
            <div className="flex-1 lg:text-left text-center">
              <span className="inline-block mb-4 font-bold text-secondary text-sm uppercase tracking-[0.2em]">
                <i className="fa-chevron-double-right mr-2 text-xs fas"></i> ABOUT ME
              </span>
              <h2 className="mb-6 font-extrabold text-primary text-4xl md:text-6xl leading-tight">
                My Name is <span className="text-secondary">Jaydip Vora</span>
              </h2>
              <p className="mb-8 font-bold text-gray-500 text-lg uppercase tracking-widest">Full Stack Developer</p>
              
              <p className="mb-10 max-w-2xl text-gray-600 text-lg leading-relaxed">
                I am a passionate Full Stack Developer who has completed a Full Stack Development course from Red & White Multimedia Education. I have strong knowledge of web development technologies and enjoy building modern, responsive, and user-friendly web applications.
                <br /><br />
                I am skilled in frontend and backend development, and I like solving problems through clean and efficient code. I am always eager to learn new technologies and improve my development skills.
              </p>

              {/* Info Grid */}
              <div className="gap-x-4 gap-y-8 grid grid-cols-2 pt-10 border-gray-100 border-t">
                <div>
                  <p className="mb-1 font-black text-gray-400 text-xs uppercase tracking-widest">Phone</p>
                  <p className="font-bold text-primary">+91 95589 02119</p>
                </div>
                <div>
                  <p className="mb-1 font-black text-gray-400 text-xs uppercase tracking-widest">Email</p>
                  <p className="font-bold text-primary">jaydipvora955@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPERTISE SECTION (Image 1 Soft Skills Style) */}
      <section className="bg-[#f8faff] py-24">
        <div className="mx-auto px-4 container">
          <div className="mb-16 text-center">
            <span className="inline-block mb-4 font-bold text-secondary text-sm uppercase tracking-[0.2em]">
              <i className="fa-chevron-double-right mr-2 text-xs fas"></i> EXPERTISE
            </span>
            <h2 className="font-extrabold text-primary text-4xl md:text-5xl">My Technical Skills</h2>
          </div>

          <div className="gap-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {expertise.map((skill, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10, scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col items-center bg-white shadow-sm hover:shadow-xl p-6 border border-gray-50 rounded-[30px] text-center transition-all"
              >
                <div className={'w-16 h-16 bg-light rounded-2xl flex items-center justify-center ' + skill.color + ' text-3xl mb-4 transition-transform group-hover:scale-110'}>
                  <i className={skill.icon}></i>
                </div>
                <h3 className="font-bold text-primary text-sm">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. QUALIFICATION SECTION (Timeline Style) */}
      <section className="py-24">
        <div className="mx-auto px-4 container">
          <div className="mb-16 text-center">
            <span className="inline-block mb-4 font-bold text-secondary text-sm uppercase tracking-[0.2em]">
              <i className="fa-chevron-double-right mr-2 text-xs fas"></i> QUALIFICATION
            </span>
            <h2 className="font-extrabold text-primary text-4xl md:text-5xl">My Education</h2>
          </div>

          <div className="relative mx-auto max-w-4xl">
            {/* Timeline Line */}
            <div className="top-0 bottom-0 left-4 md:left-1/2 absolute bg-gray-100 w-0.5 md:-translate-x-1/2 transform"></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={'relative flex flex-col md:flex-row items-center gap-8 ' + (index % 2 === 0 ? 'md:flex-row-reverse' : '')}
                >
                  {/* Timeline Dot */}
                  <div className="left-4 md:left-1/2 z-10 absolute bg-secondary shadow border-4 border-white rounded-full w-4 h-4 md:-translate-x-1/2 transform"></div>

                  <div className="flex-1 pl-12 md:pl-0 w-full">
                    <div className="bg-white shadow-sm hover:shadow-md p-8 border border-gray-100 rounded-[30px] transition-shadow">
                      <span className="block mb-2 font-bold text-secondary text-sm">{edu.duration}</span>
                      <h3 className="mb-2 font-bold text-primary text-2xl">{edu.title}</h3>
                      <p className="opacity-70 mb-4 font-semibold text-primary">{edu.institution}</p>
                      <p className="text-gray-500 leading-relaxed">{edu.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:block flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION (Image 2 Style) */}
      <section className="relative bg-[#f8faff] py-24 overflow-hidden">
        {/* Decorative background grid/pattern could go here */}
        <div className="z-10 relative mx-auto px-4 text-center container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 text-secondary text-4xl">
              <i className="animate-pulse fas fa-hand-paper"></i>
            </div>
            <h2 className="mb-6 font-extrabold text-primary text-4xl md:text-6xl">
              If you have any project in mind?
            </h2>
            <p className="mb-10 text-gray-500 text-xl">
              DM now! <span className="font-bold text-primary">jaydipvora955@gmail.com</span>
            </p>
            <Link 
              to="/contact" 
              className="group inline-flex items-center gap-3 bg-secondary hover:bg-primary shadow-xl px-12 py-5 rounded-full font-bold text-white transition-all"
            >
              Hire Me Now <i className="fa-arrow-right transition-transform group-hover:translate-x-2 fas"></i>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
