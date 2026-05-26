import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Leaf, Heart, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import about from "@/assets/about.jpg";
import hero from "@/assets/hero.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our story — Blossom Café" },
      { name: "description", content: "How Blossom Café started, who we are, and why we still hand-roast every bean." },
      { property: "og:title", content: "Our story — Blossom Café" },
      { property: "og:description", content: "Twelve years of slow coffee on Linden Lane." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="Our story" title="Twelve years of slow coffee." description="A café built on patience, neighbors, and the same espresso machine since 2013." />

      {/* Story */}
      <section className="container mx-auto grid gap-16 px-6 py-16 md:grid-cols-2 md:items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-xs uppercase tracking-[0.3em] text-copper">2013 — today</p>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">A small room, three barstools, one machine.</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>Blossom started in the back of a flower shop on Linden Lane. Maya, our founder, traded a corner office for a roaster and a stack of postcards from coffee farms in Yirgacheffe.</p>
            <p>Twelve years later, the postcards are framed on the wall. The roaster still hums. And somehow, the same people who came in for a flat white on a Tuesday in 2014 still come in for the same one today.</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="overflow-hidden rounded-[2rem] shadow-card">
          <img src={about} alt="Roasted coffee beans" loading="lazy" className="aspect-[4/5] w-full object-cover" />
        </motion.div>
      </section>

      {/* Founder vision */}
      <section className="bg-secondary/40 py-24">
        <div className="container mx-auto grid gap-12 px-6 md:grid-cols-[1fr_2fr] md:items-center">
          <div className="text-center md:text-left">
            <img src="https://i.pravatar.cc/400?img=47" alt="Maya, founder" className="mx-auto h-40 w-40 rounded-full object-cover shadow-glow md:mx-0" />
            <p className="mt-4 font-display text-2xl">Maya Iyer</p>
            <p className="text-sm text-muted-foreground">Founder · Head roaster</p>
          </div>
          <blockquote className="font-display text-3xl leading-snug md:text-5xl">
            "We never wanted to be a chain. We wanted to be the place you walk to on a Sunday — even when it's raining."
          </blockquote>
        </div>
      </section>

      {/* Ambience */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid gap-4 md:grid-cols-3">
          {[hero, gallery2, about].map((src, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="overflow-hidden rounded-2xl">
              <img src={src} alt="Café ambience" loading="lazy" className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-110" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sustainability */}
      <section className="container mx-auto px-6 py-16">
        <div className="rounded-3xl bg-gradient-warm p-10 text-cream md:p-16">
          <div className="grid gap-10 md:grid-cols-3">
            {[
              { icon: Leaf, title: "Direct trade", text: "We buy beans from the same five farms every year. We know them by name." },
              { icon: Heart, title: "Zero waste kitchen", text: "Compostable everything. Spent grounds go to the community garden next door." },
              { icon: Sparkles, title: "Local first", text: "Bread from Marcello, milk from Hawthorne Dairy, eggs from a farm in Hudson." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <div className="grid h-12 w-12 place-items-center rounded-full bg-cream/15"><Icon className="h-5 w-5" /></div>
                <h3 className="mt-4 font-display text-2xl">{title}</h3>
                <p className="mt-2 text-cream/85">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-copper">The team</p>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">The hands behind the cups.</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Maya Iyer", role: "Founder · Roaster", img: "https://i.pravatar.cc/300?img=47" },
            { name: "Theo Ramos", role: "Head Chef", img: "https://i.pravatar.cc/300?img=12" },
            { name: "Soren Park", role: "Lead Barista", img: "https://i.pravatar.cc/300?img=33" },
            { name: "Naima Hassan", role: "Pastry Chef", img: "https://i.pravatar.cc/300?img=49" },
          ].map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group overflow-hidden rounded-2xl bg-card shadow-card hover-lift">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
