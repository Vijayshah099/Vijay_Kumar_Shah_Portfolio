import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { about } = portfolioData;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            About <span className="text-gradient">Me</span>
          </h2>
          
          <div className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-dark-accent/20 light:bg-light-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <p className="text-lg md:text-xl leading-relaxed text-dark-text/80 light:text-light-text/80 mb-12 relative z-10">
              {about.summary}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
              {about.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors group"
                >
                  <h3 className="text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">{stat.value}</h3>
                  <p className="text-sm md:text-base text-dark-text/70 light:text-light-text/70">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
