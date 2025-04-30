import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Hero = () => {
  // Animation for content appearing on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, {
      threshold: 0.1
    });
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });
    
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: "web",
      title: "Web Development",
      description: "Custom websites and applications",
      icon: "🌐"
    },
    {
      id: "uiux",
      title: "UI/UX Design",
      description: "Intuitive user experiences",
      icon: "✨"
    },
    {
      id: "mobile",
      title: "Mobile Apps",
      description: "iOS and Android solutions",
      icon: "📱"
    },
    {
      id: "software",
      title: "Custom Software",
      description: "Tailored to your needs",
      icon: "💻"
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-black to-gray-900 text-white min-h-screen flex items-center pt-16 pb-12 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]" style={{ backgroundSize: '24px 24px' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Hero text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6"
            >
              Digital Solutions For Modern Businesses
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight tracking-tight mb-6"
            >
              Building
              <br />
              <span className="relative inline-block">
                digital
                <motion.div 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-red-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
              <br />
              solutions.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-gray-300 text-lg mb-8 max-w-lg"
            >
              We're a tech agency crafting cutting-edge digital products and services for the modern entrepreneur.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button  className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-opacity-90 transition-all shadow-lg shadow-white/20">
               <a href="#contact"> Get Started</a>
              </button>
              <button className="px-6 py-3 border-2 border-white rounded-lg hover:bg-white/10 transition-all font-semibold">
                <a href="#portfolio">View Our Work</a>
              </button>
            </motion.div>
          </motion.div>
          
          {/* Right side - Services grid showcase */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.6 }}
                  className={cn(
                    "relative overflow-hidden rounded-2xl p-6 md:p-8",
                    "bg-white/5 backdrop-blur-sm border border-white/10",
                    "transition-all duration-300 cursor-pointer group hover:bg-white/10",
                    hoveredService && hoveredService !== service.id ? "opacity-60" : ""
                  )}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Service Icon */}
                  {/* <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div> */}
                  
                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-red-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm md:text-base group-hover:text-white transition-colors">
                    {service.description}
                  </p>
                  
                  {/* Hover accent */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-600/0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Hero;