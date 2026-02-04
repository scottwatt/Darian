"use client";

import Link from "next/link";

const categories = [
  {
    name: "Flower",
    description: "Top-shelf indoor strains. Indica, Sativa & Hybrid.",
    icon: "🌿",
    color: "from-green-500 to-neon",
    borderColor: "border-green-500/30",
    items: "30+ strains",
  },
  {
    name: "Edibles",
    description: "Gummies, chocolates, drinks & more. Lab-tested doses.",
    icon: "🍬",
    color: "from-purple to-pink-500",
    borderColor: "border-purple/30",
    items: "15+ products",
  },
  {
    name: "Vapes",
    description: "Live resin, distillate & disposable carts.",
    icon: "💨",
    color: "from-cyan-400 to-blue-500",
    borderColor: "border-cyan-400/30",
    items: "20+ options",
  },
  {
    name: "Pre-Rolls",
    description: "Hand-rolled joints & blunts. Infused options available.",
    icon: "🔥",
    color: "from-orange-400 to-red-500",
    borderColor: "border-orange-400/30",
    items: "10+ choices",
  },
];

export default function Categories() {
  return (
    <section className="relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent" />

      <div className="w-full max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-20 py-32 lg:py-44">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-neon text-xs font-bold uppercase tracking-[0.3em]">
            What We Carry
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase mt-4 text-white">
            Our <span className="gradient-text">Categories</span>
          </h2>
          <p className="text-white/50 mt-6 max-w-2xl mx-auto text-lg">
            Only the finest, hand-picked products. Every item tested and verified
            for your peace of mind.
          </p>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <Link
              key={cat.name}
              href="/menu"
              className={`group relative p-10 bg-dark-card rounded-lg border ${cat.borderColor} hover:border-neon/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Gradient hover overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {/* Icon */}
              <div className="text-5xl mb-6">{cat.icon}</div>

              {/* Name */}
              <h3 className="text-2xl font-black uppercase text-white group-hover:text-neon transition-colors">
                {cat.name}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-sm mt-3 leading-relaxed">
                {cat.description}
              </p>

              {/* Item count */}
              <div className="mt-8 flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${cat.color}`} />
                <span className="text-xs font-bold uppercase tracking-widest text-white/40">
                  {cat.items}
                </span>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-8 right-8 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-neon group-hover:bg-neon/10 transition-all">
                <svg
                  className="w-4 h-4 text-white/30 group-hover:text-neon transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
