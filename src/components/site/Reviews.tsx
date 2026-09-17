import { Star, Quote } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

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
  return (
    <section id="reviews" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Customer Ratings"
          title={<>Rated 5 Stars Across India</>}
          subtitle="What our customers say after shifting with SHIFT8."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="glass-card relative rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60"
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
    </section>
  );
}
