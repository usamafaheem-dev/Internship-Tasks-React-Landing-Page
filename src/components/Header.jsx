import { useState, useEffect } from 'react';
import { PhoneCall, Search, X, ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';
import { IoIosMenu } from "react-icons/io";
import logo from '../assets/images/logo.png';

const navLinks = [
  { label: 'Home', active: true, dropdown: true },
  { label: 'Services', dropdown: true },
  { label: 'Project', dropdown: true },
  { label: 'Page', dropdown: true },
  { label: 'Blog', dropdown: true },
  { label: 'Contact Us', dropdown: false },
];

const Header = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [hoveredNav, setHoveredNav] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCtaHovered, setIsCtaHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const BRAND_GREEN = '#00A650';

  // Body scroll lock when search or menu is open
  useEffect(() => {
    if (isSearchOpen || isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    return () => { document.body.style.overflow = 'visible'; };
  }, [isSearchOpen, isMenuOpen]);

  return (
    <>
      {/* ==================== SEARCH OVERLAY ==================== */}
      <div
        className={`fixed inset-x-0 top-0 bg-white shadow-2xl transition-all duration-300 z-[70] flex items-center ${
          isSearchOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'
        }`}
        style={{ height: 'clamp(80px, 12vh, 100px)' }}
      >
        <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          <input
            autoFocus={isSearchOpen}
            type="text"
            placeholder="Search ..."
            className="flex-1 bg-transparent border-none py-5 text-3xl font-['Inter'] text-[#1A1A1A] focus:outline-none placeholder:text-gray-400"
          />
          <button 
            onClick={() => setIsSearchOpen(false)} 
            className="ml-6 p-3 text-[#1A1A1A] hover:text-[#00A650] transition-colors"
          >
            <X size={38} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* ==================== MAIN HEADER ==================== */}
      <header className="absolute top-5 left-0 right-0 z-50 bg-transparent transition-all duration-300">
        <div className="w-full px-[14px] min-[768px]:px-8 xl:px-12 2xl:px-14">
          <div
            className={`relative flex items-center justify-between transition-all duration-300 ${
              isSearchOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            style={{ height: 'clamp(70px, 10vh, 90px)' }}
          >
            {/* LEFT: mobile logo (<768) */}
            <a href="#" className="flex min-[768px]:hidden items-center z-10">
              <img src={logo} alt="Cetro" style={{ height: '46px', width: 'auto' }} />
            </a>

            {/* LEFT: menu (768-1199) */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="hidden min-[768px]:flex min-[1200px]:hidden text-white p-1 hover:text-[#00A650] transition-colors z-10"
            >
              <IoIosMenu size={35} />
            </button>

            {/* LEFT: logo + nav (1200+) */}
            <div className="hidden min-[1200px]:flex items-center gap-6 xl:gap-16 z-10">
              <a href="#" className="flex items-center">
                <img src={logo} alt="Cetro" style={{ height: 'clamp(35px, 5vw, 48px)', width: 'auto' }} />
              </a>

              <nav className="flex items-center gap-1 h-full">
                {navLinks.map(({ label, dropdown }) => {
                  const isActive = activeLink === label;
                  const isHovered = hoveredNav === label;
                  return (
                    <div
                      key={label}
                      className="relative group flex items-center h-full px-2 xl:px-3 cursor-pointer"
                      onMouseEnter={() => setHoveredNav(label)}
                      onMouseLeave={() => setHoveredNav(null)}
                      onClick={() => setActiveLink(label)}
                    >
                      <a href="#" className="flex items-center gap-1 text-[15px] xl:text-[16px] font-semibold font-['Roboto_Flex'] transition-colors duration-200"
                        style={{ color: (isActive || isHovered) ? BRAND_GREEN : '#ffffff' }}>
                        <span className="relative">
                          {label}
                          <div className="absolute -bottom-0.5 left-0 right-0 h-[2.5px] transition-transform duration-400"
                            style={{ backgroundColor: BRAND_GREEN, transform: (isActive || isHovered) ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left' }} />
                        </span>
                        {dropdown && <ChevronDown strokeWidth={3} className="w-3.5 h-3.5" />}
                      </a>
                    </div>
                  );
                })}
              </nav>
            </div>

            {/* CENTER: logo (768-1199) */}
            <a href="#" className="hidden min-[768px]:flex min-[1200px]:hidden absolute left-1/2 -translate-x-1/2 items-center z-10">
              <img src={logo} alt="Cetro" style={{ height: '52px', width: 'auto' }} />
            </a>

            {/* RIGHT: actions by breakpoint */}
            <div className="flex items-center justify-end gap-3 xl:gap-5 z-10">
              {/* Menu on right (<768) */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="min-[768px]:hidden text-white p-1 hover:text-[#00A650] transition-colors"
              >
                <IoIosMenu size={35} />
              </button>

              {/* Actions (768+) */}
              <div className="hidden min-[768px]:flex items-center gap-3 xl:gap-5">
                {/* Phone appears from 1440+ */}
                <div className="hidden min-[1440px]:flex items-center gap-2">
                  <PhoneCall className="w-7 h-7 text-white" strokeWidth={1.5} />
                  <div className="leading-tight">
                    <p className="text-[13px] font-medium text-white font-['Roboto_Condensed']">Need Help?</p>
                    <p className="text-[22px] font-bold text-white font-['Boldonse'] tracking-tighter">(+480) 123 678</p>
                  </div>
                </div>

                {/* Search appears from 880+ */}
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="hidden min-[880px]:flex w-11 h-11 xl:w-[55px] xl:h-[55px] rounded-full bg-black/30 backdrop-blur-md border border-white/10 items-center justify-center transition-all duration-300 hover:text-[#00A650] text-white"
                >
                  <Search className="w-5 h-5" />
                </button>

                {/* CTA button (768-879) */}
                <button
                  onMouseEnter={() => setIsCtaHovered(true)}
                  onMouseLeave={() => setIsCtaHovered(false)}
                  className="flex min-[880px]:hidden items-center gap-2 rounded-full transition-all duration-400 shadow-[0_4px_15px_rgba(0,166,80,0.2)]"
                  style={{
                    background: isCtaHovered ? '#fff' : BRAND_GREEN,
                    padding: '8px 14px',
                    paddingRight: '8px',
                    fontSize: '13px',
                    fontWeight: '700',
                    color: isCtaHovered ? BRAND_GREEN : '#fff',
                  }}
                >
                  <span>Get A Quote!</span>
                  <span className="w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-400"
                    style={{ background: isCtaHovered ? BRAND_GREEN : '#fff' }}>
                    <ArrowRight className="w-4 h-4" style={{ color: isCtaHovered ? '#fff' : BRAND_GREEN }} />
                  </span>
                </button>

                {/* CTA button (880+) */}
                <button
                  onMouseEnter={() => setIsCtaHovered(true)}
                  onMouseLeave={() => setIsCtaHovered(false)}
                  className="hidden min-[880px]:flex items-center gap-2 rounded-full transition-all duration-400 shadow-[0_4px_15px_rgba(0,166,80,0.2)]"
                  style={{
                    background: isCtaHovered ? '#fff' : BRAND_GREEN,
                    padding: 'clamp(9px, 1.4vw, 12px) clamp(10px, 2vw, 22px)',
                    paddingRight: '8px',
                    fontSize: 'clamp(11px, 1.2vw, 15px)',
                    fontWeight: '700',
                    color: isCtaHovered ? BRAND_GREEN : '#fff',
                  }}
                >
                  <span>Get A Quote!</span>
                  <span className="w-8 h-8 xl:w-9 xl:h-9 rounded-full flex items-center justify-center transition-colors duration-400"
                    style={{ background: isCtaHovered ? BRAND_GREEN : '#fff' }}>
                    <ArrowRight className="w-4 h-4" style={{ color: isCtaHovered ? '#fff' : BRAND_GREEN }} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ==================== MOBILE SIDE DRAWER (Left Side) ==================== */}
      <div 
        className={`fixed inset-y-0 left-0 z-[100] w-[330px] bg-white transition-transform duration-500 ease-in-out shadow-2xl ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="px-9 pt-6 pb-4">
            <div className="flex items-center justify-between">
              <span className="text-[20px] leading-none font-normal font-['Roboto_Flex'] text-[#111111]">MAIN MENU</span>
              <button 
                onClick={() => setIsMenuOpen(false)} 
                className="text-[#111111] hover:text-[#00A650] transition-colors"
              >
                <X size={24} strokeWidth={1.7} />
              </button>
            </div>
            <div className="mt-4 h-[2px] w-[122px] bg-[#00A650]" />
          </div>

          <nav className="flex-1 overflow-y-auto px-9 py-0.5">
            {navLinks.map(({ label, dropdown }) => (
              <div key={label} className="border-b border-gray-200 last:border-none">
                <a 
                  href="#" 
                  className="flex items-center justify-between py-[14px] text-[18px] leading-none font-normal font-['Roboto_Flex'] text-[#111111] hover:text-[#00A650] transition-colors"
                  onClick={() => setIsMenuOpen(false)} // optional: menu close on link click
                >
                  {label}
                  {dropdown && <ChevronRight size={22} strokeWidth={1.9} className="text-[#111111]" />}
                </a>
              </div>
            ))}
          </nav>

          {/* Language Flags */}
          <div className="mt-auto px-9 py-5 flex items-center gap-4 border-t border-gray-200">
            <img src="https://flagcdn.com/w40/gb.png" className="w-7 h-auto" alt="EN" />
            <img src="https://flagcdn.com/w40/de.png" className="w-7 h-auto" alt="DE" />
            <img src="https://flagcdn.com/w40/it.png" className="w-7 h-auto" alt="IT" />
            <img src="https://flagcdn.com/w40/in.png" className="w-7 h-auto" alt="IN" />
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-[90] bg-black/28"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;