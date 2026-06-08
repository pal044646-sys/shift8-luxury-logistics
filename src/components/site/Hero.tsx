import { Phone, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import heroBanner from "@/assets/shift8-hero-truck.jpg.asset.json";

const tags = ["House Shifting", "Office Relocation", "Packing Services", "Local & Interstate"];

export function Hero() {
  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBanner.url}
          alt="SHIFT8 branded moving truck banner"
          width={1600}
          height={900}
          fetchPriority="high"
          className="w-full h-full object-cover opacity-45"
          style={{ objectPosition: "center center" }}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 text-xs sm:text-sm text-gold mb-6">
            <Sparkles size={14} /> 🇮🇳 India&apos;s Premium Moving Partner
          </div>

          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] mb-4">
            <span className="text-gold-gradient">Safe.</span>{" "}
            <span className="text-gold-gradient">Fast.</span>{" "}
            <span className="text-gold-gradient">Reliable.</span>
          </h1>
          <p className="text-2xl sm:text-4xl text-foreground font-bold mb-8 max-w-2xl leading-tight">
            आपका सामान हमारी ज़िम्मेदारी
          </p>

          <ul className="flex flex-wrap gap-2 mb-10">
            {tags.map((t) => (
              <li
                key={t}
                className="text-xs sm:text-sm gold-border rounded-full px-4 py-1.5 text-foreground/90"
              >
                {t}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 font-semibold text-navy-deep"
              style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
            >
              24/7 Support <ArrowRight size={18} />
            </a>
            <a
              href="tel:8439973125"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 font-semibold glass-card text-gold hover:bg-gold/10 transition"
            >
              <Phone size={18} /> Call Now
            </a>
            <a
              href="https://wa.me/918439973125"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 font-semibold glass-card text-foreground/90 hover:bg-gold/10 transition"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>

          <p className="mt-10 text-sm text-gold/80 italic font-display tracking-wide">
            "Move Smart. Save More. Shift with SHIFT8."
          </p>
        </div>
      </div>
    </section>
  );
}
