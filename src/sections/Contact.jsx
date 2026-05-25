import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { hero: { socials } } = portfolioData;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  setIsSubmitting(true);

  try {
    await emailjs.send(
      "service_k97u1qe",
      "template_kn7wxho",
      {
        name: formState.name,
        email: formState.email,
        message: formState.message,
      },
      "N-Ip54kbwe6wv_-4v"
    );

    setSubmitted(true);

    setFormState({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);

  } catch (error) {
    console.log(error);
    alert("Message failed to send");
  }

  setIsSubmitting(false);
};

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          Get In <span className="text-gradient">Touch</span>
        </h2>

        <div ref={ref} className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 space-y-8"
          >
            <div className="glass p-8 rounded-3xl h-full flex flex-col justify-center space-y-8">
              <h3 className="text-2xl font-bold mb-2">Let's talk about your project</h3>
              <p className="text-dark-text/70 light:text-light-text/70">
                I'm currently open to internships, freelance opportunities, and full-time roles in Full Stack Development and AI Engineering. Feel free to connect with me for collaborations, projects, or opportunities.
              </p>
              
              <div className="space-y-6 mt-8">
                <a href={socials.email} className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-dark-accent light:text-light-accent group-hover:bg-dark-accent/20 transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-dark-text/60 light:text-light-text/60">Email</span>
                    <span className="font-medium group-hover:text-dark-accent transition-colors">shahvij1020@gmail.com</span>
                  </div>
                </a>
                
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-dark-accent light:text-light-accent group-hover:bg-dark-accent/20 transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-dark-text/60 light:text-light-text/60">Location</span>
                    <span className="font-medium">Delhi NCR, India</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3"
          >
            <form onSubmit={handleSubmit} className="glass p-8 md:p-10 rounded-3xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold ml-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-dark-bg/50 light:bg-white/50 border border-white/10 focus:border-dark-accent light:focus:border-light-accent focus:ring-1 focus:ring-dark-accent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold ml-1">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-dark-bg/50 light:bg-white/50 border border-white/10 focus:border-dark-accent light:focus:border-light-accent focus:ring-1 focus:ring-dark-accent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold ml-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl bg-dark-bg/50 light:bg-white/50 border border-white/10 focus:border-dark-accent light:focus:border-light-accent focus:ring-1 focus:ring-dark-accent outline-none transition-all resize-none"
                  placeholder="Hello Vijay, I would like to talk about..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-dark-accent to-dark-accent2 light:from-light-accent light:to-light-accent2 text-white font-bold text-lg flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={20} />
                  </>
                )}
              </button>
              
              {submitted && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 text-green-400 rounded-xl text-center font-medium border border-green-500/30"
                >
                  Message sent successfully! I will get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
