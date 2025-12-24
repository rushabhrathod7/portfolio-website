"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github } from "lucide-react"
import { siteConfig } from "@/config/site-config"

gsap.registerPlugin(ScrollTrigger)

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !gridRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      )

      const cards = gridRef.current?.querySelectorAll("article")
      if (cards && cards.length > 0) {
        gsap.set(cards, { y: 60, opacity: 0 })
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      <div ref={headerRef} className="mb-16 flex items-end justify-between">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">02 / Portfolio</span>
          <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">PROJECTS</h2>
        </div>
        <p className="hidden md:block max-w-xs font-mono text-xs text-muted-foreground text-right leading-relaxed">
          Selected work showcasing full stack development expertise and problem-solving skills.
        </p>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[200px]"
      >
        {siteConfig.projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: {
    title: string
    category: string
    description: string
    fullDescription: string
    stack: string[]
    year: string
    span: string
    liveLink: string
    githubLink: string
  }
  index: number
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
      <article
        className={cn(
          "group relative border border-border/50 md:border-t md:border-l md:border-r-0 md:border-b-0 bg-card p-5 flex flex-col justify-between transition-all duration-500 cursor-pointer overflow-hidden",
          project.span,
          isHovered && "border-accent/60",
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsDialogOpen(true)}
      >
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-0",
          )}
        />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {project.category}
            </span>
            <span className="font-mono text-[10px] text-muted-foreground/60">{project.year}</span>
          </div>
          <h3
            className={cn(
              "font-[var(--font-bebas)] text-2xl md:text-4xl tracking-tight transition-colors duration-300 line-clamp-2",
              isHovered ? "text-accent" : "text-foreground",
            )}
          >
            {project.title}
          </h3>
        </div>

        <div className="relative z-10">
          <p
            className={cn(
              "font-mono text-xs text-muted-foreground leading-relaxed mb-3 transition-all duration-500 line-clamp-2",
              isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
            )}
          >
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1">
            {project.stack.slice(0, 3).map((tech, techIndex) => (
              <span
                key={techIndex}
                className={cn(
                  "px-2 py-0.5 border border-border/30 font-mono text-[9px] uppercase tracking-wider transition-all duration-300",
                  isHovered ? "text-accent border-accent/40" : "text-muted-foreground/60",
                )}
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 3 && (
              <span
                className={cn(
                  "px-2 py-0.5 border border-border/30 font-mono text-[9px] uppercase tracking-wider transition-all duration-300",
                  isHovered ? "text-accent border-accent/40" : "text-muted-foreground/60",
                )}
              >
                +{project.stack.length - 3}
              </span>
            )}
          </div>
        </div>

        <span
          className={cn(
            "absolute bottom-4 right-4 font-mono text-[10px] transition-colors duration-300",
            isHovered ? "text-accent" : "text-muted-foreground/40",
          )}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <div
          className={cn(
            "absolute top-0 right-0 w-12 h-12 transition-all duration-500",
            isHovered ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="absolute top-0 right-0 w-full h-[1px] bg-accent" />
          <div className="absolute top-0 right-0 w-[1px] h-full bg-accent" />
        </div>

        <div className="absolute bottom-0 right-0 w-6 h-6 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-background rotate-45 translate-x-4 translate-y-4 border-t border-l border-border/30" />
        </div>

        <div className="absolute inset-0 -z-10 translate-x-1 translate-y-1 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </article>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl border-accent/20">
          <DialogHeader>
            <div className="flex items-start justify-between gap-4 pr-6">
              <div className="flex-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">{project.category}</span>
                <DialogTitle className="font-[var(--font-bebas)] text-4xl md:text-5xl tracking-tight mt-2">
                  {project.title}
                </DialogTitle>
              </div>
              <span className="font-mono text-[10px] text-muted-foreground whitespace-nowrap mt-1">{project.year}</span>
            </div>
            <DialogDescription className="font-mono text-sm text-muted-foreground leading-relaxed pt-4">
              {project.fullDescription}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 pt-4">
            {/* Tech Stack */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-foreground mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={cn(
                      "px-3 py-1.5 border border-accent/40 bg-accent/5 font-mono text-[10px] uppercase tracking-wider text-accent",
                    )}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-2">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-border hover:border-accent/60 bg-background hover:bg-accent/5 transition-all duration-300 font-mono text-xs uppercase tracking-wider"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-border hover:border-accent/60 bg-background hover:bg-accent/5 transition-all duration-300 font-mono text-xs uppercase tracking-wider"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
