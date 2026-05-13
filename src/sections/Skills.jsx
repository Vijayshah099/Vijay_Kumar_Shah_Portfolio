import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          My <span className="text-gradient">Skills</span>
        </h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skills.map((category, idx) => (
           <motion.div
  key={idx}
  variants={itemVariants}
  className={`glass p-8 rounded-3xl ${
    skills.length % 2 !== 0 && idx === skills.length - 1
      ? 'md:col-span-2 md:max-w-xl md:mx-auto w-full'
      : ''
  }`}
>
              <h3 className="text-2xl font-semibold mb-6">{category.category}</h3>
              <div className="space-y-6">
                {category.items.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-dark-text/90 light:text-light-text/90">{skill.name}</span>
                      <span className="text-sm text-dark-text/60 light:text-light-text/60">{skill.progress}%</span>
                    </div>
                    <div className="w-full bg-dark-bg/50 light:bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-dark-accent to-dark-accent2 light:from-light-accent light:to-light-accent2 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.progress}%` } : {}}
                        transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
