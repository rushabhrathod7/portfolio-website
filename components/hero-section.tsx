"use client"

import { useEffect, useRef } from "react"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import { SplitFlapText, SplitFlapMuteToggle, SplitFlapAudioProvider } from "@/components/split-flap-text"
import { AnimatedNoise } from "@/components/animated-noise"
import { BitmapChevron } from "@/components/bitmap-chevron"
import { Download } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { siteConfig } from "@/config/site-config"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center px-6 md:pl-28 md:pr-12">
      <AnimatedNoise opacity={0.03} />

      {/* Left vertical labels - hidden on mobile */}
      <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 hidden md:block">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground -rotate-90 origin-left block whitespace-nowrap">
          PORTFOLIO
        </span>
      </div>

      {/* Main content */}
      <div ref={contentRef} className="flex-1 w-full">
        <SplitFlapAudioProvider>
          <div className="relative">
            <SplitFlapText text={siteConfig.title} speed={80} />
            <div className="mt-4">
              <SplitFlapMuteToggle />
            </div>
          </div>
        </SplitFlapAudioProvider>

        <h2 className="font-[var(--font-bebas)] text-muted-foreground/60 text-lg md:text-[clamp(1rem,3vw,2rem)] mt-4 tracking-wide">
          {siteConfig.tagline}
        </h2>

        <p className="mt-8 md:mt-12 max-w-md font-mono text-xs md:text-sm text-muted-foreground leading-relaxed">
          {siteConfig.description}
        </p>

        <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-8">
          <a
            href="#experience"
            className="group inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
          >
            <ScrambleTextOnHover text="View Work" as="span" duration={0.6} />
            <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
          </a>

          <a
            href={siteConfig.resumePath}
            download
            className="group inline-flex items-center gap-3 border border-accent/40 px-6 py-3 font-mono text-xs uppercase tracking-widest text-accent hover:bg-accent hover:text-background transition-all duration-200"
          >
            <Download className="w-4 h-4" />
            <span>Resume</span>
          </a>

          <a
            href="#projects"
            className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Projects
          </a>
        </div>
      </div>

      {/* Floating info tag - responsive */}
      <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12">
        <div className="border border-border px-3 md:px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {siteConfig.availability}
        </div>
      </div>
    </section>
  )
}
