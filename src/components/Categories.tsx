"use client";

import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    name: "Flower",
    description: "Top-shelf indoor strains. Indica, Sativa & Hybrid options.",
    iconPath: "/images/weed.png",
    color: "from-green-500 to-neon",
    items: "11 strains",
    filter: "flower",
  },
  {
    name: "Concentrates",
    description: "Crumbles, badders & shatters. Premium extracts.",
    iconPath: "/images/concentrate.jpg",
    color: "from-yellow-500 to-orange-500",
    items: "8 products",
    filter: "concentrates",
  },
  {
    name: "Vapes",
    description: "Live resin, hash rosin & all-in-one disposables.",
    iconPath: "/images/vape.jpg",
    color: "from-cyan-400 to-blue-500",
    items: "5 options",
    filter: "vapes",
  },
  {
    name: "Edibles",
    description: "Chocolate bars & gummies. Lab-tested doses.",
    iconPath: "/images/cube.jpg",
    color: "from-purple to-pink-500",
    items: "2 products",
    filter: "edibles",
  },
  {
    name: "Pre-Rolls",
    description: "House rolls & infused cones. Ready to spark.",
    iconPath: "/images/weed.png",
    color: "from-orange-400 to-red-500",
    items: "2 choices",
    filter: "prerolls",
  },
];

export default function Categories() {
  return (
    <section className="relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent" />

      <div className="w-full max-w-[1200px] mx-auto px-3 py-20 sm:py-32 lg:py-44">
        <div className="text-center mb-20">
          <span className="text-neon text-xs font-bold uppercase tracking-[0.3em]">
            What We Carry
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase mt-4 text-white">
            Our <span className="gradient-text">Categories</span>
          </h2>
          <p className="text-white/50 mt-6 max-w-2xl mx-auto text-lg">
            Only the finest. Every item lab tested and verified.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-items-center">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/menu?category=${cat.filter}`}
              className="group relative p-8 bg-dark-card rounded-xl border border-dark-border hover:border-neon/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden text-center"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {/* Icon */}
              <div className="relative w-20 h-20 mx-auto mb-6">
                <Image
                  src={cat.iconPath}
                  alt={cat.name}
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>

              <h3 className="text-xl font-black uppercase text-white group-hover:text-neon transition-colors">
                {cat.name}
              </h3>

              <p className="text-white/50 text-sm mt-2 leading-relaxed">
                {cat.description}
              </p>

              <div className="mt-4">
                <span className="text-xs font-bold uppercase tracking-widest text-white/30">
                  {cat.items}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
