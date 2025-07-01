import { motion } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
    {
      title: "🔐 Video-Based Multi-Factor Authentication",
      description: "Advanced authentication system using video-based biometric verification with machine learning models for enhanced security.",
      technologies: [
        { name: "Python", color: "blue" },
        { name: "OpenCV", color: "green" },
        { name: "TensorFlow", color: "purple" },
        { name: "Flask", color: "amber" },
      ],
      github: "Multi_Factor_Authentication",
      hoverColor: "cyan",
    },
    {
      title: "🤖 AI Code Reviewer",
      description: "Intelligent code review system powered by AI that analyzes code quality, suggests improvements, and detects potential bugs.",
      technologies: [
        { name: "React", color: "cyan" },
        { name: "Node.js", color: "green" },
        { name: "OpenAI API", color: "blue" },
        { name: "MongoDB", color: "purple" },
      ],
      github: "AI-code-Reviewer",
      hoverColor: "purple",
    },
    {
      title: "🌱 Dockerized Plant Disease Detector",
      description: "Deep learning application for detecting plant diseases using convolutional neural networks, containerized with Docker for scalable deployment.",
      technologies: [
        { name: "Python", color: "blue" },
        { name: "TensorFlow", color: "green" },
        { name: "Docker", color: "cyan" },
        { name: "FastAPI", color: "amber" },
      ],
      github: "Deep-Learning-Projects",
      hoverColor: "green",
    },
    {
      title: "💬 Secure Real-Time Chat Platform",
      description: "Real-time messaging application with end-to-end encryption, group chats, file sharing, and modern responsive design.",
      technologies: [
        { name: "React", color: "cyan" },
        { name: "Socket.io", color: "green" },
        { name: "Express", color: "blue" },
        { name: "MongoDB", color: "purple" },
      ],
      github: "Chatting-app",
      hoverColor: "amber",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">Showcasing my technical expertise through real-world applications</p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`glass-card rounded-2xl p-6 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-${project.hoverColor}-500/20 transition-all duration-300 group`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-xl font-bold text-white group-hover:text-${project.hoverColor}-400 transition-colors`}>
                  {project.title}
                </h3>
                <div className="flex space-x-3">
                  <a 
                    href={`https://github.com/AbhishekMangal/${project.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <i className="fab fa-github text-xl"></i>
                  </a>
                  <a 
                    href="#" 
                    className={`text-gray-400 hover:text-${project.hoverColor}-400 transition-colors`}
                  >
                    <i className="fas fa-external-link-alt text-lg"></i>
                  </a>
                </div>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech.name}
                    className={`px-3 py-1 bg-${tech.color}-500/20 text-${tech.color}-300 rounded-full text-sm`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
              <div className="border-t border-gray-700 pt-4">
                <div className="text-sm text-gray-400">{project.github}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
