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
  { src: move1.url, alt: "SHIFT8 truck parked outside a customer home during a residential move" },
  { src: move2.url, alt: "Packed household boxes loaded tightly inside the SHIFT8 truck" },
  { src: move3.url, alt: "Rear view of a loaded SHIFT8 truck with boxes ready for transport" },
  { src: move4.url, alt: "Side view of a SHIFT8 moving truck on an urban street" },
  { src: move5.url, alt: "Household items wrapped securely for safe shifting" },
  { src: move6.url, alt: "SHIFT8 truck being unloaded with protected furniture and boxes" },
  { src: move7.url, alt: "Close-up of the SHIFT8 loaded truck beside a residential road" },
  { src: move8.url, alt: "Additional wrapped moving items staged inside a home entrance" },
  { src: move9.url, alt: "Another view of the SHIFT8 truck with packed items outside the property" },
];

export function Gallery() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Our Recent Moves"
          title={<>Our Recent Moves</>}
          subtitle="Real Shifting Projects Completed Across India"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {moves.map((move, index) => (
            <figure
              key={move.src}
              className="group glass-card overflow-hidden rounded-2xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={move.src}
                  alt={move.alt}
                  loading="lazy"
                  width={900}
                  height={700}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm text-foreground/70">
                Project {index + 1}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
