import { motion } from "framer-motion";

const Approach = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const cards = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="19" className="stroke-red-500" strokeWidth="2"/>
          <path d="M12 20H28M20 12V28" className="stroke-red-500" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Build like a co-founder",
      description: "We don't just develop solutions; we partner with you to build your vision. Our team works closely with yours, providing technical expertise while understanding your business goals and industry challenges."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="19" className="stroke-red-500" strokeWidth="2"/>
          <path d="M15 20L18 23L25 17" className="stroke-red-500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Investing in the future",
      description: "We build scalable solutions designed to grow with your business. Our forward-thinking approach ensures your digital infrastructure can adapt to changing demands and new opportunities in your market."
    }
  ];

  return (
    <section id="approach" className="relative py-24 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]" style={{ backgroundSize: '24px 24px' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Section Label */}
          <motion.div 
            className="inline-block px-4 py-1 rounded-full bg-red-500/10 text-red-500 text-sm font-medium mb-6"
            {...fadeIn}
          >
            Our Approach
          </motion.div>

          {/* Heading */}
          <motion.h3 
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-16"
            {...fadeIn}
          >
            We help shape your ideas and turn them into real{' '}
            <span className="relative inline-block">
              businesses
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-500/50 rounded-full"></span>
            </span>
          </motion.h3>
          
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 p-8 hover:border-red-500/20 transition-all duration-300">
                  {/* Card Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-900/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  
                  {/* Icon */}
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  
                  {/* Content */}
                  <h4 className="text-2xl font-display font-bold mb-4 group-hover:text-red-500 transition-colors duration-300">
                    {card.title}
                  </h4>
                  
                  <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Hover Border Gradient */}
                  <div className="absolute inset-0 border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl bg-gradient-to-r from-red-500/20 to-red-900/20 -z-10" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Approach;
