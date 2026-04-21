import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import logo from '../assets/images/logo.png';

const Facebook = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Twitter = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Instagram = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Linkedin = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Footer = () => {
  const BRAND_GREEN = '#00A650';

  return (
    <footer className="bg-[#111111] text-white pt-20 pb-10 font-['Inter']">
      <div className="w-full px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. About Section */}
          <div className="space-y-6">
            <img src={logo} alt="Cetro" className="h-12 w-auto" />
            <p className="text-gray-400 leading-relaxed text-[15px]">
              Professional cleaning services tailored to your needs. We bring sparkle and shine to your offices and homes with our expert team and eco-friendly products.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#00A650] hover:border-[#00A650] transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#00A650]"></span>
            </h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Our Projects', 'Pricing Plan', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-[#00A650] hover:translate-x-2 transition-all duration-300">
                    <ArrowRight size={14} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Our Services */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#00A650]"></span>
            </h4>
            <ul className="space-y-4">
              {['Office Cleaning', 'Residential Cleaning', 'Commercial Cleaning', 'Industrial Cleaning', 'Window Cleaning', 'Carpet Cleaning'].map((service) => (
                <li key={service}>
                  <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-[#00A650] hover:translate-x-2 transition-all duration-300">
                    <ArrowRight size={14} />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Newsletter/Contact */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              Subscribe
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#00A650]"></span>
            </h4>
            <p className="text-gray-400 mb-6 text-[15px]">Get the latest news and updates from Cetro Cleaning.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-[#1A1A1A] border border-white/5 py-4 px-6 rounded-lg focus:outline-none focus:border-[#00A650] transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 aspect-square bg-[#00A650] rounded-md flex items-center justify-center hover:bg-[#009448] transition-colors">
                <Send size={18} />
              </button>
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 text-gray-400">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#00A650]">
                  <Phone size={18} />
                </div>
                <span>(+480) 123 678 900</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#00A650]">
                  <Mail size={18} />
                </div>
                <span>info@cetro.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">© 2024 Cetro. All rights reserved.</p>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-[#00A650] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#00A650] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#00A650] transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
