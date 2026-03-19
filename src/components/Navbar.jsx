import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
// import { RiCodeSSlashLine } from "react-icons/ri";

const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-slate-950/90 backdrop-blur-lg border-b border-white/10"
                : "bg-transparent"
                }`}
        >
            <div className="flex justify-between items-center mx-auto px-4 sm:px-6 max-w-7xl h-16">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="flex justify-center items-center bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-lg w-8 h-8">
                        JV
                    </div>

                    <span className="font-bold text-lg gradient-text">
                        Jaydip Vora
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`nav-link ${location.pathname === link.to ? "active" : ""
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <a
                        href="https://drive.google.com/file/d/1Zg1XCacCQuB67bk5oO6OqZ4krRxCm0EY/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 text-sm btn-primary"
                    >
                        Download CV
                    </a>
                </div>

                {/* Hamburger Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-slate-300 text-2xl"
                >
                    {open ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-slate-950 border-white/10 border-t w-full"
                    >
                        <div className="flex flex-col space-y-5 px-6 py-6">

                            {links.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className={`text-sm font-medium ${location.pathname === link.to
                                        ? "text-indigo-400"
                                        : "text-slate-400"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <a
                                href="https://drive.google.com/file/d/1rJ55gpCxF8Ltser2TH1b71Vx0ssX0CK8/view"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-center btn-primary"
                            >
                                Download CV
                            </a>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;