import { Play } from 'lucide-react';
import videoBg from "../assets/images/videoSecionbg.jpg";
import useScrollAnimation from "../hooks/useScrollAnimation";

const CinematicHero = () => {
  const sectionRef = useScrollAnimation(0.1);

  return (
    <section ref={sectionRef} className="w-full min-h-screen bg-[#eeede8] p-4 md:p-10">
      
      {/* Rounded Container */}
      <div 
        className="relative w-full h-[90vh] md:h-[100vh] overflow-hidden rounded-[40px] bg-cover bg-center shadow-xl"
        style={{ backgroundImage: `url(${videoBg})` }}
      >
        {/* Dark Tint Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Content Wrapper */}
        <div className="relative z-20 h-full w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
          
          {/* Left Side: Video Button - slides in from left */}
          <div className="anim-left flex-1 flex justify-center md:justify-end md:pr-16" style={{ animationDelay: '0.2s' }}>
            <div className="relative flex items-center justify-center">
              <div className="absolute w-28 h-28 md:w-36 md:h-36 border border-white/20 rounded-full animate-ping"></div>
              <div className="absolute w-24 h-24 md:w-32 md:h-32 border border-dashed border-white/40 rounded-full animate-[spin_15s_linear_infinite]"></div>
              
              <button className="relative w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center group hover:bg-[#00a650] hover:border-[#00a650] transition-all duration-300">
                <Play className="text-white fill-white w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Side: Heading - slides in from right */}
          <div className="anim-right flex-1 text-center md:text-left mt-0 md:mt-10 md:mt-0" style={{ animationDelay: '0.4s' }}>
            <h1 className="text-white font-bold text-[36px] md:text-[52px] lg:text-[62px] leading-[1.05] tracking-tight">
              How To Make <span className="text-[#00a650]">Steps To</span>
              <span className="text-[#00a650]"> Get A Best</span> Cleaning
              Service
            </h1>
            <p className="mt-4 text-gray-300 uppercase tracking-[0.2em] text-[10px] md:text-[13px] font-medium opacity-90">
              5 star standard application
            </p>
          </div>
        </div>

        {/* Bottom CETRO Text - slides up slowly */}
        <div className="anim-up absolute bottom-10 left-1/2 -translate-x-1/2 translate-y-1/2 w-full text-center pointer-events-none select-none" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-[#00a650] font-black text-[90px] md:text-[220px] lg:text-[280px] leading-none opacity-90 tracking-tighter">
            CETRO
          </h2>
        </div>
      </div>
    </section>
  );
};

export default CinematicHero;
