import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { skillsData, softwareData } from '../data';
import { CheckCircle2, SlidersHorizontal, Sparkles, Paintbrush } from 'lucide-react';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Title Block */}
        <div className="text-center mb-16 space-y-3">
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-brand-text-muted block">
            CORE COMPETENCIES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Skills &amp; Tools
          </h2>
          <p className="font-sans text-brand-text-muted text-sm max-w-lg mx-auto">
            Hover over professional skills to explore my creative philosophy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Column 1: Professional Skills (Left 6 Cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-2.5 border-b border-brand-border pb-4">
              <Sparkles className="w-5 h-5 text-white" />
              <h3 className="font-mono text-xs font-bold text-white tracking-widest uppercase">
                Professional Skills
              </h3>
            </div>

            <ul className="space-y-4">
              {skillsData.map((skill) => {
                const isHovered = hoveredSkill === skill.name;
                return (
                  <li
                    key={skill.name}
                    id={`skill-item-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="p-4 rounded-xl border border-brand-border/40 bg-brand-surface/40 hover:bg-brand-surface hover:border-brand-border transition-all duration-300 relative group cursor-help"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-display text-base font-semibold text-white group-hover:text-zinc-200 transition-colors">
                        {skill.name}
                      </span>
                      <CheckCircle2 className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                    </div>

                    {/* Explanatory description revealed gracefully */}
                    <div className={`mt-2 text-xs text-brand-text-muted overflow-hidden transition-all duration-300 ${
                      isHovered ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <p className="leading-relaxed border-t border-brand-border/30 pt-2 font-sans">
                        {skill.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 2: Design Software (Right 6 Cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-brand-border pb-4">
              <div className="flex items-center gap-2.5">
                <SlidersHorizontal className="w-5 h-5 text-white" />
                <h3 className="font-mono text-xs font-bold text-white tracking-widest uppercase">
                  Design Software Stack
                </h3>
              </div>
            </div>

            {/* Software Chips container with layout animations */}
            <motion.div 
              layout
              className="flex flex-wrap gap-3"
            >
              <AnimatePresence mode="popLayout">
                {softwareData.map((soft) => {
                  return (
                    <motion.span
                      key={soft.name}
                      id={`software-chip-${soft.name.toLowerCase().replace(/\s+/g, '-')}`}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="group flex items-center gap-2 px-5 py-3 bg-brand-surface border border-brand-border hover:border-zinc-500 rounded-full text-white font-sans text-xs font-semibold tracking-wide cursor-default hover:bg-black/40 transition-colors"
                    >
                      <Paintbrush className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white" />
                      {soft.name.toUpperCase()}
                    </motion.span>
                  );
                })}
              </AnimatePresence>
            </motion.div>

            {/* Graphic design quote */}
            <div className="p-6 bg-brand-surface border border-brand-border rounded-2xl relative overflow-hidden">
              <p className="text-xs text-brand-text-muted italic leading-relaxed relative z-10">
                “A designer's tool stack changes over time, but the underlying spatial logic, typographical layouts, grid ratios, and packaging die-cuts remain absolute. Visual precision is the ultimate soft skill.”
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
