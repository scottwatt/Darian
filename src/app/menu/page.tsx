"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type Category = "all" | "flower" | "concentrates" | "vapes" | "edibles" | "prerolls";

const validCategories: Category[] = ["all", "flower", "concentrates", "vapes", "edibles", "prerolls"];

interface Product {
  id: number;
  name: string;
  category: Category;
  strain?: "Indica" | "Sativa" | "Hybrid";
  prices: Record<string, number>;
  deal?: string;
  description: string;
  note?: string;
  image: string;
}

const products: Product[] = [
  // ==================== FLOWER ====================
  {
    id: 1,
    name: "Pavé",
    category: "flower",
    strain: "Hybrid",
    prices: { "7g": 50, "14g": 90, "28g": 160 },
    description: "Exceptional strain from Compound Genetics. Blingy, minty, gassy cross of Paris OG and The Menthol. White-out trichome blizzard with crazy-high THC. This hybrid dumps hash.",
    image: "/images/zzzzz.png",
  },
  {
    id: 2,
    name: "Fortune Cookies",
    category: "flower",
    strain: "Hybrid",
    prices: { "7g": 50, "14g": 90, "28g": 160 },
    description: "Girl Scout Cookies x OG Kush genetics. Potent mix of earthy, honeyed flavors. Soaring, long-lasting buzz perfect for creative escapes. Can push into heavy couch-lock at higher doses.",
    image: "/images/zzzz.png",
  },
  {
    id: 3,
    name: "Crepes",
    category: "flower",
    strain: "Indica",
    prices: { "7g": 50, "14g": 90, "28g": 160 },
    description: "80% indica. Pancakes x Project 4516. Sweet nutty doughy pancake flavor with hints of cherries and vanilla. Soothing high that relaxes mind and body. 25%+ THC.",
    image: "/images/zzz.png",
  },
  {
    id: 4,
    name: "Galaxy Glue",
    category: "flower",
    strain: "Hybrid",
    prices: { "7g": 50, "14g": 90, "28g": 160 },
    description: "Indica-leaning hybrid. Original Glue (GG4) genetics with ultra-sticky resin. Diesel and earthy pine terps. Deep full-body relaxation. 20-25% THC.",
    image: "/images/zz.png",
  },
  {
    id: 5,
    name: "Jet Fuel",
    category: "flower",
    strain: "Sativa",
    prices: { "7g": 50, "14g": 90, "28g": 160 },
    description: "70% sativa. Aspen OG x High Country Diesel. Often called the 'cocaine of marijuana.' Immediate euphoric hit with tingly cerebral energy. Pungent diesel with sweet skunk.",
    image: "/images/z.png",
  },
  {
    id: 6,
    name: "Mega Glue",
    category: "flower",
    strain: "Indica",
    prices: { "7g": 50, "14g": 90, "28g": 160 },
    description: "70% indica. Gorilla Glue x Mega Wellness. Zesty citrus and creamy nutty cookies with spicy diesel. Full-bodied tingle that spreads throughout. Insane 30-31% THC.",
    image: "/images/y.png",
  },
  {
    id: 7,
    name: "Mendo Crunch",
    category: "flower",
    strain: "Indica",
    prices: { "7g": 50, "14g": 90, "28g": 160 },
    description: "Rare 70% indica. Carbon Fiber x Mendo Breath F2. Nutty chocolate with creamy vanilla exhale. Sweet mocha coffee aroma. Calming and uplifting. 20%+ THC.",
    image: "/images/x.png",
  },
  {
    id: 8,
    name: "Zkittlez",
    category: "flower",
    strain: "Indica",
    prices: { "7g": 50, "14g": 90, "28g": 160 },
    description: "Grape Ape x Grapefruit. First place Best Indica at 2015 Cannabis Cups. Super fruity tropical earth flavor. Uplifting head buzz with relaxing body high.",
    image: "/images/w.png",
  },
  {
    id: 9,
    name: "Redneck Wedding",
    category: "flower",
    strain: "Indica",
    prices: { "7g": 50, "14g": 90, "28g": 160 },
    description: "80% indica. GMO x Trophy Wife. Sweet fruity with sour citrus lemon and skunky black coffee. Tingly stimulating effects with deep relaxation. 28-35% THC.",
    image: "/images/v.png",
  },
  {
    id: 10,
    name: "Granddaddy Purple",
    category: "flower",
    strain: "Indica",
    prices: { "7g": 50, "14g": 90, "28g": 160 },
    description: "The grandfather of all strains. Big Bud x Purple Urkle. Cerebral rush with euphoric numbing. Slightly psychedelic with deep relaxation. Super sweet grape. 20-27% THC.",
    image: "/images/u.png",
  },
  {
    id: 11,
    name: "OG Kush Breath",
    category: "flower",
    strain: "Indica",
    prices: { "7g": 50, "14g": 90, "28g": 160 },
    description: "Rare indica dominant. Girl Scout Cookies variety. Fresh nutty vanilla with berry herbal exhale. Subtle lift that grows into happy haze. Heavy couch-lock sedation.",
    image: "/images/t.png",
  },

  // ==================== CONCENTRATES ====================
  {
    id: 12,
    name: "Ghost Vapor House Crumble",
    category: "concentrates",
    prices: { "1g": 12 },
    description: "Premium house crumble with smooth vapor and potent effects. Clean extraction, quality terps.",
    image: "/images/r.png",
  },
  {
    id: 13,
    name: "Fizzo Badder",
    category: "concentrates",
    prices: { "1g": 12 },
    description: "Smooth badder consistency with full-spectrum effects. Creamy texture, easy to work with.",
    image: "/images/q.png",
  },
  {
    id: 14,
    name: "Sour Strawberry Crumble",
    category: "concentrates",
    prices: { "1g": 10 },
    description: "House crumble with sweet and sour strawberry terps. Fruity flavor that hits smooth.",
    image: "/images/p.png",
  },
  {
    id: 15,
    name: "New York Sour Diesel Crumble",
    category: "concentrates",
    prices: { "1g": 10 },
    description: "Classic Sour Diesel flavor in premium crumble form. Pungent, gassy, and potent.",
    image: "/images/o.png",
  },
  {
    id: 16,
    name: "Dogwalker OG Crumble",
    category: "concentrates",
    prices: { "1g": 10 },
    description: "OG house crumble with earthy, piney undertones. Perfect for the daily smoker.",
    image: "/images/n.png",
  },
  {
    id: 17,
    name: "Pressure Crumble",
    category: "concentrates",
    prices: { "1g": 10 },
    description: "House crumble with heavy-hitting effects. When you need that extra push.",
    image: "/images/m.png",
  },
  {
    id: 18,
    name: "Northern Lights Crumble",
    category: "concentrates",
    prices: { "1g": 10 },
    description: "Classic Northern Lights in smooth crumble form. Legendary indica effects.",
    image: "/images/l.png",
  },
  {
    id: 19,
    name: "POW Extracts Shatter",
    category: "concentrates",
    prices: { "1g": 15 },
    description: "Premium shatter with glass-like consistency and clean snap. High potency, pure flavor.",
    image: "/images/k.png",
  },

  // ==================== VAPES ====================
  {
    id: 20,
    name: "Muha Meds All-In-One 2g",
    category: "vapes",
    prices: { "2g": 45 },
    deal: "2 for $80",
    description: "All-in-one disposable with 2 grams of premium oil. Multiple strains available. No charging needed.",
    image: "/images/e.png",
  },
  {
    id: 21,
    name: "Bontiq Switch V4 Dual Tank 2g",
    category: "vapes",
    prices: { "2g": 40 },
    description: "Dual tank system lets you switch between two strains. Best of both worlds in one device.",
    image: "/images/f.png",
  },
  {
    id: 22,
    name: "Killa Cali Melts Live Hash Rosin",
    category: "vapes",
    prices: { "1g": 25 },
    description: "Premium live hash rosin in convenient vape form. Solventless, full spectrum, fire terps.",
    image: "/images/g.png",
  },
  {
    id: 23,
    name: "Rosin Ripper Live Hash Rosin",
    category: "vapes",
    prices: { "1g": 30 },
    description: "Full-spectrum live hash rosin with intense flavor. Pure rosin, no additives. Heavy hitter.",
    image: "/images/h.png",
  },
  {
    id: 24,
    name: "Jeeter 2g Live Resin",
    category: "vapes",
    prices: { "2g": 50 },
    description: "Jeeter's famous live resin in a 2g all-in-one. 100% full spectrum. State certified clean.",
    image: "/images/i.png",
  },
  {
    id: 25,
    name: "FRYD Live Resin Vape",
    category: "vapes",
    prices: { "2g": 50 },
    description: "Premium live resin vape with rich terps and smooth hits.",
    image: "/images/j.png",
  },

  // ==================== EDIBLES ====================
  {
    id: 26,
    name: "Punch Bar Original 225mg",
    category: "edibles",
    prices: { each: 20 },
    description: "9 piece grid for easy dosing. 25mg per square, 225mg total. Perfect for beginners to heavy hitters.",
    note: "Flavors: Peaches N Cream, Strawberry Shortcake. Text to check availability.",
    image: "/images/c.jpg",
  },
  {
    id: 27,
    name: "Purity Gummies 500mg",
    category: "edibles",
    prices: { each: 20 },
    description: "10 gummies, 50mg each. Premium 500mg pack. Multiple flavors available.",
    note: "Flavors: Pineapple, White Gummy, Peach, Blackberry, Blue Razz, Strawberry, Green Apple, Tropical Splash. Text to check.",
    image: "/images/b.png",
  },

  // ==================== PREROLLS ====================
  {
    id: 28,
    name: "King Size House Pre-roll",
    category: "prerolls",
    prices: { each: 10 },
    description: "1 King Sized Prerolled Cone. House Hybrid Blend with all flower buds. No shake, no trim.",
    image: "/images/d.png",
  },
  {
    id: 29,
    name: "Tiki Torch Double Infused",
    category: "prerolls",
    prices: { each: 15 },
    deal: "5 for $50",
    description: "King sized cone filled with top shelf flower, double infused with Live Rosin and Dry Sift Hash. Not for beginners.",
    image: "/images/a.png",
  },
];

