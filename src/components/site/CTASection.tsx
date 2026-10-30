import { Phone } from "lucide-react";

export function CTASection() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-2xl p-10 sm:p-16 text-center relative overflow-hidden bg-ink text-ivory"
          style={{ boxShadow: "0 30px 60px -30px rgb(36 36 36 / 0.5)" }}
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-red" aria-hidden />
          <p className="font-display tracking-[0.25em] text-xs sm:text-sm text-red font-semibold mb-4 uppercase">
            Premium Support · Fast Response · Transparent Pricing
          </p>
          <h2 className="font-display text-3xl sm:text-5xl text-ivory mb-3">
            Need Help With <span className="text-ivory/80">Your Move?</span>
          </h2>
          <p className="text-ivory/70 mb-8 max-w-xl mx-auto">
            Speak with our support team anytime for booking help, pricing clarity, and moving
            guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="tel:8439973125"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 font-bold text-ink text-lg hover:bg-ivory transition-colors"
            >
              <Phone size={20} /> 8439973125
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
