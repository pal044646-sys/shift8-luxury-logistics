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
      <div className="bg-background/90 backdrop-blur border-b border-border/70">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-6">
          <Link to="/" className="flex shrink-0 items-center" aria-label="SHIFT8 Movers & Packers — Home">
            <img
              src="/logo.jpg"
              alt="SHIFT8 Movers and Packers"
              width={1280}
              height={441}
              className="h-9 sm:h-11 w-auto"
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-7 text-[13px] font-medium uppercase tracking-wider">
            {links.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-foreground/75 hover:text-red transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex shrink-0 items-center gap-3">
            <a
              href="tel:8439973125"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-ink-soft transition-colors"
            >
              <Phone size={15} /> 24/7 Support
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            className="lg:hidden text-foreground p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {open && (
        <div className="lg:hidden mx-4 sm:mx-6 mt-2 card-surface rounded-xl p-4 space-y-1 shadow-lg">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block rounded-lg py-2.5 px-3 text-foreground/85 hover:bg-red/10 hover:text-red uppercase tracking-wider text-sm font-medium"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:8439973125"
            className="flex items-center justify-center gap-2 rounded-lg px-4 py-3 mt-2 bg-primary text-white font-semibold"
          >
            <Phone size={16} /> 24/7 Support · 8439973125
          </a>
        </div>
      )}
    </header>
  );
}