const categoryFilters: { key: Category; label: string; icon: string }[] = [
  { key: "all", label: "All", icon: "\u{1F525}" },
  { key: "flower", label: "Flower", icon: "\u{1F33F}" },
  { key: "concentrates", label: "Concentrates", icon: "\u{1F36F}" },
  { key: "vapes", label: "Vapes", icon: "\u{1F4A8}" },
  { key: "edibles", label: "Edibles", icon: "\u{1F36C}" },
  { key: "prerolls", label: "Pre-Rolls", icon: "\u{1F6AC}" },
];

const strainColors: Record<string, string> = {
  Indica: "bg-purple/30 text-purple border-purple/50",
  Sativa: "bg-neon/20 text-neon border-neon/50",
  Hybrid: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50",
};

function formatPrices(prices: Record<string, number>): string {
  const entries = Object.entries(prices);
  if (entries.length === 1) {
    const [size, price] = entries[0];
    return size === "each" ? `$${price}` : `${size} — $${price}`;
  }
  return entries.map(([size, price]) => `${size} — $${price}`).join("  \u2022  ");
}

export default function MenuPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <MenuContent />
    </Suspense>
  );
}

function MenuContent() {
  const searchParams = useSearchParams();
  const param = searchParams.get("category");
  const initialCategory: Category =
    param && validCategories.includes(param as Category)
      ? (param as Category)
      : "all";
  const [activeCategory, setActiveCategory] = useState<Category>(initialCategory);

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Header */}
      <div className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 px-3 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neon/5 via-transparent to-transparent" />
        <div className="max-w-[1200px] mx-auto">
          <span className="relative text-neon text-xs font-bold uppercase tracking-[0.3em]">
            Smoke & Terp
          </span>
          <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase mt-4 text-white">
            The <span className="gradient-text">Menu</span>
          </h1>
          <p className="relative text-white/50 mt-4 max-w-xl mx-auto">
            Premium flower, concentrates, vapes, edibles & pre-rolls. All lab tested. Delivered fast.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-3 pb-28">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 pb-4 mb-10">
          {categoryFilters.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                activeCategory === cat.key
                  ? "bg-neon text-black"
                  : "bg-dark-card border border-dark-border text-white/60 hover:border-neon/40 hover:text-white"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Product Count */}
        <div className="text-white/30 text-sm uppercase tracking-widest mb-8 text-center">
          {filtered.length} product{filtered.length !== 1 ? "s" : ""}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group relative bg-dark-card rounded-xl border border-dark-border hover:border-neon/40 transition-all duration-300 overflow-hidden w-full"
            >
              {/* Deal Badge */}
              {product.deal && (
                <div className="absolute top-4 right-4 z-10 bg-orange-500 text-black text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded">
                  {product.deal}
                </div>
              )}

              {/* Product Image */}
              <div className="relative aspect-square bg-gradient-to-br from-dark-card to-black overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Product Info */}
              <div className="p-5">
                {/* Strain Badge */}
                {product.strain && (
                  <span
                    className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border mb-3 ${strainColors[product.strain]}`}
                  >
                    {product.strain}
                  </span>
                )}

                {/* Name */}
                <h3 className="text-lg font-black uppercase text-white group-hover:text-neon transition-colors">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="text-neon font-bold text-sm mt-2">
                  {formatPrices(product.prices)}
                </div>

                {/* Description */}
                <p className="text-white/40 text-sm mt-3 leading-relaxed line-clamp-3">
                  {product.description}
                </p>

                {/* Note */}
                {product.note && (
                  <p className="text-purple/70 text-xs mt-2 italic">
                    {product.note}
                  </p>
                )}

                {/* CTA Button */}
                <button className="mt-4 w-full py-3 rounded-lg border border-dark-border text-white/60 text-sm font-bold uppercase tracking-wider hover:bg-neon hover:text-black hover:border-neon transition-all">
                  Text to Order
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="glass inline-block rounded-xl p-10">
            <h3 className="text-2xl font-black uppercase text-white mb-2">
              Don&apos;t See What You Need?
            </h3>
            <p className="text-white/40 text-sm mb-6">
              We rotate stock weekly. Hit us up — we might have it or can get it.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-3 bg-neon text-black font-black uppercase text-sm tracking-wider rounded hover:bg-neon-dim transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
