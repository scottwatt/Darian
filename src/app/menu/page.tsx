"use client";

import { useState } from "react";

type Category = "all" | "flower" | "edibles" | "vapes" | "prerolls";

interface Product {
  id: number;
  name: string;
  category: Category;
  price: string;
  thc: string;
  description: string;
  badge?: string;
  strain?: string;
}

const products: Product[] = [
  // Flower
  {
    id: 1,
    name: "Runtz",
    category: "flower",
    price: "$45",
    thc: "29%",
    description: "Sweet, fruity, and potent. A crowd favorite hybrid that hits smooth every time.",
    badge: "Top Seller",
    strain: "Hybrid",
  },
  {
    id: 2,
    name: "Gelato #41",
    category: "flower",
    price: "$50",
    thc: "27%",
    description: "Creamy, dessert-like flavor with a heavy-hitting body high. Pure gas.",
    strain: "Hybrid",
  },
  {
    id: 3,
    name: "Zaza OG",
    category: "flower",
    price: "$55",
    thc: "31%",
    description: "Exotic top-shelf. Dense nugs, loud terps, and a high that doesn't quit.",
    badge: "Exotic",
    strain: "Indica",
  },
  {
    id: 4,
    name: "Blue Dream",
    category: "flower",
    price: "$40",
    thc: "24%",
    description: "Classic sativa-dominant. Uplifting, creative, perfect for daytime sessions.",
    strain: "Sativa",
  },
  {
    id: 5,
    name: "Wedding Cake",
    category: "flower",
    price: "$50",
    thc: "28%",
    description: "Rich, tangy flavor with relaxing effects. Premium indoor grown.",
    strain: "Indica",
  },
  {
    id: 6,
    name: "Gorilla Glue #4",
    category: "flower",
    price: "$45",
    thc: "30%",
    description: "Heavy-hitter. Earthy, pungent, and glues you to the couch.",
    badge: "Potent",
    strain: "Hybrid",
  },
  // Edibles
  {
    id: 7,
    name: "Gummy Bears 500mg",
    category: "edibles",
    price: "$35",
    thc: "500mg",
    description: "Mixed fruit flavors. 10 gummies, 50mg each. Perfect dosing.",
    badge: "Popular",
  },
  {
    id: 8,
    name: "Chocolate Bar 300mg",
    category: "edibles",
    price: "$30",
    thc: "300mg",
    description: "Rich dark chocolate with smooth, long-lasting effects. Breakable squares.",
  },
  {
    id: 9,
    name: "Sour Belts 400mg",
    category: "edibles",
    price: "$30",
    thc: "400mg",
    description: "Sour candy strips packed with punch. Sweet, tangy, and strong.",
  },
  {
    id: 10,
    name: "Infused Lemonade",
    category: "edibles",
    price: "$15",
    thc: "100mg",
    description: "Refreshing THC-infused lemonade. Sip slow and enjoy the ride.",
    badge: "New",
  },
  // Vapes
  {
    id: 11,
    name: "Live Resin Cart - OG Kush",
    category: "vapes",
    price: "$50",
    thc: "89%",
    description: "Full spectrum live resin. Real terps, real flavor, real potency.",
    badge: "Premium",
  },
  {
    id: 12,
    name: "Disposable - Strawberry Cough",
    category: "vapes",
    price: "$35",
    thc: "85%",
    description: "Ready to hit out the box. Sweet strawberry flavor, smooth vapor.",
  },
  {
    id: 13,
    name: "Distillate Cart - GSC",
    category: "vapes",
    price: "$40",
    thc: "92%",
    description: "High-potency distillate with Girl Scout Cookies terps. Clean and strong.",
  },
  {
    id: 14,
    name: "Live Resin Disposable - Zkittlez",
    category: "vapes",
    price: "$45",
    thc: "87%",
    description: "Rainbow of flavors in every hit. Disposable convenience, premium quality.",
    badge: "Top Seller",
  },
  // Pre-Rolls
  {
    id: 15,
    name: "Classic Joint - Runtz",
    category: "prerolls",
    price: "$12",
    thc: "29%",
    description: "1g hand-rolled joint. Premium Runtz flower, slow burn, smooth smoke.",
  },
  {
    id: 16,
    name: "Infused Blunt - Gelato",
    category: "prerolls",
    price: "$25",
    thc: "40%+",
    description: "2g blunt rolled with concentrate and kief. Not for beginners.",
    badge: "Heavy Hitter",
  },
  {
    id: 17,
    name: "Mini Pack (5 Joints)",
    category: "prerolls",
    price: "$40",
    thc: "25%",
    description: "Five 0.5g pre-rolls in a sleek tube. Perfect for sharing or solo sessions.",
    badge: "Value",
  },
  {
    id: 18,
    name: "King Size - Wedding Cake",
    category: "prerolls",
    price: "$15",
    thc: "28%",
    description: "1.5g king-size joint. Wedding Cake flower rolled to perfection.",
  },
];

