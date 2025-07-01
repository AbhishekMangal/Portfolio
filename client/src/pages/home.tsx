import Navigation from "@/components/navigation";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import ProjectsSection from "@/components/sections/projects";
import StatsSection from "@/components/sections/stats";
import AchievementsSection from "@/components/sections/achievements";
import ResumeSection from "@/components/sections/resume";
import ContactSection from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="bg-gray-950 text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <StatsSection />
      <AchievementsSection />
      <ResumeSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-950 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            &copy; 2024 Abhishek Mangal. Crafted with passion and precision.
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/AbhishekMangal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a 
              href="https://linkedin.com/in/abhishek-mangal-412879256/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a 
              href="mailto:abhishekmangal12345@gmail.com" 
              className="text-gray-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
            >
              <i className="fas fa-envelope text-2xl"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
