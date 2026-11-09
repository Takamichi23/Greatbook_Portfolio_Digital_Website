import React, { useState, useEffect } from 'react'
import { portfolioData, StudentInfo } from './data/portfolioData'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { StudentProfile } from './components/StudentProfile'
import { LiteraryAnalyses } from './components/LiteraryAnalyses'
import { FavoriteMasterpiece } from './components/FavoriteMasterpiece'
import { LearningSummary } from './components/LearningSummary'
import { PersonalReflection } from './components/PersonalReflection'
import { Footer } from './components/Footer'
import { playClickSound } from './utils/audio'

export function App() {
  const [student, setStudent] = useState<StudentInfo>(() => {
    try {
      const saved = localStorage.getItem('gb_student_info')
      if (saved) {
        const parsed = JSON.parse(saved)
        // Ensure legacy placeholder year/section is updated
        if (parsed.yearAndSection === '2nd Year — Section 2A') {
          parsed.yearAndSection = '4th Year — Section Code 1454'
          localStorage.setItem('gb_student_info', JSON.stringify(parsed))
        }
        return { ...portfolioData.student, ...parsed }
      }
    } catch {}
    return portfolioData.student
  })
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [reviewedIds, setReviewedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('gb_reviewed_analyses')
      return saved ? JSON.parse(saved) : ['metamorphosis']
    } catch {
      return ['metamorphosis']
    }
  })

  // Keyboard navigation shortcuts (1-5 to jump to sections, M to toggle sound)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger when user is typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return
      }

      const sectionMap: Record<string, string> = {
        '1': 'profile',
        '2': 'analyses',
        '3': 'favorite',
        '4': 'summary',
        '5': 'reflection',
      }

      if (sectionMap[e.key]) {
        e.preventDefault()
        const el = document.getElementById(sectionMap[e.key])
        if (el) {
          playClickSound(soundEnabled)
          el.scrollIntoView({ behavior: 'smooth' })
        }
      } else if (e.key.toLowerCase() === 'm') {
        setSoundEnabled((prev) => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [soundEnabled])

  const handleUpdateStudent = (updated: Partial<StudentInfo>) => {
    setStudent((prev) => {
      const next = { ...prev, ...updated }
      try {
        localStorage.setItem('gb_student_info', JSON.stringify(next))
      } catch {}
      return next
    })
  }

  const handleToggleReviewed = (id: string) => {
    setReviewedIds((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
      try {
        localStorage.setItem('gb_reviewed_analyses', JSON.stringify(updated))
      } catch {}
      return updated
    })
  }

  return (
    <div className="relative min-h-screen bg-[#F4F4F5] text-[#0A0A0A] flex flex-col justify-between selection:bg-[#FF3B00] selection:text-white">
      {/* Subtle Ambient Grain Layer for Editorial Texture */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Sticky Top Header Navigation */}
      <Navbar
        studentName={student.name}
        subject={student.subject}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled((prev) => !prev)}
        reviewedCount={reviewedIds.length}
        totalCount={portfolioData.analyses.length}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Banner Section */}
        <Hero
          studentName={student.name}
          subject={student.subject}
          stats={portfolioData.stats}
          soundEnabled={soundEnabled}
        />

        {/* Section 1: Student Profile (#01_PROFILE) */}
        <StudentProfile
          student={student}
          onUpdateStudent={handleUpdateStudent}
        />

        {/* Section 2: Compilation of 7 Literary Analyses (#02_ANALYSES) */}
        <LiteraryAnalyses
          analyses={portfolioData.analyses}
          soundEnabled={soundEnabled}
          reviewedIds={reviewedIds}
          onToggleReviewed={handleToggleReviewed}
        />

        {/* Section 3: My Favorite Literary Masterpiece (#03_FAVORITE) */}
        <FavoriteMasterpiece
          favorite={portfolioData.favorite}
        />

        {/* Section 4: Summary of Learning (#04_SUMMARY) */}
        <LearningSummary
          pillars={portfolioData.learningPillars}
        />

        {/* Section 5: Personal Reflection (#05_REFLECTION) */}
        <PersonalReflection
          reflections={portfolioData.reflections}
        />
      </main>

      {/* Footer Section */}
      <Footer
        studentName={student.name}
        subject={student.subject}
        academicYear={student.academicYear}
      />
    </div>
  )
}

export default App
