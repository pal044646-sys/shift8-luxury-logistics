import { HOME_FAQS, type FAQ as FAQItem } from "@/data/seo";
import { SectionTitle } from "./SectionTitle";
import { ChevronDown } from "lucide-react";

export function FAQ({ faqs }: { faqs?: FAQItem[] }) {
  const items = faqs ?? HOME_FAQS;
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Frequently Asked"
          title={<>Answers Before You Ask</>}
          subtitle="Everything customers ask us about packers and movers, pricing, timelines, and safety."
        />
        <div className="space-y-3">
          {items.map((f, i) => (
            <details
              key={i}
              className="group glass-card rounded-2xl px-5 sm:px-6 py-4 open:border-gold/40 transition-all"
            >
              <summary className="flex cursor-pointer items-start justify-between gap-4 list-none">
                <h3 className="font-display text-base sm:text-lg text-foreground/90 group-open:text-gold transition-colors">
                  {f.q}
                </h3>
                <ChevronDown
                  size={20}
                  className="text-gold shrink-0 mt-0.5 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="mt-3 text-sm sm:text-base text-foreground/70 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
