import { Phone, MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section id="quote" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden gold-border"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.22 0.07 265 / 0.85), oklch(0.16 0.06 265 / 0.95))",
            boxShadow: "var(--shadow-luxe)",
          }}
        >
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{ background: "var(--gradient-gold)" }}
          />
          <p className="font-display tracking-[0.25em] text-xs sm:text-sm text-gold/90 mb-4 uppercase">
            Shift Karna Hi Hai · Toh SHIFT8 Se Karke Paise Bachao
          </p>
          <h2 className="font-display text-3xl sm:text-5xl text-foreground mb-3">
            Get a <span className="text-gold-gradient">Free Moving Estimate</span> Today
          </h2>
          <p className="text-foreground/70 mb-8 max-w-xl mx-auto">
            Speak with our move specialist. No obligations, just clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="tel:8439975345"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-bold text-navy-deep text-lg"
              style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
            >
              <Phone size={20} /> 8439975345
            </a>
            <a
              href="https://wa.me/918439975345"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold glass-card text-gold hover:bg-gold/10 transition"
            >
              <MessageCircle size={20} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
