import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Kasula Tejovanth</h3>
            <p className="text-gray-400 text-sm">Full Stack Developer crafting digital experiences</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
              <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="https://leetcode.com/u/tejovanth96/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LeetCode</a></li>
              <li><a href="https://github.com/tej00707" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a></li>
              <li><a href="https://linkedin.com/in/kasulatejovanth" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="mailto:tejovanthkasula@gmail.com" className="hover:text-white transition">Email</a></li>
              <li><a href="tel:+919948852529" className="hover:text-white transition">+91 99488 52529</a></li>
              <li className="text-gray-500">Guntur, India</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Kasula Tejovanth. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="text-gray-400 hover:text-white transition"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
