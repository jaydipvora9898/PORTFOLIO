import { motion as Motion } from "framer-motion"
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDatabase,
} from "react-icons/fa"
import { SiMongodb, SiExpress, SiTailwindcss, SiRedux, SiBootstrap, SiPostgresql } from "react-icons/si"

const skillCategories = [
    {
        title: "Frontend",
        color: "from-indigo-500 to-cyan-400",
        skills: [
            { name: "HTML5", icon: <FaHtml5 />, level: 95, color: "text-orange-500" },
            { name: "CSS3", icon: <FaCss3Alt />, level: 90, color: "text-blue-500" },
            { name: "Bootstrap", icon: <SiBootstrap />, level: 85, color: "text-purple-500" },
            { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85, color: "text-teal-400" },
            { name: "JavaScript", icon: <FaJs />, level: 88, color: "text-yellow-400" },
            { name: "React", icon: <FaReact />, level: 90, color: "text-cyan-400" },
            { name: "Redux", icon: <SiRedux />, level: 78, color: "text-purple-400" },
        ]
    },
    {
        title: "Backend",
        color: "from-purple-500 to-pink-400",
        skills: [
            { name: "Node.js", icon: <FaNodeJs />, level: 85, color: "text-green-500" },
            { name: "Express.js", icon: <SiExpress />, level: 82, color: "text-slate-300" },
            { name: "MongoDB", icon: <SiMongodb />, level: 80, color: "text-green-400" },
            { name: "PostgreSQL", icon: <SiPostgresql />, level: 85, color: "text-indigo-400" },
            { name: "REST APIs", icon: <FaDatabase />, level: 85, color: "text-indigo-400" },
            
        ]
    },
    {
        title: "Tools & Others",
        color: "from-cyan-500 to-green-400",
        skills: [
            { name: "Git", icon: <FaGitAlt />, level: 88, color: "text-orange-400" },
            { name: "GitHub", icon: <FaGithub />, level: 88, color: "text-slate-300" },
        ]
    }
]

const tools = ["VS Code", "Postman", "Figma", "Adobe Photoshop", "Netlify", "Vercel",]

const Skills = () => {
    return (
        <div className="relative bg-slate-950 min-h-screen">
            <div className="top-20 left-0 bg-purple-600 w-80 h-80 blob" style={{ position: "absolute" }} />
            <div className="right-0 bottom-20 bg-cyan-500 w-72 h-72 blob" style={{ position: "absolute" }} />

            <div className="z-10 relative py-20 md:py-24 lg:py-28 container-custom">

                {/* Header */}
                <Motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-16 text-center"
                >
                    <span className="font-semibold text-indigo-400 text-sm uppercase tracking-widest">What I Know</span>
                    <h1 className="mt-2 mb-4 font-extrabold text-3xl md:text-4xl lg:text-5xl">
                        My <span className="gradient-text">Skills</span>
                    </h1>
                    <div className="bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full w-20 h-1" />
                    <p className="mx-auto mt-5 px-4 max-w-xl text-slate-400 text-sm md:text-base">
                        Technologies and tools I use to build modern, scalable web applications.
                    </p>
                </Motion.div>

                {/* Skill Categories */}
                <div className="space-y-10 md:space-y-12">
                    {skillCategories.map((cat, ci) => (
                        <Motion.div
                            key={ci}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: ci * 0.1 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`h-0.5 w-8 bg-gradient-to-r ${cat.color} rounded-full`} />
                                <h2 className="font-bold text-white text-lg md:text-xl">{cat.title}</h2>
                            </div>

                            <div className="gap-4 md:gap-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                                {cat.skills.map((skill, si) => (
                                    <Motion.div
                                        key={si}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: si * 0.08 }}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className="flex flex-col justify-center items-center gap-3 p-4 md:p-5 rounded-xl text-center cursor-default glass-card"
                                    >
                                        <span className={`text-3xl md:text-4xl ${skill.color}`}>{skill.icon}</span>
                                        <span className="font-semibold text-white text-xs md:text-sm">{skill.name}</span>
                                    </Motion.div>
                                ))}
                            </div>
                        </Motion.div>
                    ))}
                </div>

                {/* Tools */}
                <Motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-12 md:mt-16"
                >
                    <h2 className="mb-6 font-bold text-white text-lg md:text-xl text-center">Tools & Platforms</h2>
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                        {tools.map((t, i) => (
                            <Motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ scale: 1.1 }}
                                className="px-3 md:px-4 py-2 border border-indigo-500/20 hover:border-indigo-500/60 rounded-full text-slate-300 hover:text-indigo-300 text-xs md:text-sm transition-all cursor-default glass-card"
                            >
                                {t}
                            </Motion.span>
                        ))}
                    </div>
                </Motion.div>

            </div>
        </div>
    )
}

export default Skills
