import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const Portfolio = () => {
  const projects = [
    { 
      id: 1, 
      title: "Codex App",
      category: "Education",
      description: "Integrated multiple coding platforms",
      imageUrl: "/portfolio1.png",
      placeholderColor: "bg-blue-100" 
    },
    { 
      id: 2, 
      title: "Pay Bill",
      category: "Business Management",
      description: "Maintained transactions and bussiness analaytics",
      imageUrl: "/portfolio2.png",
      placeholderColor: "bg-purple-100" // Uncommented this line
    },
    { 
      id: 3, 
      title: "LP Rail",
      category: "Finance",
      description: "Inhouse finance management",
      imageUrl: "/portfolio3.png",
      placeholderColor: "bg-green-100"
    },
    { 
      id: 4, 
      title: "Avenues Global School",
      category: "Education",
      description: "Modern Landing page for Avenus school",
      imageUrl: "/portfolio4.png",
      placeholderColor: "bg-green-100"
    }
  ];

  return (
    <section id="portfolio" className="section py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="space-y-2">
            <h2 className="section-heading text-4xl md:text-5xl font-bold tracking-tight">
              Our Portfolio
            </h2>
            <p className="text-gray-500 text-lg">
              Transforming ideas into impactful solutions
            </p>
          </div>
          {/* <Button 
            variant="outline" 
            className="self-start md:self-center group hover:bg-black hover:text-white transition-all duration-300"
          >
            View All Projects
            <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button> */}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group relative rounded-lg overflow-hidden border-0 shadow-none transition-all duration-500 ease-out hover:shadow-xl"
            >
              <CardContent className="p-0 aspect-square relative overflow-hidden">
                {/* Project Image with Placeholder Background */}
                <div className={`absolute inset-0 ${project.placeholderColor} transition-transform duration-500 group-hover:scale-110`}>
                  <img
                    src={project.imageUrl || "/api/placeholder/400/400"}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      // Use a placeholder image instead of hiding
                      e.currentTarget.src = "/api/placeholder/400/400";
                    }}
                  />
                </div>

                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="text-white">
                    <div className="text-xs font-medium text-white/70 mb-1">
                      {project.category}
                    </div>
                    <h3 className="font-semibold mb-1 text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/90">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 transform -translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;