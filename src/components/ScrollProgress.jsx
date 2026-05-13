import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-dark-accent to-dark-accent2 light:from-light-accent light:to-light-accent2 transform origin-left z-[10000]"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgress;
