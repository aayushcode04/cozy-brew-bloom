import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Heart, Coffee, Sparkles, Upload, GraduationCap, ArrowRight, Check } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Blossom Café" },
      { name: "description", content: "Open roles, internships, and the people behind the espresso machine. Join the Blossom team." },
      { property: "og:title", content: "Careers — Blossom Café" },
      { property: "og:description", content: "Open roles and internships at Blossom Café." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const roles = [
  { title: "Lead Barista", type: "Full-time", location: "Brooklyn, NY", tag: "Coffee" },
  { title: "Pastry Chef", type: "Full-time", location: "Brooklyn, NY", tag: "Kitchen" },
  { title: "Weekend Host", type: "Part-time", location: "Brooklyn, NY", tag: "Front of house" },
  { title: "Roaster's Apprentice", type: "Internship", location: "Brooklyn, NY", tag: "Roastery" },
];

const timeline = [
  { step: "Apply", desc: "Send a short note + resume." },
  { step: "Chat", desc: "15 minute call with the team." },
  { step: "Stage", desc: "Spend a morning behind the bar." },
  { step: "Offer", desc: "Welcome to Blossom." },
];

function CareersPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHeader eyebrow="Careers" title="Work where you'd want to hang out." description="We're hiring kind, curious people who care about coffee, food, and the small details of a good morning." />

      {/* Why */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { icon: Heart, title: "People-first", text: "Closed Sundays for staff. Mental health days, no questions asked." },
            { icon: Coffee, title: "Free training", text: "SCA-certified barista courses, on us." },
            { icon: Sparkles, title: "Real growth", text: "Every lead today was a part-timer two years ago." },
            { icon: Briefcase, title: "Fair pay", text: "Living wage minimum. Tips split evenly." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6 hover-lift">
              <Icon className="h-6 w-6 text-copper" />
              <h3 className="mt-4 font-display text-xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open roles */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h2 className="font-display text-4xl md:text-5xl">Open positions</h2>
          <p className="text-sm text-muted-foreground">{roles.length} roles open</p>
        </div>
        <div className="mt-8 grid gap-4">
          {roles.map((r, i) => (
            <motion.a
              key={r.title}
              href="#apply"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group flex items-center justify-between rounded-2xl border border-border bg-card p-6 transition hover:border-copper hover:shadow-card"
            >
              <div>
                <div className="text-xs uppercase tracking-widest text-copper">{r.tag}</div>
                <h3 className="mt-1 font-display text-2xl">{r.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{r.type} · {r.location}</p>
              </div>
              <span className="grid h-12 w-12 place-items-center rounded-full bg-secondary text-foreground transition group-hover:bg-gradient-warm group-hover:text-cream">
                <ArrowRight className="h-5 w-5" />
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Culture */}
      <section className="bg-secondary/40 py-24">
        <div className="container mx-auto grid gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-copper">Culture</p>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">A crew, not a roster.</h2>
            <p className="mt-4 text-muted-foreground">
              We eat together before service. We close one Sunday a month for a
              long lunch upstate. We believe a great café is a great team that
              happens to make coffee.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[47, 12, 33, 49, 5, 22, 18, 25, 36].map((i, k) => (
              <motion.img key={k} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: k * 0.04 }} src={`https://i.pravatar.cc/200?img=${i}`} alt="" loading="lazy" className="aspect-square w-full rounded-2xl object-cover" />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="font-display text-4xl md:text-5xl">How hiring works</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {timeline.map((t, i) => (
            <motion.div key={t.step} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="relative rounded-2xl border border-border bg-card p-6">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-warm text-cream font-display text-lg">{i + 1}</div>
              <h3 className="mt-4 font-display text-xl">{t.step}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Internships */}
      <section className="container mx-auto px-6 pb-16">
        <div className="rounded-3xl bg-gradient-warm p-10 text-cream md:p-16">
          <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-center">
            <GraduationCap className="h-14 w-14" />
            <div>
              <h2 className="font-display text-3xl md:text-4xl">Internships & apprenticeships</h2>
              <p className="mt-2 max-w-2xl text-cream/85">
                We host two 12-week apprenticeships a year — one in roasting, one
                in pastry. No experience needed. Just curiosity and a willingness
                to wake up early.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-8 md:p-12 shadow-card">
          <h2 className="font-display text-3xl md:text-4xl">Apply now</h2>
          <p className="mt-2 text-sm text-muted-foreground">Tell us a little about yourself.</p>

          {submitted ? (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 grid place-items-center rounded-2xl bg-gradient-warm p-10 text-center text-cream">
              <Check className="h-10 w-10" />
              <p className="mt-3 font-display text-2xl">Thanks for applying.</p>
              <p className="text-cream/80">We'll be in touch within a week.</p>
            </motion.div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name"><input required className="input" /></Field>
                <Field label="Email"><input type="email" required className="input" /></Field>
              </div>
              <Field label="Role applying for">
                <select className="input">
                  {roles.map((r) => <option key={r.title}>{r.title}</option>)}
                </select>
              </Field>
              <Field label="Why Blossom?"><textarea rows={4} className="input" /></Field>
              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-border bg-secondary/40 p-4 text-sm text-muted-foreground hover:border-copper">
                <Upload className="h-5 w-5 text-copper" />
                <span>Upload resume (PDF, DOCX)</span>
                <input type="file" className="sr-only" />
              </label>
              <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-6 py-3.5 text-sm font-medium text-cream shadow-glow">
                Submit application <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
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
      <style>{`.input { width: 100%; border-radius: 0.75rem; border: 1px solid var(--border); background: var(--background); padding: 0.75rem 1rem; font-size: 0.875rem; outline: none; }
      .input:focus { box-shadow: 0 0 0 2px color-mix(in oklab, var(--copper) 30%, transparent); border-color: var(--copper); }`}</style>
    </label>
  );
}
