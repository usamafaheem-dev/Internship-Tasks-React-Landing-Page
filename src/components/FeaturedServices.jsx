import { ArrowRight } from "lucide-react";
import { useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import featuredImage1 from "../assets/images/featuredimage-1.jpg";
import featuredImage2 from "../assets/images/featuredimage-2.jpg";
import featuredImage3 from "../assets/images/featuredimage-3.jpg";
import featuredImage4 from "../assets/images/featuredimage-4.jpg";
import featuredImage5 from "../assets/images/featuredimage-5.jpg";

const services = [
    {
        id: 1,
        title: "Construction Cleaning",
        image: featuredImage1,
    },
    {
        id: 2,
        title: "Move In Out Cleaning",
        image: featuredImage2,
    },
    {
        id: 3,
        title: "Regular Home Cleaning",
        image: featuredImage3,
    },
    {
        id: 4,
        title: "Skilled Cleaning",
        image: featuredImage4,
    },
    {
        id: 5,
        title: "Specialized Cleaning",
        image: featuredImage5,
    },
    {
        id: 6,
        title: "Residential Services",
        image: featuredImage1,
    },
];

const FeaturedServices = () => {
    const [activeServiceId, setActiveServiceId] = useState(services[0].id);
    const [hoveredServiceId, setHoveredServiceId] = useState(null);
    const [clickedServiceId, setClickedServiceId] = useState(null);
    const sectionRef = useScrollAnimation(0.1);

    return (
        <section ref={sectionRef} className="w-full bg-[#eeede8] py-16 md:py-20 lg:py-24">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="anim-up mb-5 flex items-center justify-center gap-3" style={{ animationDelay: '0.1s' }}>
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#00a650]/10">
                        <svg
                            className="h-3.5 w-3.5 text-[#00a650]"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                d="M6 12.5C8.5 12.5 10 10.7 10.2 8C13 8.5 14.4 10.3 14.4 12.8V18"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M14.5 18V13.8C14.5 11 16.2 9 19 8.4C19.1 11.2 17.8 13.2 15.1 13.8"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                    <p className="[font-family:'Roboto',sans-serif] text-[14px] font-medium uppercase tracking-[0.12em] text-[#5c5e5e]">
                        FEATURED SERVICE
                    </p>
                </div>

                <h2 className="anim-up mx-auto max-w-5xl text-center text-[clamp(2.3rem,5.5vw,5.1rem)] font-semibold leading-[1.03] tracking-[-0.02em] text-[#212e3b]" style={{ animationDelay: '0.3s' }}>
                    Our Company{" "}
                    <span className="text-[clamp(2.5rem,6vw,5.4rem)] font-bold text-[#00a650]">
                        Provide The Best
                    </span>{" "}
                    Cleaning Service
                </h2>

                <div className="mt-10 grid grid-cols-1 items-stretch gap-5 lg:mt-12 lg:grid-cols-[44%_56%] lg:gap-6">
                    <div className="anim-up w-full" style={{ animationDelay: '0.5s' }}>
                        <ul className="divide-y divide-[#d8dbd7] border-y border-[#d8dbd7]">
                            {services.map((service) => {
                                const isCurrent = service.id === activeServiceId;
                                const isHovered = service.id === hoveredServiceId;
                                const isClicked = service.id === clickedServiceId;
                                const shouldShowImage = isHovered || isClicked;

                                return (
                                    <li 
                                        key={service.id} 
                                        className="py-[15px]"
                                        onMouseEnter={() => {
                                            setActiveServiceId(service.id);
                                            setHoveredServiceId(service.id);
                                        }}
                                        onMouseLeave={() => {
                                            setHoveredServiceId(null);
                                        }}
                                    >
                                        <div className="flex items-center justify-between gap-4">
                                            <span
                                                className={`[font-family:'Boldonse',sans-serif] font-bold text-[24px] leading-[1.1] transition-colors duration-300 max-sm:text-[20px] ${
                                                    isCurrent ? "text-[#00a650]" : "text-[#212e3b]"
                                                }`}
                                            >
                                                {service.title}
                                            </span>

                                            <button
                                                type="button"
                                                onFocus={() => setActiveServiceId(service.id)}
                                                onClick={() => {
                                                    setActiveServiceId(service.id);
                                                    // Toggle clicked state - if same service clicked, close it, otherwise open new one
                                                    if (clickedServiceId === service.id) {
                                                        setClickedServiceId(null);
                                                    } else {
                                                        setClickedServiceId(service.id);
                                                    }
                                                }}
                                                className={`inline-flex h-11 w-11 items-center justify-center rounded-full border-2 leading-none transition-all duration-300 ${
                                                    isCurrent
                                                        ? "border-[#00a650] bg-[#00a650] text-white"
                                                        : "border-[#e5e7eb] bg-white text-[#212e3b] hover:border-[#00a650] hover:bg-[#00a650] hover:text-white"
                                                }`}
                                                aria-label={`Show ${service.title} image`}
                                            >
                                                <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.8} />
                                            </button>
                                        </div>
                                        
                                        {/* Mobile image display - shows below each service on hover/click */}
                                        <div className={`mt-4 overflow-hidden rounded-[16px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
                                            shouldShowImage ? "max-h-[250px] opacity-100" : "max-h-0 opacity-0"
                                        }`}>
                                            <div className={`transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                                shouldShowImage 
                                                    ? "rotate-0 scale-100 translate-y-0" 
                                                    : "rotate-12 scale-95 -translate-y-4"
                                            }`}>
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="h-[200px] w-full object-cover shadow-[0_12px_24px_rgba(33,46,59,0.12)] rounded-[16px]"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Desktop image container - hidden on mobile */}
                    <div className="anim-right relative hidden overflow-hidden rounded-[24px] shadow-[0_24px_48px_rgba(33,46,59,0.14)] md:block lg:h-full" style={{ animationDelay: '0.6s' }}>
                        <div className="relative h-[320px] sm:h-[390px] lg:h-full">
                            {services.map((service) => {
                                const isCurrent = service.id === activeServiceId;

                                return (
                                    <img
                                        key={service.id}
                                        src={service.image}
                                        alt={service.title}
                                        className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                            isCurrent
                                                ? "translate-y-0 scale-100 opacity-100"
                                                : "-translate-y-8 scale-[1.03] opacity-0"
                                        }`}
                                        loading="lazy"
                                    />
                                );
                            })}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#212e3b]/15 via-transparent to-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedServices;