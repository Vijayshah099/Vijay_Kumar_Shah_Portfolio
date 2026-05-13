import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Certifications = () => {
  const { certifications } = portfolioData;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          Licenses & <span className="text-gradient">Certifications</span>
        </h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-dark-accent/20 light:bg-light-accent/20 rounded-xl text-dark-accent light:text-light-accent">
                  <Award size={28} />
                </div>
                <span className="text-xs font-semibold text-dark-text/60 light:text-light-text/60">{cert.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
              <p className="text-dark-text/70 light:text-light-text/70 mb-6 flex-grow">{cert.issuer}</p>
              
              <a href={cert.link} target="_blank" rel="noreferrer" className="flex items-center text-sm font-semibold text-dark-accent2 light:text-light-accent2 hover:underline w-fit">
                Verify Credential <ExternalLink size={16} className="ml-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
