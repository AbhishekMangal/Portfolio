import { motion } from "framer-motion";
import AnimatedBackground from "@/components/animated-background";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <AnimatedBackground />
      
      <motion.div 
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="gradient-text">
            Abhishek Mangal
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-4 font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Code. Create. Conquer.
        </motion.p>
        
        <motion.p 
          className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Full Stack Developer | NIT Patna '26 | Building scalable solutions with passion for clean architecture
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25"
          >
            Hire Me
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-4 border-2 border-gray-600 text-gray-300 hover:text-white hover:border-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300"
          >
            View Work
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <i className="fas fa-chevron-down text-gray-400 text-2xl"></i>
      </motion.div>
    </section>
  );
}
