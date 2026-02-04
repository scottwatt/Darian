"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-dark to-black" />

      {/* Animated smoke effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-neon/5 blur-3xl animate-smoke"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute bottom-0 right-1/3 w-48 h-48 rounded-full bg-purple/5 blur-3xl animate-smoke"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-0 left-1/2 w-56 h-56 rounded-full bg-neon/5 blur-3xl animate-smoke"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(57,255,20,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon/30 bg-neon/5 mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
          <span className="text-neon text-xs font-bold uppercase tracking-[0.2em]">
            Now Delivering
          </span>
        </div>

        {/* Main heading */}
        <h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.85] mb-8 animate-slide-left"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-white">SMOKE</span>
          <br />
          <span className="gradient-text">&amp;TERP</span>
        </h1>

        {/* Tagline */}
        <p
          className="text-lg sm:text-xl md:text-2xl text-white/60 font-medium max-w-2xl mx-auto mb-12 animate-slide-right"
          style={{ animationDelay: "0.4s" }}
        >
          Premium flower, edibles, vapes &amp; pre-rolls.
          <br />
          <span className="text-neon font-bold">Delivered to your door.</span>
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Link
            href="/menu"
            className="px-10 py-4 bg-neon text-black font-black uppercase text-lg tracking-wider rounded-sm hover:bg-neon-dim transition-all hover:scale-105 animate-pulse-neon"
          >
            Shop Menu
          </Link>
          <a
            href="#about"
            className="px-10 py-4 border-2 border-white/20 text-white font-bold uppercase text-lg tracking-wider rounded-sm hover:border-neon hover:text-neon transition-all"
          >
            Learn More
          </a>
        </div>

        {/* Stats */}
        <div
          className="mt-20 grid grid-cols-3 gap-12 max-w-lg mx-auto animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <div>
            <div className="text-3xl md:text-4xl font-black text-neon">50+</div>
            <div className="text-xs uppercase tracking-widest text-white/40 mt-2">
              Strains
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-purple">24/7</div>
            <div className="text-xs uppercase tracking-widest text-white/40 mt-2">
              Delivery
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-neon">1HR</div>
            <div className="text-xs uppercase tracking-widest text-white/40 mt-2">
              Avg Drop
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-white/30 text-xs uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-white/20 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-neon animate-bounce" />
        </div>
      </div>
    </section>
  );
}
