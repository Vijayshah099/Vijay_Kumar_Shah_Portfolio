import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Achievements = () => {
  const { achievements } = portfolioData;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          Key <span className="text-gradient">Achievements</span>
        </h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((achieve, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass p-8 rounded-3xl flex items-start space-x-6 hover:bg-white/5 light:hover:bg-black/5 transition-colors group"
            >
              <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg group-hover:scale-110 transition-transform">
                <Trophy size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-dark-text light:text-light-text">
  {achieve.title}
</h3>
                <p className="text-dark-text/70 light:text-light-text/70">{achieve.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
