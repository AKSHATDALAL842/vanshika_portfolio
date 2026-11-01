import { motion } from 'motion/react';
import { MapPin, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden border-b border-brand-border">
      {/* Dynamic ambient grid overlay or glowing nodes */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Core CTA */}
        <div className="text-center mb-16 space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tighter"
          >
            Let's Create Together
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-brand-text-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
          >
            Ready to elevate your brand with visual precision? Let's connect and start your project.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="pt-2"
          >
            <a
              id="btn-mail-cta"
              href="mailto:jainvanshika.design@gmail.com"
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-display text-base font-bold hover:scale-105 transition-transform duration-300 shadow-xl"
            >
              jainvanshika.design@gmail.com
              <ArrowUpRight className="w-5 h-5 text-black" />
            </a>
          </motion.div>

          <div className="flex items-center justify-center gap-2 text-xs font-mono text-brand-text-muted pt-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>JAIPUR, RAJASTHAN, IN</span>
          </div>
        </div>

      </div>
    </section>
  );
}
