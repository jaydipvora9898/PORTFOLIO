import { Link } from "react-router-dom"
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa"
import { RiCodeSSlashLine } from "react-icons/ri"

const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/jaydipvora9898", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/jaydip-vora-200103388/", label: "LinkedIn" },
]

const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
]

const Footer = () => {
    return (
        <footer className="bg-slate-950 mt-0 border-white/5 border-t">
            <div className="mx-auto px-6 py-12 max-w-6xl">

                <div className="gap-8 grid md:grid-cols-3 mb-10">

                    {/* Brand */}
                    <div className="sm:col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-3 md:mb-4">
                            <div className="flex justify-center items-center bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-lg w-7 md:w-8 h-7 md:h-8">
                                <RiCodeSSlashLine className="text-white text-xs md:text-sm" />
                            </div>
                            <span className="font-bold text-base md:text-lg gradient-text">Jaydip.dev</span>
                        </div>
                        <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                            Full Stack Developer building modern, scalable web applications with a passion for clean code
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-3 md:mb-4 font-semibold text-white text-sm md:text-base">Quick Links</h4>
                        <ul className="space-y-1.5 md:space-y-2">
                            {navLinks.map((l) => (
                                <li key={l.to}>
                                    <Link
                                        to={l.to}
                                        className="text-slate-400 hover:text-indigo-400 text-xs md:text-sm transition-colors"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="mb-3 md:mb-4 font-semibold text-white text-sm md:text-base">Connect</h4>
                        <div className="flex gap-2 md:gap-3 mb-3 md:mb-4">
                            {socialLinks.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="flex justify-center items-center rounded-full w-9 md:w-10 h-9 md:h-10 text-slate-400 hover:text-indigo-400 text-sm md:text-base hover:scale-110 transition-all glass-card"
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
                            className="px-3 md:px-4 py-2 btn-outline text-xs md:text-sm"
                        >
                            Download CV
                        </a>
                    </div>

                </div>

                <div className="flex md:flex-row flex-col justify-between items-center gap-2 md:gap-3 pt-5 md:pt-6 border-white/5 border-t">
                    <p className="text-slate-500 text-xs md:text-sm md:text-left text-center">
                        © {new Date().getFullYear()} Jaydip Vora. All rights reserved.
                    </p>
                    <p className="flex items-center gap-1 text-slate-500 text-xs md:text-sm">
                        Made with <FaHeart className="text-red-500 text-xs" /> using React & Tailwind CSS
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer
