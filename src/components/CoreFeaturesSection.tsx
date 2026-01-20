import { FileText, Users, Bell, Award, Calendar, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

const CoreFeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('core-features');
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.75);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: FileText,
      title: "Smart Assignments",
      description: "Create, submit, and grade assignments with intelligent tracking and feedback systems",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Real-time Collaboration", 
      description: "Connect students, teachers, and parents with seamless communication tools",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Stay informed with personalized alerts and important deadline reminders",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "Performance Analytics",
      description: "Track progress with detailed insights and comprehensive academic reports",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Calendar,
      title: "Schedule Management",
      description: "Organize classes, meetings, and events with intelligent calendar integration",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: MessageSquare,
      title: "Secure Messaging",
      description: "Communicate safely with built-in messaging and parent-teacher portals",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section id="core-features" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Powerful Features for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 ml-2">
              Modern Education
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to connect students, teachers, and parents in one unified platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group relative p-8 lg:p-10 rounded-2xl border border-border bg-card hover:shadow-2xl transition-all duration-500 h-full flex flex-col hover:scale-105 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-muted/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className={`w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-6 lg:mb-8 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}>
                  <feature.icon className="h-10 w-10 lg:h-12 lg:w-12 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4 lg:mb-6 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeaturesSection;