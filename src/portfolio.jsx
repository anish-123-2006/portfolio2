import React, { useState } from 'react';
// Change "Linkedin" to "Linkedin" (lowercase 'd')
// Replace your current lucide import with this exact line:
import { ArrowUpRight, GitHub, Linkedin, Mail, Code2, Layers, ExternalLink } from 'lucide-react';
const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: "01",
      title: "Nova E-Commerce Engine",
      category: "Frontend Architecture / Next.js",
      description: "A headless commerce experience featuring sub-100ms page loads and custom state management.",
      link: "#",
      tags: ["React", "Next.js", "GraphQL", "Tailwind"]
    },
    {
      id: "02",
      title: "Aura Design System",
      category: "UI Engineering / Component Library",
      description: "An enterprise-grade, accessible component library built with Radix primitives and Stitches.",
      link: "#",
      tags: ["TypeScript", "Radix", "Storybook", "CSS-in-JS"]
    },
    {
      id: "03",
      title: "Quantum Analytics Dashboard",
      category: "Data Visualization / Real-time",
      description: "High-performance data streaming dashboard handling massive datasets smoothly via Canvas APIs.",
      link: "#",
      tags: ["React", "D3.js", "WebSockets", "TypeScript"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] font-sans selection:bg-[#f5f5f5] selection:text-[#0a0a0a]">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-lg font-medium tracking-tighter">DEVELOPER.</a>
        <div className="flex gap-8 text-sm uppercase tracking-widest text-[#a3a3a3]">
          <a href="#work" className="hover:text-white transition-colors duration-300">Work</a>
          <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
          <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 max-w-6xl mx-auto">
        <div className="space-y-4 max-w-4xl">
          <p className="text-sm uppercase tracking-widest text-[#a3a3a3] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for select freelance & full-time roles
          </p>
          <h1 className="text-5xl md:text-8xl font-light tracking-tight leading-[1.1]">
            Crafting premium digital experiences through <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">clean code</span> and intentional design.
          </h1>
        </div>

        {/* Hero Footer */}
        <div className="mt-24 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-t border-neutral-800 pt-8 text-[#a3a3a3]">
          <div className="flex gap-3 text-sm">
            <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full flex items-center gap-1">
              <Code2 size={14} /> UI Engineer
            </span>
            <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full flex items-center gap-1">
              <Layers size={14} /> Performance Ops
            </span>
          </div>
          <a href="#work" className="group flex items-center gap-2 text-white font-medium hover:opacity-80 transition-opacity">
            Explore Selected Work 
            <ArrowUpRight size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-[#a3a3a3] mb-12">Selected Projects</p>
        
        <div className="border-t border-neutral-800">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative border-b border-neutral-800 py-12 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer transition-all duration-500"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Dynamic subtle background hover effect */}
              <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/30 transition-colors duration-500 -z-10" />

              <div className="max-w-xl">
                <div className="flex items-center gap-4 text-sm text-[#a3a3a3] mb-3">
                  <span>{project.id}</span>
                  <span>/</span>
                  <span className="uppercase tracking-wider text-xs">{project.category}</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-light tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-[#a3a3a3] mt-3 font-light text-sm max-w-md leading-relaxed opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 md:mt-0 flex flex-wrap gap-2 max-w-xs justify-start md:justify-end">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs bg-neutral-900 border border-neutral-800 text-neutral-400 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-neutral-950 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-sm uppercase tracking-widest text-[#a3a3a3] mb-6">About Me</p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-tight">
              Bridging the gap between pure logic and aesthetic design.
            </h2>
          </div>
          <div className="text-[#a3a3a3] space-y-6 font-light leading-relaxed text-lg pt-2">
            <p>
              I specialize in building modular, highly accessible front-end architectures. I view code as a medium for design, ensuring that micro-interactions, layout physics, and system performance mesh flawlessly together.
            </p>
            <p>
              Instead of flashy gimmicks, my work focuses on immaculate spacing, typography hierarchy, and semantic structures that make apps intuitively robust.
            </p>
          </div>
        </div>
      </section>

      {/* Contact / Footer Section */}
      <footer id="contact" className="py-32 px-6 md:px-12 max-w-6xl mx-auto border-t border-neutral-900">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div>
            <p className="text-sm uppercase tracking-widest text-[#a3a3a3] mb-4">Get In Touch</p>
            <a href="mailto:your.email@example.com" className="text-3xl md:text-5xl font-light tracking-tight hover:text-neutral-400 transition-colors flex items-center gap-4">
              hello@yourdomain.com
              <ArrowUpRight size={32} className="text-neutral-600" />
            </a>
          </div>

          {/* Social and Copyright */}
         {/* Social and Copyright */}
<div className="flex flex-col gap-6 md:items-end w-full md:w-auto">
  <div className="flex gap-6 text-neutral-400">
    <a href="#" className="hover:text-white transition-colors">
      <GitHub size={20} />
    </a>
    <a href="#" className="hover:text-white transition-colors">
      <Linkedin size={20} />
    </a>
    <a href="#" className="hover:text-white transition-colors">
      <Mail size={20} />
    </a>
  </div>
  <p className="text-xs text-neutral-600 font-mono">
    &copy; {new Date().getFullYear()} — DESIGNED & CODED BY YOU
  </p>
</div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;