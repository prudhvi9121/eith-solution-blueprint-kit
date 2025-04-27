
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/2">
            <h2 className="section-heading">
              We invest in 
              <br />
              <span className="underline decoration-4 underline-offset-8">solutions</span> first.
            </h2>
          </div>
          
          <div className="md:w-1/2 flex flex-col">
            <p className="text-lg md:text-xl mb-8">
              At Eith, we approach every project with innovation and strategy. Our team of experts works to understand your business challenges and create effective digital solutions that deliver real impact and sustainable growth.
            </p>
            
            <div className="flex items-center mb-12">
              <div className="mr-8 flex-shrink-0">
                <img 
                  src="/lovable-uploads/ba5aa0f9-bc53-4cfb-8b10-137f3165b167.png" 
                  alt="Digital Solutions" 
                  className="max-w-[200px]"
                />
              </div>
              <div className="h-px bg-black flex-grow"></div>
            </div>
            
            <Button className="self-start">
              Explore
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
