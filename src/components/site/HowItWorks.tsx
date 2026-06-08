import howItWorks from "@/assets/how-it-works.png.asset.json";
import { SectionTitle } from "./SectionTitle";

const steps = [
  { number: "Step 1", title: "Book Your Move" },
  { number: "Step 2", title: "Survey & Confirmation" },
  { number: "Step 3", title: "Packing & Transportation" },
  { number: "Step 4", title: "Safe Delivery & Unloading" },
];

export function HowItWorks() {
  return (
    <section className="py-24 sm:py-32 border-y border-gold/10 bg-navy-deep/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="How It Works"
          title={<>Simple. Transparent. Reliable.</>}
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="rounded-2xl bg-white p-4 sm:p-6 shadow-[0_25px_60px_-30px_rgba(0,0,0,0.6)]">
            <img
              src={howItWorks.url}
              alt="Flow diagram showing the moving process steps"
              loading="lazy"
              width={1170}
              height={938}
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map((step) => (
              <article key={step.number} className="glass-card rounded-2xl p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-gold/80">{step.number}</p>
                <h3 className="mt-3 font-display text-2xl text-foreground leading-tight">{step.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
