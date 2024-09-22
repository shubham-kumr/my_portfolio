import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

function ProjectCard({ title, description, image, href }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showPopup, setShowPopup] = useState(false);
  const { theme } = useTheme();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <div
        ref={cardRef}
        className="relative w-full rounded-2xl border dark:border-gray-300 border-zinc-800 hover:cursor-pointer overflow-hidden dark:bg-white bg-zinc-900 group"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
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
            <Image
              src={image}
              alt={`${title} thumbnail`}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <p className="text-sm dark:text-gray-700 text-gray-300">{title}</p>
            <p className="text-xs dark:text-gray-600 text-gray-400">{description}</p>
          </div>
        </div>
        {showPopup && (
          <div
            className="absolute z-20 mt-2 w-12 h-12 font-bold bg-gray-200 dark:bg-zinc-950 dark:text-gray-200 text-zinc-950 text-sm rounded-full flex items-center justify-center"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              transform: 'translate(-50%, -100%)',
            }}
          >
            View
          </div>
        )}
      </div>
    </Link>
  );
}

function Projects() {
  const projects = [
    {
      title: "supercharged to-do app",
      description: "Stay organized and manage your tasks effectively with our feature-rich to-do app.",
      image: "https://utfs.io/f/qrNhX5uLNRYDgNOfX95FiJ73qDY9kybxocvC1p6ZdmHztB25",
      href: "https://havetodoapp.netlify.app"
    },
    {
      title: "route system",
      description: "I built a route system to check the travel time between two places.",
      image: "https://utfs.io/f/qrNhX5uLNRYDyNMZdI6ek0iU5f8VcEIGJCqvOSdTb3NP6n2r",
      href: "https://routesystem.vercel.app"
    },
    {
      title: "shopping list app",
      description: "A simple shopping list app with add to list functionality.",
      image: "https://utfs.io/f/qrNhX5uLNRYDfuzN79Z0rTC34XFRcMw7EYeQt12kngK9ZHzs",
      href: "https://theshoppinglist.netlify.app"
    },
    {
      title: "password generator",
      description: "Generate strong passwords with our secure password generator.",
      image: "https://utfs.io/f/qrNhX5uLNRYDLRFNfQ8hWVN6PaiygOUqxZfjLw0eAvESdpcz",
      href: "https://passwdgenerateapp.netlify.app"
    },
    {
      title: "currency converter",
      description: "Convert currencies with our real-time currency converter.",
      image: "https://utfs.io/f/qrNhX5uLNRYDgOAgjq5FiJ73qDY9kybxocvC1p6ZdmHztB25",
      href: "https://currencypricechecker.netlify.app"
    },
  ];

  return (
    <div className="max-w-[700px] my-[2rem] w-full">
      <div className="flex items-center justify-between w-full">
        <h1 className="dark:text-gray-800 font-bold tracking-wide text-xl text-gray-200">projects 🏗️</h1>
      </div>
      <div className="h-[1px] mt-2 w-full dark:bg-gray-300 bg-zinc-800" />
      <div className="grid sm:grid-cols-2 lg:grid-col:2 xl:grid-cols-2 gap-2 mt-[0.75rem]">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
