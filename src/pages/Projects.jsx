import { useState } from "react"
import { motion as Motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { projects } from "../data/projects"

const allTags = ["All", ...new Set(projects.flatMap(p => p.tags))]

const Projects = () => {
    const [filter, setFilter] = useState("All")

    const filtered = filter === "All"
        ? projects
        : projects.filter(p => p.tags.includes(filter))

    return (
        <div className="relative bg-slate-950 min-h-screen">
            <div className="blob w-80 h-80 bg-indigo-600 top-10 right-0" style={{ position: "absolute" }} />
            <div className="blob w-72 h-72 bg-cyan-500 bottom-10 left-0" style={{ position: "absolute" }} />

            <div className="container-custom relative z-10 py-20 md:py-24 lg:py-28">

                {/* Header */}
                <Motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 md:mb-12"
                >
                    <span className="text-indigo-400 font-semibold text-sm tracking-widest uppercase">What I've Built</span>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-2 mb-4">
                        My <span className="gradient-text">Projects</span>
                    </h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mx-auto mb-6" />
                    <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base px-4">
                        A selection of projects I've built with passion and best practices.
                    </p>
                </Motion.div>

                {/* Filter Tags */}
                <Motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-2 mb-10 md:mb-12"
                >
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => setFilter(tag)}
                            className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 ${filter === tag
                                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                                : "glass-card text-slate-400 hover:text-white hover:border-indigo-500/50"
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </Motion.div>

                {/* Project Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {filtered.map((p, i) => (
                        <Motion.div
                            key={p.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -6 }}
                            className="glass-card rounded-2xl overflow-hidden group flex flex-col"
                        >
                            {/* Project Image */}
                            <div className={`relative h-48 bg-gradient-to-br ${p.color} overflow-hidden`}>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-white/20 text-8xl font-bold">
                                        {p.title.charAt(0)}
                                    </div>
                                </div>
                                <div className="absolute top-3 right-3">
                                    {p.live && p.live !== "#" && (
                                        <span className="px-2 py-1 bg-green-500/80 text-white text-xs rounded-full font-medium">
                                            Live
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="p-5 md:p-6 flex flex-col flex-1">
                                <h2 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                                    {p.title}
                                </h2>
                                <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-4 flex-1">
                                    {p.desc}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {p.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs rounded-md bg-slate-800 text-indigo-300 border border-indigo-500/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-3 border-t border-white/5 pt-4">
                                    <a
                                        href={p.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-xs md:text-sm text-slate-400 hover:text-white transition-colors"
                                    >
                                        <FaGithub /> GitHub
                                    </a>
                                    {p.live && (
                                        <a
                                            href={p.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-xs md:text-sm text-indigo-400 hover:text-indigo-300 transition-colors ml-auto"
                                        >
                                            Live Demo <FaExternalLinkAlt className="text-xs" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </Motion.div>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <p className="text-center text-slate-500 mt-20">No projects found for this filter.</p>
                )}
            </div>
        </div>
    )
}

export default Projects
