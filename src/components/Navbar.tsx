"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="w-full max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon to-purple flex items-center justify-center font-black text-black text-xl">
              S
            </div>
            <div>
              <span className="text-xl font-black tracking-wider uppercase text-white group-hover:text-neon transition-colors">
                SMOKE
              </span>
              <span className="text-xl font-black tracking-wider uppercase text-neon">
                &TERP
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-bold uppercase tracking-widest text-white/70 hover:text-neon transition-colors"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="text-sm font-bold uppercase tracking-widest text-white/70 hover:text-neon transition-colors"
            >
              Menu
            </Link>
            <a
              href="#about"
              className="text-sm font-bold uppercase tracking-widest text-white/70 hover:text-neon transition-colors"
            >
              About
            </a>
            <a
              href="#delivery"
              className="text-sm font-bold uppercase tracking-widest text-white/70 hover:text-neon transition-colors"
            >
              Delivery
            </a>
            <a
              href="#contact"
              className="text-sm font-bold uppercase tracking-widest text-white/70 hover:text-neon transition-colors"
            >
              Contact
            </a>
            <Link
              href="/menu"
              className="ml-4 px-6 py-2.5 bg-neon text-black font-black uppercase text-sm tracking-wider rounded-sm hover:bg-neon-dim transition-all animate-pulse-neon"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-7 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-neon transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-neon transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-neon transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 border-t border-dark-border" : "max-h-0"
        }`}
      >
        <div className="px-8 py-6 space-y-4 bg-dark">
          <Link
            href="/"
            className="block text-sm font-bold uppercase tracking-widest text-white/70 hover:text-neon transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/menu"
            className="block text-sm font-bold uppercase tracking-widest text-white/70 hover:text-neon transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Menu
          </Link>
          <a
            href="#about"
            className="block text-sm font-bold uppercase tracking-widest text-white/70 hover:text-neon transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#delivery"
            className="block text-sm font-bold uppercase tracking-widest text-white/70 hover:text-neon transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Delivery
          </a>
          <a
            href="#contact"
            className="block text-sm font-bold uppercase tracking-widest text-white/70 hover:text-neon transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <Link
            href="/menu"
            className="block w-full text-center px-6 py-3 bg-neon text-black font-black uppercase text-sm tracking-wider rounded-sm"
            onClick={() => setIsOpen(false)}
          >
            Order Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
