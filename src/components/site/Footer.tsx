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
    <footer className="border-t border-border bg-offwhite/60 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img
              src="/logo.jpg"
              alt="SHIFT8 Movers and Packers"
              width={1280}
              height={441}
              className="h-10 sm:h-12 w-auto mb-4"
            />
            <p className="text-sm text-foreground/65 leading-relaxed">
              India&apos;s premium movers &amp; packers. Moving India, one shift at a time.
            </p>
          </div>
          <div>
            <h4 className="text-red uppercase tracking-widest text-xs font-semibold mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-red" /> +91 8439973125
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-red" /> info@shift8.in
              </li>
              <li className="flex items-center gap-2">
                <Globe size={14} className="text-red" /> www.shift8.in
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-red" /> Haridwar, Uttarakhand
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-red uppercase tracking-widest text-xs font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-foreground/75">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$service"
                    params={{ service: s.slug }}
                    className="hover:text-red transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-red uppercase tracking-widest text-xs font-semibold mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-foreground/75">
              <li>
                <Link to="/services" className="hover:text-red transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/packers-and-movers" className="hover:text-red transition-colors">
                  Cities We Serve
                </Link>
              </li>
              <li>
                <Link to="/routes" className="hover:text-red transition-colors">
                  Intercity Routes
                </Link>
              </li>
              <li>
                <Link to="/track" className="hover:text-red transition-colors">
                  Track Your Move
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-red transition-colors">
                  Moving Guides
                </Link>
              </li>
              <li>
                <Link to="/enquiry" className="hover:text-red transition-colors">
                  Get a Free Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-foreground/80 font-medium">Follow Us</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`SHIFT8 on ${s.label}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-card hairline-border px-4 py-2 text-sm text-foreground/85 hover:text-red hover:border-foreground/25 transition-colors"
                >
                  {s.icon}
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-3 text-xs text-foreground/55">
          <p>© {new Date().getFullYear()} SHIFT8 Movers &amp; Packers. All rights reserved.</p>
          <p className="font-medium text-foreground/70">
            &ldquo;Moving India, One Shift at a Time.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
