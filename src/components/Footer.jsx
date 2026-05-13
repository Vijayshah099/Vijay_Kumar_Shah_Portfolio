import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { animateScroll as scroll } from 'react-scroll';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { socials } = portfolioData.hero;

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: true });
  };

  return (
    <footer className="relative border-t border-white/10 bg-dark-bg/80 light:bg-light-bg/80 backdrop-blur-md pt-12 pb-6 z-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        
        <button 
          onClick={scrollToTop}
          className="absolute -top-6 w-12 h-12 rounded-full bg-gradient-to-tr from-dark-accent to-dark-accent2 light:from-light-accent light:to-light-accent2 flex items-center justify-center text-white hover:-translate-y-2 transition-transform shadow-lg shadow-dark-accent/20"
        >
          <ArrowUp size={24} />
        </button>

        <h2 className="text-3xl font-bold mb-6 text-gradient tracking-widest">VKS.</h2>
        
        <div className="flex space-x-6 mb-8">
          <a href={socials.github} target="_blank" rel="noreferrer" className="text-dark-text/60 hover:text-dark-accent light:text-light-text/60 light:hover:text-light-accent transition-colors">
            <Github size={24} />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" className="text-dark-text/60 hover:text-dark-accent light:text-light-text/60 light:hover:text-light-accent transition-colors">
            <Linkedin size={24} />
          </a>
          <a href={socials.email} className="text-dark-text/60 hover:text-dark-accent light:text-light-text/60 light:hover:text-light-accent transition-colors">
            <Mail size={24} />
          </a>
        </div>
        
        <p className="text-sm font-medium text-dark-text/50 light:text-light-text/50">
          © {new Date().getFullYear()} Vijay Kumar Shah. Built with ❤️ and Code.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
