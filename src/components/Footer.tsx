import { Link } from "react-router-dom";
import logoImage from "@/assets/triconnect-logo.png";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: "About Us", href: "/about" },
    { label: "Features", href: "/dashboard-select" },
    { label: "Support", href: "/support" },
    { label: "Contact", href: "/contact" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <>
      <footer className="bg-gray-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        {/* Main Footer Section */}
        <div className="bg-gradient-to-r from-blue-900 via-gray-900 to-gray-900 relative">
          <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="space-y-6 group">
                <div className="flex items-center gap-3">
                  <img 
                    src={logoImage} 
                    alt="TriConnect Logo" 
                    className="h-10 w-10 lg:h-12 lg:w-12 transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    TriConnect
                  </span>
                </div>
                <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                  The Bridge Between Home and Classroom. Empowering education through seamless connection and collaboration.
                </p>
                <div className="flex space-x-4">
                  <button
                    onClick={() => window.open('https://www.facebook.com', '_blank', 'noopener,noreferrer')}
                    className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl cursor-pointer"
                    aria-label="Facebook"
                    style={{ pointerEvents: 'auto' }}
                  >
                    <Facebook className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={() => window.open('https://www.instagram.com/ellarton5080', '_blank', 'noopener,noreferrer')}
                    className="w-10 h-10 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl cursor-pointer"
                    aria-label="Instagram"
                    style={{ pointerEvents: 'auto' }}
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={() => window.open('https://www.linkedin.com/in/ellarton-kagona-544595318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank', 'noopener,noreferrer')}
                    className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl cursor-pointer"
                    aria-label="LinkedIn"
                    style={{ pointerEvents: 'auto' }}
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white relative">
                  Quick Links
                  <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400"></span>
                </h3>
                <ul className="space-y-3">
                  {footerLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-green-400 transition-all duration-200 text-sm lg:text-base flex items-center group"
                      >
                        <span className="w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-2 mr-0 group-hover:mr-2"></span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white relative">
                  Services
                  <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400"></span>
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/dashboard/student" className="text-gray-300 hover:text-blue-400 transition-all duration-200 text-sm lg:text-base flex items-center group">
                      <span className="w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-2 mr-0 group-hover:mr-2"></span>
                      Student Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/teacher" className="text-gray-300 hover:text-blue-400 transition-all duration-200 text-sm lg:text-base flex items-center group">
                      <span className="w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-2 mr-0 group-hover:mr-2"></span>
                      Teacher Portal
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/parent" className="text-gray-300 hover:text-blue-400 transition-all duration-200 text-sm lg:text-base flex items-center group">
                      <span className="w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-2 mr-0 group-hover:mr-2"></span>
                      Parent Access
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup" className="text-gray-300 hover:text-blue-400 transition-all duration-200 text-sm lg:text-base flex items-center group">
                      <span className="w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-2 mr-0 group-hover:mr-2"></span>
                      Get Started
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Social Media Links */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white relative">
                  Connect
                  <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400"></span>
                </h3>
                <p className="text-gray-300 text-sm lg:text-base">
                  Follow us on social media for updates and educational resources.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white relative">
                  Contact Us
                  <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400"></span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300 text-sm lg:text-base group hover:text-green-400 transition-colors duration-200">
                    <Mail className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>info@triconnect.edu</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 text-sm lg:text-base group hover:text-green-400 transition-colors duration-200">
                    <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>+263 785854173</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 text-sm lg:text-base group hover:text-green-400 transition-colors duration-200">
                    <MapPin className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>123 Education St, Learning City, LC 12345</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 bg-gray-900 relative">
          <div className="container mx-auto px-4 py-6 sm:py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm lg:text-base">
                  2025 TriConnect. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs lg:text-sm mt-1">
                  Built for learners. Powered by purpose.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-xs lg:text-sm">
                <Link to="/privacy" className="text-gray-400 hover:text-blue-400 transition-all duration-200 hover:underline">Privacy Policy</Link>
                <Link to="/terms" className="text-gray-400 hover:text-blue-400 transition-all duration-200 hover:underline">Terms of Service</Link>
                <Link to="/cookies" className="text-gray-400 hover:text-blue-400 transition-all duration-200 hover:underline">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default Footer;
