import { motion } from "framer-motion";

export default function StatsSection() {
  const platforms = [
    {
      platform: "Codeforces",
      rating: "Expert (1625)",
      rank: "Top 10%",
      color: "blue",
      icon: "fas fa-code",
      profileUrl: "https://codeforces.com/profile/abhishekmangal12345"
    },
    {
      platform: "Codechef",
      rating: "5★ (2043)",
      rank: "Top 5%",
      color: "green",
      icon: "fas fa-trophy",
      profileUrl: "https://www.codechef.com/users/adapt_tomb_39"
    },
    {
      platform: "LeetCode",
      rating: "Knight (2035)",
      rank: "Top 4%",
      color: "purple",
      icon: "fas fa-chess-knight",
      profileUrl: "https://leetcode.com/u/Code_Fire/"
    },
    {
      platform: "GFG",
      rating: "5★ (2006)",
      rank: "Top 2%",
      color: "amber",
      icon: "fas fa-star",
      profileUrl: "https://www.geeksforgeeks.org/user/abhishekmag7o5/"
    }
  ];

  return (
    <section id="stats" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-green-500 bg-clip-text text-transparent">Competitive Programming</span>
          </h2>
          <p className="text-gray-400 text-lg">Showcasing my problem-solving skills across multiple platforms</p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <motion.a
              key={platform.platform}
              href={platform.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-card rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 ring-2 ring-${platform.color}-500/20 hover:ring-${platform.color}-500/40 cursor-pointer group block`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-${platform.color}-400 to-${platform.color}-600 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-${platform.color}-500/25 transition-all duration-300`}>
                  <i className={`${platform.icon} text-white text-2xl`}></i>
                </div>
                <h3 className={`text-xl font-bold text-${platform.color}-400 mb-2 group-hover:text-${platform.color}-300 transition-colors`}>{platform.platform}</h3>
                <div className="text-2xl font-bold text-white mb-1">{platform.rating}</div>
                <div className="text-sm text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">{platform.rank}</div>
                <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">Click to view profile</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
