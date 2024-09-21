'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Linkedin, Twitter, Github, Sun, Moon } from 'lucide-react'
import { ThemeProvider, useTheme } from 'next-themes'

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

function ProfileCard() {
  return (
    <div className="flex justify-between items-center w-full border p-5 rounded dark:border-gray-300 border-zinc-800 dark:bg-white bg-zinc-900">
      <div className="flex flex-col justify-center items-start w-full">
        <div className="flex justify-center items-center gap-2">
          <div>
            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full animate-buttonheartbeat hover:cursor-pointer">
              <span className="flex h-full w-full items-center justify-center rounded-full dark:bg-gray-300 bg-gray-700 dark:text-gray-800 text-gray-200">SK</span>
            </span>
          </div>
          <div>
            <h1 className="font-semibold leading-7 dark:text-gray-800 text-gray-200">Shubham Kumar</h1>
            <p className="text-xs font-dark dark:text-gray-600 text-gray-400">Full Stack Engineer </p>
          </div>
        </div>
        <div className="flex flex-col gap-1 mt-3">
          <p className="text-xs font-normal dark:text-gray-600 text-gray-400">
            I&apos;m developer and tech enthusiast from India. I love to build things🏗️ and share my knowledge with others.
          </p>
            <p className="text-xs font-normal dark:text-gray-600 text-gray-400">
            Looking to hire me? Email me at <a href="mailto:theshubhamkumr@gmail.com" className="underline">theshubhamkumr@gmail.com</a>
            </p>
        </div>
      </div>
      <div className="flex gap-4">
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/theshubhamkumr/" aria-label="Shubham Kumar's LinkedIn">
          <Linkedin className="w-5 h-5 dark:text-gray-600 text-gray-400 hover:text-blue-500" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://x.com/_whyshubham" aria-label="Shubham Kumar's Twitter page">
          <Twitter className="w-5 h-5 dark:text-gray-600 text-gray-400 hover:text-sky-500" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/shubham-kumr" aria-label="Shubham Kumar's Github profile">
          <Github className="w-5 h-5 dark:text-gray-600 text-gray-400 hover:text-green-700" />
        </a>
      </div>
    </div>
  )
}

function CurrentlyWorking() {
  return (
    <div className="flex flex-col mt-[2rem] w-full">
      <h1 className="font-normal dark:text-gray-800 text-gray-200">currently cooking 👨‍🍳</h1>
      <div className="h-[1px] mt-2 w-full dark:bg-gray-300 bg-zinc-800" />
      <div className="flex flex-col justify-center items-start w-full mt-[0.75rem] gap-2">
        <div className="flex flex-col w-full">
          <div className="flex gap-2">
            <a target="_blank" rel="noopener noreferrer" href="https://arcadeapi.vercel.app/">
              <p className="text-sm leading-7 hover:underline dark:text-gray-800 text-gray-300">arcadeapi (coming soon)</p>
            </a>
          </div>
          <p className="text-sm dark:text-gray-700 text-gray-400">integrate games through api.</p>
        </div>
      </div>
    </div>
  )
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

function ProjectCard({ title, description, image, href }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { theme } = useTheme()

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <div
        ref={cardRef}
        className="relative w-full rounded-2xl border dark:border-gray-300 border-zinc-800 hover:cursor-pointer overflow-hidden dark:bg-white bg-zinc-900 group"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            background: theme === 'dark'
            ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,1,0.2), transparent 40%)`
              : `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2), transparent 40%)`,
          }}
        />
        <div className="relative z-10 p-3">
          <div className="relative w-full aspect-[13/8] rounded overflow-hidden">
            <Image src={image} alt={`${title} thumbnail`} layout="fill" objectFit="cover" objectPosition="center" />
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <p className="text-sm dark:text-gray-700 text-gray-300">{title}</p>
            <p className="text-xs dark:text-gray-600 text-gray-400">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

function Projects() {
  const projects = [
    {
      title: "supercharged to-do app",
      description: "stay organized and manage your tasks effectively with our feature-rich to-do app.",
      image: "https://utfs.io/f/qrNhX5uLNRYDgNOfX95FiJ73qDY9kybxocvC1p6ZdmHztB25",
      href: "https://havetodoapp.netlify.app"
    },
    {
      title: "route system",
      description: "i built a route system to check the travel time between two places.",
      image: "https://utfs.io/f/qrNhX5uLNRYDyNMZdI6ek0iU5f8VcEIGJCqvOSdTb3NP6n2r",
      href: "https://routesystem.vercel.app"
    },
    {
      title: "shopping list app",
      description: "a simple shopping list app with add to list functionality.",
      image: "https://utfs.io/f/qrNhX5uLNRYDfuzN79Z0rTC34XFRcMw7EYeQt12kngK9ZHzs",
      href: "https://theshoppinglist.netlify.app"
    },
    {
      title: "password generator",
      description: "generate strong passwords with our secure password generator.",
      image: "https://utfs.io/f/qrNhX5uLNRYDLRFNfQ8hWVN6PaiygOUqxZfjLw0eAvESdpcz",
      href: "https://passwdgenerateapp.netlify.app"
    },
    {
      title: "currency converter",
      description: "convert currencies with our real-time currency converter.",
      image: "https://utfs.io/f/qrNhX5uLNRYDgOAgjq5FiJ73qDY9kybxocvC1p6ZdmHztB25",
      href: "https://currencypricechecker.netlify.app"
    },
  ]

  return (
    <div className="max-w-[700px] my-[2rem] w-full">
      <div className="flex items-center justify-between w-full">
        <h1 className="dark:text-gray-800 text-gray-200">projects 🏗️</h1>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-col:2 xl:grid-cols-2 gap-2 mt-[0.75rem]">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

function PortfolioContent() {
  return (
    <div className="min-h-screen dark:bg-gray-100 bg-zinc-950 p-4 transition-colors duration-200">
      <ThemeToggle />
      <main className="flex min-w-screen flex-col items-center justify-between">
        <div className="flex flex-col flex-wrap items-center justify-center mt-[3rem] mb-[6rem] p-3 w-full max-w-[650px]">
          <ProfileCard />
          <CurrentlyWorking />
          <Projects />
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