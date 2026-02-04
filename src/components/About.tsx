export default function About() {
  return (
    <section id="about" className="relative bg-dark">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple/30 to-transparent" />

      <div className="w-full max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-20 py-32 lg:py-44">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side - Text */}
          <div>
            <span className="text-purple text-xs font-bold uppercase tracking-[0.3em]">
              Who We Are
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase mt-4 text-white leading-tight">
              Not Your
              <br />
              <span className="neon-text-purple text-purple">Average</span>
              <br />
              Plug
            </h2>
            <div className="mt-8 space-y-5">
              <p className="text-white/60 text-lg leading-relaxed">
                Smoke &amp; Terp is more than just a delivery service. We&apos;re a
                curated experience. Every product in our lineup is hand-selected,
                lab-tested, and approved by real smokers who know the difference.
              </p>
              <p className="text-white/60 text-lg leading-relaxed">
                We move different because we care different. No mid. No cap.
                Just top-shelf quality delivered straight to you, every single time.
              </p>
            </div>

            {/* Feature list */}
            <div className="mt-12 grid grid-cols-2 gap-5">
              {[
                "Lab Tested",
                "Fast Delivery",
                "Premium Only",
                "Discreet Packaging",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full" />
                  <span className="text-sm font-bold uppercase tracking-wider text-white/70">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="relative">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              {/* Stylized background */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon/10 via-dark-card to-purple/10 rounded-lg" />

              {/* Big stylized S&T */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-[10rem] sm:text-[12rem] font-black leading-none gradient-text opacity-20">
                    S&amp;T
                  </div>
                </div>
              </div>

              {/* Overlay content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass rounded-lg p-10 text-center max-w-xs">
                  <div className="text-6xl font-black gradient-text">100%</div>
                  <div className="text-white/80 font-bold uppercase tracking-wider mt-3">
                    Satisfaction Rate
                  </div>
                  <div className="text-white/40 text-sm mt-2">
                    Trusted by hundreds of loyal customers
                  </div>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-neon/30 rounded-tl-lg" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-purple/30 rounded-br-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
