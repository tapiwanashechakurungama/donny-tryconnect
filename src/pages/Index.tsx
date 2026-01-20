import Header from "@/components/Header";
import CoreFeaturesSection from "@/components/CoreFeaturesSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import heroImage from "@/assets/Education.jpg";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
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
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  Welcome to{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                    TriConnect
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-relaxed opacity-95 max-w-4xl mx-auto font-light">
                  Your all-in-one hub for learning, support, and connection.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 pt-8 sm:pt-12 lg:pt-16 justify-center">
                <Link to="/signup" className="inline-block">
                  <button className="text-lg sm:text-xl lg:text-2xl px-8 sm:px-10 lg:px-12 py-5 sm:py-6 lg:py-7 bg-white text-blue-600 min-h-[56px] sm:min-h-[64px] w-full sm:w-auto transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl rounded-lg font-semibold">
                    Get Started
                  </button>
                </Link>
                <Link to="/dashboard-select" className="inline-block">
                  <button className="text-lg sm:text-xl lg:text-2xl px-8 sm:px-10 lg:px-12 py-5 sm:py-6 lg:py-7 bg-green-600 hover:bg-green-700 text-white min-h-[56px] sm:min-h-[64px] w-full sm:w-auto transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl rounded-lg font-semibold">
                    Explore Features
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <CoreFeaturesSection />
        <AboutSection />
        <HowItWorksSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
