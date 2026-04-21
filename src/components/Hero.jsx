import { ArrowRight, Search, UserRound, ShoppingCart } from 'lucide-react';
import heroBg from '../assets/images/heroSectionImage.jpg';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden flex items-center h-[85vh] min-[768px]:h-[120vh]"
      style={{ width: '100vw' }}
    >
      <img
        src={heroBg}
        alt="Cleaning team at work"
        className="absolute inset-0 object-cover"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div
        className="relative z-10 w-full h-full flex items-end justify-center px-6 pb-24 min-[768px]:items-center min-[768px]:justify-start min-[768px]:pb-28 min-[1201px]:pb-0 min-[768px]:pl-[124px] min-[768px]:pr-12"
        style={{ fontFamily: '"Roboto Flex", "Helvetica Neue", Helvetica, Arial, sans-serif' }}
      >
        <div className="w-full max-w-[300px] min-[450px]:max-w-[360px] min-[768px]:max-w-[760px] flex flex-col justify-center items-center min-[768px]:justify-start min-[768px]:items-start text-center min-[768px]:text-left">
          {/* Heading */}
          <h1 className="font-bold leading-[1.03] tracking-[-0.4px] mb-5 text-[clamp(34px,11.8vw,48px)] min-[768px]:leading-[1.02] min-[768px]:tracking-[-0.6px] min-[768px]:mb-[30px] min-[768px]:text-[clamp(64px,7.6vw,108px)]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            <span className="text-white">Clean </span>
            <span className="text-[#00A650]">Space</span>
            <br />
            <span className="text-[#00A650]">Starts </span>
            <span className="text-white">Here</span>
          </h1>

          {/* Subtext */}
          <p className="text-white text-[clamp(16px,4.4vw,18px)] leading-[1.34] max-w-[285px] mb-6 min-[768px]:max-w-[520px] min-[768px]:mb-[34px]">
            Professional cleaning services for offices, homes, and commercial
            spaces – done right, every time.
          </p>

          {/* CTA Button */}
          <button className="flex items-center gap-2 bg-[#00A650] hover:bg-[#009448] pl-7 pr-4 py-3.5 min-[768px]:pl-[31.2px] min-[768px]:pr-[16.8px] min-[768px]:py-[16.8px] rounded-full transition-all duration-300 group shadow-lg">
            <span
              className="text-white font-semibold text-[15px] min-[768px]:text-[16px]"
              style={{ fontFamily: '"Roboto Flex", "Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              Our Services
            </span>
            <div className="w-7 h-7 min-[768px]:w-[30px] min-[768px]:h-[30px] bg-white rounded-full flex items-center justify-center transition-colors">
              <ArrowRight className="w-4 h-4 text-[#00A650]" />
            </div>
          </button>
        </div>
      </div>

      {/* Bottom mobile/tablet bar (<=1200px) */}
      <div
        className="fixed inset-x-0 bottom-0 z-[60] h-[72px] w-full bg-white border-t border-gray-200 flex min-[1201px]:hidden"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <button className="h-full flex-1 flex items-center justify-center border-r border-gray-200 text-slate-700" aria-label="Search">
          <Search className="w-6 h-6" strokeWidth={1.8} />
        </button>
        <button className="h-full flex-1 flex items-center justify-center border-r border-gray-200 text-slate-700" aria-label="Profile">
          <UserRound className="w-6 h-6" strokeWidth={1.8} />
        </button>
        <button className="h-full flex-1 flex items-center justify-center text-slate-700 relative" aria-label="Cart">
          <ShoppingCart className="w-6 h-6" strokeWidth={1.8} />
          <span className="absolute top-[18px] right-[calc(50%-18px)] min-w-[16px] h-[16px] px-1 rounded-full bg-[#00A650] text-white text-[10px] font-semibold flex items-center justify-center leading-none">
            0
          </span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
