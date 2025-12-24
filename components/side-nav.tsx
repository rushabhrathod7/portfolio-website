"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Home, Briefcase, FolderGit2, Code2, GraduationCap, Mail } from "lucide-react"

const navItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "stack", label: "Stack", icon: Code2 },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "contact", label: "Contact", icon: Mail },
]

export function SideNav() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed left-0 top-0 z-50 h-screen w-12 hidden md:flex flex-col items-center justify-center border-r border-border/30 bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col gap-6">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="group relative flex items-center justify-center"
            aria-label={label}
          >
            <Icon
              className={cn(
                "w-5 h-5 transition-all duration-300",
                activeSection === id
                  ? "text-accent scale-110"
                  : "text-muted-foreground/40 group-hover:text-foreground/60",
              )}
            />
            <span
              className={cn(
                "absolute left-8 font-mono text-[10px] uppercase tracking-widest opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:left-10 whitespace-nowrap pointer-events-none",
                activeSection === id ? "text-accent" : "text-muted-foreground",
              )}
            >
              {label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  )
}
