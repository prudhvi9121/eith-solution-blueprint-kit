const Hero = () => {
  return <section className="bg-black text-white pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
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
          
          <div className="relative w-full aspect-square max-w-2xl mx-auto md:mx-0">
            
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;