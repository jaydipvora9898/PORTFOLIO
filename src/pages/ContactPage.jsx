import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: 'Web Development', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

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
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-light py-20">
        <div className="mx-auto px-4 text-center container">
          <h1 className="mb-4 font-extrabold text-primary text-5xl">Contact Me</h1>
          <p className="mx-auto max-w-2xl text-gray-500">Have a project in mind? Let's discuss how I can help you achieve your goals.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto px-4 container">
          <div className="flex lg:flex-row flex-col gap-12">
            {/* Contact Info */}
            <div className="relative bg-white shadow-2xl p-10 md:p-12 border border-gray-50 rounded-[40px] lg:w-1/3 overflow-hidden">
              <div className="top-0 right-0 absolute bg-secondary/10 blur-3xl -mt-16 -mr-16 rounded-full w-32 h-32"></div>
              <div className="bottom-0 left-0 absolute bg-accent/10 blur-3xl -mb-16 -ml-16 rounded-full w-32 h-32"></div>
              
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block z-10 relative mb-4 font-bold text-secondary uppercase tracking-widest"
              >
                Get In Touch
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="z-10 relative mb-10 font-extrabold text-primary text-4xl"
              >
                Let's Work Together!
              </motion.h2>
              
              <div className="z-10 relative space-y-8">
                <div className="group flex items-center gap-6">
                  <div className="flex justify-center items-center bg-secondary/10 group-hover:bg-secondary shadow-sm rounded-2xl w-14 h-14 text-secondary group-hover:text-white text-xl transition-all">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <p className="mb-1 font-bold text-gray-400 text-xs uppercase tracking-widest">Phone</p>
                    <p className="font-bold text-primary text-lg">+91 95589 02119</p>
                  </div>
                </div>
                <div className="group flex items-center gap-6">
                  <div className="flex justify-center items-center bg-secondary/10 group-hover:bg-secondary shadow-sm rounded-2xl w-14 h-14 text-secondary group-hover:text-white text-xl transition-all">
                    <i className="far fa-envelope"></i>
                  </div>
                  <div>
                    <p className="mb-1 font-bold text-gray-400 text-xs uppercase tracking-widest">Email</p>
                    <p className="font-bold text-primary text-lg">jaydipvora955@gmail.com</p>
                  </div>
                </div>
                <div className="group flex items-center gap-6">
                  <div className="flex justify-center items-center bg-secondary/10 group-hover:bg-secondary shadow-sm rounded-2xl w-14 h-14 text-secondary group-hover:text-white text-xl transition-all">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <p className="mb-1 font-bold text-gray-400 text-xs uppercase tracking-widest">Address</p>
                    <p className="font-bold text-primary text-lg">Surat, Gujarat, India</p>
                  </div>
                </div>
              </div>

              <div className="z-10 relative mt-16">
                <p className="mb-6 font-bold text-gray-400 text-xs uppercase tracking-widest">Follow Me</p>
                <div className="flex gap-4">
                  <a href="https://github.com/jaydipvora9898" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center bg-light hover:bg-secondary shadow-sm border border-gray-100 rounded-xl w-10 h-10 text-primary hover:text-white transition-all">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/jaydip-vora-200103388/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center bg-light hover:bg-secondary shadow-sm border border-gray-100 rounded-xl w-10 h-10 text-primary hover:text-white transition-all">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://www.instagram.com/jaydip_.vora_.777?utm_source=qr&igsh=MW05N21keTRwZ2QwbQ==" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center bg-light hover:bg-secondary shadow-sm border border-gray-100 rounded-xl w-10 h-10 text-primary hover:text-white transition-all">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              {status.success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-light p-12 border border-secondary/20 rounded-[40px] text-center"
                >
                  <div className="flex justify-center items-center bg-secondary shadow-lg shadow-secondary/30 mx-auto mb-6 rounded-full w-20 h-20 text-white text-4xl">
                    <i className="fas fa-check"></i>
                  </div>
                  <h3 className="mb-4 font-extrabold text-primary text-3xl">Message Sent!</h3>
                  <p className="mb-8 text-gray-600">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  <button 
                    onClick={() => setStatus({ ...status, success: false })}
                    className="font-bold text-secondary hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  onSubmit={handleSubmit}
                  className="bg-light shadow-sm p-10 md:p-12 border border-gray-100 rounded-[40px]"
                >
                  <div className="gap-6 grid grid-cols-1 md:grid-cols-2 mb-6">
                    <div className="space-y-2">
                      <label className="ml-4 font-bold text-primary text-xs uppercase tracking-widest">Full Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        placeholder="Jaydip Vora" 
                        value={formData.name} 
                        onChange={handleChange} 
                        className="bg-white shadow-sm px-6 py-4 border-none rounded-2xl focus:ring-2 focus:ring-secondary/50 w-full font-medium text-primary" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="ml-4 font-bold text-primary text-xs uppercase tracking-widest">Email Address</label>
                      <input 
                        type="email" 
                        name="email" 
                        placeholder="jaydip@example.com" 
                        value={formData.email} 
                        onChange={handleChange} 
                        className="bg-white shadow-sm px-6 py-4 border-none rounded-2xl focus:ring-2 focus:ring-secondary/50 w-full font-medium text-primary" 
                        required 
                      />
                    </div>
                  </div>
                  <div className="gap-6 grid grid-cols-1 md:grid-cols-2 mb-6">
                    <div className="space-y-2">
                      <label className="ml-4 font-bold text-primary text-xs uppercase tracking-widest">Phone Number</label>
                      <input 
                        type="text" 
                        name="phone" 
                        placeholder="+91 00000 00000" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        className="bg-white shadow-sm px-6 py-4 border-none rounded-2xl focus:ring-2 focus:ring-secondary/50 w-full font-medium text-primary" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="ml-4 font-bold text-primary text-xs uppercase tracking-widest">Subject</label>
                      <select 
                        name="subject" 
                        value={formData.subject} 
                        onChange={handleChange} 
                        className="bg-white shadow-sm px-6 py-4 border-none rounded-2xl focus:ring-2 focus:ring-secondary/50 w-full font-medium text-primary" 
                      >
                        <option value="Web Development">Web Development</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Backend Work">Backend Work</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2 mb-8">
                    <label className="ml-4 font-bold text-primary text-xs uppercase tracking-widest">Your Message</label>
                    <textarea 
                      name="message" 
                      placeholder="Hello Jaydip, I'm interested in..." 
                      value={formData.message} 
                      onChange={handleChange} 
                      className="bg-white shadow-sm px-6 py-4 border-none rounded-2xl focus:ring-2 focus:ring-secondary/50 w-full min-h-[200px] font-medium text-primary" 
                      required 
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={status.loading}
                    className="bg-secondary hover:bg-primary disabled:opacity-50 shadow-lg px-12 py-4 rounded-full w-full md:w-auto font-bold text-white transition-all"
                  >
                    {status.loading ? "Sending..." : "Send Message"}
                  </button>
                </motion.form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
