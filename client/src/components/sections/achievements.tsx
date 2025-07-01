import { motion } from "framer-motion";

export default function AchievementsSection() {
  const achievements = [
    { text: "Codeforces Expert (1625)", color: "blue" },
    { text: "Codechef 5★ (2043)", color: "green" },
    { text: "LeetCode Knight (2035)", color: "purple" },
    { text: "GFG 5★ (2006)", color: "amber" },
    { text: "Solved 1500+ coding problems", color: "cyan" },
    { text: "Qualified HackOn 2025 – Technical Skills Round", color: "pink" },
    { text: "Rank 63 – CodeClash 2025 (Unstop)", color: "orange" },
  ];

  return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-gray-400 text-lg">Milestones that define my journey in competitive programming</p>
        </motion.div>

        <motion.div 
          className="glass-card rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {achievements.slice(0, 4).map((achievement, index) => (
                <motion.div
                  key={achievement.text}
                  className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-3 h-3 bg-${achievement.color}-400 rounded-full animate-glow`}></div>
                  <span className="text-gray-300">{achievement.text}</span>
                </motion.div>
              ))}
            </div>
            <div className="space-y-6">
              {achievements.slice(4).map((achievement, index) => (
                <motion.div
                  key={achievement.text}
                  className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-3 h-3 bg-${achievement.color}-400 rounded-full animate-glow`}></div>
                  <span className="text-gray-300">{achievement.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
