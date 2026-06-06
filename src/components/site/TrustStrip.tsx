import { ShieldCheck, Clock, Users, Truck, Award } from "lucide-react";

const items = [
  { icon: Truck, label: "500+ Moves" },
  { icon: Users, label: "Verified Crew" },
  { icon: Clock, label: "On-Time Delivery" },
  { icon: ShieldCheck, label: "Safe Handling" },
  { icon: Award, label: "5★ Rated" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-gold/15 bg-navy-deep/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <ul className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6">
          {items.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center justify-center gap-3 text-foreground/85">
              <Icon className="text-gold" size={22} />
              <span className="text-xs sm:text-sm uppercase tracking-wider font-semibold">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
