import React from 'react'
import { motion } from 'framer-motion'
import { FavoriteMasterpiece as FavoriteType } from '../data/portfolioData'
import { Star, Heart, Bookmark, Users, Lightbulb, Quote, ArrowUpRight } from 'lucide-react'

interface FavoriteMasterpieceProps {
  favorite: FavoriteType
}

export const FavoriteMasterpiece: React.FC<FavoriteMasterpieceProps> = ({ favorite }) => {
  return (
    <section id="favorite" className="py-16 sm:py-24 bg-[#FFFFFF] border-b-2 border-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b-2 border-[#0A0A0A] mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-[#FF3B00] uppercase tracking-widest">
              <span>/// SECTION 03</span>
              <span>—</span>
              <span>PERSONAL PINNACLE</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#0A0A0A]">
              #03_FAVORITE_MASTERPIECE
            </h2>
          </div>

          <div className="flex items-center gap-2 p-2 bg-[#FF3B00] text-white font-mono text-xs font-black uppercase tracking-wider">
            <Star className="w-4 h-4 fill-white" />
            <span>SINGLE MOST IMPACTFUL WORK</span>
          </div>
        </div>

        {/* GIANT EDITORIAL SPOTLIGHT HERO (Inspired by the Reference 10+ Graphic Layout) */}
        <div className="relative bg-[#F4F4F5] border-2 border-[#0A0A0A] shadow-brutalist-lg p-6 sm:p-10 lg:p-12 mb-12">
          
          {/* Top metadata strip */}
          <div className="flex items-center justify-between pb-4 border-b border-[#0A0A0A]/20 font-mono text-xs font-bold text-[#0A0A0A]/70 uppercase mb-8">
            <div className="flex items-center gap-2">
              <span className="text-[#FF3B00] font-black">● SPOTLIGHT MASTERWORK</span>
              <span>// {favorite.genre}</span>
            </div>
            <span>PUBLISHED: {favorite.year}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 7 Columns: Giant Title, Tagline, & Personal Overview */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="font-headline text-5xl sm:text-7xl lg:text-8xl font-black text-[#FF3B00] block leading-none tracking-tighter">
                  KAFKA
                </span>
                <h3 className="font-headline text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#0A0A0A] leading-none mt-1">
                  {favorite.title}
                </h3>
                <p className="font-mono text-xs sm:text-sm font-bold text-[#0A0A0A]/60 uppercase tracking-widest mt-2">
                  BY {favorite.author} ({favorite.year}) • {favorite.lens}
                </p>
              </div>

              {/* Tagline */}
              <div className="p-4 bg-[#0A0A0A] text-white border-l-4 border-[#FF3B00]">
                <p className="font-display text-sm sm:text-base font-extrabold uppercase tracking-wide text-white">
                  {favorite.tagline}
                </p>
              </div>

              {/* Overview */}
              <div className="space-y-3">
                <h4 className="font-mono text-xs font-bold text-[#FF3B00] uppercase tracking-widest">
                  /// COMPREHENSIVE OVERVIEW
                </h4>
                <p className="font-body text-sm sm:text-base text-[#0A0A0A] leading-relaxed">
                  {favorite.overview}
                </p>
              </div>

              {/* Personal Reason for Selection */}
              <div className="p-5 bg-white border-2 border-[#0A0A0A] shadow-brutalist space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF3B00] uppercase">
                  <Heart className="w-3.5 h-3.5 fill-[#FF3B00]" />
                  <span>PERSONAL REASON FOR SELECTION</span>
                </div>
                <p className="font-body text-xs sm:text-sm text-[#0A0A0A] leading-relaxed">
                  {favorite.personalReasons}
                </p>
              </div>
            </div>

            {/* Right 5 Columns: Giant Index Stamp & Visual Container */}
            <div className="lg:col-span-5 flex flex-col items-center">
              {/* Massive #03 block graphic */}
              <div className="relative w-full aspect-[4/4.6] bg-white border-2 border-[#0A0A0A] shadow-brutalist overflow-hidden p-6 flex flex-col justify-between">
                
                {/* Giant watermark number */}
                <div className="absolute top-0 right-0 font-headline text-[130px] sm:text-[170px] font-black text-[#FF3B00]/15 leading-none select-none pointer-events-none">
                  #03
                </div>

                <div className="relative z-10">
                  <span className="font-mono text-xs font-black bg-[#FF3B00] text-white px-2 py-0.5 uppercase tracking-wider inline-block mb-3">
                    ESSENTIAL CANON
                  </span>
                  <h4 className="font-headline text-2xl uppercase tracking-tight text-[#0A0A0A]">
                    THE ALIENATED WORKER
                  </h4>
                  <p className="font-mono text-xs text-[#0A0A0A]/60 mt-1 uppercase">
                    Entfremdung & The Metamorphosis
                  </p>
                </div>

                {/* Pull Quote Box */}
                <div className="relative z-10 p-4 bg-[#F4F4F5] border border-[#0A0A0A] my-4">
                  <Quote className="w-4 h-4 text-[#FF3B00] mb-1" />
                  <p className="font-display text-xs sm:text-sm italic font-bold text-[#0A0A0A] leading-snug">
                    {favorite.favoriteQuote}
                  </p>
                  <span className="font-mono text-[9px] text-[#0A0A0A]/50 block mt-2 uppercase">
                    — GREGOR SAMSA'S SILENT AGONY
                  </span>
                </div>

                {/* Bottom Core Takeaway */}
                <div className="relative z-10 pt-3 border-t border-[#0A0A0A]/20 font-mono text-[11px] font-bold text-[#FF3B00] uppercase">
                  LESSON: HUMAN VALUE IS UNCONDITIONAL.
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 3 SUB-SECTIONS: Key Themes, Key Characters, Core Lessons */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* 1. Key Themes */}
          <div className="bg-[#F4F4F5] border-2 border-[#0A0A0A] p-6 shadow-brutalist flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#0A0A0A]/20">
                <Bookmark className="w-4 h-4 text-[#FF3B00]" />
                <h4 className="font-headline text-lg uppercase tracking-tight text-[#0A0A0A]">
                  Key Thematic Pillars
                </h4>
              </div>

              <div className="space-y-4">
                {favorite.keyThemes.map((theme, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="font-mono text-xs font-bold text-[#FF3B00] block uppercase">
                      0{idx + 1}. {theme.title}
                    </span>
                    <p className="font-body text-xs text-[#0A0A0A]/85 leading-relaxed">
                      {theme.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-[#0A0A0A]/15 font-mono text-[10px] text-[#0A0A0A]/60 uppercase">
              THEMES: LABOR, GUILT, AUTONOMY
            </div>
          </div>

          {/* 2. Key Characters & Significance */}
          <div className="bg-[#F4F4F5] border-2 border-[#0A0A0A] p-6 shadow-brutalist flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#0A0A0A]/20">
                <Users className="w-4 h-4 text-[#FF3B00]" />
                <h4 className="font-headline text-lg uppercase tracking-tight text-[#0A0A0A]">
                  Key Characters & Roles
                </h4>
              </div>

              <div className="space-y-4">
                {favorite.keyCharacters.map((char, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-headline text-sm uppercase text-[#0A0A0A]">
                        {char.name}
                      </span>
                      <span className="font-mono text-[10px] text-[#FF3B00] font-bold uppercase">
                        {char.role}
                      </span>
                    </div>
                    <p className="font-body text-xs text-[#0A0A0A]/85 leading-relaxed">
                      {char.significance}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-[#0A0A0A]/15 font-mono text-[10px] text-[#0A0A0A]/60 uppercase">
              PSYCHOLOGY: BURDEN & EVICTION
            </div>
          </div>

          {/* 3. Core Lessons & Personal Realization */}
          <div className="bg-[#0A0A0A] text-white border-2 border-[#0A0A0A] p-6 shadow-brutalist flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/20">
                <Lightbulb className="w-4 h-4 text-[#FF3B00]" />
                <h4 className="font-headline text-lg uppercase tracking-tight text-white">
                  Core Lessons & Realizations
                </h4>
              </div>

              <div className="space-y-3 mb-6">
                {favorite.coreLessons.map((lesson, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-body leading-relaxed text-white/90">
                    <span className="font-mono text-[#FF3B00] font-black shrink-0">✦</span>
                    <span>{lesson}</span>
                  </div>
                ))}
              </div>

              {/* Personal Realization Statement */}
              <div className="p-3 bg-white/10 border-l-2 border-[#FF3B00] text-xs font-body italic text-white/90">
                "{favorite.personalRealization}"
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-white/20 font-mono text-[10px] text-[#FF3B00] uppercase">
              ETHICAL OUTCOME: HUMAN DIGNITY RESTORED
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default FavoriteMasterpiece

