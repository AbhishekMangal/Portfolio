import { useEffect, useState } from "react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 200) {
          currentSection = section.getAttribute("id") || "";
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "stats", label: "Stats" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-lg border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold gradient-text">
            AM
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button className="md:hidden text-gray-300 hover:text-white">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
