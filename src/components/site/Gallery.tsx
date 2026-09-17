import { SectionTitle } from "./SectionTitle";

const moves = [
  {
    src: "/recent-moves/car-with-emptystate.jpg",
    alt: "SHIFT8 car transporter with space ready for your car",
  },
  { src: "/recent-moves/car-loaded.jpg", alt: "Car loaded for transport by the SHIFT8 team" },
  { src: "/recent-moves/bike-pack.jpg", alt: "Bike packed for safe transport by SHIFT8" },
  { src: "/recent-moves/pre-load-car.jpg", alt: "Car prepared for loading by the SHIFT8 team" },
  { src: "/recent-moves/move-1.png", alt: "SHIFT8 truck at a residential pickup" },
  { src: "/recent-moves/move-2.png", alt: "Boxes packed and loaded inside a SHIFT8 truck" },
  { src: "/recent-moves/move-8.png", alt: "Packed household items staged for placement" },
  { src: "/recent-moves/move-4.png", alt: "SHIFT8 moving truck in transit" },
];

export function Gallery() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Recent Moves"
          title={<>Real Moves. Real Trust.</>}
          subtitle="Recent moves by the SHIFT8 team — from packing and loading to transit and doorstep delivery."
        />

        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-4 px-4 pb-2 sm:mx-0 sm:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:snap-none md:pb-0">
          {moves.map((move) => (
            <figure
              key={move.src}
              className="group relative w-[82%] shrink-0 snap-center sm:w-[420px] md:w-auto glass-card overflow-hidden rounded-2xl"
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
            </figure>
          ))}
        </div>
      </div>

      <style>{`
        .no-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
