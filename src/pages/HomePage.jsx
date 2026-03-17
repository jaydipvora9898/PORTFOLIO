import React, { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profilePic from "../assets/jaydip.jpg";
import { link } from "framer-motion/client";
import projectImg1 from "../assets/e-commerce.png";
const HomePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Web Development",
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api/contact";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "Web Development",
          message: "",
        });
        alert("✅ Message sent successfully! Check MongoDB Atlas.");
      } else {
        throw new Error(data.error || "Something went wrong");
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
      alert("❌ Error: " + err.message);
    }
  };
  return (
    <div className="bg-white overflow-hidden">
      {/* 1. HERO SECTION */}
      <section
        id="home"
        className="relative flex items-center bg-gradient-to-br from-[#f0f7ff] via-white to-[#fff5f0] pt-20 pb-16 min-h-screen"
      >
        <div className="z-10 relative mx-auto px-4 container">
          <div className="flex md:flex-row flex-col items-center gap-12 lg:gap-20">
            <div className="flex-1 md:text-left text-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 bg-secondary/10 mb-6 px-4 py-2 rounded-full font-bold text-secondary"
              >
                <span className="relative flex w-3 h-3">
                  <span className="inline-flex absolute bg-secondary opacity-75 rounded-full w-full h-full animate-ping"></span>
                  <span className="inline-flex relative bg-secondary rounded-full w-3 h-3"></span>
                </span>
                Available for Hire
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6 font-extrabold text-primary leading-tight"
              >
                <span className="text-primary text-5xl md:text-6xl">
                  I'm JAYDIP VORA
                </span>
                <br />
                <span className="text-secondary text-4xl">
                  <TypeAnimation
                    sequence={[
                      "Full Stack Developer",
                      2000,
                      "React.js Developer",
                      2000,
                      "MERN Stack Developer",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mx-auto md:mx-0 mb-10 max-w-lg text-gray-600 text-lg leading-relaxed"
              >
                A passionate Full Stack Developer focused on building modern,
                high-performance web applications using the latest technologies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap justify-center md:justify-start gap-4"
              >
                <a
                  href="#contact"
                  className="flex items-center gap-2 bg-accent hover:bg-primary shadow-lg px-10 py-4 rounded-full font-bold text-white transition-all"
                >
                  Hire Me Now <i className="fa-arrow-right text-sm fas"></i>
                </a>
                <div className="flex items-center gap-4 ml-4">
                  <a
                    href="https://github.com/jaydipvora9898"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center hover:bg-accent border border-gray-200 hover:border-accent rounded-full w-12 h-12 text-primary hover:text-white transition-all"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jaydip-vora-200103388/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center hover:bg-accent border border-gray-200 hover:border-accent rounded-full w-12 h-12 text-primary hover:text-white transition-all"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/jaydip_.vora_.777?utm_source=qr&igsh=MW05N21keTRwZ2QwbQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center hover:bg-accent border border-gray-200 hover:border-accent rounded-full w-12 h-12 text-primary hover:text-white transition-all"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="relative flex-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="z-10 relative"
              >
                <div className="group relative shadow-2xl mx-auto border-[12px] border-white rounded-full w-[320px] md:w-[480px] h-[320px] md:h-[480px] overflow-hidden">
                  <img
                    src={profilePic}
                    alt="Jaydip Vora"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                </div>

                {/* Floating Elements as per image */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="hidden md:block -top-4 -left-4 z-20 absolute bg-white shadow-xl p-4 rounded-2xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex justify-center items-center bg-green-100 rounded-full w-10 h-10 text-green-600">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div>
                      <p className="font-bold text-gray-400 text-xs uppercase">
                        Learning
                      </p>
                      <p className="font-bold text-primary text-sm">
                        Full Stack
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="hidden md:block top-1/2 -right-10 z-20 absolute bg-white shadow-xl p-4 rounded-2xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex justify-center items-center bg-orange-100 rounded-full w-10 h-10 text-orange-600">
                      <i className="fas fa-code"></i>
                    </div>
                    <div>
                      <p className="font-bold text-gray-400 text-xs uppercase">
                        Tech
                      </p>
                      <p className="font-bold text-primary text-sm">
                        MERN Stack
                      </p>
                    </div>
                  </div>
                </motion.div>

                <div className="right-1/4 -bottom-10 -z-10 absolute bg-secondary/20 blur-3xl rounded-full w-32 h-32"></div>
                <div className="-top-10 left-1/4 -z-10 absolute bg-accent/20 blur-3xl rounded-full w-32 h-32"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE SKILLS CARDS (As per image below hero) */}
      <section className="z-20 relative bg-white mt-[-50px] py-20">
        <div className="mx-auto px-4 container">
          <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
            {[
              {
                title: "Modern UI/UX",
                desc: "Designing clean and intuitive user interfaces.",
                icon: "fas fa-pencil-ruler",
                color: "bg-blue-500",
              },
              {
                title: "Clean Coding",
                desc: "Writing maintainable and efficient code.",
                icon: "fas fa-code",
                color: "bg-orange-500",
              },
              {
                title: "Fast Performance",
                desc: "Optimizing apps for maximum speed.",
                icon: "fas fa-bolt",
                color: "bg-yellow-500",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group flex flex-col items-center bg-white shadow-lg p-8 border border-gray-50 rounded-[30px] text-center transition-all"
              >
                <div
                  className={
                    "h-16 w-16 " +
                    feature.color +
                    " mb-6 flex transform items-center justify-center rounded-2xl text-2xl text-white shadow-lg transition-transform group-hover:rotate-12"
                  }
                >
                  <i className={feature.icon}></i>
                </div>
                <h3 className="mb-4 font-bold text-primary text-2xl">
                  {feature.title}
                </h3>
                <p className="text-gray-500">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT ME SECTION (As per Image 1) */}
      <section id="about" className="bg-white py-24">
        <div className="mx-auto px-4 container">
          <div className="flex md:flex-row flex-col items-center gap-16">
            <div className="relative flex-1">
              <motion.div
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Image Container with Blue Arc/Circle as per Image 1 */}
                <div className="relative mx-auto w-[300px] md:w-[450px] h-[300px] md:h-[450px]">
                  <div className="-z-10 absolute inset-0 bg-secondary opacity-10 rounded-full translate-x-10 translate-y-10"></div>
                  <div className="-z-10 absolute inset-0 border-[15px] border-secondary/20 rounded-full -translate-x-5 -translate-y-5 animate-pulse"></div>
                  <div className="group z-10 relative shadow-2xl border-[10px] border-white rounded-full w-full h-full overflow-hidden">
                    <img
                      src={profilePic}
                      alt="Jaydip Vora"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Floating Icon as per Image 1 */}
                  <div className="-right-5 -bottom-5 z-20 absolute bg-white shadow-xl p-4 rounded-full">
                    <div className="flex justify-center items-center bg-accent rounded-full w-12 h-12 text-white text-xl">
                      <i className="fas fa-lightbulb"></i>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="flex-1">
              <span className="inline-block bg-secondary/10 mb-4 px-4 py-1 rounded-full font-bold text-secondary text-sm uppercase tracking-widest">
                About Me
              </span>
              <h2 className="mb-8 font-extrabold text-primary text-4xl md:text-6xl leading-tight">
                I am <span className="text-accent">Jaydip Vora</span> <br />
                <span className="text-secondary text-4xl">
                  Full Stack Developer
                </span>
              </h2>
              <p className="mb-8 text-gray-600 text-lg leading-relaxed">
                I am a passionate Full Stack Developer who has completed a Full
                Stack Development course from Red & White Multimedia Education.
                I have strong knowledge of web development technologies and
                enjoy building modern, responsive, and user-friendly web
                applications.
              </p>

              <div className="flex flex-wrap gap-12 mb-10">
                <div className="flex items-center gap-4">
                  <h3 className="font-extrabold text-primary text-5xl">05+</h3>
                  <p className="font-bold text-gray-500 text-xs uppercase leading-tight tracking-widest">
                    Projects
                    <br />
                    Completed
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <h3 className="font-extrabold text-primary text-5xl">500+</h3>
                  <p className="font-bold text-gray-500 text-xs uppercase leading-tight tracking-widest">
                    Learning
                    <br />
                    Hours
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="flex items-center gap-2 bg-accent hover:bg-primary shadow-lg px-10 py-4 rounded-full font-bold text-white transition-all"
                >
                  Hire Me Now <i className="fa-arrow-right text-sm fas"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PORTFOLIO SECTION (As per Image 2) */}
      <section id="portfolio" className="bg-light py-24">
        <div className="mx-auto px-4 text-center container">
          <span className="inline-block mb-4 font-bold text-secondary uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="mb-4 font-extrabold text-primary text-4xl md:text-5xl">
            Latest Projects
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-gray-500 leading-relaxed">
            Here are some of my recent projects where I've applied my skills in
            building real-world applications.
          </p>

          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {[
              {
                title: "E-Commerce App",
                category: "Full Stack",
                img: projectImg1,
                link: "https://flyankart.com",
              },
              {
                title: "Task Manager",
                category: "React & Node",
                img: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80",
                link: "#",
              },
              {
                title: "Social Connect",
                category: "MERN Stack",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
                link: "#",
              },
              {
                title: "Portfolio Website",
                category: "React & Tailwind",
                img: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&q=80",
                link: "#",
              },
              {
                title: "Weather App",
                category: "JavaScript API",
                img: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
                link: "#",
              },
              {
                title: "Recipe Finder",
                category: "React.js",
                img: "https://images.unsplash.com/photo-1506111583091-facf06775791?w=800&q=80",
                link: "#",
              },
            ].map((project, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative shadow-lg rounded-[30px] h-[350px] overflow-hidden"
              >
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-auto transition-transform group-hover:translate-y-[-50%] duration-[3s] ease-in-out"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 p-8 text-left transition-all duration-300">
                  <p className="mb-2 font-bold text-secondary text-sm uppercase tracking-widest">
                    {project.category}
                  </p>
                  <h3 className="mb-4 font-bold text-white text-2xl">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white hover:bg-secondary px-6 py-2 rounded-full w-fit font-bold text-primary hover:text-white text-sm transition-all"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <a
            href="#"
            className="inline-block bg-accent hover:bg-primary shadow-lg px-10 py-4 rounded-full font-bold text-white transition-all"
          >
            See All Projects
          </a>
        </div>
      </section>

      {/* 5. WHAT I DO FOR YOU (As per Image 2) */}
      <section id="services" className="bg-white py-24">
        <div className="mx-auto px-4 text-center container">
          <span className="inline-block mb-4 font-bold text-secondary uppercase tracking-widest">
            Services
          </span>
          <h2 className="mb-4 font-extrabold text-primary text-4xl md:text-5xl">
            What I Do For You
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-gray-500 leading-relaxed">
            As a full-stack enthusiast, I offer end-to-end development services
            to bring your digital vision to life.
          </p>

          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:px-20">
            {[
              {
                title: "Frontend Development",
                icon: "fas fa-laptop-code",
                desc: "Building responsive and interactive user interfaces using React.js and Tailwind CSS.",
              },
              {
                title: "Backend Development",
                icon: "fas fa-server",
                desc: "Developing robust server-side logic and RESTful APIs using Node.js and Express.",
              },
              {
                title: "Database Management",
                icon: "fas fa-database",
                desc: "Designing and managing scalable databases using PostgreSQL and modern ORMs.",
              },
              {
                title: "Full Stack Solutions",
                icon: "fas fa-layer-group",
                desc: "Providing complete web solutions from database architecture to frontend deployment.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, x: i % 2 === 0 ? 0 : 0 }}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                viewport={{ once: true }}
                className="group flex gap-8 bg-light hover:shadow-xl p-10 border border-transparent hover:border-secondary/20 rounded-[40px] text-left transition-all"
              >
                <div className="flex justify-center items-center bg-white group-hover:bg-secondary shadow-sm rounded-3xl w-20 h-20 text-secondary group-hover:text-white text-3xl transition-all shrink-0">
                  <i className={service.icon}></i>
                </div>
                <div>
                  <h3 className="mb-4 font-bold text-primary text-2xl">
                    {service.title}
                  </h3>
                  <p className="mb-6 text-gray-500 leading-relaxed">
                    {service.desc}
                  </p>
                  <a
                    href="#"
                    className="group/link flex items-center gap-2 font-bold text-secondary text-sm hover:underline"
                  >
                    Read More{" "}
                    <i className="fa-arrow-right text-[10px] transition-transform group-hover/link:translate-x-1 fas"></i>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SKILLS & STATS (As per Image 3) */}
      <section className="bg-light py-24 overflow-hidden">
        <div className="mx-auto px-4 container">
          <div className="flex lg:flex-row flex-col gap-20">
            <div className="lg:w-1/2">
              <span className="inline-block mb-4 font-bold text-secondary uppercase tracking-widest">
                My Skill
              </span>
              <h2 className="mb-8 font-extrabold text-primary text-4xl md:text-5xl leading-tight">
                I Develop MY skill <br />
                <span className="text-secondary">
                  Regularly to Keep me Upgraded
                </span>
              </h2>

              <div className="gap-6 grid grid-cols-2 sm:grid-cols-4 mt-12">
                {[
                  {
                    name: "React.js",
                    icon: "fab fa-react",
                    color: "text-[#61DAFB]",
                  },
                  {
                    name: "Node.js",
                    icon: "fab fa-node-js",
                    color: "text-[#339933]",
                  },
                  {
                    name: "Express.js",
                    icon: "fas fa-server",
                    color: "text-gray-600",
                  },
                  {
                    name: "PostgreSQL",
                    icon: "fas fa-database",
                    color: "text-[#336791]",
                  },
                  {
                    name: "JavaScript",
                    icon: "fab fa-js",
                    color: "text-[#F7DF1E]",
                  },
                  {
                    name: "Tailwind",
                    icon: "fab fa-css3-alt",
                    color: "text-[#38B2AC]",
                  },
                  {
                    name: "GitHub",
                    icon: "fab fa-github",
                    color: "text-black",
                  },
                  {
                    name: "Postman",
                    icon: "fas fa-paper-plane",
                    color: "text-[#FF6C37]",
                  },
                ].map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5, scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group flex flex-col items-center bg-white shadow-md hover:shadow-xl p-6 border border-gray-50 rounded-3xl transition-all"
                  >
                    <div
                      className={
                        "text-4xl " +
                        skill.color +
                        " mb-4 transition-transform group-hover:scale-110"
                      }
                    >
                      <i className={skill.icon}></i>
                    </div>
                    <span className="font-bold text-primary text-sm">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="gap-6 grid grid-cols-2 lg:w-1/2">
              {[
                {
                  label: "Positive Reviews",
                  value: "10+",
                  icon: "fas fa-smile",
                  color: "bg-blue-500",
                },
                {
                  label: "Projects Done",
                  value: "05+",
                  icon: "fas fa-check-double",
                  color: "bg-green-500",
                },
                {
                  label: "Cups of Coffee",
                  value: "200+",
                  icon: "fas fa-coffee",
                  color: "bg-orange-500",
                },
                {
                  label: "Happy Learning",
                  value: "100%",
                  icon: "fas fa-graduation-cap",
                  color: "bg-purple-500",
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex flex-col items-center bg-white shadow-lg p-8 rounded-[40px] text-center transition-all hover:-translate-y-2"
                >
                  <div
                    className={
                      "h-14 w-14 " +
                      stat.color +
                      " mb-6 flex items-center justify-center rounded-2xl text-xl text-white shadow-lg transition-transform group-hover:rotate-12"
                    }
                  >
                    <i className={stat.icon}></i>
                  </div>
                  <h3 className="mb-2 font-extrabold text-primary text-3xl">
                    {stat.value}
                  </h3>
                  <p className="font-bold text-gray-500 text-xs uppercase tracking-widest">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT SECTION (As per Image 4) */}
      <section id="contact" className="relative bg-white py-24">
        <div className="mx-auto px-4 container">
          <div className="mb-16 text-center">
            <span className="inline-block mb-4 font-bold text-secondary uppercase tracking-widest">
              Contact
            </span>
            <h2 className="mb-4 font-extrabold text-primary text-4xl md:text-5xl">
              Let's Work Together!
            </h2>
          </div>

          <div className="flex lg:flex-row flex-col bg-white shadow-2xl border border-gray-100 rounded-[60px] overflow-hidden">
            <div className="relative bg-white p-12 lg:w-1/3 text-primary">
              <div className="top-0 right-0 absolute bg-secondary/10 blur-3xl -mt-16 -mr-16 rounded-full w-32 h-32"></div>
              <div className="bottom-0 left-0 absolute bg-accent/10 blur-3xl -mb-16 -ml-16 rounded-full w-32 h-32"></div>

              <h3 className="z-10 relative mb-10 font-bold text-3xl">
                Contact Info
              </h3>
              <div className="z-10 relative space-y-10">
                <div className="group flex items-center gap-6">
                  <div className="flex justify-center items-center bg-secondary/10 group-hover:bg-secondary shadow-sm rounded-2xl w-14 h-14 text-secondary group-hover:text-white text-xl transition-all">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <p className="mb-1 font-bold text-gray-400 text-xs uppercase tracking-widest">
                      Phone
                    </p>
                    <p className="font-bold text-primary text-lg">
                      +91 95589 02119
                    </p>
                  </div>
                </div>
                <div className="group flex items-center gap-6">
                  <div className="flex justify-center items-center bg-secondary/10 group-hover:bg-secondary shadow-sm rounded-2xl w-14 h-14 text-secondary group-hover:text-white text-xl transition-all">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <p className="mb-1 font-bold text-gray-400 text-xs uppercase tracking-widest">
                      Email
                    </p>
                    <p className="font-bold text-primary text-lg">
                      jaydipvora955@gmail.com
                    </p>
                  </div>
                </div>
                <div className="group flex items-center gap-6">
                  <div className="flex justify-center items-center bg-secondary/10 group-hover:bg-secondary shadow-sm rounded-2xl w-14 h-14 text-secondary group-hover:text-white text-xl transition-all">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <p className="mb-1 font-bold text-gray-400 text-xs uppercase tracking-widest">
                      Address
                    </p>
                    <p className="font-bold text-primary text-lg">
                      Surat, Gujarat, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="z-10 relative mt-20">
                <p className="mb-6 font-bold text-gray-400 text-xs uppercase tracking-widest">
                  Follow Me
                </p>
                <div className="flex gap-4">
                  {["github", "linkedin-in", "instagram", "twitter"].map(
                    (social, i) => (
                      <a
                        key={i}
                        href={
                          social === "github"
                            ? "https://github.com/jaydipvora9898"
                            : social === "linkedin-in"
                              ? "https://www.linkedin.com/in/jaydip-vora-200103388/"
                              : social === "instagram"
                                ? "https://www.instagram.com/jaydip_.vora_.777?utm_source=qr&igsh=MW05N21keTRwZ2QwbQ=="
                                : "https://x.com/JaydipVora10041"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center bg-light hover:bg-secondary shadow-sm border border-gray-100 rounded-xl w-10 h-10 text-primary hover:text-white transition-all"
                      >
                        <i className={"fab fa-" + social}></i>
                      </a>
                    ),
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white p-12 lg:p-20 lg:w-2/3">
              <form
                onSubmit={handleSubmit}
                className="gap-8 grid grid-cols-1 md:grid-cols-2"
              >
                <div className="space-y-2">
                  <label className="ml-4 font-bold text-primary text-xs uppercase tracking-widest">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jaydip Vora"
                    required
                    className="bg-light shadow-sm px-8 py-5 border-none rounded-[20px] outline-none focus:ring-2 focus:ring-secondary/50 w-full transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="ml-4 font-bold text-primary text-xs uppercase tracking-widest">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jaydip@example.com"
                    required
                    className="bg-light shadow-sm px-8 py-5 border-none rounded-[20px] outline-none focus:ring-2 focus:ring-secondary/50 w-full transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="ml-4 font-bold text-primary text-xs uppercase tracking-widest">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    className="bg-light shadow-sm px-8 py-5 border-none rounded-[20px] outline-none focus:ring-2 focus:ring-secondary/50 w-full transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="ml-4 font-bold text-primary text-xs uppercase tracking-widest">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-light shadow-sm px-8 py-5 border-none rounded-[20px] outline-none focus:ring-2 focus:ring-secondary/50 w-full text-gray-500 transition-all"
                  >
                    <option value="Web Development">Web Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Backend Work">Backend Work</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="ml-4 font-bold text-primary text-xs uppercase tracking-widest">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Jaydip, I'm interested in..."
                    required
                    className="bg-light shadow-sm px-8 py-6 border-none rounded-[30px] outline-none focus:ring-2 focus:ring-secondary/50 w-full min-h-[180px] transition-all"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  disabled={status.loading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 bg-accent hover:bg-primary disabled:opacity-50 shadow-xl px-12 py-5 rounded-full md:w-fit font-bold text-white transition-all"
                >
                  {status.loading ? "Sending..." : "Send Message"}{" "}
                  <i className="text-sm fas fa-paper-plane"></i>
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
