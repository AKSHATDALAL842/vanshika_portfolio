import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { testimonialsData } from '../data';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Achievements() {
  const [testimonials] = useState(testimonialsData);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="achievements" className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-8">

      {/* SECTION 2: CLIENT ENDORSEMENTS / TESTIMONIALS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 space-y-4">
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-brand-text-muted block">
            ENDORSEMENTS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Client Feedback
          </h2>
          <p className="font-sans text-brand-text-muted text-sm leading-relaxed max-w-sm pt-1">
            Kind words from the founders, mentors and teams I've had the chance to create with.
          </p>
        </div>

        <div className="lg:col-span-7 relative">
          <AnimatePresence mode="wait">
              <motion.div
                key="testimonial-carousel"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-zinc-950 border border-brand-border rounded-2xl p-8 md:p-10 space-y-8 relative"
              >
                {/* Rating Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonials[activeIndex]?.rating || 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-white text-white shrink-0" />
                  ))}
                </div>

                {/* Body Text */}
                <p className="font-display text-base md:text-lg text-zinc-100 italic leading-relaxed whitespace-pre-line">
                  "{testimonials[activeIndex]?.text}"
                </p>

                {/* Author Info */}
                <div className="flex justify-between items-end border-t border-brand-border/40 pt-6">
                  <div>
                    <h4 className="font-display text-base font-bold text-white">
                      {testimonials[activeIndex]?.name}
                    </h4>
                    <p className="font-sans text-xs text-brand-text-muted mt-0.5">
                      {testimonials[activeIndex]?.role}
                      {testimonials[activeIndex]?.company && ` • ${testimonials[activeIndex]?.company}`}
                    </p>
                  </div>

                  {/* Slider controls */}
                  <div className="flex gap-2">
                    <button
                      id="btn-testimonial-prev"
                      onClick={handlePrev}
                      className="p-2.5 rounded-lg border border-brand-border hover:bg-white/5 text-white transition-colors cursor-pointer focus:outline-none"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      id="btn-testimonial-next"
                      onClick={handleNext}
                      className="p-2.5 rounded-lg border border-brand-border hover:bg-white/5 text-white transition-colors cursor-pointer focus:outline-none"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
          </AnimatePresence>
        </div>
      </div>

    </section>
  );
}
