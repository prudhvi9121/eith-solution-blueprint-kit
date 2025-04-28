
import { useEffect } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

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

  const services = [
    {
      title: "Web Development",
      description: "Custom websites and applications",
      bgColor: "bg-black"
    },
    {
      title: "UI/UX Design",
      description: "Intuitive user experiences",
      bgColor: "bg-zinc-900"
    },
    {
      title: "Mobile Apps",
      description: "iOS and Android solutions",
      bgColor: "bg-black"
    },
    {
      title: "Custom Software",
      description: "Tailored to your needs",
      bgColor: "bg-zinc-900"
    }
  ];

  return (
    <section className="bg-black text-white pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <p className="text-sm md:text-base mb-8 max-w-xs">
              We're a tech company building digital products and services for the modern entrepreneur.
            </p>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight tracking-tight mb-12 md:mb-16">
              Building
              <br />
              <span className="relative">
                digital
                <svg className="absolute -bottom-2 w-full" viewBox="0 0 300 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1,15 C50,5 100,25 150,15 C200,5 250,15 299,8" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              <br />
              solutions.
            </h1>
          </div>
          
          <div className="relative w-full aspect-square max-w-2xl mx-auto md:mx-0 animate-on-scroll">
            <Carousel className="w-full">
              <CarouselContent>
                {services.map((service, index) => (
                  <CarouselItem key={index}>
                    <div className={cn(
                      "flex flex-col h-full aspect-square rounded-lg p-8 text-white",
                      service.bgColor
                    )}>
                      <div className="mb-4 p-6 rounded-full bg-white/10 w-16 h-16 flex items-center justify-center">
                        <span className="text-2xl">
                          {index === 0 && "🌐"}
                          {index === 1 && "🎨"}
                          {index === 2 && "📱"}
                          {index === 3 && "💻"}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-display font-bold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-300">
                        {service.description}
                      </p>
                      
                      <div className="mt-auto">
                        <div className="h-px w-full bg-white/20 my-4"></div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-white/60">0{index + 1}</span>
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-2 mt-4">
                <CarouselPrevious className="relative -left-0 bg-white/10 hover:bg-white/20 border-none text-white" />
                <CarouselNext className="relative -right-0 bg-white/10 hover:bg-white/20 border-none text-white" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
