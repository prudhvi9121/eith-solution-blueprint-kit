
import { useEffect, useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext,
  useCarousel
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import AnimatedIllustration from "@/components/ui/carousel/AnimatedIllustration";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => {
  const [api, setApi] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Update current slide index when carousel changes
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const services = [
    {
      title: "Web Development",
      description: "Custom websites and applications",
      bgColor: "bg-black",
      type: "web" as const
    },
    {
      title: "UI/UX Design",
      description: "Intuitive user experiences",
      bgColor: "bg-zinc-900",
      type: "uiux" as const
    },
    {
      title: "Mobile Apps",
      description: "iOS and Android solutions",
      bgColor: "bg-black",
      type: "mobile" as const
    },
    {
      title: "Custom Software",
      description: "Tailored to your needs",
      bgColor: "bg-zinc-900",
      type: "software" as const
    }
  ];

  // Configure autoplay plugin
  const autoplayPlugin = Autoplay({
    delay: 4000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

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
            <Carousel
              className="w-full"
              setApi={setApi}
              plugins={[autoplayPlugin]}
              opts={{
                loop: true,
              }}
            >
              <CarouselContent>
                {services.map((service, index) => (
                  <CarouselItem key={index}>
                    <div className={cn(
                      "flex flex-col h-full aspect-square rounded-lg p-8 text-white transition-all duration-500",
                      service.bgColor,
                      "hover:shadow-lg hover:shadow-white/10"
                    )}>
                      <div className="mb-4 p-6 rounded-full w-40 h-40 mx-auto">
                        <AnimatedIllustration type={service.type} />
                      </div>
                      
                      <h3 className="text-2xl font-display font-bold mb-2 text-center">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-center">
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
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex justify-center gap-2 mb-2">
                  {services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      className={cn(
                        "w-2.5 h-2.5 rounded-full transition-all",
                        currentIndex === index 
                          ? "bg-white scale-125" 
                          : "bg-white/30 hover:bg-white/50"
                      )}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="flex justify-end gap-2">
                  <CarouselPrevious className="relative -left-0 bg-white/10 hover:bg-white/20 border-none text-white" />
                  <CarouselNext className="relative -right-0 bg-white/10 hover:bg-white/20 border-none text-white" />
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
