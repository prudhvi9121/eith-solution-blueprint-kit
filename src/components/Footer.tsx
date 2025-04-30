import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const Footer = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <footer id="contact" className="relative bg-gradient-to-b from-gray-900 to-black text-white py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]" style={{ backgroundSize: '24px 24px' }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8"
        >
          {/* Brand Column */}
          <motion.div {...fadeInUp}>
            <h3 className="text-2xl font-display font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Eith<span className="text-red-500">.</span>
            </h3>
            <nav className="space-y-4">
              {["Home", "Services", "Portfolio", "Team"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-sm text-white/70 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>
          
          {/* Offerings Column */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <h3 className="text-lg font-display font-bold mb-6 relative inline-block">
              Our Offerings
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-red-500/50 rounded-full"></span>
            </h3>
            <nav className="space-y-4">
              {["Web Development", "Mobile Apps", "Custom Software", "UX/UI Design"].map((item) => (
                <a key={item}  className="block text-sm text-white/70 hover:text-white transition-colors duration-200 hover:translate-x-1 transform">
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>
          
          {/* Connect Column */}
          <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
            <h3 className="text-lg font-display font-bold mb-6 relative inline-block">
              Connect With Us
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-red-500/50 rounded-full"></span>
            </h3>
            <nav className="space-y-4">
              {["Contact", "Careers", "Support", "Privacy Policy"].map((item) => (
                <a key={item} href="#" className="block text-sm text-white/70 hover:text-white transition-colors duration-200 hover:translate-x-1 transform">
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>
          
          {/* Newsletter Column */}
          <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
            <h3 className="text-lg font-display font-bold mb-6 relative inline-block">
              Get all the latest insights
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-red-500/50 rounded-full"></span>
            </h3>
            <form className="space-y-4">
              <div className="flex flex-col space-y-2">
                <div className="relative group">
                  <Input 
                    type="email" 
                    placeholder="Email address" 
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all duration-200"
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold transition-all duration-200"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-white/50">
                By subscribing, you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          </motion.div>
        </motion.div>
        
        {/* Footer Bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-white/50 mb-4 md:mb-0">
            © {new Date().getFullYear()} Eith. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            {[
              {
                name: 'Instagram',
                href: 'https://www.instagram.com/eithhq/',
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                )
              },
              {
                name: 'Facebook',
                href: '#',
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                )
              },
              {
                name: 'YouTube',
                href: 'https://www.youtube.com/@EithOfficial',
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                )
              },
              {
                name: 'LinkedIn',
                href: '#',
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )
              },
              {
                name: 'X',
                href: 'https://x.com/eithhq',
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                )
              }
            ].map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                aria-label={platform.name}
                className="text-white/70 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              >
                {platform.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
