import { Phone, MessageCircle, ArrowRight, Sparkles, ShieldCheck, Gauge, Handshake, BadgeCheck } from "lucide-react";
import heroBanner from "@/assets/shift8-hero-truck.jpg.asset.json";

const tags = ["House Shifting", "Office Relocation", "Packing Services", "Local & Interstate"];

const trustBadges = [
  { icon: ShieldCheck, label: "SAFE" },
  { icon: Gauge, label: "FAST" },
  { icon: Handshake, label: "RELIABLE" },
];

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
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 text-xs sm:text-sm text-gold mb-6">
            <Sparkles size={14} /> 🇮🇳 India&apos;s Premium Moving Partner
          </div>

          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.15] mb-6 text-gold-gradient"
            style={{ fontFamily: '"Tiro Devanagari Hindi", "Cinzel", serif' }}
            lang="hi"
          >
            &ldquo;आपका सामान हमारी ज़िम्मेदारी...&rdquo;
          </h1>
          <div className="mb-8 flex flex-wrap items-center gap-3 sm:gap-5">
            {trustBadges.map(({ icon: Icon, label }, i) => (
              <div key={label} className="flex items-center gap-3">
                {i > 0 && <span className="hidden sm:inline-block h-8 w-px bg-gold/40" aria-hidden />}
                <div
                  className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl gold-border"
                  style={{ boxShadow: "var(--shadow-gold)" }}
                >
                  <Icon className="text-gold" size={22} strokeWidth={2.2} />
                </div>
                <span className="font-display text-xl sm:text-2xl tracking-[0.18em] text-gold-gradient font-bold">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 mb-8 gold-border rounded-full px-4 py-1.5 text-xs sm:text-sm text-gold">
            <BadgeCheck size={14} /> No Hidden Charges · Transparent Pricing
          </div>

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
            &ldquo;Move Smart. Save More. Shift with SHIFT8.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
