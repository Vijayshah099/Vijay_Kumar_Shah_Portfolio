import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import profileImage from '../assets/vijay.png';

const Hero = () => {
  const { hero } = portfolioData;

  const sequence = hero.taglines.flatMap(tag => [tag, 2000]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex flex-col space-y-6 mt-10 md:mt-0 text-center md:text-left"
        >
          <h2 className="text-xl md:text-2xl font-medium text-dark-text/80 light:text-light-text/80">Hello, I'm</h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            {hero.name}
          </h1>
          <div className="text-2xl md:text-3xl font-semibold h-12">
            <span className="text-gradient">
              <TypeAnimation
                sequence={sequence}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </div>
          <p className="text-lg md:text-xl max-w-lg mx-auto md:mx-0 text-dark-text/70 light:text-light-text/70">
            {hero.description}
          </p>
          
          <div className="flex items-center justify-center md:justify-start space-x-4 pt-4">
            <a href={hero.resumeLink} className="flex items-center space-x-2 bg-gradient-to-r from-dark-accent to-dark-accent2 light:from-light-accent light:to-light-accent2 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity transform hover:scale-105">
              <Download size={20} />
              <span>Resume</span>
            </a>
            <a href="#projects" className="px-6 py-3 rounded-full font-semibold border-2 border-dark-accent light:border-light-accent hover:bg-dark-accent/10 light:hover:bg-light-accent/10 transition-colors">
              View Projects
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start space-x-6 pt-6">
            <a href={hero.socials.github} target="_blank" rel="noreferrer" className="hover:text-dark-accent light:hover:text-light-accent transition-colors transform hover:scale-110">
              <Github size={28} />
            </a>
            <a href={hero.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-dark-accent light:hover:text-light-accent transition-colors transform hover:scale-110">
              <Linkedin size={28} />
            </a>
            <a href={hero.socials.email} className="hover:text-dark-accent light:hover:text-light-accent transition-colors transform hover:scale-110">
              <Mail size={28} />
            </a>
          </div>
        </motion.div>

        {/* Profile Image / Abstract Art */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center items-center relative"
        >
          <div className="w-64 h-64 md:w-96 md:h-96 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-dark-accent to-dark-accent2 light:from-light-accent light:to-light-accent2 rounded-full animate-spin-slow opacity-30 blur-2xl"></div>
            <div className="absolute inset-4 glass rounded-full flex items-center justify-center overflow-hidden border-4 border-white/10">
             <img src={profileImage} alt="Vijay Kumar Shah" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
