
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Portfolio = () => {
  const projects = [
    { id: 1, title: "Project 1", imageUrl: "placeholder" },
    { id: 2, title: "Project 2", imageUrl: "placeholder" },
    { id: 3, title: "Project 3", imageUrl: "placeholder" },
    { id: 4, title: "Project 4", imageUrl: "placeholder" },
    { id: 5, title: "Project 5", imageUrl: "placeholder" },
    { id: 6, title: "Project 6", imageUrl: "placeholder" },
    { id: 7, title: "Project 7", imageUrl: "placeholder" },
    { id: 8, title: "Project 8", imageUrl: "placeholder" },
  ];

  const featuredProject = {
    title: "Reinventing digital transportation.",
    description: "Built the first real-time scheduling system for a major transit company that reduced wait times by 45% and increased rider satisfaction scores by 62%. The platform now handles over 500,000 trips daily.",
    client: "Transit Co.",
    year: "2023"
  };

  return (
    <section id="portfolio" className="section">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Our Portfolio</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="rounded-lg overflow-hidden border-0 shadow-none bg-gray-100">
              <CardContent className="p-0 aspect-square flex items-center justify-center">
                <span className="text-gray-400">{project.title}</span>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            {/* Left empty for layout */}
          </div>
          
          <div className="md:col-span-2 bg-black text-white p-6 md:p-8">
            <div className="text-xs text-white/70 mb-4">FEATURE</div>
            
            <h3 className="text-2xl font-display font-bold mb-4">
              {featuredProject.title}
            </h3>
            
            <p className="mb-6 text-white/90">
              {featuredProject.description}
            </p>
            
            <div className="flex justify-between text-sm">
              <span>{featuredProject.client}</span>
              <span>{featuredProject.year}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
