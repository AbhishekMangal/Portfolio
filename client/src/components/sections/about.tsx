import { motion } from "framer-motion";

export default function AboutSection() {
  const skills = [
    { name: "React", color: "cyan" },
    { name: "Node.js", color: "blue" },
    { name: "Python", color: "purple" },
    { name: "MongoDB", color: "green" },
    { name: "AWS", color: "amber" },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-gray-400 text-lg">Get to know the developer behind the code</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="glass-card rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 shadow-xl shadow-cyan-500/10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm <span className="text-cyan-400 font-semibold">Abhishek Mangal</span>, a final-year CSE student at NIT Patna. 
                With strong foundations in full-stack development, scalable systems, and AI/ML, I've solved over 
                <span className="text-green-400 font-semibold"> 1500+ DSA problems</span> and built production-grade projects.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I thrive at the intersection of <span className="text-purple-400 font-semibold">performance</span>, 
                <span className="text-amber-400 font-semibold"> security</span>, and 
                <span className="text-blue-400 font-semibold"> clean architecture</span>.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-3 py-1 bg-${skill.color}-500/20 text-${skill.color}-300 rounded-full text-sm border border-${skill.color}-500/30`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="glass-card rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-500/10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
                <div className="text-gray-400 text-sm">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">1500+</div>
                <div className="text-gray-400 text-sm">Problems Solved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                <div className="text-gray-400 text-sm">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">Expert</div>
                <div className="text-gray-400 text-sm">CF Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
