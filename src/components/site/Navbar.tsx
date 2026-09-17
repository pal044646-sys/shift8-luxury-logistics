import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Cities", to: "/packers-and-movers" },
  { label: "Routes", to: "/routes" },
  { label: "Track", to: "/track" },
  { label: "Enquiry", to: "/enquiry" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-3 sm:mt-4">
        <nav className="glass-card rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-display">
            <span className="text-2xl sm:text-3xl tracking-widest text-gold-gradient font-bold">
              SHIFT<span className="text-gold">8</span>
            </span>
          </Link>
          <ul className="hidden lg:flex items-center gap-7 text-sm uppercase tracking-wider">
            {links.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-foreground/80 hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/enquiry"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold gold-border text-gold hover:bg-gold hover:text-navy-deep transition-all"
            >
              24/7 Support
            </Link>
          </div>
          <button
            aria-label="Toggle menu"
            className="lg:hidden text-gold p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 glass-card rounded-2xl p-4 space-y-3">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block py-2 px-3 rounded-lg text-foreground/90 hover:bg-gold/10 hover:text-gold uppercase tracking-wider text-sm"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:8439973125"
              className="flex items-center justify-center gap-2 rounded-lg px-4 py-3 mt-2 bg-gold text-navy-deep font-semibold"
            >
              <Phone size={16} /> 8439973125
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
