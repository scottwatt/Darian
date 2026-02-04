"use client";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-dark">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple/30 to-transparent" />

      {/* Extra top spacer for breathing room from delivery section */}
      <div className="w-full max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-20 pt-40 lg:pt-52 pb-32 lg:pb-44">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side */}
          <div>
            <span className="text-purple text-xs font-bold uppercase tracking-[0.3em]">
              Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase mt-4 text-white leading-tight">
              Hit Us <span className="text-neon neon-text">Up</span>
            </h2>
            <p className="text-white/50 mt-6 text-lg leading-relaxed">
              Questions about products? Want to place an order? Slide into our
              DMs or reach out directly. We&apos;re always here.
            </p>

            {/* Contact methods */}
            <div className="mt-12 space-y-8">
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-lg bg-dark-card border border-dark-border group-hover:border-neon/30 flex items-center justify-center transition-all">
                  <svg className="w-6 h-6 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/40 mb-1">
                    Email
                  </div>
                  <a href="mailto:info@smokeandterp.com" className="text-white font-bold hover:text-neon transition-colors text-lg">
                    info@smokeandterp.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-lg bg-dark-card border border-dark-border group-hover:border-neon/30 flex items-center justify-center transition-all">
                  <svg className="w-6 h-6 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/40 mb-1">
                    Service Area
                  </div>
                  <span className="text-white font-bold text-lg">Citywide Delivery</span>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-lg bg-dark-card border border-dark-border group-hover:border-neon/30 flex items-center justify-center transition-all">
                  <svg className="w-6 h-6 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/40 mb-1">
                    Hours
                  </div>
                  <span className="text-white font-bold text-lg">Open Daily — We Don&apos;t Sleep</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-12">
              <div className="text-xs uppercase tracking-widest text-white/40 mb-4">
                Follow Us
              </div>
              <div className="flex gap-4">
                {["Instagram", "Twitter", "Snapchat"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="px-6 py-3 rounded-lg bg-dark-card border border-dark-border hover:border-neon/30 text-white/60 hover:text-neon text-sm font-bold uppercase tracking-wider transition-all"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Quick order form */}
          <div>
            <div className="glass rounded-lg p-10 sm:p-12">
              <h3 className="text-2xl font-black uppercase text-white mb-3">
                Quick Order
              </h3>
              <p className="text-white/40 text-sm mb-10">
                Drop your info and we&apos;ll get back to you ASAP.
              </p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-xs uppercase tracking-widest text-white/40 mb-3 block">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 bg-dark-card border border-dark-border rounded-lg text-white placeholder-white/20 focus:outline-none focus:border-neon/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest text-white/40 mb-3 block">
                    Phone / Contact
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 bg-dark-card border border-dark-border rounded-lg text-white placeholder-white/20 focus:outline-none focus:border-neon/50 transition-colors"
                    placeholder="How to reach you"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest text-white/40 mb-3 block">
                    What You Need
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-5 py-4 bg-dark-card border border-dark-border rounded-lg text-white placeholder-white/20 focus:outline-none focus:border-neon/50 transition-colors resize-none"
                    placeholder="Tell us what you're looking for..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-neon text-black font-black uppercase tracking-wider rounded-lg hover:bg-neon-dim transition-all hover:scale-[1.02] mt-2"
                >
                  Send Order Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
