import { ArrowRight, PhoneCall, Sprout } from "lucide-react";
import trustedPartnerHumanImage from "../assets/images/trustedPartnerHumanIMage.png";
import whywechoseimage from "../assets/images/whywechoseimage.jpg";

const statistics = [
  {
    value: "299k",
    label: "Successful Projects",
    description:
      "Over 250 successful projects delivered with quality and care",
  },
  {
    value: "364+",
    label: "Skilled Tradespeople",
    description: "Our team of 30 experts ensures top-quality results",
  },
  {
    value: "199+",
    label: "Happy Clients",
    description: "All of our clients are satisfied with our work and service",
  },
];

const TrustedPartnerSection = () => {
  return (
    <section
      id="trusted-partner"
      className="w-full bg-[#eeede8] px-4 pb-12 sm:px-6 sm:pb-14 lg:px-8 lg:pb-16"
    >
      <div className="relative mx-auto w-full max-w-[1520px] overflow-hidden rounded-[30px] bg-[#0a3d33] px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        <img
          src={whywechoseimage}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#07352d]/88 via-[#083d33]/72 to-[#083930]/84" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,166,80,0.2),transparent_40%),radial-gradient(circle_at_86%_78%,rgba(0,166,80,0.16),transparent_45%)]" />

        <div className="pointer-events-none absolute bottom-[-68px] left-1/2 z-10 hidden -translate-x-1/2 select-none lg:block">
          <p className="[font-family:'Roboto_Condensed',sans-serif] text-[clamp(7.4rem,24vw,19rem)] font-bold leading-none tracking-[0.08em] text-[#aff6c6]/15">
            CETRO
          </p>
        </div>

        <div className="relative z-30 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="text-center lg:text-left">
            <p className="inline-flex items-center justify-center gap-2 [font-family:'Roboto',sans-serif] text-[14px] font-bold uppercase tracking-[0.05em] text-white lg:justify-start">
              <Sprout className="h-4 w-4 text-[#00a650]" strokeWidth={2.4} />
              OUR TRUSTED PARTNER
            </p>

            <h2 className="mt-5 [font-family:'Roboto',sans-serif] text-[clamp(2.2rem,5.4vw,5rem)] font-bold leading-[0.98] tracking-[-0.02em]">
              <span className="block text-white">Smart Cleaning Solution</span>
              <span className="mt-1 block text-[#00a650]">For You 24/7 Hours</span>
            </h2>

            <p className="mx-auto mt-7 max-w-[620px] [font-family:'Roboto',sans-serif] text-[18px] leading-[1.42] text-white/90 lg:mx-0">
              Behind our commitment to providing a Best Cleaning Service, we have
              strengths and differences that create trust and love from
              Customers.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-5 lg:justify-start">
              <button
                type="button"
                className="group inline-flex items-center gap-2 rounded-full bg-[#00a650] py-3.5 pl-8 pr-4 [font-family:'Roboto',sans-serif] text-[16px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#009448] hover:shadow-[0_14px_28px_rgba(0,166,80,0.35)]"
              >
                Learn More
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#00a650] transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </span>
              </button>

              <div className="flex items-center gap-3 text-left text-white">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10">
                  <PhoneCall className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <div className="[font-family:'Roboto',sans-serif] leading-tight">
                  <p className="text-[18px] font-semibold">Need Help?</p>
                  <a
                    href="tel:+4801236789000"
                    className="mt-1 block text-[34px] font-bold text-white transition-colors duration-300 hover:text-[#93ffc2] sm:text-[38px]"
                  >
                    (+480) 123 678 9000
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-30 flex flex-col gap-10 text-center lg:items-start lg:pl-8 lg:text-left xl:pl-12">
            {statistics.map((item) => (
              <article key={item.label} className="max-w-[350px]">
                <p className="[font-family:'Roboto',sans-serif] text-[clamp(3rem,5.2vw,5rem)] font-bold leading-none text-white">
                  {item.value}
                </p>
                <h3 className="mt-4 [font-family:'Roboto',sans-serif] text-[14px] font-bold text-white">
                  {item.label}
                </h3>
                <p className="mt-3 [font-family:'Roboto',sans-serif] text-[18px] leading-[1.4] text-white/90">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="pointer-events-none relative z-20 mx-auto mt-8 w-full max-w-[360px] sm:max-w-[470px] lg:absolute lg:bottom-0 lg:left-1/2 lg:mt-0 lg:w-[560px] lg:max-w-none lg:-translate-x-[45%] xl:w-[620px]">
          <img
            src={trustedPartnerHumanImage}
            alt="Trusted partner cleaning team"
            className="h-auto w-full object-contain drop-shadow-[0_24px_42px_rgba(0,0,0,0.45)]"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnerSection;
