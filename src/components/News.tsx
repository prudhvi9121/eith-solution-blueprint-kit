
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const News = () => {
  const articles = [
    {
      id: 1,
      title: "Eith wins Digital Innovation Award 2023",
      imageUrl: "placeholder-1",
      author: "PR Team",
      date: "April 12, 2023"
    },
    {
      id: 2,
      title: "How we transformed logistics with custom software",
      imageUrl: "placeholder-2",
      author: "Sarah Parker",
      date: "March 28, 2023"
    },
    {
      id: 3,
      title: "Future of AI in enterprise solutions",
      imageUrl: "placeholder-3",
      author: "Mark Taylor",
      date: "February 15, 2023"
    }
  ];

  return (
    <section id="news" className="section bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 md:mb-0">
            Latest News
          </h2>
          
          <div className="flex space-x-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="sr-only">Previous</span>
            </Button>
            
            <Button variant="outline" size="icon" className="rounded-full">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card key={article.id} className="rounded-none border-0 shadow-none overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="text-lg font-display font-medium mb-4">{article.title}</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-6 h-6 rounded-full bg-gray-300 mr-2"></div>
                    <span>{article.author}</span>
                    <span className="mx-2">•</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
