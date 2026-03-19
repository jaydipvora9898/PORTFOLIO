import { useState } from "react";
import { motion as Motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "jaydipvora955@gmail.com",
    href: "mailto:jaydipvora955@gmail.com",
  },
  { icon: <FaMapMarkerAlt />, label: "Location", value: "India", href: null },
];

const socialLinks = [
  {
    icon: <FaGithub />,
    href: "https://github.com/jaydipvora9898",
    label: "GitHub",
    color: "hover:text-slate-200",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/jaydip-vora-200103388/",
    label: "LinkedIn",
    color: "hover:text-blue-400",
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="relative bg-slate-950 min-h-screen">
      <div
        className="top-10 left-0 bg-indigo-600 w-80 h-80 blob"
        style={{ position: "absolute" }}
      />
      <div
        className="right-0 bottom-10 bg-cyan-500 w-64 h-64 blob"
        style={{ position: "absolute" }}
      />

      <div className="z-10 relative py-20 md:py-24 lg:py-28 container-custom">
        {/* Header */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14 text-center"
        >
          <span className="font-semibold text-indigo-400 text-sm uppercase tracking-widest">
            Get In Touch
          </span>
          <h1 className="mt-2 mb-4 font-extrabold text-3xl md:text-4xl lg:text-5xl">
            Contact <span className="gradient-text">Me</span>
          </h1>
          <div className="bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto mb-5 rounded-full w-20 h-1" />
          <p className="mx-auto px-4 max-w-xl text-slate-400 text-sm md:text-base">
            Have a project in mind or just want to say hi? I'd love to hear from
            you.
          </p>
        </Motion.div>

        <div className="gap-6 md:gap-8 lg:gap-10 grid lg:grid-cols-2 mx-auto max-w-5xl">
          {/* Left: Info */}
          <Motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5 md:space-y-6"
          >
            <div className="p-6 md:p-8 rounded-2xl glass-card">
              <h2 className="mb-2 font-bold text-white text-xl md:text-2xl">
                Let's Work Together
              </h2>
              <p className="mb-6 md:mb-8 text-slate-400 text-sm md:text-base">
                I'm currently open to new opportunities. Whether you have a
                project, freelance work, or just want to connect — feel free to
                reach out!
              </p>

              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 md:gap-4"
                  >
                    <div className="flex justify-center items-center bg-indigo-500/10 border border-indigo-500/30 rounded-xl w-10 md:w-11 h-10 md:h-11 text-indigo-400 text-sm md:text-base">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-wider">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white hover:text-indigo-400 text-xs md:text-sm transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white text-xs md:text-sm">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="mb-3 md:mb-4 text-slate-500 text-xs uppercase tracking-wider">
                  Find me on
                </p>
                <div className="flex gap-2 md:gap-3">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className={`w-10 h-10 md:w-11 md:h-11 rounded-full glass-card flex items-center justify-center text-slate-400 ${s.color} transition-all hover:scale-110 text-base md:text-lg`}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-2xl glass-card">
              <span className="flex-shrink-0 bg-green-400 rounded-full w-3 h-3 animate-pulse" />
              <div>
                <p className="font-semibold text-white text-sm md:text-base">
                  Available for Freelance
                </p>
                <p className="text-slate-400 text-xs md:text-sm">
                  Usually responds within 24 hours
                </p>
              </div>
            </div>
          </Motion.div>

          {/* Right: Form */}
          <Motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-5 p-6 md:p-8 rounded-2xl glass-card"
            >
              <div className="gap-4 md:gap-5 grid sm:grid-cols-2">
                <div>
                  <label className="block mb-2 text-slate-400 text-xs md:text-sm">
                    Your Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Jaydip"
                    className="bg-slate-800/60 px-3 md:px-4 py-2.5 md:py-3 border border-white/10 focus:border-indigo-500 rounded-xl focus:outline-none w-full text-white text-sm md:text-base transition-colors placeholder-slate-500"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-slate-400 text-xs md:text-sm">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="bg-slate-800/60 px-3 md:px-4 py-2.5 md:py-3 border border-white/10 focus:border-indigo-500 rounded-xl focus:outline-none w-full text-white text-sm md:text-base transition-colors placeholder-slate-500"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-slate-400 text-xs md:text-sm">
                  Subject
                </label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                  className="bg-slate-800/60 px-3 md:px-4 py-2.5 md:py-3 border border-white/10 focus:border-indigo-500 rounded-xl focus:outline-none w-full text-white text-sm md:text-base transition-colors placeholder-slate-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-slate-400 text-xs md:text-sm">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="bg-slate-800/60 px-3 md:px-4 py-2.5 md:py-3 border border-white/10 focus:border-indigo-500 rounded-xl focus:outline-none w-full text-white text-sm md:text-base transition-colors resize-none placeholder-slate-500"
                />
              </div>

              <button
                type="submit"
                className="justify-center w-full text-sm md:text-base btn-primary"
              >
                <FaPaperPlane />
                {sent ? "Message Sent! 🎉" : "Send Message"}
              </button>

              {sent && (
                <Motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm text-center"
                >
                  ✅ Thanks! I'll get back to you soon.
                </Motion.p>
              )}
            </form>
          </Motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
