import { Button } from "@/components/ui/button";
import heroImage from "@/assets/Education.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[700px] sm:min-h-[750px] lg:min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="TriConnect - Connecting Education"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </div>
      
      {/* Content Overlay */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 text-white">
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">
          <div className={`space-y-4 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 animate-pulse">
                TriConnect
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-relaxed opacity-95 max-w-4xl mx-auto font-light">
              Your all-in-one hub for learning, support, and connection.
            </p>
            
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl opacity-85 max-w-3xl mx-auto font-medium">
              Whether you're here to learn, guide, or teach - we've built this space for you
            </p>
          </div>
          
          <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 pt-8 sm:pt-12 lg:pt-16 justify-center transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Link to="/signup" className="inline-block group">
              <Button 
                size="lg" 
                className="text-lg sm:text-xl lg:text-2xl px-8 sm:px-10 lg:px-12 py-5 sm:py-6 lg:py-7 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white min-h-[56px] sm:min-h-[64px] w-full sm:w-auto transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl rounded-lg relative overflow-hidden group"
                asChild
              >
                <span className="relative z-10 font-semibold">Get Started</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Button>
            </Link>
            <Link to="/dashboard-select" className="inline-block group">
              <Button 
                size="lg" 
                className="text-lg sm:text-xl lg:text-2xl px-8 sm:px-10 lg:px-12 py-5 sm:py-6 lg:py-7 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white min-h-[56px] sm:min-h-[64px] w-full sm:w-auto transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl rounded-lg relative overflow-hidden"
                asChild
              >
                <span className="relative z-10 font-semibold">Explore Features</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-cyan-400 rounded-full opacity-50 animate-bounce delay-100"></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-green-400 rounded-full opacity-70 animate-bounce delay-200"></div>
      <div className="absolute bottom-40 right-10 w-5 h-5 bg-purple-400 rounded-full opacity-60 animate-bounce delay-300"></div>
    </section>
  );
};

export default HeroSection;