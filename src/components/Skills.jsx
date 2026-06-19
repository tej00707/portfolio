import React from 'react';
import { FiCode, FiDatabase, FiTool, FiBook } from 'react-icons/fi';

function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      icon: FiCode,
      gradient: "from-blue-500 to-cyan-500",
      skills: ["Java", "C++", "C", "Python", "JavaScript", "TypeScript"]
    },
    {
      category: "Frontend",
      icon: FiCode,
      gradient: "from-purple-500 to-pink-500",
      skills: ["React", "Tailwind CSS", "HTML/CSS", "Responsive Design"]
    },
    {
      category: "Backend",
      icon: FiTool,
      gradient: "from-green-500 to-emerald-500",
      skills: ["Node.js", "Express.js", "RESTful API Design"]
    },
    {
      category: "Database",
      icon: FiDatabase,
      gradient: "from-orange-500 to-red-500",
      skills: ["MongoDB", "PostgreSQL", "ACID Transactions"]
    },
    {
      category: "CS Fundamentals",
      icon: FiBook,
      gradient: "from-indigo-500 to-blue-500",
      skills: ["Data Structures", "Algorithms", "Operating Systems", "Computer Networks", "OOP", "Design Patterns"]
    },
    {
      category: "Tools & Platforms",
      icon: FiTool,
      gradient: "from-yellow-500 to-orange-500",
      skills: ["Git", "GitHub", "Linux Terminal", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Skills</h2>
          <p className="text-gray-400 text-lg">Technologies and expertise I work with</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-slate-900 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-blue-400">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, i) => (
                    <span key={i} className="bg-slate-800 text-gray-300 text-sm px-3 py-1 rounded-full border border-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Coding Profiles */}
        <div className="grid md:grid-cols-2 gap-6">
          <a href="https://leetcode.com/u/tejovanth96/" target="_blank" rel="noopener noreferrer" className="bg-slate-900 rounded-xl p-8 border border-slate-700 hover:border-blue-500/50 transition group">
            <h4 className="text-2xl font-semibold text-white mb-2 group-hover:text-blue-400 transition">LeetCode</h4>
            <div className="text-blue-400 mt-4 font-medium inline-flex items-center gap-2">
              Visit Profile →
            </div>
          </a>

          <a href="https://www.geeksforgeeks.org/profile/tejovantne95" target="_blank" rel="noopener noreferrer" className="bg-slate-900 rounded-xl p-8 border border-slate-700 hover:border-blue-500/50 transition group">
            <h4 className="text-2xl font-semibold text-white mb-2 group-hover:text-blue-400 transition">GeeksForGeeks</h4>
            <div className="text-blue-400 mt-4 font-medium inline-flex items-center gap-2">
              Visit Profile →
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Skills;
