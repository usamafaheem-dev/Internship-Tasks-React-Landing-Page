import React from "react";
import { PiStarFourFill } from "react-icons/pi";

const services = ["CLEANING", "SWEEPING", "VACUUM"];

const ScrollingServices = () => {
  return (
    <div className="w-full overflow-hidden bg-[#eeede8] py-6 flex relative">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* We map multiple times to ensure continuous smooth scroll */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center">
            {services.map((service, index) => (
              <React.Fragment key={index}>
                <span className="text-[#e0e1dc] hover:text-[#01a651] transition-colors duration-500 text-[90px] md:text-[120px] font-black uppercase leading-none tracking-tight font-sans cursor-pointer mx-12">
                  {service}
                </span>
                <PiStarFourFill
                  className="text-[#e0e1dc] shrink-0 mx-12"
                  size={65}
                  style={{ fill: "currentColor" }}
                />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingServices;
