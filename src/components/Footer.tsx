import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-dark-border">
      <div className="w-full max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-20 py-20 lg:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-20 mb-20">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon to-purple flex items-center justify-center font-black text-black text-xl">
                S
              </div>
              <div>
                <span className="text-xl font-black tracking-wider uppercase text-white">
                  SMOKE
                </span>
                <span className="text-xl font-black tracking-wider uppercase text-neon">
                  &TERP
                </span>
              </div>
            </Link>
            <p className="text-white/40 text-sm mt-6 max-w-xs leading-relaxed">
              Premium cannabis delivered to your door. Quality you can trust,
              service you can count on.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
              Quick Links
            </h4>
            <div className="space-y-4">
              <Link href="/" className="block text-white/40 hover:text-neon text-sm transition-colors">
                Home
              </Link>
              <Link href="/menu" className="block text-white/40 hover:text-neon text-sm transition-colors">
                Menu
              </Link>
              <a href="#about" className="block text-white/40 hover:text-neon text-sm transition-colors">
                About
              </a>
              <a href="#delivery" className="block text-white/40 hover:text-neon text-sm transition-colors">
                Delivery
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
              Products
            </h4>
            <div className="space-y-4">
              <Link href="/menu" className="block text-white/40 hover:text-neon text-sm transition-colors">
                Flower
              </Link>
              <Link href="/menu" className="block text-white/40 hover:text-neon text-sm transition-colors">
                Edibles
              </Link>
              <Link href="/menu" className="block text-white/40 hover:text-neon text-sm transition-colors">
                Vapes
              </Link>
              <Link href="/menu" className="block text-white/40 hover:text-neon text-sm transition-colors">
                Pre-Rolls
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <a href="mailto:info@smokeandterp.com" className="block text-white/40 hover:text-neon text-sm transition-colors">
                info@smokeandterp.com
              </a>
              <span className="block text-white/40 text-sm">
                Citywide Delivery
              </span>
              <span className="block text-white/40 text-sm">
                Open 24/7
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Smoke &amp; Terp. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-white/30 hover:text-neon text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/30 hover:text-neon text-xs transition-colors">
              Terms of Service
            </a>
            <span className="text-white/30 text-xs">21+ Only</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
