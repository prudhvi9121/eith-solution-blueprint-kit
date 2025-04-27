
const Locations = () => {
  const locations = [
    "New York", "San Francisco", "London", "Berlin", 
    "Tokyo", "Singapore", "Dubai", "Sydney",
    "Toronto", "Mumbai", "Paris", "São Paulo",
    "Cape Town", "Stockholm", "Bangkok", "Amsterdam",
    "Mexico City", "Madrid", "Seoul", "Hong Kong"
  ];

  return (
    <section className="py-12 md:py-20 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2 mb-12">
            {locations.slice(0, 6).map((location, index) => (
              <div key={index} className="text-white/70 text-sm md:text-base">{location}</div>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-3xl md:text-4xl font-display font-bold relative inline-block">
              <span className="relative inline-block">
                20 cities
                <svg className="absolute -bottom-1 w-full" viewBox="0 0 180 20" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="90" cy="10" rx="85" ry="9" stroke="white" strokeWidth="1.5" fill="none"/>
                </svg>
              </span>
              <span className="block">and growing.</span>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {locations.slice(6, 14).map((location, index) => (
                <div key={index} className="text-white/70 text-sm md:text-base">{location}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
