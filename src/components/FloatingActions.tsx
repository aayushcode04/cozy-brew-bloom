import { Link } from "@tanstack/react-router";
import { MessageCircle, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingActions() {
  return (
    <>
      {/* Sticky mobile reservation CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/90 backdrop-blur md:hidden">
        <div className="flex gap-2 p-3">
          <Link
            to="/menu"
            className="flex-1 rounded-full border border-border px-4 py-3 text-center text-sm font-medium"
          >
            View Menu
          </Link>
          <Link
            to="/contact"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-warm px-4 py-3 text-center text-sm font-medium text-cream shadow-glow"
          >
            <CalendarDays className="h-4 w-4" /> Reserve
          </Link>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <motion.a
        href="https://wa.me/17185550142"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring" }}
        className="fixed bottom-24 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-gradient-warm text-cream shadow-glow md:bottom-6"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute -top-1 -right-1 h-3 w-3 animate-ping rounded-full bg-gold" />
      </motion.a>
    </>
  );
}
