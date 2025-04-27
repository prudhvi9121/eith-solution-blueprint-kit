
const Approach = () => {
  return (
    <section id="approach" className="section bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold max-w-4xl mx-auto text-center leading-tight mb-16 md:mb-24">
          A company is product of triumph, tact, and heart. Change to idea, vision, and passion ensure a company's success.
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <h3 className="section-heading">
            We help shape your ideas and turn them into real 
            <span className="underline decoration-2 underline-offset-4">businesses</span>.
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="bg-white/5 p-8 rounded-lg border border-white/10">
              <div className="mb-4">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="19" stroke="white" strokeWidth="2"/>
                  <path d="M12 20H28M20 12V28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h4 className="text-xl font-display font-bold mb-4">Build like a co-founder</h4>
              <p className="text-white/80">
                We don't just develop solutions; we partner with you to build your vision. Our team works closely with yours, providing technical expertise while understanding your business goals and industry challenges.
              </p>
            </div>
            
            <div className="bg-white/5 p-8 rounded-lg border border-white/10">
              <div className="mb-4">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="19" stroke="white" strokeWidth="2"/>
                  <path d="M15 20L18 23L25 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="text-xl font-display font-bold mb-4">Investing in the future</h4>
              <p className="text-white/80">
                We build scalable solutions designed to grow with your business. Our forward-thinking approach ensures your digital infrastructure can adapt to changing demands and new opportunities in your market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
