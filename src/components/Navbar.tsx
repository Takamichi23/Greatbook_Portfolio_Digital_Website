import React, { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { BookOpen, Menu, X, ArrowUpRight, Volume2, VolumeX, CheckCircle } from 'lucide-react'
import { playClickSound } from '../utils/audio'

interface NavbarProps {
  studentName: string
  subject: string
  soundEnabled?: boolean
  onToggleSound?: () => void
  reviewedCount?: number
  totalCount?: number
}

export const Navbar: React.FC<NavbarProps> = ({
  studentName = 'Roejon Hernandez',
  subject = 'Great Books',
  soundEnabled = true,
  onToggleSound,
  reviewedCount = 0,
  totalCount = 7,
}) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)

      const sections = ['hero', 'profile', 'analyses', 'favorite', 'summary', 'reflection']
      const scrollPos = window.scrollY + 180

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: '#01_PROFILE', href: '#profile', id: 'profile' },
    { label: '#02_ANALYSES', href: '#analyses', id: 'analyses' },
    { label: '#03_FAVORITE', href: '#favorite', id: 'favorite' },
    { label: '#04_SUMMARY', href: '#summary', id: 'summary' },
    { label: '#05_REFLECTION', href: '#reflection', id: 'reflection' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b-2 border-[#0A0A0A] ${
          isScrolled
            ? 'bg-[#FFFFFF]/95 backdrop-blur-md shadow-xs'
            : 'bg-[#FFFFFF]'
        }`}
      >
        {/* Top Scroll Progress Line (Electric Red) */}
        <motion.div
          className="h-[3px] bg-[#FF3B00] origin-left w-full absolute top-0 left-0 z-50"
          style={{ scaleX }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Brand Logo & Editorial Monogram */}
            <a
              href="#hero"
              onClick={() => playClickSound(soundEnabled)}
              className="flex items-center gap-2.5 sm:gap-3 group select-none"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#0A0A0A] text-white flex items-center justify-center font-headline text-lg sm:text-xl font-black group-hover:bg-[#FF3B00] transition-colors">
                R
              </div>
              <div className="flex flex-col">
                <span className="font-headline tracking-tighter text-sm sm:text-base font-black text-[#0A0A0A] uppercase leading-none">
                  {studentName.split(' ')[0]} HERNANDEZ
                </span>
                <span className="font-mono text-[10px] text-[#FF3B00] font-bold tracking-widest uppercase mt-0.5">
                  /// {subject} PORTFOLIO
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 font-mono text-xs font-bold">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => playClickSound(soundEnabled)}
                    className={`px-3 py-1.5 transition-all duration-150 uppercase tracking-wider rounded-xs flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#0A0A0A] text-white shadow-xs'
                        : 'text-[#0A0A0A]/70 hover:text-[#0A0A0A] hover:bg-black/5'
                    }`}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B00] animate-ping" />
                    )}
                    <span>{link.label}</span>
                  </a>
                )
              })}
            </nav>

            {/* Right Action: Review Counter, Sound Toggle, CTA Button & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Reviewed Counter Pill */}
              {reviewedCount > 0 && (
                <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 bg-[#F4F4F5] border border-[#0A0A0A] font-mono text-[11px] font-bold text-[#0A0A0A]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#FF3B00]" />
                  <span>REVIEWED: {reviewedCount}/{totalCount}</span>
                </div>
              )}

              {/* Sound Toggle */}
              {onToggleSound && (
                <button
                  onClick={() => {
                    playClickSound(!soundEnabled)
                    onToggleSound()
                  }}
                  className="p-2 border border-[#0A0A0A] bg-white text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-colors"
                  title={soundEnabled ? 'Mute sound effects' : 'Enable audio clicks'}
                  aria-label="Toggle Sound"
                >
                  {soundEnabled ? (
                    <Volume2 className="w-4 h-4 text-[#FF3B00]" />
                  ) : (
                    <VolumeX className="w-4 h-4 text-[#0A0A0A]/50" />
                  )}
                </button>
              )}

              <a
                href="#analyses"
                onClick={() => playClickSound(soundEnabled)}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[#FF3B00] text-white font-mono text-xs font-black uppercase tracking-wider hover:bg-[#0A0A0A] transition-colors shadow-brutalist active:translate-x-0.5 active:translate-y-0.5"
              >
                <span>7 ANALYSES</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile menu toggle */}
              <button
                onClick={() => {
                  playClickSound(soundEnabled)
                  setMobileMenuOpen((prev) => !prev)
                }}
                className="lg:hidden p-2 text-[#0A0A0A] hover:text-[#FF3B00] border-2 border-[#0A0A0A] bg-white transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-16 sm:top-20 inset-x-0 z-40 bg-white border-b-2 border-[#0A0A0A] shadow-brutalist-lg p-6 lg:hidden"
        >
          <div className="flex flex-col space-y-3 font-mono text-sm font-bold">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  playClickSound(soundEnabled)
                  setMobileMenuOpen(false)
                }}
                className="p-3 bg-[#F4F4F5] hover:bg-[#FF3B00] hover:text-white transition-colors border border-[#0A0A0A] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ))}
            <a
              href="#analyses"
              onClick={() => {
                playClickSound(soundEnabled)
                setMobileMenuOpen(false)
              }}
              className="p-3.5 bg-[#FF3B00] text-white text-center uppercase tracking-wider font-black shadow-brutalist mt-2"
            >
              EXPLORE 7 LITERARY ANALYSES →
            </a>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default Navbar
