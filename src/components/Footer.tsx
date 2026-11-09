import React from 'react'
import { ArrowUp, BookOpen, Heart, Sparkles } from 'lucide-react'

interface FooterProps {
  studentName: string
  subject: string
  academicYear: string
}

export const Footer: React.FC<FooterProps> = ({
  studentName = 'Roejon Kayne Paul P. Hernandez',
  subject = 'Great Books',
  academicYear = '2025–2026',
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0A0A0A] text-white border-t-2 border-[#0A0A0A] pt-16 pb-12 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Massive Editorial Headline */}
        <div className="pb-10 border-b-2 border-white/20">
          <div className="flex items-center gap-2 mb-3 font-mono text-xs font-bold text-[#FF3B00] uppercase tracking-widest">
            <span>/// DIGITAL PORTFOLIO ARCHIVE</span>
            <span>—</span>
            <span>GREAT BOOKS CANON</span>
          </div>
          
          <h2 className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-white leading-none">
            {studentName.split(' ')[0]} <span className="text-[#FF3B00]">HERNANDEZ</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-white/60 uppercase tracking-widest mt-2">
            MY LITERARY JOURNEY: A GREAT BOOKS DIGITAL PORTFOLIO • {academicYear}
          </p>
        </div>

        {/* 4-COLUMN FOOTER NAVIGATION & METADATA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-b border-white/15 font-mono text-xs">
          
          {/* Column 1: Academic Overview */}
          <div className="space-y-3">
            <span className="text-[#FF3B00] font-bold uppercase tracking-wider block">
              // ACADEMIC DOSSIER
            </span>
            <div className="space-y-1 text-white/80">
              <p>STUDENT: {studentName}</p>
              <p>SUBJECT: {subject}</p>
              <p>TERM: {academicYear}</p>
              <p>STATUS: SUBMITTED & VERIFIED</p>
            </div>
          </div>

          {/* Column 2: Portfolio Navigation */}
          <div className="space-y-3">
            <span className="text-[#FF3B00] font-bold uppercase tracking-wider block">
              // SECTIONS INDEX
            </span>
            <ul className="space-y-1.5 font-bold">
              <li>
                <a href="#profile" className="text-white/80 hover:text-[#FF3B00] transition-colors">
                  #01 STUDENT PROFILE
                </a>
              </li>
              <li>
                <a href="#analyses" className="text-white/80 hover:text-[#FF3B00] transition-colors">
                  #02 7 LITERARY ANALYSES
                </a>
              </li>
              <li>
                <a href="#favorite" className="text-white/80 hover:text-[#FF3B00] transition-colors">
                  #03 FAVORITE MASTERPIECE
                </a>
              </li>
              <li>
                <a href="#summary" className="text-white/80 hover:text-[#FF3B00] transition-colors">
                  #04 SUMMARY OF LEARNING
                </a>
              </li>
              <li>
                <a href="#reflection" className="text-white/80 hover:text-[#FF3B00] transition-colors">
                  #05 PERSONAL REFLECTION
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Critical Lenses Applied */}
          <div className="space-y-3">
            <span className="text-[#FF3B00] font-bold uppercase tracking-wider block">
              // CRITICAL LENSES
            </span>
            <div className="space-y-1 text-white/70">
              <p>• Marxist Theory (Kafka)</p>
              <p>• Psychoanalytic / Archetypal (Sophocles)</p>
              <p>• Feminist Criticism (Austen)</p>
              <p>• Historical-Biographical (Fitzgerald)</p>
              <p>• Post-Colonial & Cultural (Achebe)</p>
              <p>• Formalism (Shakespeare)</p>
              <p>• Deconstruction (Orwell)</p>
            </div>
          </div>

          {/* Column 4: Quick Action & Back to Top */}
          <div className="space-y-3 flex flex-col justify-between">
            <div>
              <span className="text-[#FF3B00] font-bold uppercase tracking-wider block mb-2">
                // JUMP TO TOP
              </span>
              <p className="text-white/60 text-[11px] leading-relaxed mb-4">
                Explore the complete five-section digital journey or return to the top hero banner.
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center justify-between px-4 py-3 bg-white text-[#0A0A0A] hover:bg-[#FF3B00] hover:text-white transition-colors font-bold uppercase tracking-wider shadow-xs"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Rights & Citation Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-white/50">
          <div>
            © {new Date().getFullYear()} {studentName.toUpperCase()} • ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-2">
            <span>DESIGNED WITH NEO-BRUTALIST RIGOR</span>
            <span className="text-[#FF3B00]">✦</span>
            <span>GREAT BOOKS CURRICULUM</span>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer

