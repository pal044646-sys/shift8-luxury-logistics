import { Star, Quote } from "lucide-react";
import rahul from "@/assets/testimonial-rahul.jpg";

export function Testimonial() {
  return (
    <section id="reviews" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <Quote className="absolute -top-2 -left-2 text-gold/10" size={180} />
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center relative">
            <div>
              <div className="flex gap-1 mb-5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="font-display text-xl sm:text-2xl leading-relaxed text-foreground mb-6">
                "Excellent service! SHIFT8 made our house move calm and accident-free. Professional
                crew, timely delivery, and zero damages.
                <span className="text-gold"> Highly recommended.</span>"
              </p>
              <div>
                <p className="font-semibold text-gold">Rahul Sharma</p>
                <p className="text-sm text-foreground/60">Haridwar, India</p>
              </div>
            </div>
            <div className="justify-self-center md:justify-self-end">
              <div className="relative">
                <div
                  className="absolute -inset-1 rounded-full opacity-60 blur-md"
                  style={{ background: "var(--gradient-gold)" }}
                />
                <img
                  src={rahul}
                  alt="Rahul Sharma"
                  loading="lazy"
                  width={160}
                  height={160}
                  className="relative w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full border-2 border-gold"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
