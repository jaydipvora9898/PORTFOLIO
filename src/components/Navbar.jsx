import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="top-0 z-50 sticky bg-white shadow-sm">
      <div className="mx-auto px-4 container">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center font-extrabold text-primary text-3xl">
            <span className="mr-1 text-secondary italic">J</span>aydip Vora
          </Link>
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="font-semibold text-primary hover:text-secondary transition-colors">Home</Link>
            <Link to="/about" className="font-semibold text-primary hover:text-secondary transition-colors">About</Link>
            <Link to="/skills" className="font-semibold text-primary hover:text-secondary transition-colors">Skills</Link>
            <Link to="/projects" className="font-semibold text-primary hover:text-secondary transition-colors">Portfolio</Link>
            <Link to="/contact" className="font-semibold text-primary hover:text-secondary transition-colors">Contact</Link>
            <Link to="/contact" className="bg-secondary hover:bg-primary shadow-lg hover:shadow-xl px-8 py-3 rounded-full font-bold text-white transition-all">
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;