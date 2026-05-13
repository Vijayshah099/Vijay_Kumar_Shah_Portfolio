import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          Work <span className="text-gradient">Experience</span>
        </h2>

        <div ref={ref} className="max-w-4xl mx-auto relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-dark-accent/20 light:bg-light-accent/20 rounded-full"></div>

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`mb-12 flex flex-col md:flex-row w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="md:w-1/2"></div>
              
              <div className="absolute left-[-8px] md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-dark-accent2 light:bg-light-accent2 border-4 border-dark-bg light:border-light-bg z-10 mt-6 md:mt-0"></div>
              
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} pl-8 mt-4 md:mt-0`}>
                <div className="glass p-8 rounded-3xl hover:scale-105 transition-transform duration-300">
                  <span className="text-sm font-bold text-dark-accent light:text-light-accent block mb-2">{exp.duration}</span>
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <h4 className="text-lg font-medium text-dark-text/70 light:text-light-text/70 mb-4">{exp.company}</h4>
                  <p className="text-dark-text/80 light:text-light-text/80">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
