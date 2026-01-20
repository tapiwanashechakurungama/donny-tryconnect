import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Menu, X, User, LogIn, ChevronDown } from "lucide-react";
import logoImage from "@/assets/triconnect-logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 transition-all duration-300 ease-in-out ${
      isScrolled ? 'shadow-lg bg-background/98' : ''
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3 group">
          <img 
            src={logoImage} 
            alt="TriConnect Logo" 
            className="h-10 w-10 sm:h-12 sm:w-12 transition-transform duration-300 group-hover:scale-110"
          />
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-foreground bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              TriConnect
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
              The Bridge Between Home and Classroom
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link 
            to="/dashboard-select" 
            className="text-foreground hover:text-primary transition-all duration-200 relative group"
          >
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <a 
            href="#about" 
            className="text-foreground hover:text-primary transition-all duration-200 relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#contact" 
            className="text-foreground hover:text-primary transition-all duration-200 relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <Link to="/signup">
            <Button 
              size="sm" 
              className="gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <LogIn className="h-4 w-4" />
              Sign Up
            </Button>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="md:hidden hover:bg-accent transition-colors duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link 
              to="/dashboard-select" 
              className="block text-foreground hover:text-primary transition-colors py-3 text-base font-medium hover:bg-accent/50 rounded-md px-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <a 
              href="#about" 
              className="block text-foreground hover:text-primary transition-colors py-3 text-base font-medium hover:bg-accent/50 rounded-md px-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="block text-foreground hover:text-primary transition-colors py-3 text-base font-medium hover:bg-accent/50 rounded-md px-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
              <Button 
                size="sm" 
                className="gap-2 w-full justify-start text-base py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0"
              >
                <LogIn className="h-4 w-4" />
                Sign Up
              </Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;