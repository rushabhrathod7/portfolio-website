"use client"

import { siteConfig } from "@/config/site-config"

export function WorkExperienceSection() {
  return (
    <section id="experience" className="relative py-20 md:py-32 px-6 md:pl-28 md:pr-12">
      <div className="mb-12 md:mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">01 / Career</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-4xl md:text-7xl tracking-tight">WORK EXPERIENCE</h2>
      </div>

      <div className="space-y-8 md:space-y-16">
        {siteConfig.workExperience.map((exp, index) => (
          <article
            key={index}
            className="group relative border-l-2 border-border/40 pl-6 md:pl-12 hover:border-accent transition-colors duration-500"
          >
            <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <time className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{exp.period}</time>

            <h3 className="mt-3 font-[var(--font-bebas)] text-2xl md:text-5xl tracking-tight group-hover:text-accent transition-colors duration-300">
              {exp.role}
            </h3>

            <p className="mt-2 font-mono text-xs md:text-sm text-muted-foreground/80">{exp.company}</p>

            <p className="mt-4 max-w-2xl font-mono text-xs leading-relaxed text-muted-foreground">{exp.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {exp.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 md:px-3 py-1 border border-border/40 font-mono text-[10px] uppercase tracking-wider text-muted-foreground group-hover:border-accent/40 group-hover:text-accent transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
