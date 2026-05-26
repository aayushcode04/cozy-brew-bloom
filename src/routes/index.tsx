import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight, Star, Coffee, Leaf, Music, Award, Sparkles, Send, MapPin, Clock,
} from "lucide-react";
import { InstagramIcon } from "@/components/icons/Social";

import hero from "@/assets/hero.jpg";
import drink1 from "@/assets/drink-1.jpg";
import drink2 from "@/assets/drink-2.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import events from "@/assets/events.jpg";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blossom Café — Slow coffee, warm hours" },
      { name: "description", content: "Hand-roasted coffee, seasonal kitchen, and live music nights in the heart of Brooklyn. Reserve a table at Blossom Café." },
      { property: "og:title", content: "Blossom Café — Slow coffee, warm hours" },
      { property: "og:description", content: "Cinematic urban café. Reserve, explore the menu, or join us for live music." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Featured />
      <Story />
      <Signature />
      <Events />
      <Testimonials />
      <Loyalty />
      <Instagram />
      <Newsletter />
      <Visit />
    </>
  );
}

/* -------------------------------- Hero -------------------------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10">
        <img src={hero} alt="Cozy urban café at golden hour" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/30 via-espresso/40 to-espresso/90" />
      </motion.div>

      <motion.div style={{ opacity }} className="container relative mx-auto flex h-full flex-col items-start justify-end px-6 pb-24 text-cream md:pb-32">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs uppercase tracking-[0.3em] text-gold"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
          Now open · Brooklyn, NY
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="max-w-4xl font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.92] tracking-tight"
        >
          Slow coffee, <em className="text-gold">warm</em> hours.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg"
        >
          A neighborhood café where mornings linger, espresso is poured with patience,
          and the kitchen cooks with the seasons.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Link to="/menu" className="group inline-flex items-center gap-2 rounded-full bg-gradient-warm px-7 py-4 text-sm font-medium text-cream shadow-glow transition hover:scale-[1.02]">
            Explore Menu
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/5 px-7 py-4 text-sm font-medium text-cream backdrop-blur transition hover:bg-cream/10">
            Reserve a Table
          </Link>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-cream/60"
      >
        <span className="block animate-float">Scroll</span>
      </motion.div>
    </section>
  );
}

/* -------------------------------- Marquee ----------------------------- */
function Marquee() {
  const items = ["Single Origin", "Slow Brewed", "Seasonal Kitchen", "Live Music", "Locally Sourced", "Open Late", "Hand Roasted"];
  return (
    <div className="overflow-hidden border-y border-border bg-secondary/50 py-5">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap text-sm uppercase tracking-[0.3em] text-muted-foreground">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            {t}
            <Coffee className="h-3 w-3 text-copper" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------- Featured ----------------------------- */
function Featured() {
  const items = [
    { img: drink1, name: "House Cortado", tag: "Espresso", price: "$4.50", desc: "Velvet milk over our signature dark-roast espresso." },
    { img: drink2, name: "Salted Caramel Latte", tag: "Iced", price: "$5.75", desc: "Slow-poured caramel, cold milk, double shot." },
    { img: dish2, name: "Molten Cacao Cake", tag: "Dessert", price: "$8.00", desc: "Single-origin chocolate, vanilla bean ice cream." },
  ];
  return (
    <section className="container mx-auto px-6 py-24 md:py-32">
      <SectionHead eyebrow="Featured" title={<>The morning <em className="text-gradient-warm">menu</em></>} description="A quiet rotation of what our baristas and chefs are pouring this week." />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        className="mt-16 grid gap-6 md:grid-cols-3"
      >
        {items.map((it) => (
          <motion.article key={it.name} variants={fadeUp} className="group relative overflow-hidden rounded-2xl bg-card shadow-card hover-lift">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={it.img} alt={it.name} loading="lazy" className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-110" />
            </div>
            <div className="absolute top-4 left-4 rounded-full glass-dark px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-cream">{it.tag}</div>
            <div className="p-6">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-2xl">{it.name}</h3>
                <span className="text-copper">{it.price}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

/* -------------------------------- Story ------------------------------- */
function Story() {
  return (
    <section className="relative overflow-hidden bg-secondary/40 py-24 md:py-32">
      <div className="container mx-auto grid items-center gap-16 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] shadow-card">
            <img src={about} alt="Roasted coffee beans" loading="lazy" className="aspect-[4/5] w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden h-40 w-40 place-items-center rounded-full bg-gradient-warm text-center text-cream shadow-glow md:grid">
            <div>
              <div className="font-display text-4xl">12yr</div>
              <div className="text-[10px] uppercase tracking-[0.3em]">slow craft</div>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-copper">Our story</p>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            A café built around <em className="text-gradient-warm">conversation</em>.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Blossom began as a small roaster on Linden Lane in 2013. Twelve years
            later, we're still pulling shots in the same room — only now we share
            it with a seasonal kitchen, a quiet workspace upstairs, and Friday
            nights that smell faintly of guitar strings and toasted hazelnut.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6">
            {[
              { icon: Leaf, label: "Sustainably sourced" },
              { icon: Coffee, label: "Hand roasted weekly" },
              { icon: Award, label: "Award-winning baristas" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-card shadow-card">
                  <Icon className="h-5 w-5 text-copper" />
                </div>
                <p className="mt-3 text-xs text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-copper hover:gap-3 transition-all">
            Read our full story <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------ Signature ----------------------------- */
function Signature() {
  const items = [
    { img: dish1, name: "Sunrise Avocado", price: "$14" },
    { img: dish3, name: "Wood-Fired Margherita", price: "$18" },
    { img: dish4, name: "Bourbon Smash Burger", price: "$22" },
    { img: dish2, name: "Molten Cacao", price: "$8" },
  ];
  return (
    <section className="container mx-auto px-6 py-24 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHead eyebrow="Chef's table" title={<>Signature <em className="text-gradient-warm">plates</em></>} description="Seasonal dishes our chef recommends this month." />
        <Link to="/menu" className="hidden text-sm font-medium text-copper hover:underline md:inline-flex items-center gap-1">
          See full menu <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
      >
        {items.map((it) => (
          <motion.div key={it.name} variants={fadeUp} className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
            <img src={it.img} alt={it.name} loading="lazy" className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 text-cream">
              <h3 className="font-display text-xl md:text-2xl">{it.name}</h3>
              <p className="text-sm text-gold">{it.price}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* -------------------------------- Events ------------------------------ */
function Events() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={events} alt="Live music at the café" loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/80 to-espresso/30" />
      </div>
      <div className="container relative mx-auto grid gap-12 px-6 py-32 text-cream md:grid-cols-2 md:py-40">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Nights at Blossom</p>
          <h2 className="font-display text-5xl leading-[0.95] md:text-7xl">
            Live music, <em className="text-gold">warm</em> rooms.
          </h2>
          <p className="mt-6 max-w-md text-cream/80">
            Every Friday & Saturday we trade espresso steam for amber stage lights.
            Acoustic sets, open mics, and the occasional jazz trio.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#events" className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-espresso">See line-up</a>
            <a href="#workspace" className="rounded-full border border-cream/30 px-6 py-3 text-sm font-medium">Daytime workspace</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }} className="grid gap-4">
          {[
            { day: "Fri", date: "Jun 06", title: "Maya Iyer · Acoustic", time: "9:00 PM", icon: Music },
            { day: "Sat", date: "Jun 07", title: "Open Mic Night", time: "8:30 PM", icon: Sparkles },
            { day: "Thu", date: "Jun 12", title: "Latte Art Throwdown", time: "7:00 PM", icon: Coffee },
          ].map(({ day, date, title, time, icon: Icon }) => (
            <div key={title} className="glass-dark flex items-center gap-5 rounded-2xl p-5 transition hover:border-gold/50">
              <div className="grid h-16 w-16 place-items-center rounded-xl bg-gradient-warm">
                <div className="text-center">
                  <div className="text-[10px] uppercase tracking-widest text-cream/80">{day}</div>
                  <div className="font-display text-lg">{date.split(" ")[1]}</div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl">{title}</h3>
                <p className="text-xs text-cream/60">{date} · {time}</p>
              </div>
              <Icon className="h-5 w-5 text-gold" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ----------------------------- Testimonials --------------------------- */
function Testimonials() {
  const items = [
    { name: "Amelia Hart", role: "Writer · Brooklyn", quote: "The kind of café you can't really describe — you just keep coming back. Their cortado ruined every other cortado for me.", img: "https://i.pravatar.cc/200?img=47" },
    { name: "Daniel Okafor", role: "Architect", quote: "I've written half a book on the back booth. The wifi is great. The brioche is better.", img: "https://i.pravatar.cc/200?img=12" },
    { name: "Priya Raman", role: "Photographer", quote: "Friday nights here feel like a private concert. Warm light, warmer drinks.", img: "https://i.pravatar.cc/200?img=32" },
  ];
  return (
    <section className="container mx-auto px-6 py-24 md:py-32">
      <SectionHead eyebrow="Guests" title={<>Words from <em className="text-gradient-warm">regulars</em></>} />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        className="mt-16 grid gap-6 md:grid-cols-3"
      >
        {items.map((t) => (
          <motion.figure key={t.name} variants={fadeUp} className="relative rounded-2xl border border-border bg-card p-8 shadow-card hover-lift">
            <div className="mb-4 flex gap-0.5 text-gold">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <blockquote className="font-display text-xl leading-snug">"{t.quote}"</blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <img src={t.img} alt="" loading="lazy" className="h-11 w-11 rounded-full object-cover" />
              <div>
                <div className="text-sm font-medium">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
}

/* -------------------------------- Loyalty ----------------------------- */
function Loyalty() {
  return (
    <section className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-warm p-10 text-cream shadow-glow md:p-16"
      >
        <div className="relative grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-cream/80">Blossom Circle</p>
            <h3 className="font-display text-4xl leading-tight md:text-5xl">
              Every tenth cup, on us.
            </h3>
            <p className="mt-4 max-w-md text-cream/85">
              Free membership. Early access to seasonal menus, music nights, and
              the secret reserve roasts we only brew for friends.
            </p>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-medium text-espresso transition hover:scale-[1.02]">
              Join the circle <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="ml-auto max-w-sm rotate-[-3deg] rounded-2xl bg-espresso/40 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-cream/70">
                <span>Blossom · Member</span>
                <Coffee className="h-4 w-4" />
              </div>
              <div className="mt-6 font-display text-3xl">Amelia Hart</div>
              <div className="text-sm text-cream/70">Member since 2024</div>
              <div className="mt-6 flex gap-1.5">
                {Array.from({ length: 10 }).map((_, i) => (
                  <span key={i} className={`h-2 flex-1 rounded-full ${i < 7 ? "bg-gold" : "bg-cream/20"}`} />
                ))}
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-widest text-cream/60">7 / 10 to next free cup</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ----------------------------- Instagram ------------------------------ */
function Instagram() {
  const grid = [gallery1, drink1, dish1, gallery2, dish2, drink2, dish3, dish4];
  return (
    <section className="container mx-auto px-6 py-24 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHead eyebrow="@blossom.cafe" title={<>From the <em className="text-gradient-warm">feed</em></>} />
        <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-copper hover:underline">
          <InstagramIcon className="h-4 w-4" /> Follow us
        </a>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-2 md:grid-cols-4">
        {grid.map((src, i) => (
          <a key={i} href="#" className="group relative aspect-square overflow-hidden rounded-xl">
            <img src={src} alt="Instagram post" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 grid place-items-center bg-espresso/0 transition group-hover:bg-espresso/60">
              <InstagramIcon className="h-7 w-7 text-cream opacity-0 transition group-hover:opacity-100" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------- Newsletter ----------------------------- */
function Newsletter() {
  return (
    <section className="container mx-auto px-6">
      <div className="rounded-3xl border border-border bg-secondary/40 p-10 text-center md:p-16">
        <p className="text-xs uppercase tracking-[0.3em] text-copper">Letters from Blossom</p>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
          Slow news, seasonal menus, and the occasional poem.
        </h2>
        <form onSubmit={(e) => e.preventDefault()} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            placeholder="your@email.com"
            className="flex-1 rounded-full border border-border bg-background px-5 py-3.5 text-sm outline-none ring-copper/30 focus:ring-2"
          />
          <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-6 py-3.5 text-sm font-medium text-cream shadow-glow">
            Subscribe <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </button>
        </form>
        <p className="mt-3 text-xs text-muted-foreground">No spam. Just letters. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}

/* -------------------------------- Visit ------------------------------- */
function Visit() {
  return (
    <section className="container mx-auto grid gap-10 px-6 py-24 md:grid-cols-2 md:py-32">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-copper">Visit us</p>
        <h2 className="mt-4 font-display text-5xl leading-[0.95] md:text-6xl">
          We're <em className="text-gradient-warm">around</em> the corner.
        </h2>
        <div className="mt-8 space-y-5 text-sm">
          <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-copper" /><div><div className="font-medium">42 Linden Lane</div><div className="text-muted-foreground">Brooklyn, NY 11211</div></div></div>
          <div className="flex items-start gap-3"><Clock className="mt-0.5 h-5 w-5 text-copper" /><div><div className="font-medium">Open daily</div><div className="text-muted-foreground">Mon – Sun · 7:00 AM – 11:00 PM</div></div></div>
        </div>
        <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-copper hover:text-copper transition">
          Get directions <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="overflow-hidden rounded-3xl border border-border shadow-card">
        <iframe
          title="Map"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-73.9700%2C40.7100%2C-73.9500%2C40.7250&layer=mapnik"
          className="h-[420px] w-full"
          loading="lazy"
        />
      </div>
    </section>
  );
}

/* ---------------------------- Section Head ---------------------------- */
function SectionHead({ eyebrow, title, description }: { eyebrow: string; title: React.ReactNode; description?: string }) {
  return (
    <div className="max-w-2xl">
      <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xs uppercase tracking-[0.3em] text-copper">{eyebrow}</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="mt-4 font-display text-4xl leading-tight md:text-6xl">
        {title}
      </motion.h2>
      {description && (
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mt-4 text-muted-foreground">
          {description}
        </motion.p>
      )}
    </div>
  );
}
