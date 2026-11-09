import React, { useRef, useState, MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowDown, BookOpen, Sparkles, RefreshCw } from 'lucide-react'
import { playClickSound, playStickerPop } from '../utils/audio'

interface HeroProps {
  studentName: string
  subject: string
  stats: { label: string; value: string; detail: string }[]
  soundEnabled?: boolean
}

const TITLE_OPTIONS = [
  { main: 'CANON', sub: 'GREAT BOOKS', note: 'THE LITERARY CANON' },
  { main: 'ODYSSEY', sub: 'LITERARY JOURNEY', note: 'EPIC INQUIRY' },
  { main: 'CHRONICLE', sub: 'GREAT BOOKS', note: 'CRITICAL ARCHIVE' },
]

export const Hero: React.FC<HeroProps> = ({
  studentName,
  subject,
  stats,
  soundEnabled = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [titleIndex, setTitleIndex] = useState(0)

  // Mouse coordinate motion values for subtle 3D tilt parallax
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 200 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig)
  const imageTranslateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig)
  const imageTranslateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-8, 8]), springConfig)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const xPct = (e.clientX - rect.left) / rect.width - 0.5
    const yPct = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(xPct)
    mouseY.set(yPct)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const cycleTitle = () => {
    playStickerPop(soundEnabled)
    setTitleIndex((prev) => (prev + 1) % TITLE_OPTIONS.length)
  }

  const currentTitle = TITLE_OPTIONS[titleIndex]

  return (
    <section id="hero" className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 bg-[#F4F4F5] overflow-hidden">
      {/* Top Editorial Identifier Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex items-center justify-between font-mono text-xs font-bold text-[#0A0A0A]/70 uppercase tracking-widest border-b border-[#0A0A0A]/20 pb-2">
          <div className="flex items-center gap-2">
            <span className="text-[#FF3B00] font-black">#DIGITAL_PORTFOLIO</span>
            <span>/// {subject.toUpperCase()}</span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <span>VOL. 01 — 2026</span>
            <span className="text-[#FF3B00]">● VERIFIED SCHOLARSHIP</span>
          </div>
        </div>
      </div>

      {/* MAIN HERO POSTER FRAME */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            perspective: 1200,
          }}
          className="relative bg-[#FFFFFF] border-2 sm:border-3 border-[#0A0A0A] shadow-brutalist-lg overflow-hidden"
        >
          {/* Internal Top Bar of the Studio Frame */}
          <div className="border-b-2 border-[#0A0A0A] px-4 sm:px-6 py-2.5 flex items-center justify-between text-[11px] font-mono font-bold bg-[#FFFFFF]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-[#FF3B00] inline-block" />
              <span className="tracking-widest uppercase">
                PORTFOLIO // {studentName.toUpperCase()}
              </span>
            </div>
            <div className="flex items-center gap-4 text-[#0A0A0A]/60">
              <button
                onClick={cycleTitle}
                className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 bg-[#F4F4F5] hover:bg-[#0A0A0A] hover:text-white transition-colors border border-[#0A0A0A] text-[10px] text-[#0A0A0A] font-bold uppercase"
                title="Switch headline theme word"
              >
                <RefreshCw className="w-3 h-3 text-[#FF3B00]" />
                <span>THEME: {currentTitle.note}</span>
              </button>
              <span className="text-[#FF3B00] font-black">[ACADEMIC YEAR 2026]</span>
            </div>
          </div>

          {/* MASSIVE HERO BANNER GRID WITH 3D PERSPECTIVE */}
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            className="relative min-h-[480px] sm:min-h-[580px] lg:min-h-[640px] flex flex-col justify-between p-6 sm:p-10 lg:p-12 overflow-hidden bg-[#FFFFFF]"
          >
            {/* CLEAN, ULTRA-READABLE EDITORIAL HEADLINE TYPOGRAPHY */}
            <div
              className="relative z-10 select-none max-w-2xl"
              style={{ transform: 'translateZ(20px)' }}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col"
              >
                {/* Top Category Badge with Generous Spacing */}
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <span className="text-xs font-mono font-bold text-[#FF3B00] tracking-widest uppercase">
                    /// MY LITERARY JOURNEY
                  </span>
                  <span className="h-[2px] w-12 bg-[#FF3B00]" />
                  <span className="text-[10px] font-mono text-[#0A0A0A]/50 uppercase hidden sm:inline">
                    LIT 101 // GREAT BOOKS
                  </span>
                </div>

                {/* Massive Primary Word: CANON (Crystal clear, high contrast, zero overlap) */}
                <h1 className="font-headline text-[64px] sm:text-[96px] md:text-[120px] lg:text-[150px] font-black uppercase tracking-tight leading-none text-[#FF3B00] drop-shadow-[2px_2px_0_rgba(10,10,10,0.12)]">
                  {currentTitle.main}
                </h1>
                
                {/* Secondary Title: GREAT BOOKS with clear spacing and breathing room */}
                <h2 className="font-headline text-[28px] sm:text-[44px] md:text-[56px] lg:text-[70px] font-black uppercase tracking-tight leading-tight text-[#0A0A0A] mt-2 sm:mt-3 border-t-2 border-[#0A0A0A]/10 pt-2">
                  {currentTitle.sub}
                </h2>

                <p className="font-mono text-xs text-[#0A0A0A]/60 uppercase tracking-widest mt-1">
                  CRITICAL ANALYSES • ETHICAL INQUIRY • THE HUMAN CONDITION
                </p>
              </motion.div>
            </div>

            {/* HERO VISUAL CUTOUT: hernandez.jpg Pointing Gesture Reaching toward user */}
            <div className="absolute right-0 bottom-0 w-full sm:w-[65%] lg:w-[58%] h-[82%] sm:h-[95%] pointer-events-none z-15 flex items-end justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.92, x: 40 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  x: imageTranslateX,
                  y: imageTranslateY,
                  transform: 'translateZ(45px)',
                }}
                className="relative w-full h-full flex items-end justify-end"
              >
                {/* Foreground cutout photo */}
                <img
                  src="/assets/hernandez_cutout.png"
                  alt="Roejon Hernandez pointing gesture - Great Books Portfolio Hero"
                  className="max-h-full w-auto object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)] pointer-events-auto select-none"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = '/assets/hernandez.jpg'
                  }}
                />

                {/* Floating Studio Quote Badge on top of the image */}
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-8 right-6 sm:right-12 z-25 bg-[#0A0A0A] text-white p-3 sm:p-4 max-w-[260px] sm:max-w-[300px] border-2 border-white shadow-brutalist hidden sm:block pointer-events-auto"
                >
                  <span className="font-mono text-[9px] text-[#FF3B00] tracking-widest block font-bold mb-1">
                    /// CORE PRINCIPLE
                  </span>
                  <p className="font-display text-xs sm:text-sm font-extrabold leading-tight text-white uppercase">
                    <span className="text-[#FF3B00]">LITERATURE</span> IS NOT DECORATION — IT IS A MIRROR TO THE HUMAN CONDITION.
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* HERO LEFT COLUMN: FLOATING STATS & ACTION BUTTONS */}
            <div
              className="relative z-20 max-w-xl space-y-5 pt-4"
              style={{ transform: 'translateZ(30px)' }}
            >
              {/* Floating Stat Badge */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-block bg-[#0A0A0A] text-white p-4 sm:p-5 border-2 border-[#0A0A0A] shadow-brutalist"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-bold text-[#FF3B00]">///</span>
                  <span className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#FF3B00]">
                    07+
                  </span>
                </div>
                <p className="font-mono text-xs sm:text-sm font-bold tracking-wider uppercase text-white">
                  Literary Masterpieces Analyzed
                </p>
                <span className="text-[10px] font-mono text-white/60 block mt-0.5">
                  Across 7 distinct critical literary lenses
                </span>
              </motion.div>

              {/* Mission Statement */}
              <p className="font-body text-sm sm:text-base text-[#0A0A0A] font-medium leading-relaxed max-w-md bg-white/90 backdrop-blur-xs p-3 rounded-xs border-l-3 border-[#FF3B00] shadow-xs">
                A comprehensive digital portfolio examining timeless works of world literature—interrogating classical drama, social satire, Victorian feminism, and totalitarian control through rigorous critical lenses.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="#analyses"
                  onClick={() => playClickSound(soundEnabled)}
                  className="px-6 py-3.5 bg-[#FF3B00] hover:bg-[#0A0A0A] text-white font-mono text-xs sm:text-sm font-black uppercase tracking-wider transition-colors shadow-brutalist flex items-center gap-2 active:translate-x-0.5 active:translate-y-0.5"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>START EXPLORING ANALYSES</span>
                </a>

                <a
                  href="#profile"
                  onClick={() => playClickSound(soundEnabled)}
                  className="px-5 py-3.5 bg-white hover:bg-[#F4F4F5] text-[#0A0A0A] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors border-2 border-[#0A0A0A] shadow-brutalist flex items-center gap-2"
                >
                  <span>#01 STUDENT DOSSIER</span>
                </a>
              </div>
            </div>

            {/* BOTTOM TICKER / SUB-STRIP */}
            <div className="relative z-20 pt-6 mt-6 border-t-2 border-[#0A0A0A] flex flex-wrap items-center justify-between gap-4 text-xs font-mono font-bold text-[#0A0A0A]">
              <div className="flex items-center gap-4">
                <span>AUTHOR: {studentName.toUpperCase()}</span>
                <span className="hidden sm:inline text-[#FF3B00]">|</span>
                <span className="hidden sm:inline">CRITICAL SCHOLARSHIP</span>
              </div>
              <div className="flex items-center gap-2 text-[#0A0A0A]/60">
                <span className="w-2 h-2 rounded-full bg-[#FF3B00]" />
                <span>SCROLL TO EXPLORE ALL 5 SECTIONS</span>
                <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#FF3B00]" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* EDITORIAL STUDIO STATEMENT BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14">
        <div className="border-t-2 border-b-2 border-[#0A0A0A] py-8 sm:py-12 bg-white px-6 sm:px-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <span className="font-mono text-xs font-bold text-[#FF3B00] uppercase tracking-widest block mb-2">
                /// EDITORIAL STATEMENT
              </span>
              <h2 className="font-headline text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#0A0A0A] leading-tight">
                <span className="text-[#FF3B00]">#WE_ARE_EXPLORING</span> HUMAN EXPERIENCE, CREATING BOLD & RIGOROUS LITERARY CRITIQUE
              </h2>
            </div>

            {/* Quick Stat badges in row */}
            <div className="flex flex-row md:flex-col gap-3 font-mono text-xs font-bold shrink-0">
              <div className="p-2.5 bg-[#F4F4F5] border border-[#0A0A0A]">
                <span className="text-[#FF3B00] font-black text-sm block">07 MASTERPIECES</span>
                <span className="text-[10px] text-[#0A0A0A]/70 uppercase">Chronological Breadth</span>
              </div>
              <div className="p-2.5 bg-[#F4F4F5] border border-[#0A0A0A]">
                <span className="text-[#0A0A0A] font-black text-sm block">05 REFLECTIONS</span>
                <span className="text-[10px] text-[#0A0A0A]/70 uppercase">Personal Realizations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
