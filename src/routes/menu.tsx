import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Leaf, Flame, Sparkles, Award } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

import drink1 from "@/assets/drink-1.jpg";
import drink2 from "@/assets/drink-2.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Blossom Café" },
      { name: "description", content: "Hand-roasted coffees, seasonal kitchen, breakfast, pizza, burgers, desserts and mocktails." },
      { property: "og:title", content: "Menu — Blossom Café" },
      { property: "og:description", content: "Hand-roasted coffees, seasonal kitchen, breakfast, pizza, burgers, desserts and mocktails." },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

type Item = {
  name: string;
  desc: string;
  price: number;
  category: string;
  veg: boolean;
  img?: string;
  chef?: boolean;
  seasonal?: boolean;
};

const items: Item[] = [
  { name: "House Cortado", desc: "Equal parts espresso and steamed milk.", price: 4.5, category: "Coffee", veg: true, img: drink1, chef: true },
  { name: "Single-Origin Pour Over", desc: "Rotating beans, brewed slow.", price: 5.5, category: "Coffee", veg: true },
  { name: "Salted Caramel Latte", desc: "Iced, double shot, slow caramel.", price: 5.75, category: "Coffee", veg: true, img: drink2, seasonal: true },
  { name: "Honey Cardamom Cappuccino", desc: "Cardamom syrup, raw honey foam.", price: 5.25, category: "Coffee", veg: true },
  { name: "Jasmine Green", desc: "Loose-leaf, 75°C, 2 minutes.", price: 4.0, category: "Tea", veg: true },
  { name: "Spiced Masala Chai", desc: "Black tea, ginger, cardamom, milk.", price: 4.5, category: "Tea", veg: true },
  { name: "Sunrise Avocado Toast", desc: "Sourdough, poached egg, microgreens.", price: 14, category: "Breakfast", veg: false, img: dish1, chef: true },
  { name: "Hazelnut Granola Bowl", desc: "House granola, yogurt, berries.", price: 11, category: "Breakfast", veg: true },
  { name: "Wood-Fired Margherita", desc: "San Marzano, fior di latte, basil.", price: 18, category: "Pizza", veg: true, img: dish3 },
  { name: "Hot Honey Pepperoni", desc: "Spicy pepperoni, chili honey drizzle.", price: 20, category: "Pizza", veg: false, seasonal: true },
  { name: "Bourbon Smash Burger", desc: "Wagyu, cheddar, bourbon onions.", price: 22, category: "Burgers", veg: false, img: dish4, chef: true },
  { name: "Portobello Stack", desc: "Grilled mushroom, brie, arugula.", price: 18, category: "Burgers", veg: true },
  { name: "Molten Cacao Cake", desc: "Single-origin chocolate, vanilla ice.", price: 8, category: "Desserts", veg: true, img: dish2, chef: true },
  { name: "Pistachio Tiramisu", desc: "Espresso, mascarpone, pistachio.", price: 9, category: "Desserts", veg: true },
  { name: "Yuzu Spritz", desc: "Yuzu, elderflower, tonic.", price: 9, category: "Mocktails", veg: true, seasonal: true },
  { name: "Smoked Pineapple Cooler", desc: "Charred pineapple, lime, mint.", price: 9, category: "Mocktails", veg: true },
];

const categories = ["All", "Coffee", "Tea", "Breakfast", "Pizza", "Burgers", "Desserts", "Mocktails"];

