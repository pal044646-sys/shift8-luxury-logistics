import {
  Phone,
  ArrowRight,
  ShieldCheck,
  Gauge,
  Handshake,
  BadgeCheck,
  MapPin,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

const tags = ["House Shifting", "Office Relocation", "Intercity Moving", "Car & Bike Transport"];

const trustBadges = [
  { icon: ShieldCheck, label: "SAFE" },
  { icon: Gauge, label: "FAST" },
  { icon: Handshake, label: "RELIABLE" },
];

export function Hero() {
  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-20 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 hairline-border rounded-full bg-card px-4 py-1.5 text-xs sm:text-sm font-medium text-red mb-6">
              <ShieldCheck size={14} /> India&apos;s Premium Moving Partner
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-extrabold leading-[1.08] tracking-tight text-foreground uppercase">
              Packers &amp; Movers <span className="text-red">Across India</span>
            </h1>
            <p
              className="mb-6 mt-5 text-2xl sm:text-3xl font-semibold text-foreground/80"
              style={{ fontFamily: '"Tiro Devanagari Hindi", serif' }}
              lang="hi"
            >
              &ldquo;आपका सामान हमारी ज़िम्मेदारी&rdquo;
            </p>
            <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 mb-8 text-xs sm:text-sm text-foreground/70">
              <MapPin size={14} className="text-red" /> Head Office: Haridwar
              <span className="text-foreground/30">|</span>
              Service Available Pan India
            </div>

            <div className="mb-8 flex flex-wrap items-center gap-3 sm:gap-5">
              {trustBadges.map(({ icon: Icon, label }, i) => (
                <div key={label} className="flex items-center gap-3">
                  {i > 0 && (
                    <span className="hidden sm:inline-block h-8 w-px bg-border" aria-hidden />
                  )}
                  <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl hairline-border bg-card shadow-card">
                    <Icon className="text-red" size={22} strokeWidth={2.2} />
                  </div>
                  <span className="font-display text-xl sm:text-2xl font-bold tracking-[0.14em] text-foreground">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div className="inline-flex items-center gap-2 mb-8 rounded-xl bg-card hairline-border px-4 py-2.5 text-xs sm:text-sm font-semibold text-foreground">
              <BadgeCheck size={14} className="text-red shrink-0" /> No Hidden Charges · Transparent
              Pricing
            </div>

            <ul className="flex flex-wrap gap-2 mb-10">
              {tags.map((t) => (
                <li
                  key={t}
                  className="text-xs sm:text-sm rounded-full bg-card hairline-border px-4 py-1.5 text-foreground/85"
                >
                  {t}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/enquiry"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-7 py-4 font-bold bg-primary text-primary-foreground hover:bg-ink-soft transition-colors"
              >
                Get Instant Quote <ArrowRight size={18} />
              </Link>
              <Link
                to="/track"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-7 py-4 font-bold text-foreground bg-card hairline-border hover:border-foreground/30 transition-colors"
              >
                Track Your Move <ArrowRight size={18} />
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-3">
              <a
                href="tel:8439973125"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 font-semibold bg-red text-white hover:bg-red-deep transition-colors"
              >
                <Phone size={18} /> Call 8439973125
              </a>
            </div>

            <p className="mt-10 text-sm text-foreground/60 font-medium">
              &ldquo;Move Smart. Save More. Shift with SHIFT8.&rdquo;
            </p>
          </div>
      </div>
    </section>
  );
}
