import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnalysisItem } from '../data/portfolioData'
import { BookOpen, X, ArrowUpRight, Search, Quote, ExternalLink, Sparkles, Filter, CheckCircle2, Check } from 'lucide-react'
import { playClickSound, playStickerPop } from '../utils/audio'

interface LiteraryAnalysesProps {
  analyses: AnalysisItem[]
  soundEnabled?: boolean
  reviewedIds?: string[]
  onToggleReviewed?: (id: string) => void
}

export const LiteraryAnalyses: React.FC<LiteraryAnalysesProps> = ({
  analyses,
  soundEnabled = true,
  reviewedIds = [],
  onToggleReviewed,
}) => {
  const [selectedAnalysis, setSelectedAnalysis] = useState<AnalysisItem | null>(null)
  const [selectedLens, setSelectedLens] = useState<string>('ALL')
  const [searchQuery, setSearchQuery] = useState<string>('')

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedAnalysis(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Unique list of literary lenses for filter buttons
  const lenses = ['ALL', ...Array.from(new Set(analyses.map((a) => a.lens)))]

  // Filtered list
  const filteredAnalyses = analyses.filter((item) => {
    const matchesLens = selectedLens === 'ALL' || item.lens === selectedLens
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.lens.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesLens && matchesSearch
  })

  return (
    <section id="analyses" className="py-16 sm:py-24 bg-[#F4F4F5] border-b-2 border-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Massive Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-2 border-[#0A0A0A] mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-[#FF3B00] uppercase tracking-widest">
              <span>/// SECTION 02</span>
              <span>—</span>
              <span>CRITICAL CORPUS</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#0A0A0A]">
              #02_LITERARY_ANALYSES
            </h2>
            <p className="font-mono text-xs sm:text-sm text-[#0A0A0A]/70 uppercase tracking-wider mt-1">
              COMPILATION OF 7 CRITICAL ESSAYS // INTERROGATING WORLD CLASSICS THROUGH SYSTEMIC LENSES
            </p>
          </div>

          {/* Quick Counter Badge */}
          <div className="font-mono text-xs font-bold p-3 bg-white border-2 border-[#0A0A0A] shadow-brutalist flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#FF3B00] animate-pulse" />
            <span>
              SHOWING {filteredAnalyses.length} OF {analyses.length} MASTERPIECES
              {reviewedIds.length > 0 && ` (${reviewedIds.length} REVIEWED)`}
            </span>
          </div>
        </div>

        {/* SEARCH & FILTER CONTROLS */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
          
          {/* Lens Filter Pills */}
          <div className="flex items-center gap-1.5 flex-wrap font-mono text-xs font-bold">
            <div className="flex items-center gap-1 text-[#0A0A0A]/60 mr-2 text-[11px] uppercase">
              <Filter className="w-3.5 h-3.5 text-[#FF3B00]" />
              <span>LENS:</span>
            </div>
            {lenses.map((lens) => (
              <button
                key={lens}
                onClick={() => {
                  playClickSound(soundEnabled)
                  setSelectedLens(lens)
                }}
                className={`px-3 py-1.5 transition-all uppercase text-[11px] border border-[#0A0A0A] ${
                  selectedLens === lens
                    ? 'bg-[#FF3B00] text-white shadow-xs font-black'
                    : 'bg-white text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white'
                }`}
              >
                {lens}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px] sm:min-w-[300px]">
            <Search className="w-4 h-4 text-[#0A0A0A]/50 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="SEARCH WORK, AUTHOR, OR LENS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border-2 border-[#0A0A0A] font-mono text-xs font-bold placeholder:text-[#0A0A0A]/40 focus:outline-none focus:border-[#FF3B00]"
            />
          </div>

        </div>

        {/* 7 INTERACTIVE ANALYSIS CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredAnalyses.map((item, idx) => {
            const isReviewed = reviewedIds.includes(item.id)

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className={`group relative bg-white border-2 border-[#0A0A0A] shadow-brutalist flex flex-col justify-between hover:shadow-brutalist-lg transition-all duration-200 overflow-hidden ${
                  isReviewed ? 'ring-2 ring-[#FF3B00]/40' : ''
                }`}
              >
                <div>
                  {/* Card Top Strip with Index Badge & Lens */}
                  <div className="p-4 border-b-2 border-[#0A0A0A] flex items-center justify-between bg-[#FFFFFF] group-hover:bg-[#0A0A0A] transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="font-headline text-2xl font-black text-[#FF3B00] group-hover:text-white">
                        {item.indexNumber}
                      </span>
                      <span className="h-4 w-[1px] bg-[#0A0A0A]/30 group-hover:bg-white/30" />
                      <span className="font-mono text-[11px] font-bold text-[#0A0A0A] group-hover:text-white uppercase truncate">
                        {item.yearPublished}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {isReviewed && (
                        <span className="text-[10px] font-mono font-bold bg-[#FF3B00] text-white px-1.5 py-0.2 rounded-xs flex items-center gap-1">
                          <Check className="w-3 h-3 stroke-[3]" />
                          READ
                        </span>
                      )}
                      {/* Lens Tag Pill */}
                      <span className="font-mono text-[10px] font-black uppercase px-2 py-0.5 bg-[#0A0A0A] group-hover:bg-[#FF3B00] text-white transition-colors">
                        {item.lens.split(' ')[0]}
                      </span>
                    </div>
                  </div>

                  {/* Cover Image Placeholder Container with Theme Accent */}
                  <div className="relative aspect-[16/9] w-full bg-[#ECECEE] border-b-2 border-[#0A0A0A] overflow-hidden">
                    <img
                      src={item.imageCover}
                      alt={`${item.title} book cover artwork`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale contrast-125 group-hover:grayscale-0"
                      loading="lazy"
                    />
                    {/* Overlay Lens Badge */}
                    <div className="absolute bottom-2 left-2 bg-[#0A0A0A] text-white px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider border border-white">
                      LENS: {item.lens}
                    </div>
                  </div>

                  {/* Main Content Area */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <div>
                      <h3 className="font-headline text-xl sm:text-2xl uppercase tracking-tight text-[#0A0A0A] group-hover:text-[#FF3B00] transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <p className="font-mono text-xs font-bold text-[#0A0A0A]/70 uppercase tracking-wider mt-0.5">
                        BY {item.author}
                      </p>
                    </div>

                    {/* Summary */}
                    <p className="font-body text-xs sm:text-sm text-[#0A0A0A]/85 leading-relaxed line-clamp-3">
                      {item.summary}
                    </p>

                    {/* Key Quote preview */}
                    <div className="p-3 bg-[#F4F4F5] border-l-2 border-[#FF3B00] text-xs font-body italic text-[#0A0A0A]/90">
                      {item.keyQuote}
                    </div>

                    {/* Theme tags */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {item.themes.slice(0, 3).map((theme, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono font-semibold px-2 py-0.5 bg-[#F4F4F5] border border-[#0A0A0A]/20 text-[#0A0A0A]"
                        >
                          #{theme}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Expand Button & Mark As Reviewed */}
                <div className="p-4 border-t-2 border-[#0A0A0A] bg-[#FFFFFF] flex items-center justify-between">
                  {onToggleReviewed && (
                    <button
                      onClick={() => {
                        playClickSound(soundEnabled)
                        onToggleReviewed(item.id)
                      }}
                      className={`font-mono text-[11px] font-bold uppercase flex items-center gap-1 transition-colors ${
                        isReviewed
                          ? 'text-[#FF3B00]'
                          : 'text-[#0A0A0A]/60 hover:text-[#0A0A0A]'
                      }`}
                      title="Mark analysis as reviewed"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{isReviewed ? 'REVIEWED' : 'MARK READ'}</span>
                    </button>
                  )}

                  <button
                    onClick={() => {
                      playStickerPop(soundEnabled)
                      setSelectedAnalysis(item)
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0A0A0A] group-hover:bg-[#FF3B00] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-xs ml-auto"
                  >
                    <span>READ ANALYSIS</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.article>
            )
          })}
        </div>

      </div>

      {/* FULL ANALYSIS SCHOLARLY MODAL DRAWER */}
      <AnimatePresence>
        {selectedAnalysis && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                playClickSound(soundEnabled)
                setSelectedAnalysis(null)
              }}
              className="fixed inset-0 bg-[#0A0A0A]/70 backdrop-blur-xs"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white border-3 border-[#0A0A0A] shadow-brutalist-lg overflow-hidden flex flex-col z-10"
            >
              {/* Modal Top Bar */}
              <div className="p-4 sm:p-5 bg-[#0A0A0A] text-white flex items-center justify-between border-b-2 border-[#0A0A0A]">
                <div className="flex items-center gap-3">
                  <span className="font-headline text-2xl font-black text-[#FF3B00]">
                    {selectedAnalysis.indexNumber}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-headline text-lg sm:text-xl uppercase tracking-tight text-white leading-none">
                      {selectedAnalysis.title}
                    </span>
                    <span className="font-mono text-xs text-[#FF3B00] font-bold uppercase mt-0.5">
                      BY {selectedAnalysis.author} ({selectedAnalysis.yearPublished})
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    playClickSound(soundEnabled)
                    setSelectedAnalysis(null)
                  }}
                  className="w-8 h-8 rounded-xs bg-white/10 hover:bg-[#FF3B00] hover:text-white text-white flex items-center justify-center transition-colors font-mono font-bold"
                  aria-label="Close Analysis Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Lens Strip */}
              <div className="px-5 py-2 bg-[#FF3B00] text-white flex items-center justify-between font-mono text-xs font-black uppercase">
                <span>LITERARY LENS: {selectedAnalysis.lens}</span>
                <span>GREAT BOOKS SCHOLARSHIP // CRITICAL ESSAY</span>
              </div>

              {/* Modal Body: Complete 5-Part Academic Essay */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-body text-[#0A0A0A]">
                
                {/* Thesis Statement Banner */}
                <div className="p-4 sm:p-5 bg-[#F4F4F5] border-2 border-[#0A0A0A] shadow-brutalist">
                  <span className="font-mono text-[11px] font-black text-[#FF3B00] uppercase tracking-widest block mb-1">
                    /// CENTRAL THESIS STATEMENT
                  </span>
                  <p className="font-display text-sm sm:text-base font-extrabold text-[#0A0A0A] leading-snug">
                    {selectedAnalysis.fullAnalysis.thesis}
                  </p>
                </div>

                {/* Section 1: Introduction */}
                <div className="space-y-2">
                  <h4 className="font-headline text-lg uppercase tracking-wider text-[#0A0A0A] flex items-center gap-2">
                    <span className="text-[#FF3B00]">01.</span> Introduction & Contextual Grounding
                  </h4>
                  <p className="text-sm sm:text-base leading-relaxed text-[#0A0A0A]/90">
                    {selectedAnalysis.fullAnalysis.introduction}
                  </p>
                </div>

                {/* Section 2: Critical Application of Lens */}
                <div className="space-y-2">
                  <h4 className="font-headline text-lg uppercase tracking-wider text-[#0A0A0A] flex items-center gap-2">
                    <span className="text-[#FF3B00]">02.</span> Critical Framework & Lens Interrogation
                  </h4>
                  <p className="text-sm sm:text-base leading-relaxed text-[#0A0A0A]/90">
                    {selectedAnalysis.fullAnalysis.criticalApplication}
                  </p>
                </div>

                {/* Quote Highlight */}
                <div className="p-5 bg-[#0A0A0A] text-white border-l-4 border-[#FF3B00] space-y-2">
                  <Quote className="w-5 h-5 text-[#FF3B00]" />
                  <p className="font-display text-sm sm:text-base italic leading-relaxed">
                    {selectedAnalysis.keyQuote}
                  </p>
                  <span className="font-mono text-[10px] text-[#FF3B00] block uppercase tracking-wider font-bold">
                    — KEY TEXTUAL EVIDENCE // {selectedAnalysis.title.toUpperCase()}
                  </span>
                </div>

                {/* Section 3: Textual Evidence & Analysis */}
                <div className="space-y-2">
                  <h4 className="font-headline text-lg uppercase tracking-wider text-[#0A0A0A] flex items-center gap-2">
                    <span className="text-[#FF3B00]">03.</span> Textual Evidence & Thematic Tension
                  </h4>
                  <p className="text-sm sm:text-base leading-relaxed text-[#0A0A0A]/90">
                    {selectedAnalysis.fullAnalysis.textualEvidence}
                  </p>
                </div>

                {/* Section 4: Conclusion & Modern Synthesis */}
                <div className="space-y-2">
                  <h4 className="font-headline text-lg uppercase tracking-wider text-[#0A0A0A] flex items-center gap-2">
                    <span className="text-[#FF3B00]">04.</span> Conclusion & Human Realization
                  </h4>
                  <p className="text-sm sm:text-base leading-relaxed text-[#0A0A0A]/90">
                    {selectedAnalysis.fullAnalysis.conclusion}
                  </p>
                </div>

                {/* Thematic Tags */}
                <div className="pt-4 border-t border-[#0A0A0A]/20">
                  <span className="font-mono text-xs font-bold text-[#0A0A0A]/60 block mb-2 uppercase">
                    THEMATIC TAGS & CLASSIFICATIONS:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedAnalysis.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 bg-[#F4F4F5] border border-[#0A0A0A] font-mono text-xs font-bold text-[#0A0A0A]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-[#F4F4F5] border-t-2 border-[#0A0A0A] flex items-center justify-between text-xs font-mono">
                {onToggleReviewed && (
                  <button
                    onClick={() => {
                      playStickerPop(soundEnabled)
                      onToggleReviewed(selectedAnalysis.id)
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FF3B00] text-white font-bold uppercase tracking-wider"
                  >
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>
                      {reviewedIds.includes(selectedAnalysis.id)
                        ? 'MARKED AS REVIEWED ✓'
                        : 'MARK AS REVIEWED'}
                    </span>
                  </button>
                )}

                <button
                  onClick={() => {
                    playClickSound(soundEnabled)
                    setSelectedAnalysis(null)
                  }}
                  className="px-4 py-2 bg-[#0A0A0A] text-white hover:bg-[#FF3B00] transition-colors font-bold uppercase tracking-wider shadow-xs ml-auto"
                >
                  CLOSE ESSAY
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default LiteraryAnalyses
