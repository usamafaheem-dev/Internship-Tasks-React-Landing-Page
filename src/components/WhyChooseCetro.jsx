import { Building2, Leaf, Sparkles } from "lucide-react";
import starSparkle from "../assets/images/whywechosestar.png";
import imageMask from "../assets/images/whywechodeMaskImage.png";
import whywechsebg from "../assets/images/whywechsebg.jpg";

const benefitItems = [
  {
    title: "Top Trusted Companies",
    description:
      "Over 10 years of providing industrial cleaning services, Cetro Clean has served nearly 10,000 Customers with 98% satisfaction.",
    Icon: Building2,
  },
  {
    title: "High Quality",
    description:
      "We use the most advanced cleaning equipment to clean all dust, stains and freshen up our clients' work.",
    Icon: Sparkles,
  },
  {
    title: "Green Cleaning Products",
    description:
      "We use Green cleaning processes, Green products, biotechnology, biodegradable, do not harm the environment, users.",
    Icon: Leaf,
  },
];

const WhyChooseCetro = ({ whywechosehumanimage }) => {
  return (
    <section
      id="why-choose-cetro"
      className="relative w-full overflow-hidden bg-[#eeede8] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div
        className="relative mx-auto w-full max-w-[1520px] overflow-hidden rounded-[30px] border border-white/10 bg-[#064f42] p-6 sm:p-8 lg:p-10 xl:p-12"
        style={{
          backgroundImage: `url(${whywechsebg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:gap-10">
          <div className="text-center lg:text-left">
            <p className="inline-flex items-center justify-center gap-2 font-sans text-[14px] font-semibold uppercase tracking-[0.08em] text-white lg:justify-start">
              <Sparkles className="h-4 w-4 text-[#00a650]" />
              WHY CHOOSE CETRO
            </p>

            <h2 className="mx-auto mt-4 max-w-[780px] font-sans text-[clamp(2.25rem,4.9vw,3.75rem)] font-bold leading-[1.04] tracking-[-0.02em] text-white lg:mx-0">
              The Perfect Solution For{" "}
              <span className="text-[#00a650]">Living Space</span>
            </h2>

            <p className="mx-auto mt-6 max-w-[760px] font-sans text-[16px] leading-relaxed text-white/90 sm:text-[18px] lg:mx-0">
              Behind our commitment to providing a Best Cleaning Service, we
              have strengths and differences that create trust and love from
              Customers.
            </p>
          </div>

          <div className="relative hidden h-[220px] w-[340px] lg:block">
            <img
              src={starSparkle}
              alt=""
              className="pointer-events-none absolute right-[44px] top-[20px] h-[185px] w-[175px] object-contain"
            />
            <img
              src={starSparkle}
              alt=""
              className="pointer-events-none absolute right-[0] top-[0] h-[97px] w-[94px] object-contain"
            />
            <img
              src={starSparkle}
              alt=""
              className="pointer-events-none absolute bottom-[18px] right-[30px] h-[63px] w-[55px] object-contain"
            />
          </div>
        </div>

        <div className="relative mt-10 grid gap-8 lg:mt-12 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-12">
          <div
            className="order-2 mx-auto w-full max-w-[640px] shadow-[0_22px_50px_rgba(0,0,0,0.32)] lg:order-1 lg:mx-0 lg:max-w-none"
            style={{
              WebkitMaskImage: `url(${imageMask})`,
              maskImage: `url(${imageMask})`,
              WebkitMaskMode: "alpha",
              maskMode: "alpha",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
          >
            <img
              src={whywechosehumanimage}
              alt="Professional cleaning team"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="order-1 flex flex-col divide-y divide-white/10 lg:order-2">
            {benefitItems.map((item) => (
              <article
                key={item.title}
                className="group flex flex-col items-center gap-5 py-6 text-center first:pt-0 last:pb-0 transition-all duration-300 hover:translate-x-1 md:flex-row md:items-start md:text-left"
              >
                <div className="flex h-[80px] w-[80px] shrink-0 items-center justify-center rounded-full bg-[#96fe81] p-[19px] text-[#0a3d2f] shadow-[0_12px_24px_rgba(0,0,0,0.2)]">
                  <item.Icon className="h-full w-full" strokeWidth={2.2} />
                </div>

                <div className="pt-1">
                  <h3 className="font-sans text-[18px] font-bold leading-tight text-white sm:text-[20px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-sans text-[18px] leading-[1.35] text-white/90">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseCetro;
