import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Testimonials = () => {
  const { testimonials } = portfolioData;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-dark-accent/10 light:bg-light-accent/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          What People <span className="text-gradient">Say</span>
        </h2>

        <div ref={ref} className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-5xl mx-auto">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass p-8 rounded-3xl flex-1 flex flex-col relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-dark-accent/20 light:text-light-accent/20" />
              <p className="text-lg italic text-dark-text/80 light:text-light-text/80 mb-8 relative z-10 flex-grow">
                "{test.text}"
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-dark-accent to-dark-accent2 light:from-light-accent light:to-light-accent2 flex items-center justify-center text-xl font-bold text-white">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold">{test.name}</h4>
                  <span className="text-sm text-dark-text/60 light:text-light-text/60">{test.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
