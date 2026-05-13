import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const { education } = portfolioData;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          My <span className="text-gradient">Education</span>
        </h2>

        <div ref={ref} className="flex justify-center max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass p-8 rounded-3xl border-t-4 border-dark-accent light:border-light-accent relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-dark-accent/10 light:bg-light-accent/10 rounded-full blur-2xl"></div>
              
              <h3 className="text-2xl font-bold mb-2 relative z-10">{edu.degree}</h3>
              <h4 className="text-xl font-medium text-dark-text/80 light:text-light-text/80 mb-4 relative z-10">{edu.institution}</h4>
              
              <div className="flex justify-between items-center mb-6 relative z-10">
                <span className="bg-dark-accent/20 light:bg-light-accent/20 text-dark-accent light:text-light-accent px-4 py-1 rounded-full text-sm font-semibold">{edu.duration}</span>
                <span className="font-bold text-lg">{edu.grade}</span>
              </div>
              
              <p className="text-dark-text/70 light:text-light-text/70 relative z-10">
                <strong className="text-dark-text light:text-light-text">Relevant Coursework:</strong> {edu.coursework}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
