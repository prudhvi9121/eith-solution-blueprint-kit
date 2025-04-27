
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div>
            <h3 className="text-lg font-display font-bold mb-6">Eith.</h3>
            <nav className="space-y-4">
              <a href="#" className="block text-sm text-white/70 hover:text-white">Home</a>
              <a href="#services" className="block text-sm text-white/70 hover:text-white">Services</a>
              <a href="#portfolio" className="block text-sm text-white/70 hover:text-white">Portfolio</a>
              <a href="#team" className="block text-sm text-white/70 hover:text-white">Team</a>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-bold mb-6">Our Offerings</h3>
            <nav className="space-y-4">
              <a href="#" className="block text-sm text-white/70 hover:text-white">Web Development</a>
              <a href="#" className="block text-sm text-white/70 hover:text-white">Mobile Apps</a>
              <a href="#" className="block text-sm text-white/70 hover:text-white">Custom Software</a>
              <a href="#" className="block text-sm text-white/70 hover:text-white">UX/UI Design</a>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-bold mb-6">Connect With Us</h3>
            <nav className="space-y-4">
              <a href="#contact" className="block text-sm text-white/70 hover:text-white">Contact</a>
              <a href="#" className="block text-sm text-white/70 hover:text-white">Careers</a>
              <a href="#" className="block text-sm text-white/70 hover:text-white">Support</a>
              <a href="#" className="block text-sm text-white/70 hover:text-white">Privacy Policy</a>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-bold mb-6">Get all the latest insights.</h3>
            <form className="space-y-4">
              <div className="flex flex-col space-y-2">
                <Input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Button type="submit" className="w-full">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-white/50">
                By subscribing, you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/50 mb-4 md:mb-0">
            © {new Date().getFullYear()} Eith. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" aria-label="Twitter" className="text-white/70 hover:text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 4.01001C21 4.50001 20.02 4.87001 19 5.09001C17.879 3.87501 16.119 3.80001 14.95 4.91001C13.78 6.02001 13.34 7.77001 13.89 9.32001C10.21 9.16001 6.93 7.55001 4.5 4.67001C4 5.57001 3.83 6.62001 4.05 7.62001C4.26 8.62001 4.85 9.49001 5.66 10.0087C5.01 9.99001 4.37 9.81001 3.8 9.48001V9.54001C3.8 11.6487 5.22 13.4487 7.2 13.9C6.6 14.07 5.97 14.0987 5.36 14.0C5.63 14.893 6.17 15.674 6.91 16.236C7.65 16.798 8.55 17.114 9.48 17.1387C7.67754 18.7257 5.3968 19.5597 3 19.5887C2.67 19.5887 2.34 19.5687 2 19.5287C4.44 21.1628 7.28 22.0207 10.17 22.0187" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-white/70 hover:text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 2H8C4.68629 2 2 4.68629 2 8V16C2 19.3137 4.68629 22 8 22H16C19.3137 22 22 19.3137 22 16V8C22 4.68629 19.3137 2 16 2Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M17.5 6.5L17.51 6.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-white/70 hover:text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8ZM6 9H2V21H6V9ZM4 6C4.53043 6 5.03914 5.78929 5.41421 5.41421C5.78929 5.03914 6 4.53043 6 4C6 3.46957 5.78929 2.96086 5.41421 2.58579C5.03914 2.21071 4.53043 2 4 2C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4C2 4.53043 2.21071 5.03914 2.58579 5.41421C2.96086 5.78929 3.46957 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
