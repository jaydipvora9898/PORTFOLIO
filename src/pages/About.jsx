import { motion as Motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from "react-icons/fa"
import { HiAcademicCap, HiBriefcase, HiLightBulb } from "react-icons/hi"

const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/jaydipvora9898", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/jaydip-vora-200103388/", label: "LinkedIn" },
]

const timelineItems = [
    {
        icon: <HiAcademicCap />,
        year: "2024 - Present",
        title: "BSc IT (Information Technology)",
        subtitle: "Vidyadeep University",
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/30"
    },
    {
        icon: <HiAcademicCap />,
        year: "2023 - 2024",
        title: "Higher Secondary Certificate (12th)",
        subtitle: "Desai Education-Hadala",
        color: "text-indigo-400",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/30"
    },
    {
        icon: <HiAcademicCap />,
        year: "2021 - 2022",
        title: "Secondary School Certificate (10th)",
        subtitle: "Shree Saurashtra Gyanpith-Barvala",
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/30"
    }
]

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
}

const About = () => {
    return (
        <div className="relative bg-slate-950 min-h-screen">
            {/* Gradient blob BG */}
            <div className="top-0 right-0 bg-indigo-600 w-96 h-96 blob" style={{ position: "absolute" }} />
            <div className="bottom-0 left-10 bg-cyan-500 w-64 h-64 blob" style={{ position: "absolute" }} />

            <div className="z-10 relative py-20 md:py-24 lg:py-28 container-custom">

                {/* Section Header */}
                <Motion.div {...fadeUp} className="mb-12 md:mb-16 text-center">
                    <span className="font-semibold text-indigo-400 text-sm uppercase tracking-widest">Who Am I</span>
                    <h1 className="mt-2 mb-4 font-extrabold text-3xl md:text-4xl lg:text-5xl">
                        About <span className="gradient-text">Me</span>
                    </h1>
                    <div className="bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full w-20 h-1" />
                </Motion.div>

                <div className="items-center gap-8 md:gap-12 grid md:grid-cols-2 mb-16 md:mb-20">

                    {/* Avatar / Illustration Card */}
                    <Motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="mx-auto p-1 gradient-border max-w-sm glass-card">
                            <div className="flex flex-col items-center bg-gradient-to-br from-indigo-900/40 to-slate-900/80 p-10 rounded-xl">
                                <div className="float-anim flex justify-center items-center bg-gradient-to-br from-indigo-500 to-cyan-400 mb-4 rounded-full w-28 h-28 font-extrabold text-white text-5xl">
                                    JV
                                </div>
                                <h3 className="font-bold text-white text-xl">Jaydip Vora</h3>
                                <p className="mt-1 text-indigo-400 text-sm">Full Stack Developer</p>
                                <div className="flex gap-3 mt-5">
                                    {socialLinks.map((s) => (
                                        <a
                                            key={s.label}
                                            href={s.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={s.label}
                                            className="flex justify-center items-center rounded-full w-9 h-9 text-slate-400 hover:text-indigo-400 hover:scale-110 transition-all glass-card"
                                        >
                                            {s.icon}
                                        </a>
                                    ))}
                                </div>
                                <a
                                    href="https://drive.google.com/file/d/1Zg1XCacCQuB67bk5oO6OqZ4krRxCm0EY/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    download
                                    className="justify-center mt-5 w-full text-sm btn-primary"
                                >
                                    <FaDownload /> Download CV
                                </a>
                            </div>
                        </div>
                    </Motion.div>

                    {/* Bio */}
                    <Motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="mb-4 md:mb-6 font-bold text-2xl md:text-3xl">
                            Building <span className="gradient-text">Ideas</span> into Reality
                        </h2>
                        <p className="mb-4 md:mb-5 text-slate-400 text-base md:text-lg leading-relaxed">
                            I'm <strong className="text-white">Jaydip Vora</strong>, a passionate Full Stack Developer
                            specializing in the MERN stack. I love crafting clean, performant, and user-friendly
                            web applications that solve real-world problems.
                        </p>
                        <p className="mb-5 md:mb-6 text-slate-400 text-sm md:text-base leading-relaxed">
                            With a strong foundation in React, Node.js, Express, and MongoDB, PostgreSQL, I focus on
                            writing maintainable code and delivering exceptional digital experiences.
                            I'm always exploring new technologies to stay ahead in the rapidly changing web landscape.
                        </p>
                        <div className="gap-3 md:gap-4 grid grid-cols-2">
                            {[
                                { label: "Name", value: "Jaydip Vora" },
                                { label: "Email", value: "jaydipvora955@gmail.com" },
                                { label: "Location", value: "India" },
                                { label: "Status", value: "Open to Work" },
                            ].map((item) => (
                                <div key={item.label} className="p-3 rounded-lg glass-card">
                                    <p className="mb-1 text-indigo-400 text-xs uppercase tracking-wider">{item.label}</p>
                                    <p className="font-medium text-white text-sm">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </Motion.div>
                </div>

                {/* Timeline */}
                <Motion.div {...fadeUp} className="mb-4">
                    <h2 className="mb-8 md:mb-10 font-bold text-xl md:text-2xl text-center">
                        My <span className="gradient-text">Journey</span>
                    </h2>
                </Motion.div>

                <div className="relative mx-auto max-w-2xl">
                    <div className="top-0 bottom-0 left-6 md:left-8 absolute bg-gradient-to-b from-indigo-500 via-cyan-400 to-transparent w-0.5" />

                    {timelineItems.map((item, i) => (
                        <Motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className={`relative flex gap-4 md:gap-6 mb-6 md:mb-8 pl-16 md:pl-20`}
                        >
                            <div className={`absolute left-0 w-12 h-12 md:w-16 md:h-16 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center text-xl md:text-2xl ${item.color}`}>
                                {item.icon}
                            </div>
                            <div className="flex-1 p-4 md:p-5 rounded-xl glass-card">
                                <span className={`text-xs font-semibold ${item.color} uppercase tracking-widest`}>{item.year}</span>
                                <h3 className="mt-1 font-bold text-white text-sm md:text-base">{item.title}</h3>
                                <p className="text-slate-400 text-xs md:text-sm">{item.subtitle}</p>
                            </div>
                        </Motion.div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default About
