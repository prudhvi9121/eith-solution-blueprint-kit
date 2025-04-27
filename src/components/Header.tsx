
import { useState } from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="fixed w-full z-50 bg-background/90 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-xl font-display font-bold">Eith.</span>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-sm font-medium hover:underline">Services</a>
          <a href="#approach" className="text-sm font-medium hover:underline">Our Approach</a>
          <a href="#portfolio" className="text-sm font-medium hover:underline">Portfolio</a>
          <a href="#team" className="text-sm font-medium hover:underline">Team</a>
          <a href="#news" className="text-sm font-medium hover:underline">News</a>
        </nav>
        
        <div className="hidden md:flex items-center">
          <Button variant="default" size="sm">
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
        
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#services" className="text-sm font-medium hover:underline" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#approach" className="text-sm font-medium hover:underline" onClick={() => setIsMenuOpen(false)}>Our Approach</a>
            <a href="#portfolio" className="text-sm font-medium hover:underline" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
            <a href="#team" className="text-sm font-medium hover:underline" onClick={() => setIsMenuOpen(false)}>Team</a>
            <a href="#news" className="text-sm font-medium hover:underline" onClick={() => setIsMenuOpen(false)}>News</a>
            <Button variant="default" size="sm" className="w-full">
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
