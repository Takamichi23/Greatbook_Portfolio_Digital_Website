import React from 'react'
import { motion } from 'framer-motion'
import { LearningPillar } from '../data/portfolioData'
import { Globe2, Search, HeartHandshake, BrainCircuit, ArrowUpRight } from 'lucide-react'

interface LearningSummaryProps {
  pillars: LearningPillar[]
}

export const LearningSummary: React.FC<LearningSummaryProps> = ({ pillars }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe2':
        return <Globe2 className="w-5 h-5 text-[#FF3B00]" />
      case 'SearchCode':
        return <Search className="w-5 h-5 text-[#FF3B00]" />
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#FF3B00]" />
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-[#FF3B00]" />
      default:
        return <Globe2 className="w-5 h-5 text-[#FF3B00]" />
    }
  }

  return (
    <section id="summary" className="py-20 sm:py-28 bg-[#0A0A0A] text-white border-b-2 border-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with White & Electric Red Contrast */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-2 border-white/20 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-[#FF3B00] uppercase tracking-widest">
              <span>/// SECTION 04</span>
              <span>—</span>
              <span>COGNITIVE SYNTHESIS</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white">
              #04_SUMMARY_OF_LEARNING
            </h2>
            <p className="font-mono text-xs sm:text-sm text-white/60 uppercase tracking-wider mt-1">
              FOUR CORE INTELLECTUAL PILLARS ACQUIRED ACROSS THE GREAT BOOKS CURRICULUM
            </p>
          </div>

          <div className="font-mono text-xs font-bold p-3 bg-[#1A1A1A] border border-white/20 text-[#FF3B00] flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF3B00]" />
            <span>4-PILLAR SCHOLASTIC FRAMEWORK</span>
          </div>
        </div>

        {/* 4 PILLARS GRID (Direct homage to the 3-Column Studio Footer Block in the reference design!) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative bg-[#141414] border-2 border-white/15 p-6 sm:p-7 flex flex-col justify-between hover:border-[#FF3B00] transition-colors duration-300 shadow-brutalist"
            >
              <div>
                {/* Top Number & Icon */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                  <span className="font-headline text-3xl sm:text-4xl font-black text-[#FF3B00] group-hover:scale-110 transition-transform">
                    /// {pillar.number}
                  </span>
                  <div className="p-2 bg-[#222222] border border-white/10">
                    {getIcon(pillar.iconName)}
                  </div>
                </div>

                {/* Pillar Title */}
                <h3 className="font-headline text-xl sm:text-2xl uppercase tracking-tight text-white mb-1 group-hover:text-[#FF3B00] transition-colors leading-tight">
                  {pillar.title}
                </h3>

                <p className="font-mono text-[11px] font-bold text-[#FF3B00] uppercase tracking-wider mb-4">
                  {pillar.subtitle}
                </p>

                {/* Description */}
                <p className="font-body text-xs sm:text-sm text-white/80 leading-relaxed mb-6 font-normal">
                  {pillar.description}
                </p>

                {/* Key Takeaways */}
                <div className="space-y-2 pt-4 border-t border-white/10">
                  <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest block font-bold mb-1">
                    KEY TAKEAWAYS:
                  </span>
                  {pillar.keyTakeaways.map((takeaway, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2 text-xs text-white/85 leading-snug">
                      <span className="text-[#FF3B00] font-mono font-bold shrink-0">→</span>
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Strip */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-white/50 uppercase">
                <span>PILLAR 0{idx + 1} // MASTERED</span>
                <span className="text-[#FF3B00] font-bold">100%</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default LearningSummary

