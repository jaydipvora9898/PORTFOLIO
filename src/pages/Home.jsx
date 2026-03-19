import { useEffect, useState } from "react"
import { motion as Motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from "react-icons/fa"
import { HiCode } from "react-icons/hi"

const roles = [
    "Full Stack Developer",
    "MERN Stack Engineer",
    "React Specialist",
    "Node.js Backend Dev",
]

const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/jaydipvora9898", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/jaydip-vora-200103388/", label: "LinkedIn" },
]

const Home = () => {
    const [roleIndex, setRoleIndex] = useState(0)
    const [displayed, setDisplayed] = useState("")
    const [typing, setTyping] = useState(true)

    useEffect(() => {
        const current = roles[roleIndex]
        let timeout

        if (typing) {
            if (displayed.length < current.length) {
                timeout = setTimeout(() => {
                    setDisplayed(current.slice(0, displayed.length + 1))
                }, 80)
            } else {
                timeout = setTimeout(() => setTyping(false), 2000)
            }
        } else {
            if (displayed.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayed(displayed.slice(0, -1))
                }, 40)
            } else {
                setRoleIndex((prev) => (prev + 1) % roles.length)
                setTyping(true)
            }
        }

        return () => clearTimeout(timeout)
    }, [displayed, typing, roleIndex])

    return (
        <div className="relative flex justify-center items-center bg-slate-950 min-h-screen">

            {/* Same blobs as About */}
            <div className="top-0 right-0 absolute bg-indigo-600 w-96 h-96 blob" />
            <div className="bottom-0 left-10 absolute bg-cyan-500 w-64 h-64 blob" />

            <div className="z-10 relative py-24 text-center container-custom">

                {/* Badge */}
                <Motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-indigo-500/30 rounded-full font-medium text-indigo-400 text-sm glass-card"
                >
                    <span className="bg-green-400 rounded-full w-2 h-2 animate-pulse" />
                    Available for work
                </Motion.div>

                {/* Hello */}
                <p className="flex justify-center items-center gap-2 mb-3 font-semibold text-indigo-400 text-lg">
                    <HiCode /> Hello, I'm
                </p>

                {/* Name */}
                <h1 className="mb-5 font-extrabold text-5xl md:text-7xl">
                    Jaydip <span className="gradient-text">Vora</span>
                </h1>

                {/* Typing Role */}
                <div className="mb-6 h-10 font-semibold text-slate-300 text-2xl md:text-3xl">
                    <span className="typing-cursor">{displayed}</span>
                </div>

                {/* Description */}
                <p className="mx-auto mb-10 max-w-2xl text-slate-400 text-lg leading-relaxed">
                    I build modern, scalable web applications with React, Node.js,
                    and MongoDB, PstgreSQL. Passionate about clean code and great user experiences.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center items-center gap-4 mb-10">
                    <Link to="/projects" className="text-sm btn-primary">
                        View My Work <FaArrowRight />
                    </Link>

                    <a
                        href="https://drive.google.com/file/d/1Zg1XCacCQuB67bk5oO6OqZ4krRxCm0EY/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline text-sm"
                    >
                        <FaDownload /> Download CV
                    </a>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center gap-4">
                    {socialLinks.map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center items-center rounded-full w-11 h-11 text-slate-400 hover:text-indigo-400 text-lg hover:scale-110 transition-all glass-card"
                        >
                            {s.icon}
                        </a>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Home