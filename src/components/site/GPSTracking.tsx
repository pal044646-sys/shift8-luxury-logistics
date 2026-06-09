import gpsTracking from "@/assets/gps-tracking.png";
import { SectionTitle } from "./SectionTitle";

export function GPSTracking() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <div>
          <SectionTitle
            eyebrow="Live GPS Tracking"
            title={<>Live GPS Tracking</>}
            subtitle="Track your shipment in real-time with our GPS-enabled vehicles. Know exactly where your belongings are throughout the journey."
          />
        </div>
        <div className="glass-card rounded-2xl p-3 sm:p-4">
          <img
            src={gpsTracking}
            alt="GPS tracking map with truck route"
            loading="lazy"
            width={1024}
            height={1536}
            className="w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
