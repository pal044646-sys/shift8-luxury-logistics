import { SectionTitle } from "./SectionTitle";
import move1 from "@/assets/move-1.png.asset.json";
import move2 from "@/assets/move-2.png.asset.json";
import move3 from "@/assets/move-3.png.asset.json";
import move4 from "@/assets/move-4.png.asset.json";
import move5 from "@/assets/move-5.png.asset.json";
import move6 from "@/assets/move-6.png.asset.json";
import move7 from "@/assets/move-7.png.asset.json";
import move8 from "@/assets/move-8.png.asset.json";
import move9 from "@/assets/move-9.png.asset.json";

const moves = [
  { src: move1.url, alt: "SHIFT8 truck arriving for a residential pickup", caption: "Residential Pickup" },
  { src: move2.url, alt: "Household boxes packed and loaded inside the SHIFT8 truck", caption: "Careful Loading" },
  { src: move3.url, alt: "Loaded SHIFT8 truck ready for safe transportation", caption: "Ready for Transport" },
  { src: move4.url, alt: "SHIFT8 moving truck in transit between cities", caption: "Safe In Transit" },
  { src: move5.url, alt: "Furniture wrapped and protected before loading", caption: "Premium Packing" },
  { src: move6.url, alt: "SHIFT8 team unloading furniture at the destination", caption: "Careful Unloading" },
  { src: move7.url, alt: "Loaded SHIFT8 truck parked at customer residence", caption: "Doorstep Delivery" },
  { src: move8.url, alt: "Packed household items staged for final placement", caption: "Final Placement" },
  { src: move9.url, alt: "Successful move completed by the SHIFT8 team", caption: "Move Completed" },
];

export function Gallery() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Recent Moves"
          title={<>Real Moves. Real Trust.</>}
          subtitle="Genuine moments from packing, loading, transportation, and successful deliveries by the SHIFT8 team."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {moves.map((move) => (
            <figure
              key={move.src}
              className="group relative glass-card overflow-hidden rounded-2xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={move.src}
                  alt={move.alt}
                  loading="lazy"
                  width={900}
                  height={700}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
              <figcaption
                className="absolute inset-x-0 bottom-0 px-4 py-3 text-sm text-foreground font-medium"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 0%, oklch(0.14 0.06 265 / 0.85) 100%)",
                }}
              >
                {move.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
