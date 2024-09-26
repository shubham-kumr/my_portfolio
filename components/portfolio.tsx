'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { ThemeProvider, useTheme } from 'next-themes'
import BlurFade from "@/components/magicui/blur-fade"
import SkillsMarquee from './SkillsMarquee'
import ProfileCard from './ProfileCard'
import CurrentlyWorking from './CurrentlyWorking'
import Projects from './ProjectCard'
import Contact from './ContactMe'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed top-4 right-4 p-2 rounded-full dark:bg-gray-200 bg-zinc-800 dark:text-zinc-800 text-gray-200 z-50"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  )
}

function PortfolioContent() {
  return (
    <div className="min-h-screen dark:bg-gray-100 bg-zinc-950 transition-colors duration-200">
      <ThemeToggle />
      <main className="flex flex-col items-center justify-between px-4 py-8 md:py-16">
        <div className="w-full max-w-[660px] space-y-8 md:space-y-16">
          <BlurFade delay={0.25} inView>
            <ProfileCard />
          </BlurFade>
          <BlurFade delay={0.35} inView>
            <CurrentlyWorking />
          </BlurFade>
          <BlurFade delay={0.45} inView>
            <Projects />
          </BlurFade>
          <BlurFade delay={0.45} inView>
            <SkillsMarquee />
          </BlurFade>
          <BlurFade delay={0.45} inView>
            <div className='h-[1px] w-full dark:bg-gray-300 bg-zinc-800' />
          </BlurFade>
          <BlurFade delay={0.45} inView>
            <Contact />
          </BlurFade>
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