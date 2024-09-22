'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { ThemeProvider, useTheme } from 'next-themes'
import SkillsMarquee from './SkillsMarquee'
import ProfileCard from './ProfileCard'
import CurrentlyWorking from './CurrentlyWorking'
import Projects from './ProjectCard'
import Contact from './Contact'
// import CustomCursor from './CustomCursor'
import Firework from './Firework'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed top-4 right-4 p-2 rounded-full dark:bg-gray-200 bg-zinc-800 dark:text-zinc-800 text-gray-200"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  )
}

function PortfolioContent() {
  return (
    <div className="min-h-screen dark:bg-gray-100 bg-zinc-950 p-4 transition-colors duration-200">
      <ThemeToggle />
      <Firework />
      {/* <CustomCursor /> */}
      <main className="flex flex-col items-center justify-between">
        <div className="flex flex-col items-center justify-center mt-8 mb-16 p-4 w-full max-w-[660px]">
          <ProfileCard />
          <CurrentlyWorking />
          <Projects />
          <SkillsMarquee />
          <div className='h-[1px] w-full mt-4 dark:bg-gray-300 bg-zinc-800' />
          <Contact />
        </div>
      </main>
    </div>
  )
}

export default function PortfolioComponent() {
  return (
    <ThemeProvider attribute="class">
      <PortfolioContent />
    </ThemeProvider>
  )
}
