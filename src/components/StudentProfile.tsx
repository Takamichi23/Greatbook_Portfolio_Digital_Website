import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { StudentInfo } from '../data/portfolioData'
import { User, BookMarked, GraduationCap, Mail, Edit3, Check, Sparkles } from 'lucide-react'

interface StudentProfileProps {
  student: StudentInfo
  onUpdateStudent?: (updated: Partial<StudentInfo>) => void
}

export const StudentProfile: React.FC<StudentProfileProps> = ({
  student,
  onUpdateStudent,
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [course, setCourse] = useState(student.course)
  const [yearSection, setYearSection] = useState(student.yearAndSection)

  useEffect(() => {
    setCourse(student.course)
    setYearSection(student.yearAndSection)
  }, [student.course, student.yearAndSection])

  const handleSave = () => {
    setIsEditing(false)
    onUpdateStudent?.({
      course,
      yearAndSection: yearSection,
    })
  }

  return (
    <section id="profile" className="py-16 sm:py-20 bg-[#FFFFFF] border-b-2 border-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Large Index Number */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b-2 border-[#0A0A0A] mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-[#FF3B00] uppercase tracking-widest">
              <span>/// SECTION 01</span>
              <span>—</span>
              <span>STUDENT DOSSIER</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#0A0A0A]">
              #01_STUDENT_PROFILE
            </h2>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="p-2 bg-[#F4F4F5] border border-[#0A0A0A] font-bold">
              ID: {student.studentId}
            </span>
            <button
              onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#0A0A0A] text-white hover:bg-[#FF3B00] transition-colors font-bold uppercase tracking-wider"
            >
              {isEditing ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>SAVE DETAILS</span>
                </>
              ) : (
                <>
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>EDIT COURSE / SECTION</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* DUAL-COLUMN PROFILE LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Photo Card with Thoughtful Pose (ME.jpg) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative bg-[#F4F4F5] border-2 border-[#0A0A0A] shadow-brutalist p-4 sm:p-5">
              
              {/* Corner crosshairs */}
              <div className="absolute top-2 left-2 text-[10px] font-mono text-[#0A0A0A]/40">+</div>
              <div className="absolute top-2 right-2 text-[10px] font-mono text-[#0A0A0A]/40">+</div>
              <div className="absolute bottom-2 left-2 text-[10px] font-mono text-[#0A0A0A]/40">+</div>
              <div className="absolute bottom-2 right-2 text-[10px] font-mono text-[#0A0A0A]/40">+</div>

              {/* Photo Container */}
              <div className="relative aspect-[4/4.5] w-full bg-white border border-[#0A0A0A] overflow-hidden mb-4 group">
                <img
                  src={student.photo}
                  alt={`Student Portrait - ${student.name}`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = '/assets/hernandez_alt.jpg'
                  }}
                />

                {/* Floating Studio Stamp */}
                <div className="absolute top-3 right-3 bg-[#0A0A0A] text-white px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider border border-white">
                  PHOTO SPEC: ME.JPG
                </div>

                <div className="absolute bottom-3 left-3 bg-[#FF3B00] text-white px-2 py-0.5 font-mono text-[10px] font-black uppercase tracking-wider">
                  THOUGHTFUL READER POSE
                </div>
              </div>

              {/* Photo Caption & Academic Metadata */}
              <div className="space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between pb-1.5 border-b border-[#0A0A0A]/20">
                  <span className="text-[#0A0A0A]/60">FULL NAME:</span>
                  <span className="font-bold text-[#0A0A0A]">{student.name}</span>
                </div>
                <div className="flex items-center justify-between pb-1.5 border-b border-[#0A0A0A]/20">
                  <span className="text-[#0A0A0A]/60">COURSE:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      className="px-2 py-0.5 bg-white border border-[#FF3B00] text-xs font-bold w-48 text-right"
                    />
                  ) : (
                    <span className="font-bold text-[#0A0A0A] text-right">{course}</span>
                  )}
                </div>
                <div className="flex items-center justify-between pb-1.5 border-b border-[#0A0A0A]/20">
                  <span className="text-[#0A0A0A]/60">YEAR & SECTION:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={yearSection}
                      onChange={(e) => setYearSection(e.target.value)}
                      className="px-2 py-0.5 bg-white border border-[#FF3B00] text-xs font-bold w-48 text-right"
                    />
                  ) : (
                    <span className="font-bold text-[#0A0A0A]">{yearSection}</span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#0A0A0A]/60">ACADEMIC TERM:</span>
                  <span className="font-bold text-[#FF3B00]">{student.academicYear}</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Narrative Dossier & Expectations vs Experience */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Student Name Banner */}
            <div>
              <span className="font-mono text-xs font-bold text-[#FF3B00] uppercase tracking-widest block mb-1">
                /// SCHOLAR PROFILE
              </span>
              <h3 className="font-headline text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#0A0A0A] leading-tight">
                {student.name}
              </h3>
              <p className="font-mono text-xs sm:text-sm font-bold text-[#0A0A0A]/70 uppercase tracking-wider mt-1">
                {course} • {yearSection} • {student.subject}
              </p>
            </div>

            {/* Personal Introduction & Literature Background */}
            <div className="bg-[#F4F4F5] border-2 border-[#0A0A0A] p-6 shadow-brutalist space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#FF3B00] inline-block" />
                <h4 className="font-headline text-base sm:text-lg uppercase tracking-wider text-[#0A0A0A]">
                  Personal Introduction & Literary Background
                </h4>
              </div>
              <p className="font-body text-sm sm:text-base text-[#0A0A0A] leading-relaxed font-normal">
                {student.intro}
              </p>
            </div>

            {/* Dual Compare Cards: Expectations vs Learning Experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Initial Expectations */}
              <div className="bg-white border-2 border-[#0A0A0A] p-5 shadow-brutalist flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] font-black text-[#0A0A0A]/60 uppercase tracking-widest">
                      PHASE 01 // ENTRY
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#0A0A0A]" />
                  </div>
                  <h5 className="font-headline text-base uppercase tracking-tight text-[#0A0A0A] mb-2">
                    Initial Course Expectations
                  </h5>
                  <p className="font-body text-xs sm:text-sm text-[#0A0A0A]/85 leading-relaxed">
                    {student.expectations}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#0A0A0A]/15 font-mono text-[10px] text-[#0A0A0A]/60 uppercase">
                  ANTICIPATION: RIGID HISTORICAL CANON
                </div>
              </div>

              {/* Learning Experience & Transformation */}
              <div className="bg-[#0A0A0A] text-white border-2 border-[#0A0A0A] p-5 shadow-brutalist flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] font-black text-[#FF3B00] uppercase tracking-widest">
                      PHASE 02 // REALITY
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#FF3B00]" />
                  </div>
                  <h5 className="font-headline text-base uppercase tracking-tight text-[#FF3B00] mb-2">
                    Actual Learning Experience
                  </h5>
                  <p className="font-body text-xs sm:text-sm text-white/90 leading-relaxed">
                    {student.learningExperience}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/20 font-mono text-[10px] text-[#FF3B00] uppercase">
                  OUTCOME: EMPOWERED CRITICAL INTELLECT
                </div>
              </div>

            </div>

            {/* Quick Metadata Bar */}
            <div className="p-4 bg-[#F4F4F5] border border-[#0A0A0A] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#FF3B00]" />
                <span className="font-bold">INSTRUCTOR: {student.instructor}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0A0A0A]" />
                <span className="font-bold">{student.email}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default StudentProfile