function MenuPage() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const [vegOnly, setVegOnly] = useState(false);

  const filtered = useMemo(() => {
    return items.filter((it) => {
      if (cat !== "All" && it.category !== cat) return false;
      if (vegOnly && !it.veg) return false;
      if (q && !`${it.name} ${it.desc}`.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [cat, q, vegOnly]);

  const chef = items.filter((i) => i.chef);
  const seasonal = items.filter((i) => i.seasonal);

  return (
    <>
      <PageHeader eyebrow="The menu" title="Slow food, considered drinks." description="Pulled, poured, and plated by people who care." />

      {/* Combos */}
      <section className="container mx-auto px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: "Morning Combo", desc: "Any espresso + avocado toast", price: "$16", save: "Save $2.50" },
            { title: "Date Night", desc: "Two mains + dessert + mocktail", price: "$58", save: "Save $8" },
            { title: "Workspace Pass", desc: "Bottomless filter + pastry · 11am–4pm", price: "$14", save: "Save $6" },
          ].map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-border bg-gradient-warm p-6 text-cream shadow-card">
              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-cream/80">
                <span>{c.title}</span>
                <span className="rounded-full bg-cream/20 px-2 py-0.5">{c.save}</span>
              </div>
              <h3 className="mt-3 font-display text-3xl">{c.price}</h3>
              <p className="mt-1 text-sm text-cream/80">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Search + filter */}
      <section className="container mx-auto mt-16 px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative max-w-md flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search dishes & drinks…" className="w-full rounded-full border border-border bg-card pl-11 pr-5 py-3 text-sm outline-none focus:ring-2 ring-copper/30" />
          </div>
          <label className="inline-flex cursor-pointer items-center gap-2 text-sm">
            <input type="checkbox" checked={vegOnly} onChange={(e) => setVegOnly(e.target.checked)} className="peer sr-only" />
            <span className="grid h-5 w-9 grid-cols-2 items-center rounded-full bg-muted p-0.5 transition peer-checked:bg-gradient-warm">
              <span className="col-start-1 h-4 w-4 rounded-full bg-background shadow transition peer-checked:col-start-2" />
            </span>
            <Leaf className="h-4 w-4 text-copper" /> Vegetarian only
          </label>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                cat === c ? "border-transparent bg-gradient-warm text-cream shadow-glow" : "border-border bg-card text-foreground/80 hover:border-copper hover:text-copper"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* List */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((it, i) => (
            <motion.article
              key={it.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.05 }}
              className="group flex gap-4 rounded-2xl border border-border bg-card p-4 transition hover:border-copper/40 hover:shadow-card"
            >
              {it.img ? (
                <img src={it.img} alt={it.name} loading="lazy" className="h-24 w-24 flex-none rounded-xl object-cover" />
              ) : (
                <div className="grid h-24 w-24 flex-none place-items-center rounded-xl bg-gradient-warm text-cream">
                  <Flame className="h-7 w-7 opacity-50" />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <span aria-label={it.veg ? "Vegetarian" : "Non-vegetarian"} className={`inline-block h-3 w-3 flex-none rounded-sm border ${it.veg ? "border-emerald-600" : "border-red-600"}`}>
                      <span className={`block h-full w-full scale-50 rounded-full ${it.veg ? "bg-emerald-600" : "bg-red-600"}`} />
                    </span>
                    <h3 className="font-display text-xl truncate">{it.name}</h3>
                  </div>
                  <span className="flex-none text-copper">${it.price.toFixed(2)}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{it.desc}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {it.chef && <Tag icon={Award}>Chef pick</Tag>}
                  {it.seasonal && <Tag icon={Sparkles}>Seasonal</Tag>}
                </div>
              </div>
            </motion.article>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full py-16 text-center text-muted-foreground">No items match those filters.</p>
          )}
        </div>
      </section>

      {/* Chef & Seasonal */}
      <section className="container mx-auto grid gap-12 px-6 py-16 md:grid-cols-2">
        <Highlight title="Chef's recommendations" items={chef} icon={Award} />
        <Highlight title="Seasonal specials" items={seasonal} icon={Sparkles} />
      </section>
    </>
  );
}

function Tag({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-[10px] uppercase tracking-widest text-copper">
      <Icon className="h-3 w-3" /> {children}
    </span>
  );
}

function Highlight({ title, items, icon: Icon }: { title: string; items: Item[]; icon: React.ElementType }) {
  return (
    <div className="rounded-3xl border border-border bg-secondary/40 p-8">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-warm text-cream"><Icon className="h-4 w-4" /></span>
        <h3 className="font-display text-2xl">{title}</h3>
      </div>
      <ul className="mt-6 divide-y divide-border">
        {items.map((it) => (
          <li key={it.name} className="flex items-center justify-between py-3">
            <div>
              <div className="font-medium">{it.name}</div>
              <div className="text-xs text-muted-foreground">{it.category}</div>
            </div>
            <div className="text-copper">${it.price.toFixed(2)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
