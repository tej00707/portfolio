import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:tejovanthkasula@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 text-lg">Let's connect and work together</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <a href="mailto:tejovanthkasula@gmail.com" className="flex items-start gap-4 group">
              <div className="flex-shrink-0">
                <FiMail className="text-blue-400 group-hover:text-blue-300 transition" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Email</h4>
                <p className="text-gray-400 group-hover:text-gray-300 transition">
                  tejovanthkasula@gmail.com
                </p>
              </div>
            </a>

            <a href="tel:+919948852529" className="flex items-start gap-4 group">
              <div className="flex-shrink-0">
                <FiPhone className="text-blue-400 group-hover:text-blue-300 transition" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Phone</h4>
                <p className="text-gray-400 group-hover:text-gray-300 transition">
                  +91 99488 52529
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <FiMapPin className="text-blue-400" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Location</h4>
                <p className="text-gray-400">Guntur, India</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700">
              <h4 className="font-semibold text-white mb-4">Follow</h4>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/kasulatejovanth" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
                  <FiLinkedin size={24} />
                </a>
                <a href="https://github.com/tej00707" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
                  <FiGithub size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-slate-800 rounded-xl p-8 border border-slate-700">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition"
              >
                Send Message
              </button>

              {sent && (
                <div className="text-center text-green-400 text-sm font-medium">
                  ✓ Message sent! I'll get back to you soon.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
