import Link from "next/link";

export default function DeliveryInfo() {
  const steps = [
    {
      step: "01",
      title: "Browse",
      description: "Check our menu and pick your favorites",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      step: "02",
      title: "Order",
      description: "Hit us up 11-7 Mon–Sat and place your order",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
        </svg>
      ),
    },
    {
      step: "03",
      title: "Sit Back",
      description: "We pull up fast, usually within the hour",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      step: "04",
      title: "Enjoy",
      description: "Light up and relax",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="delivery" className="relative">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent" />

      <div className="w-full max-w-[1200px] mx-auto px-3 py-20 sm:py-32 lg:py-44">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-neon text-xs font-bold uppercase tracking-[0.3em]">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase mt-4 text-white">
            From Us <span className="gradient-text">To You</span>
          </h2>
          <p className="text-white/50 mt-6 max-w-2xl mx-auto text-lg">
            Call between 11 and 7 or text your order to receive confirmation
            and an estimated ETA. Minimum order can vary depending on your
            delivery location.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
          {steps.map((step, i) => (
            <div key={step.step} className="relative group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-neon/30 to-transparent" />
              )}

              <div className="text-center">
                {/* Step number */}
                <div className="text-6xl font-black text-dark-border group-hover:text-neon/20 transition-colors mb-4">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-neon/20 text-neon group-hover:bg-neon/10 transition-all mb-4">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-black uppercase text-white group-hover:text-neon transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-white/40 text-sm mt-3">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 mb-8 relative overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-neon/10 via-purple/5 to-neon/10" />
          <div className="relative glass rounded-lg p-8 sm:p-10 text-center">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mb-3">
              Ready To <span className="text-neon neon-text">Order?</span>
            </h3>
            <p className="text-white/50 max-w-md mx-auto mb-6">
              Check the menu, pick your products, and we&apos;ll handle the rest.
            </p>
            <Link
              href="/menu"
              className="inline-block px-10 py-3 bg-neon text-black font-black uppercase tracking-wider rounded-sm hover:bg-neon-dim transition-all"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
