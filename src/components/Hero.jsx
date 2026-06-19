import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-4 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-blue-600/5 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-cyan-600/5 rounded-full filter blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        <div className="animate-fade-in">
          <p className="text-lg text-gray-400 font-medium tracking-wide uppercase letter-spacing">Welcome, Hi I am</p>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Kasula <span className="gradient-text">Tejovanth</span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <a href="https://drive.google.com/file/d/11AXwk3Vg8W0NRvRaDVtPWlZynRoo9cUp/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105">
            View Resume <FiArrowRight size={20} />
          </a>
          <a href="#contact" className="inline-flex items-center justify-center gap-2 border border-gray-400 text-gray-300 hover:border-white hover:text-white px-8 py-3 rounded-lg font-semibold transition">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
