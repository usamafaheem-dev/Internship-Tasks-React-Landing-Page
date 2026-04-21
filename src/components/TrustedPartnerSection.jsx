import { useEffect, useRef, useState } from "react";
import { ArrowRight, PhoneCall, Sprout } from "lucide-react";
import trustedPartnerHumanImage from "../assets/images/trustedPartnerHumanIMage.png";
import whywechoseimage from "../assets/images/whywechoseimage.jpg";
import useScrollAnimation from "../hooks/useScrollAnimation";

const statistics = [
  {
    value: 299,
    suffix: "k",
    label: "Successful Projects",
    description: "Over 250 successful projects delivered with quality and care",
  },
  {
    value: 364,
    suffix: "+",
    label: "Skilled Tradespeople",
    description: "Our team of 30 experts ensures top-quality results",
  },
  {
    value: 199,
    suffix: "+",
    label: "Happy Clients",
    description: "All of our clients are satisfied with our work and service",
  },
];

// Counter component - counts from 0 to target when visible
const Counter = ({ target, suffix, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }
    let start = 0;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const interval = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span>{count}{suffix}</span>
  );
};

const TrustedPartnerSection = () => {
  const sectionRef = useScrollAnimation(0.1);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsVisible(true);
          } else {
            setStatsVisible(false); // reset so it re-counts on next visit
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen md:h-[130vh] relative overflow-hidden bg-[#0a3d33] py-16 md:py-24 px-6 md:px-12"
    >
      {/* Background Texture */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-5 pointer-events-none"
        style={{ backgroundImage: `url(${whywechoseimage})` }}
      />

      {/* Large Background Text */}
      <div className="anim-up absolute -bottom- md:-bottom-14 left-0 w-full flex justify-center z-0 pointer-events-none select-none overflow-hidden" style={{ animationDelay: '0.1s' }}>
        <h2 className="text-[5rem] md:text-[20rem] lg:text-[20rem] font-black text-[#00a650] opacity-20 leading-none tracking-tighter">
          CETRO
        </h2>
      </div>

      {/* Staff Image */}
      <div className="anim-up absolute hidden md:block bottom-0 z-1000 left-1/2 -translate-x-1/2 w-full max-w-[500px] md:max-w-[750px] lg:max-w-[450px] z-10 pointer-events-none flex justify-center" style={{ animationDelay: '0.5s' }}>
        <img
          src={trustedPartnerHumanImage}
          alt="Professional Cleaners"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 container mx-auto h-full flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12">

        {/* Left Side Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
          <div className="anim-up inline-flex items-center gap-2 text-white font-bold text-xs md:text-sm tracking-[0.2em] uppercase" style={{ animationDelay: '0.1s' }}>
            <Sprout className="w-5 h-5 text-[#00a650]" />
            Our Trusted Partner
          </div>

          <h1 className="anim-up text-white text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1]" style={{ animationDelay: '0.3s' }}>
            Smart Cleaning <span className="text-[#00a650]">Solution</span>
            <span className="text-[#00a650]">For You 24/7</span> Hours
          </h1>

          <p className="anim-up text-gray-300 text-base md:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed" style={{ animationDelay: '0.5s' }}>
            Behind our commitment to providing a Best Cleaning Service, we have strengths and differences that create trust and love from Customers.
          </p>

          <div className="anim-up flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 pt-4" style={{ animationDelay: '0.7s' }}>
            {/* Learn More Button */}
            <button className="flex items-center gap-4 bg-[#00a650] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#008a42] transition-all hover:shadow-[0_10px_20px_rgba(0,166,80,0.3)]">
              Learn More
              <span className="bg-white rounded-full p-2">
                <ArrowRight className="text-[#00a650] w-4 h-4" />
              </span>
            </button>

            {/* Contact Info - slides from left */}
            <div className="anim-left flex items-center gap-4" style={{ animationDelay: '0.9s' }}>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
                <PhoneCall className="text-white w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Need Help?</p>
                <p className="text-white text-lg md:text-xl font-bold tracking-tight">(+480) 123 678 900</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Statistics */}
        <div
          ref={statsRef}
          className="w-full lg:w-1/3 flex flex-col justify-center items-center lg:items-end space-y-12 lg:text-right"
        >
          {statistics.map((stat, i) => (
            <div
              key={i}
              className="anim-right max-w-[280px] flex flex-col justify-center items-center"
              style={{ animationDelay: `${0.2 + i * 0.25}s` }}
            >
              <h3 className="text-6xl md:text-7xl font-black text-white leading-none mb-2">
                <Counter target={stat.value} suffix={stat.suffix} isVisible={statsVisible} />
              </h3>
              <p className="text-[#00a650] font-extrabold text-sm tracking-widest uppercase mb-3">{stat.label}</p>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed opacity-80 text-center">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnerSection;
