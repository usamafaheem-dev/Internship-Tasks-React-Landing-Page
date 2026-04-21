import {
  ArrowRight,
  Building2,
  House,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import aboutLeftImage from "../assets/images/about-left-image.png";
import useScrollAnimation from "../hooks/useScrollAnimation";

const serviceCards = [
  {
    title: "Residential Services",
    description:
      "From regular housekeeping to deep cleaning, we ensure your home is always fresh and hygienic.",
    icon: House,
  },
  {
    title: "Commercial Services",
    description:
      "Keep your workplace clean and productive with our comprehensive commercial cleaning plans.",
    icon: Building2,
  },
  {
    title: "Specialized Cleaning",
    description:
      "We offer specialized services, including carpet cleaning, window washing, and address...",
    icon: ShieldCheck,
  },
  {
    title: "Office Cleaning",
    description:
      "We offer specialized services, including carpet cleaning, window washing, and deep office care.",
    icon: Sparkles,
  },
];

const About = () => {
  const sectionRef = useScrollAnimation(0.1);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#eeede8] pt-14 md:pt-20"
    >
      {/* Main Hero Area with Left Illustration */}
      <div className="relative py-2 min-[1200px]:min-h-[55vh]">
        {/* Left Side Illustration */}
        <div className="absolute inset-y-0 left-0 w-[55%] hidden min-[1200px]:block pointer-events-none">
          <div
            className="absolute bottom-8 left-0 h-[100%] w-full bg-no-repeat bg-contain bg-left-bottom opacity-25"
            style={{ backgroundImage: `url(${aboutLeftImage})` }}
          />
        </div>

        {/* Text Content */}
        <div className="relative z-10 w-full h-full px-6 md:px-12 xl:px-16 flex items-center">
          <div className="w-full text-center min-[1200px]:text-left min-[1200px]:w-[45%] xl:w-[55%] min-[1200px]:ml-[52%] xl:ml-[40%]">
            <div
              className="anim-up inline-flex items-center justify-center min-[1200px]:justify-start gap-2 text-[#465364] font-semibold text-sm uppercase tracking-[2px]"
              style={{ animationDelay: '0.1s' }}
            >
              <Sparkles className="w-4 h-4 text-[#00A650]" />
              ABOUT CLEANING AGENCY
            </div>

            <h2
              className="anim-up mt-5 mx-auto min-[1200px]:mx-0 text-[#1f2d3d] font-black leading-[0.96] tracking-[-1.2px] text-[clamp(30px,4.8vw,68px)] w-full"
              style={{ animationDelay: '0.35s' }}
            >
              We Offer A <span className="text-[#00A650]">Wide Range</span> Of{" "}
              <span className="text-[#00A650]">Specialist</span> Cleaning Services.
            </h2>

            <p
              className="anim-up mt-5 mx-auto min-[1200px]:mx-0 text-[#4b5563] text-[17px] md:text-[18px] leading-relaxed max-w-[780px]"
              style={{ animationDelay: '0.6s' }}
            >
              We are committed to delivering exceptional cleaning services that
              leave your spaces sparkling clean and hygienic. Our professional
              team uses eco-friendly products to ensure a safe and healthy
              environment for you.
            </p>
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <div className="relative z-10 px-6 md:px-12 xl:px-16 mt-10 md:mt-14">
        <div className="about-cards-carousel w-full max-w-full min-w-0 flex gap-6 overflow-x-auto pb-10 snap-x snap-mandatory scroll-smooth">
          {serviceCards.map(({ title, description, icon: Icon }, i) => (
            <div
              key={i}
              className="anim-up relative group pb-14 snap-start shrink-0 basis-[92%] md:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)] xl:basis-[calc(25%-18px)]"
              style={{ animationDelay: `${0.15 + i * 0.2}s` }}
            >
              <article className="relative about-card h-full p-6 pb-14 md:p-6 md:pb-14 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col">
                <div className="relative z-10 flex h-full flex-col">
                  <h3 className="text-[#1f2d3d] font-black text-[clamp(28px,2.3vw,50px)] leading-[0.95] tracking-[-0.6px] max-w-[260px]">
                    {title}
                  </h3>

                  <div className="mt-6 md:mt-6 w-20 h-20 md:w-20 md:h-20 bg-[#8CF26A] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                    <Icon className="w-11 h-11 text-[#1f2d3d] transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <div className="h-px bg-[#d9d9d9] my-7 md:my-6" />

                  <p className="text-[#5a5a5a] text-[16px] leading-relaxed">
                    {description}
                  </p>
                </div>
              </article>

              <div className="absolute bottom-15 right-3 translate-y-1/2 z-30">
                <button className="w-16 h-16 rounded-full border-[3px] border-[#00A650] bg-white text-[#1f2d3d] flex items-center justify-center shadow-sm transition-all duration-300 hover:bg-[#00A650] hover:text-white group-hover:-translate-y-[1px]">
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
