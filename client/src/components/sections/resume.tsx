import { motion } from "framer-motion";

export default function ResumeSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="glass-card rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-500/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Download my comprehensive resume to learn more about my technical
            skills, projects, and achievements.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl font-bold text-cyan-400 mb-2">4+</div>
              <div className="text-gray-400">Major Projects</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl font-bold text-green-400 mb-2">
                1500+
              </div>
              <div className="text-gray-400">Problems Solved</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-gray-400">Technologies</div>
            </motion.div>
          </div>

          <motion.a
            href="https://drive.google.com/file/d/1oT0oNci4ETO3xCShdoyH525wF6YraYn9/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <i className="fas fa-download mr-3"></i>
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
