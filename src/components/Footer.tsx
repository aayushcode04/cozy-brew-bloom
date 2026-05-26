import { Link } from "@tanstack/react-router";
import { Coffee, Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon, FacebookIcon, TwitterIcon } from "./icons/Social";

const socials = [InstagramIcon, FacebookIcon, TwitterIcon];

export function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-border bg-espresso text-cream">
      <div className="absolute inset-0 bg-gradient-warm opacity-10" aria-hidden />
      <div className="container relative mx-auto grid gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-warm shadow-glow">
              <Coffee className="h-5 w-5" />
            </span>
            <span className="font-display text-3xl">
              Blossom<span className="text-gold">.</span>
            </span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/70">
            Slow coffee, warm hours. A neighborhood café for people who measure
            time in cups, conversations, and the smell of freshly ground beans.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 transition hover:border-gold hover:text-gold">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-xl text-gold">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            {[
              { to: "/menu", label: "Menu" },
              { to: "/about", label: "Our story" },
              { to: "/gallery", label: "Gallery" },
              { to: "/careers", label: "Careers" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xl text-gold">Visit</h4>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-copper" /> 42 Linden Lane, Brooklyn NY</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-copper" /> +1 (718) 555-0142</li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-copper" /> hello@blossom.cafe</li>
            <li className="pt-2 text-cream/50">Open daily · 7am – 11pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container mx-auto flex flex-col gap-2 px-6 py-5 text-xs text-cream/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Blossom Café. Brewed with care.</p>
          <p>Crafted for people who linger.</p>
        </div>
      </div>
    </footer>
  );
}