const categoryFilters: { key: Category; label: string }[] = [
  { key: "all", label: "All Products" },
  { key: "flower", label: "Flower" },
  { key: "edibles", label: "Edibles" },
  { key: "vapes", label: "Vapes" },
  { key: "prerolls", label: "Pre-Rolls" },
];

const strainColors: Record<string, string> = {
  Indica: "bg-purple/20 text-purple border-purple/30",
  Sativa: "bg-neon/20 text-neon border-neon/30",
  Hybrid: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
};

const badgeColors: Record<string, string> = {
  "Top Seller": "bg-neon/20 text-neon",
  Exotic: "bg-purple/20 text-purple",
  Potent: "bg-red-500/20 text-red-400",
  Popular: "bg-blue-500/20 text-blue-400",
  New: "bg-cyan-400/20 text-cyan-400",
  Premium: "bg-yellow-500/20 text-yellow-400",
  "Heavy Hitter": "bg-orange-500/20 text-orange-400",
  Value: "bg-green-500/20 text-green-400",
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      <div className="w-full max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-20 pt-32 pb-28">
        {/* Page header */}
        <div className="text-center mb-16">
          <span className="text-neon text-xs font-bold uppercase tracking-[0.3em]">
            What We Got
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase mt-4 text-white">
            The <span className="gradient-text">Menu</span>
          </h1>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Everything on deck. Pick your poison — we deliver it fast.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categoryFilters.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat.key
                  ? "bg-neon text-black"
                  : "bg-dark-card border border-dark-border text-white/60 hover:border-neon/30 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product count */}
        <div className="text-white/30 text-sm uppercase tracking-widest mb-10 text-center">
          Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group relative bg-dark-card rounded-lg border border-dark-border hover:border-neon/30 transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              {/* Top gradient accent */}
              <div className="h-1 bg-gradient-to-r from-neon via-purple to-neon" />

              <div className="p-8">
                {/* Header row */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    {/* Badges */}
                    <div className="flex items-center gap-2 mb-2">
                      {product.badge && (
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            badgeColors[product.badge] || "bg-neon/20 text-neon"
                          }`}
                        >
                          {product.badge}
                        </span>
                      )}
                      {product.strain && (
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                            strainColors[product.strain]
                          }`}
                        >
                          {product.strain}
                        </span>
                      )}
                    </div>

                    {/* Name */}
                    <h3 className="text-xl font-black uppercase text-white group-hover:text-neon transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <div className="text-2xl font-black text-neon">
                      {product.price}
                    </div>
                  </div>
                </div>

                {/* THC */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/30">
                    THC
                  </span>
                  <span className="text-sm font-black text-white/70">
                    {product.thc}
                  </span>
                </div>

                {/* Description */}
                <p className="text-white/40 text-sm leading-relaxed">
                  {product.description}
                </p>

                {/* Add to order button */}
                <button className="mt-5 w-full py-3 rounded-lg border border-dark-border text-white/50 text-sm font-bold uppercase tracking-wider hover:bg-neon hover:text-black hover:border-neon transition-all">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="glass inline-block rounded-lg p-8 sm:p-10">
            <h3 className="text-2xl font-black uppercase text-white mb-2">
              Don&apos;t See What You Want?
            </h3>
            <p className="text-white/40 text-sm mb-6">
              We rotate stock regularly. Hit us up and ask — we might have it.
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-3 bg-neon text-black font-black uppercase text-sm tracking-wider rounded-sm hover:bg-neon-dim transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
