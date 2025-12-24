"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { siteConfig } from "@/config/site-config"

gsap.registerPlugin(ScrollTrigger)

export function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          x: -60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }

      if (contentRef.current) {
        const items = contentRef.current.querySelectorAll("article")
        gsap.from(items, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }

      if (footerRef.current) {
        gsap.from(footerRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30"
    >
      <div ref={headerRef} className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">04 / Background</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">EDUCATION</h2>
      </div>

      <div ref={contentRef} className="space-y-16 md:space-y-20">
        {siteConfig.education.map((edu, index) => (
          <article key={index} className="group">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h3 className="font-[var(--font-bebas)] text-3xl md:text-5xl tracking-tight group-hover:text-accent transition-colors duration-300">
                  {edu.degree}
                </h3>
                <p className="mt-2 font-mono text-sm text-muted-foreground/80">{edu.school}</p>
                <p className="mt-1 font-mono text-xs text-accent">{edu.focus}</p>
              </div>
              <time className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {edu.period}
              </time>
            </div>

            <ul className="space-y-2 border-l-2 border-border/40 pl-6 group-hover:border-accent transition-colors duration-500">
              {edu.achievements.map((achievement, achIndex) => (
                <li
                  key={achIndex}
                  className="font-mono text-xs text-muted-foreground leading-relaxed flex items-start gap-2"
                >
                  <span className="mt-1.5 w-1 h-1 bg-accent/60 rounded-full flex-shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div ref={footerRef} className="mt-24 pt-12 border-t border-border/20">
        <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">Certifications</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {siteConfig.certifications.map((cert, index) => (
            <div
              key={index}
              className="group border border-border/40 p-4 hover:border-accent/60 transition-colors duration-300"
            >
              <p className="font-mono text-xs text-foreground/80 group-hover:text-accent transition-colors duration-300">
                {cert}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
