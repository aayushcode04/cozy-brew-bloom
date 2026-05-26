import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Play } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

import hero from "@/assets/hero.jpg";
import drink1 from "@/assets/drink-1.jpg";
import drink2 from "@/assets/drink-2.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import about from "@/assets/about.jpg";
import events from "@/assets/events.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Blossom Café" },
      { name: "description", content: "Photographs and reels from the café — mornings, music nights, kitchen, and quiet hours." },
      { property: "og:title", content: "Gallery — Blossom Café" },
      { property: "og:description", content: "Photographs and reels from inside Blossom." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const photos = [
  { src: hero, span: "row-span-2" },
  { src: drink1 },
  { src: dish1 },
  { src: gallery1, span: "row-span-2" },
  { src: dish3 },
  { src: drink2 },
  { src: about, span: "row-span-2" },
  { src: dish2 },
  { src: gallery2 },
  { src: dish4 },
  { src: events, span: "col-span-2" },
];

function GalleryPage() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <PageHeader eyebrow="Inside Blossom" title="A quiet album." description="A rotating diary of mornings, music nights, and everything in between." />

      <section className="container mx-auto px-6 pb-16">
        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4">
          {photos.map((p, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: (i % 6) * 0.05 }}
              onClick={() => setLightbox(p.src)}
              className={`group relative overflow-hidden rounded-2xl ${p.span ?? ""}`}
            >
              <img src={p.src} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-espresso/0 transition group-hover:bg-espresso/30" />
            </motion.button>
          ))}
        </div>
      </section>

      {/* Reels */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="font-display text-3xl md:text-4xl">Reels from the floor</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[gallery1, drink1, events, dish3].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative aspect-[9/16] overflow-hidden rounded-2xl"
            >
              <img src={src} alt="Reel preview" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="grid h-14 w-14 place-items-center rounded-full glass-dark text-cream shadow-glow">
                  <Play className="h-5 w-5 fill-current" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[60] grid place-items-center bg-espresso/90 p-6 backdrop-blur"
          >
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              src={lightbox}
              alt=""
              className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-glow"
            />
            <button onClick={() => setLightbox(null)} aria-label="Close" className="absolute top-6 right-6 grid h-11 w-11 place-items-center rounded-full glass-dark text-cream">
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
