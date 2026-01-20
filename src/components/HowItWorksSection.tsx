import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HowItWorksSection = () => {
  const navigate = useNavigate();
  
  const steps = [
    { title: "Sign Up" },
    { title: "Know About us" },
    { title: "Connect and learn" },
    { title: "Track Progress" }
  ];

  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Why TriConnect */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8">
              Why TriConnect?
            </h2>
          </div>

          {/* How it works */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 sm:mb-12">
              How it works
            </h2>
            
            {/* Process Flow */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-16">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                  {/* Step Circle */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg lg:text-xl mb-2 sm:mb-3">
                      {index + 1}
                    </div>
                    <span className="text-xs sm:text-sm lg:text-base text-foreground text-center max-w-16 sm:max-w-20 lg:max-w-24 leading-tight">
                      {step.title}
                    </span>
                  </div>
                  
                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <ArrowRight className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-secondary mx-1 sm:mx-2 lg:mx-4 mt-[-16px] sm:mt-[-20px] lg:mt-[-24px] rotate-90 sm:rotate-0 lg:rotate-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 sm:mt-12">
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 text-sm sm:text-base min-w-[140px] sm:min-w-[160px]"
            onClick={() => navigate('/signup')}
          >
            Book Now
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-3 text-sm sm:text-base min-w-[140px] sm:min-w-[160px]"
            onClick={() => navigate('/dashboard-select')}
          >
            Book Your Platform
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-3 text-sm sm:text-base min-w-[140px] sm:min-w-[160px]"
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;