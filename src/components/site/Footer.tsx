import { Phone, Mail, Globe, MapPin, Instagram, Facebook } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SERVICES } from "@/data/seo";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/shift8india?stkn=MXJxYzFkdWJzejN6eA==",
    icon: <Instagram size={20} />,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/14rQvYo7SCT/?mibextid=wwXIfr",
    icon: <Facebook size={20} />,
  },
  {
    label: "Reddit",
    href: "https://www.reddit.com/u/Shift8India",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden>
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm4.5 6.7a1.2 1.2 0 0 1 1.1 1.2c0 .5-.3 1-.8 1.2a4.9 4.9 0 0 1 .2 1.4c0 2.8-2.8 5-6 5s-6-2.2-6-5c0-.5.1-1 .2-1.4a1.6 1.6 0 0 1-1-1.5 1.2 1.2 0 1 1 2 .4 1.6 1.6 0 0 1 .3-.9l2.1-2a2 2 0 0 1 2.3-.2l1.9-1.2a2 2 0 0 1 2.8.9l1 .5a1.8 1.8 0 0 1 2.3 0 1.2 1.2 0 0 1 1.1-1.2c.66 0 1.2 1.1 1.2 2.5zM8.7 10.5a1.3 1.3 0 0 0-1.3-1.3 1.3 1.3 0 0 0-1.3 1.3 1.3 1.3 0 0 0 1.3 1.3 1.3 1.3 0 0 0 1.3-1.3zm6.6 4.1a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1 3.3-.2l-3.3 3.3a.3.3 0 0 0 .3.5l3.3-3.3a2.5 2.5 0 0 1 1.4-.4zm-.7-4.1a1.3 1.3 0 0 0-1.3-1.3 1.3 1.3 0 0 0-1.3 1.3 1.3 1.3 0 0 0 1.3 1.3 1.3 1.3 0 0 0 1.3-1.3z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-gold/15 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="font-display text-3xl tracking-widest text-gold-gradient font-bold mb-3">
              SHIFT<span className="text-gold">8</span>
            </div>
            <p className="text-sm text-foreground/65 leading-relaxed">
              India&apos;s premium movers &amp; packers. Moving India, one shift at a time.
            </p>
          </div>
          <div>
            <h4 className="text-gold uppercase tracking-widest text-xs mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-gold" /> +91 8439973125
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-gold" /> info@shift8.in
              </li>
              <li className="flex items-center gap-2">
                <Globe size={14} className="text-gold" /> www.shift8.in
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-gold" /> Haridwar, Uttarakhand
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gold uppercase tracking-widest text-xs mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-foreground/75">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$service"
                    params={{ service: s.slug }}
                    className="hover:text-gold transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-gold uppercase tracking-widest text-xs mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-foreground/75">
              <li>
                <Link to="/services" className="hover:text-gold transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/packers-and-movers" className="hover:text-gold transition-colors">
                  Cities We Serve
                </Link>
              </li>
              <li>
                <Link to="/routes" className="hover:text-gold transition-colors">
                  Intercity Routes
                </Link>
              </li>
              <li>
                <Link to="/track" className="hover:text-gold transition-colors">
                  Track Your Move
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-gold transition-colors">
                  Moving Guides
                </Link>
              </li>
              <li>
                <Link to="/enquiry" className="hover:text-gold transition-colors">
                  Get a Free Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gold/15">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gold font-semibold">Follow Us</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`SHIFT8 on ${s.label}`}
                  className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 text-sm text-foreground/85 hover:text-gold hover:border-gold/60 transition-colors"
                >
                  {s.icon}
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gold/15 flex flex-col sm:flex-row justify-between gap-3 text-xs text-foreground/55">
          <p>© {new Date().getFullYear()} SHIFT8 Movers &amp; Packers. All rights reserved.</p>
          <p className="italic font-display tracking-wide text-gold/80">
            "Moving India, One Shift at a Time."
          </p>
        </div>
      </div>
      <a
        href="https://wa.me/918439973125"
        aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-2xl transition hover:scale-110"
      >
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
          <path d="M19.11 17.21c-.29-.15-1.72-.85-1.98-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.71-1.6-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.58-.9-2.17-.23-.57-.47-.49-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.43 0 1.43 1.05 2.82 1.2 3.01.15.2 2.07 3.17 5.02 4.44.7.3 1.25.48 1.68.62.71.22 1.35.19 1.86.12.57-.09 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.56-.34M16.04 26.65h-.01a10.94 10.94 0 0 1-5.57-1.53l-.4-.24-4.15 1.09 1.11-4.05-.26-.42a10.94 10.94 0 1 1 9.28 5.15M27.36 4.62A15.94 15.94 0 0 0 16.04 0C7.16 0 .04 7.12.04 16c0 2.85.74 5.55 2.13 7.94L0 32l8.31-2.18a15.96 15.96 0 0 0 7.73 1.97h.01c8.88 0 16-7.12 16-16 0-4.27-1.66-8.28-4.69-11.17" />
        </svg>
      </a>
    </footer>
  );
}
