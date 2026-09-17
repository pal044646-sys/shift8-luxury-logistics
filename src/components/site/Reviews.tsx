import { useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Ravi Sharma",
    city: "Delhi",
    text: "Bhai ne pura ghar shift kar diya ek hi din me. Kuch bhi toota nahi, bhot badhiya kaam!",
  },
  {
    name: "Amit Verma",
    city: "Mumbai",
    text: "Car shift kar di humari Mumbai se Pune, zero scratch. Driver bhai bhot acche the.",
  },
  {
    name: "Suresh Patel",
    city: "Ahmedabad",
    text: "Office ka saara furniture bina nuksan pahunch gaya. Team bahut professional thi.",
  },
  {
    name: "Priya Singh",
    city: "Lucknow",
    text: "Haridwar se Lucknow saman aaya bilkul safe. Packing karke dekho to sab perfect.",
  },
  {
    name: "Vikram Chauhan",
    city: "Gurugram",
    text: "Bhai ne sofa ko itni achi tarah wrap kiya ki main khud hairan. Full paisa vasool.",
  },
  {
    name: "Neha Gupta",
    city: "Jaipur",
    text: "Shift ki raat ko bhi staff ne baat ki aur delivery time pe hui. Thank you SHIFT8!",
  },
  {
    name: "Karan Mehta",
    city: "Chandigarh",
    text: "Bike transport karayi thi, bike bilkul nayi jaisi pahunchi. Bhot badhiya service.",
  },
  {
    name: "Manish Kumar",
    city: "Patna",
    text: "Maine socha tha kaam me der lagegi, par ekdum time pe sab set. Team dil jeet li.",
  },
  {
    name: "Sunita Devi",
    city: "Dehradun",
    text: "Packing se le kar placement tak sab handle kiya. Ghar waale bhi impressed.",
  },
  {
    name: "Rajesh Yadav",
    city: "Kolkata",
    text: "Intercity moving me bhi itna dhyaan milega socha nahi tha. Must try!",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-gold" aria-label="Rated 5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} fill="currentColor" className="shrink-0" />
      ))}
    </div>
  );
}

export function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 16 : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="reviews" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 sm:gap-8 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-gold/50" />
              <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gold">
                Customer Ratings
              </span>
              <span className="h-px w-10 bg-gold/50" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gold-gradient">
              Rated 5 Stars Across India
            </h2>
            <p className="mt-5 text-foreground/75 text-base sm:text-lg leading-relaxed">
              What our customers say after shifting with SHIFT8.
            </p>
          </div>
          <div className="hidden sm:flex gap-2 shrink-0">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous reviews"
              className="flex h-11 w-11 items-center justify-center rounded-full glass-card text-gold hover:border-gold/60 hover:bg-gold/10 transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next reviews"
              className="flex h-11 w-11 items-center justify-center rounded-full glass-card text-gold hover:border-gold/60 hover:bg-gold/10 transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth pb-2"
        >
          {reviews.map((review) => (
            <div
              key={review.name}
              data-card
              className="glass-card relative w-[86%] shrink-0 snap-center sm:w-[47%] lg:w-[31.5%] rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60"
            >
              <Quote size={28} className="absolute top-4 right-4 text-gold/10" aria-hidden />
              <Stars />
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{review.text}</p>
              <div className="mt-4 pt-3 border-t border-gold/10">
                <p className="font-semibold text-gold">{review.name}</p>
                <p className="text-xs text-foreground/60">{review.city}</p>
              </div>
            </div>
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
