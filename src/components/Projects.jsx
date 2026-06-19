import React from 'react';
import { FiGithub } from 'react-icons/fi';

function Projects() {
  const projects = [
    {
      title: "LNS Infinity Estates",
      description: "A comprehensive property management platform with 14 API endpoints and role-based access control.",
      tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      highlights: [
        "Built 22 reusable React components",
        "RESTful API with JWT authentication",
        "Admin dashboard with 10-page application",
        "Role-based access control for admin and users"
      ],
      github: "https://github.com/tej00707/lns-infinity-estates",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Digital Wallet & Transactions Platform",
      description: "Secure transaction platform with ACID compliance and advanced validation.",
      tech: ["Node.js", "Express.js", "MongoDB", "React"],
      highlights: [
        "MongoDB session-based ACID transactions",
        "Race condition prevention",
        "3 validation schemas with 6+ rules (Zod)",
        "4 business-logic checks for data integrity"
      ],
      github: "https://github.com/tej00707/Wallet-System",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Task Management Platform",
      description: "Full-stack task management application with real-time updates.",
      tech: ["React", "Node.js", "Express.js", "JavaScript"],
      highlights: [
        "3-endpoint RESTful API",
        "Asynchronous client-server communication",
        "Task creation, retrieval, and deletion",
        "Responsive UI design"
      ],
      github: "https://github.com/tej00707/task-manager",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Expense Tracker",
      description: "Track and manage your expenses with an intuitive interface.",
      tech: ["JavaScript", "React"],
      highlights: [
        "Add and track expenses",
        "Categorize spending",
        "Visual analytics and reports",
        "Local storage integration"
      ],
      github: "https://github.com/tej00707/expense-tracker",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Student Management API",
      description: "RESTful API for managing student records and information.",
      tech: ["JavaScript", "Node.js", "Express.js"],
      highlights: [
        "CRUD operations for students",
        "Database integration",
        "Error handling and validation",
        "Comprehensive API endpoints"
      ],
      github: "https://github.com/tej00707/student-management-api",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      title: "Calculator",
      description: "A responsive calculator application built with web technologies.",
      tech: ["HTML", "CSS", "JavaScript"],
      highlights: [
        "Basic arithmetic operations",
        "Clean and intuitive UI",
        "Responsive design",
        "Real-time calculations"
      ],
      github: "https://github.com/tej00707/calculator",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Restaurant Landing Page",
      description: "A beautiful landing page for a restaurant business.",
      tech: ["HTML", "CSS"],
      highlights: [
        "Responsive design",
        "Menu showcase",
        "Contact information",
        "Professional layout"
      ],
      github: "https://github.com/tej00707/restaurent-landing-page",
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "Todo App",
      description: "A simple and effective todo list application.",
      tech: ["HTML", "CSS", "JavaScript"],
      highlights: [
        "Add and manage tasks",
        "Mark tasks as complete",
        "Delete tasks",
        "Local storage persistence"
      ],
      github: "https://github.com/tej00707/todo-app",
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Projects</h2>
          <p className="text-gray-400 text-lg">A selection of my recent work and contributions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition duration-300 hover:shadow-lg hover:shadow-blue-500/10 flex flex-col">
              {/* Header Badge */}
              <div className={`h-1 bg-gradient-to-r ${project.gradient}`}></div>
              
              {/* Card Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm flex-grow">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="bg-slate-700 text-gray-300 text-xs px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="bg-slate-700 text-gray-400 text-xs px-3 py-1 rounded-full">+{project.tech.length - 3}</span>
                    )}
                  </div>
                </div>

                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition">
                  View on GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
