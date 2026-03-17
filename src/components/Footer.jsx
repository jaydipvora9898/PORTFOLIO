import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-gray-100 border-t">
      <div className="mx-auto px-4 container">
        <div className="flex flex-col items-center mb-12">
          <Link to="/" className="mb-6 font-extrabold text-primary text-4xl">
            <span className="text-secondary italic">J</span>aydip Vora
          </Link>
          <div className="flex space-x-8 mb-8">
            <Link to="/" className="font-semibold text-primary hover:text-secondary transition-colors">Home</Link>
            <Link to="/about" className="font-semibold text-primary hover:text-secondary transition-colors">About</Link>
            <Link to="/skills" className="font-semibold text-primary hover:text-secondary transition-colors">Skills</Link>
            <Link to="/projects" className="font-semibold text-primary hover:text-secondary transition-colors">Portfolio</Link>
            <Link to="/contact" className="font-semibold text-primary hover:text-secondary transition-colors">Contact</Link>
          </div>
        </div>
        <div className="pt-8 border-gray-100 border-t text-gray-500 text-center">
          <p>© {new Date().getFullYear()} Jaydip Vora. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;