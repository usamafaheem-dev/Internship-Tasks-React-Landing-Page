import React, { useState, useEffect } from "react";
import { MapPin, ArrowUpRight, ArrowUp } from "lucide-react";
import footerbg from "../assets/images/footerbg.jpg"; 
import logo from "../assets/images/logo.png"; 

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll button visibility logic
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full min-h-[120vh] text-white overflow-hidden bg-[#0a1a16] flex flex-col justify-between">
      
      {/* Background with Lighter Overlay (More Visible Image) */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${footerbg})` }}
      />
      <div className="absolute inset-0 bg-black/80" /> {/* Reduced opacity to 60% */}

      <div className="relative z-10 container mx-auto px-6 md:px-12 w-full flex flex-col justify-between flex-grow">
        
        {/* --- SECTION 1: Newsletter --- */}
        <div className="pt-20 pb-12 flex flex-col items-center text-center space-y-8 border-b border-white/10">
          <h2 className="text-[32px] md:text-[46px] font-black leading-tight tracking-tight">
            Join Our <span className="text-[#00a650]">Newsletter Stay</span> <br className="hidden md:block" />
            Up To <span className="text-[#00a650]">Date</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <div className="w-full sm:w-[450px]">
              <input 
                type="email" 
                placeholder="Email address..." 
                className="w-full bg-white px-8 py-4 text-gray-800 rounded-full shadow-lg outline-none font-['Roboto_Flex']"
              />
            </div>
            <button className="flex items-center justify-center gap-3 bg-[#00a650] text-white px-10 py-4 rounded-full font-bold hover:bg-[#008a42] transition-all shadow-lg active:scale-95 shrink-0">
              Subscribe Now
              <span className="bg-white rounded-full p-1 flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 text-[#00a650]" strokeWidth={3} />
              </span>
            </button>
          </div>
        </div>

        {/* --- SECTION 2: Main Footer (Responsive Grid) --- */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 border-b border-white/10">
          
          {/* Logo Col */}
          <div className="space-y-6">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            <p className="text-[17px] font-['Roboto_Flex'] text-gray-200 leading-relaxed max-w-[300px]">
              We work with a passion of taking challenges and creating new ones in advertising sector.
            </p>
          </div>

          {/* Links Col */}
          <div className="space-y-6 lg:pl-10">
            <div className="flex flex-col gap-4 text-[17px] font-['Roboto_Flex'] font-bold">
              {["About Us", "Services", "Pricing", "Blogs", "Contact Us"].map((link) => (
                <a key={link} href="#" className="hover:text-[#00a650] transition-colors w-fit">{link}</a>
              ))}
            </div>
          </div>

          {/* Time Col */}
          <div className="space-y-6">
            <h4 className="text-[18px] font-black uppercase tracking-widest text-[#00a650]">Working Time</h4>
            <div className="space-y-3 text-[17px] font-['Roboto_Flex'] text-gray-200">
              <p>Mon - Fri: 9.00am - 5.00pm</p>
              <p>Saturday: 10.00am - 6.00pm</p>
              <p className="opacity-60">Sunday Closed</p>
            </div>
          </div>

          {/* Contact Col */}
          <div className="space-y-6">
            <div className="border-b-2 border-[#00a650] inline-block pb-1">
              <a href="tel:+0844560789" className="text-[#00a650] text-[22px] font-bold">+(084) 456-0789</a>
            </div>
            <h3 className="text-[24px] md:text-[28px] font-['Roboto_Flex'] font-bold">support@example.com</h3>
            <div className="flex items-start gap-4 text-[15px] font-['Roboto_Flex'] text-gray-300">
              <div className="bg-[#00a650] p-2 rounded-lg shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <p>5609 E Sprague Ave, Spokane Valley, WA 99212, USA</p>
            </div>
          </div>
        </div>

        {/* --- SECTION 3: Copyright Bar --- */}
        <div className="py-10 flex items-center justify-center">
          <p className="text-[16px] md:text-[18px] font-['Roboto_Flex'] text-gray-300">
            © Copyright 2025 <span className="text-white font-bold">Cetro</span>. All rights reserved.
          </p>
        </div>
      </div>

      {/* FIXED Scroll-to-top Button (Visible har waqt scroll ke baad) */}
      {isVisible && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[99] bg-[#00a650] p-3 rounded-2xl hover:bg-[#008a42] transition-all shadow-2xl animate-bounce md:animate-none"
        >
          <ArrowUp className="w-6 h-6 text-white" strokeWidth={3} />
        </button>
      )}
    </footer>
  );
};

export default Footer;