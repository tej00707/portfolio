import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center gradient-text">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a Computer Science student at Vellore Institute of Technology (VIT) Chennai with a CGPA of 8.67/10. I'm passionate about full-stack web development and have hands-on experience building scalable applications.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in tech started with competitive programming, and I've solved 300+ problems on LeetCode and GeeksForGeeks. I'm equally passionate about building real-world applications that solve actual problems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, I enjoy roller skating and participating in sports. I'm also an active member of the Autonomous Vehicle Club at VIT, where I lead event planning and coordination.
            </p>
          </div>

          <div className="space-y-4">
            <div className="group bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30 rounded-xl p-6 hover:border-blue-400/60 transition card-hover">
              <h4 className="text-2xl font-bold text-white mb-2 group-hover:gradient-text transition">B.Tech in CSE (Core)</h4>
              <p className="text-blue-200 font-semibold">Vellore Institute of Technology, Chennai</p>
              <p className="text-gray-400 text-sm">2024 – Present | CGPA: 8.67/10</p>
            </div>

            <div className="group bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-xl p-6 hover:border-green-400/60 transition card-hover">
              <h4 className="text-2xl font-bold text-white mb-2">Intermediate Education</h4>
              <p className="text-green-200 font-semibold">Bhashyam College, Guntur</p>
              <p className="text-gray-400 text-sm">2022 – 2024 | Percentage: 93.6%</p>
            </div>

            <div className="group bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-xl p-6 hover:border-purple-400/60 transition card-hover">
              <h4 className="text-2xl font-bold text-white mb-2">Secondary Education</h4>
              <p className="text-purple-200 font-semibold">Bhashyam Blooms, Guntur (CBSE)</p>
              <p className="text-gray-400 text-sm">2021 – 2022 | Percentage: 90%</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-400/30 rounded-xl p-8">
          <h3 className="text-3xl font-bold mb-8 text-white">Contact Info</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <p className="text-blue-300 font-semibold mb-2">📧 Email</p>
              <a href="mailto:tejovanthkasula@gmail.com" className="text-gray-300 hover:text-blue-400 transition break-all group-hover:translate-x-1 inline-block transition-transform">
                tejovanthkasula@gmail.com
              </a>
            </div>
            <div className="group">
              <p className="text-blue-300 font-semibold mb-2">📱 Phone</p>
              <a href="tel:+919948852529" className="text-gray-300 hover:text-blue-400 transition group-hover:translate-x-1 inline-block transition-transform">
                +91 99488 52529
              </a>
            </div>
            <div className="group">
              <p className="text-blue-300 font-semibold mb-2">📍 Location</p>
              <p className="text-gray-300 group-hover:translate-x-1 inline-block transition-transform">Guntur, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
