import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ReflectionQuestion } from '../data/portfolioData'
import { ChevronDown, HelpCircle, CheckCircle, Sparkles, BookOpen } from 'lucide-react'

interface PersonalReflectionProps {
  reflections: ReflectionQuestion[]
}

export const PersonalReflection: React.FC<PersonalReflectionProps> = ({ reflections }) => {
  const [openIds, setOpenIds] = useState<string[]>(['q1', 'q3'])

  const toggleQuestion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const expandAll = () => setOpenIds(reflections.map((r) => r.id))
  const collapseAll = () => setOpenIds([])

  return (
    <section id="reflection" className="py-16 sm:py-24 bg-[#FFFFFF] border-b-2 border-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b-2 border-[#0A0A0A] mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-[#FF3B00] uppercase tracking-widest">
              <span>/// SECTION 05</span>
              <span>—</span>
              <span>HUMAN INQUIRY</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#0A0A0A]">
              #05_PERSONAL_REFLECTION
            </h2>
            <p className="font-mono text-xs sm:text-sm text-[#0A0A0A]/70 uppercase tracking-wider mt-1">
              FIVE GUIDED DIALOGUES ON INTELLECTUAL GROWTH, ETHICAL RESPONSIBILITY, AND FUTURE PURSUITS
            </p>
          </div>

          {/* Expand/Collapse All Buttons */}
          <div className="flex items-center gap-2 font-mono text-xs">
            <button
              onClick={expandAll}
              className="px-3 py-1.5 bg-[#0A0A0A] text-white hover:bg-[#FF3B00] transition-colors font-bold uppercase tracking-wider"
            >
              EXPAND ALL
            </button>
            <button
              onClick={collapseAll}
              className="px-3 py-1.5 bg-[#F4F4F5] border border-[#0A0A0A] text-[#0A0A0A] hover:bg-black hover:text-white transition-colors font-bold uppercase tracking-wider"
            >
              COLLAPSE
            </button>
          </div>
        </div>

        {/* 5 GUIDED REFLECTION ACCORDION CARDS */}
        <div className="space-y-4 sm:space-y-6">
          {reflections.map((item) => {
            const isOpen = openIds.includes(item.id)

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#F4F4F5] border-2 border-[#0A0A0A] shadow-brutalist overflow-hidden transition-all duration-200"
              >
                {/* Accordion Question Header Strip */}
                <button
                  onClick={() => toggleQuestion(item.id)}
                  className={`w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 transition-colors select-none ${
                    isOpen ? 'bg-[#0A0A0A] text-white' : 'hover:bg-white text-[#0A0A0A]'
                  }`}
                >
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1">
                    {/* Index Number */}
                    <span
                      className={`font-headline text-2xl sm:text-3xl font-black shrink-0 ${
                        isOpen ? 'text-[#FF3B00]' : 'text-[#0A0A0A]'
                      }`}
                    >
                      {item.number}
                    </span>

                    <span
                      className={`h-6 w-[2px] hidden sm:block ${
                        isOpen ? 'bg-white/20' : 'bg-[#0A0A0A]/20'
                      }`}
                    />

                    {/* Question text */}
                    <div>
                      <h3 className="font-headline text-base sm:text-lg md:text-xl uppercase tracking-tight leading-snug">
                        {item.question}
                      </h3>
                      {!isOpen && (
                        <p className="font-body text-xs text-[#0A0A0A]/70 line-clamp-1 mt-1 font-normal">
                          {item.shortAnswer}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    <span
                      className={`hidden md:inline font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 ${
                        isOpen
                          ? 'bg-[#FF3B00] text-white'
                          : 'bg-[#0A0A0A] text-white'
                      }`}
                    >
                      {isOpen ? 'COLLAPSE' : 'EXPAND ESSAY'}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`p-1.5 border ${
                        isOpen
                          ? 'border-white/30 text-white'
                          : 'border-[#0A0A0A] text-[#0A0A0A]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </div>
                </button>

                {/* Expandable Reflection Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t-2 border-[#0A0A0A] bg-white p-6 sm:p-8 space-y-5"
                    >
                      {/* Short Executive Summary */}
                      <div className="p-4 bg-[#F4F4F5] border-l-4 border-[#FF3B00]">
                        <span className="font-mono text-[10px] font-black text-[#FF3B00] uppercase tracking-widest block mb-1">
                          /// CORE INSIGHT SUMMARY
                        </span>
                        <p className="font-display text-sm sm:text-base font-extrabold text-[#0A0A0A] leading-snug">
                          {item.shortAnswer}
                        </p>
                      </div>

                      {/* Detailed Philosophical Essay */}
                      <div className="space-y-2">
                        <span className="font-mono text-xs font-bold text-[#0A0A0A]/60 uppercase tracking-widest block">
                          DETAILED REFLECTION & SYNTHESIS:
                        </span>
                        <p className="font-body text-sm sm:text-base text-[#0A0A0A]/90 leading-relaxed font-normal">
                          {item.detailedReflection}
                        </p>
                      </div>

                      {/* Tags & Metadata */}
                      <div className="pt-4 border-t border-[#0A0A0A]/15 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[#0A0A0A]/50 uppercase">TAGS:</span>
                          {item.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 bg-[#F4F4F5] border border-[#0A0A0A]/20 font-bold text-[#0A0A0A]"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <span className="text-[#FF3B00] font-bold">
                          STATUS: REFLECTED & SYNTHESIZED
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default PersonalReflection

