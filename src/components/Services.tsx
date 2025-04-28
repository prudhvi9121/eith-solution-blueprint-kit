
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const Services = () => {
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

  return (
    <section id="services" className="section bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/2 animate-on-scroll">
            <h2 className="section-heading">
              We invest in 
              <br />
              <span className="underline decoration-4 underline-offset-8">solutions</span> first.
            </h2>
          </div>
          
          <div className="md:w-1/2 flex flex-col animate-on-scroll" style={{ animationDelay: "200ms" }}>
            <p className="text-lg md:text-xl mb-8">
              At Eith, we approach every project with innovation and strategy. Our team of experts works to understand your business challenges and create effective digital solutions that deliver real impact and sustainable growth.
            </p>
            
            <div className="flex items-center mb-12">
              <div className="mr-8 flex-shrink-0">
                
              </div>
              <div className="h-px bg-black flex-grow"></div>
            </div>
            
            <Button className="self-start hover:scale-105 transition-transform">
              Explore
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
