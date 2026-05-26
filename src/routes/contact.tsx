import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ChevronDown, Send, Check } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { InstagramIcon, FacebookIcon, TwitterIcon } from "@/components/icons/Social";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & reservations — Blossom Café" },
      { name: "description", content: "Reserve a table, find our branches, message the team, or check our hours." },
      { property: "og:title", content: "Contact — Blossom Café" },
      { property: "og:description", content: "Reserve a table, find a branch, message the team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const branches = [
  { name: "Brooklyn — Linden Lane", address: "42 Linden Lane, Brooklyn NY 11211", phone: "+1 (718) 555-0142", hours: "7am – 11pm daily" },
  { name: "Manhattan — Greenwich", address: "118 Greenwich Ave, NY 10014", phone: "+1 (212) 555-0188", hours: "7am – 10pm daily" },
  { name: "Queens — Astoria", address: "31-08 Ditmars Blvd, Astoria NY 11105", phone: "+1 (718) 555-0210", hours: "8am – 10pm daily" },
];

const faqs = [
  { q: "Do you take walk-ins?", a: "Always. Reservations are recommended for parties of 4+ on Friday/Saturday nights." },
  { q: "Do you have wifi?", a: "Yes — fast and free. The back room is our designated quiet workspace from 11am to 4pm." },
  { q: "Are you dog friendly?", a: "Dogs are welcome on the patio. Inside, only service animals — health code." },
  { q: "Do you do private events?", a: "Yes. We host buyouts of up to 60 people. Email events@blossom.cafe for our menu." },
  { q: "Are you hiring?", a: "Often. See our careers page for current openings." },
];

function ContactPage() {
  const [open, setOpen] = useState<number | null>(0);
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader eyebrow="Say hello" title="We'd love to hear from you." description="Reservations, private events, press, or just to ask what's brewing today." />

      <section className="container mx-auto grid gap-10 px-6 pb-16 lg:grid-cols-[1.2fr_1fr]">
        {/* Form */}
        <div className="rounded-3xl border border-border bg-card p-8 shadow-card md:p-10">
          {sent ? (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid place-items-center rounded-2xl bg-gradient-warm p-10 text-center text-cream">
              <Check className="h-10 w-10" />
              <p className="mt-3 font-display text-2xl">Message received.</p>
              <p className="text-cream/80">We'll reply within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-4">
              <h2 className="font-display text-3xl">Send a message</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name"><input required className="cinput" /></Field>
                <Field label="Email"><input type="email" required className="cinput" /></Field>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Subject">
                  <select className="cinput">
                    <option>Reservation</option>
                    <option>Private event</option>
                    <option>Press</option>
                    <option>General question</option>
                  </select>
                </Field>
                <Field label="Preferred branch">
                  <select className="cinput">
                    {branches.map((b) => <option key={b.name}>{b.name}</option>)}
                  </select>
                </Field>
              </div>
              <Field label="Message"><textarea rows={5} className="cinput" /></Field>
              <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-6 py-3.5 text-sm font-medium text-cream shadow-glow">
                Send message <Send className="h-4 w-4" />
              </button>
              <style>{`.cinput { width: 100%; border-radius: 0.75rem; border: 1px solid var(--border); background: var(--background); padding: 0.75rem 1rem; font-size: 0.875rem; outline: none; }
              .cinput:focus { box-shadow: 0 0 0 2px color-mix(in oklab, var(--copper) 30%, transparent); border-color: var(--copper); }`}</style>
            </form>
          )}
        </div>

        {/* Side info */}
        <div className="space-y-6">
          <div className="rounded-3xl bg-gradient-warm p-8 text-cream shadow-glow">
            <h3 className="font-display text-2xl">Open daily</h3>
            <div className="mt-4 space-y-2 text-sm text-cream/85">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> Mon – Thu · 7:00 AM – 10:00 PM</div>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> Fri – Sat · 7:00 AM – 12:00 AM</div>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> Sun · 8:00 AM – 10:00 PM</div>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8">
            <h3 className="font-display text-2xl">Find us elsewhere</h3>
            <div className="mt-4 flex gap-3">
              {[InstagramIcon, FacebookIcon, TwitterIcon].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="grid h-11 w-11 place-items-center rounded-full border border-border transition hover:border-copper hover:text-copper">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-copper" /> hello@blossom.cafe</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-copper" /> +1 (718) 555-0142</div>
            </div>
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="font-display text-4xl md:text-5xl">Our branches</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {branches.map((b, i) => (
            <motion.div key={b.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-border bg-card p-6 hover-lift">
              <div className="text-xs uppercase tracking-widest text-copper">Branch</div>
              <h3 className="mt-1 font-display text-2xl">{b.name}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-copper" />{b.address}</li>
                <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-copper" />{b.phone}</li>
                <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 text-copper" />{b.hours}</li>
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Map */}
      <section className="container mx-auto px-6 pb-16">
        <div className="overflow-hidden rounded-3xl border border-border shadow-card">
          <iframe
            title="Map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-73.9700%2C40.7100%2C-73.9500%2C40.7250&layer=mapnik"
            className="h-[480px] w-full"
            loading="lazy"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto max-w-3xl px-6 py-16">
        <h2 className="font-display text-4xl md:text-5xl text-center">Questions, answered.</h2>
        <div className="mt-10 divide-y divide-border rounded-3xl border border-border bg-card">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 p-6 text-left">
                  <span className="font-display text-xl">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 flex-none text-copper transition ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm text-muted-foreground">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
