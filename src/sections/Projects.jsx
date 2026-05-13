import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          Featured <span className="text-gradient">Projects</span>
        </h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`glass rounded-3xl overflow-hidden group cursor-pointer ${
  projects.length % 2 !== 0 && index === projects.length - 1
    ? 'md:col-span-2 md:max-w-xl md:mx-auto'
    : ''
}`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full bg-dark-accent/20 light:bg-light-accent/20 text-dark-accent light:text-light-accent">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-dark-text/70 light:text-light-text/70 line-clamp-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-dark-bg light:bg-light-bg rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl relative custom-scrollbar"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="h-64 md:h-96 w-full">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="p-8 md:p-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{selectedProject.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.techStack.map(tech => (
                    <span key={tech} className="text-sm font-semibold px-4 py-1.5 rounded-full border border-dark-accent/50 light:border-light-accent/50 text-light-text light:text-dark-text">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-lg text-dark-text/80 light:text-light-text/80 leading-relaxed mb-8">
                  {selectedProject.description}
                </p>
                
                <div className="flex space-x-4">
                  <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex items-center space-x-2 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors">
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                  <a href={selectedProject.liveDemo} target="_blank" rel="noreferrer" className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-dark-accent to-dark-accent2 light:from-light-accent light:to-light-accent2 text-white rounded-full font-semibold hover:opacity-90 transition-opacity">
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
