"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { Mail, Github, Linkedin, Twitter, Send, CheckCircle2, XCircle } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { siteConfig } from "@/config/site-config"
import { sendEmail } from "@/app/actions/send-email"

gsap.registerPlugin(ScrollTrigger)

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !contentRef.current) return

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
            toggleActions: "play none none none",
          },
        },
      )

      gsap.fromTo(
        contentRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const result = await sendEmail(formData)

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        })
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Failed to send message. Please try again.",
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { icon: Github, label: "GitHub", href: siteConfig.social.github },
    { icon: Linkedin, label: "LinkedIn", href: siteConfig.social.linkedin },
    { icon: Twitter, label: "Twitter", href: siteConfig.social.twitter },
    { icon: Mail, label: "Email", href: siteConfig.social.email },
  ]

  return (
    <section ref={sectionRef} id="contact" className="relative py-20 md:py-32 px-6 md:pl-28 md:pr-12">
      <div ref={headerRef} className="mb-12 md:mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">05 / Connect</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-4xl md:text-7xl tracking-tight">GET IN TOUCH</h2>
        <p className="mt-4 max-w-2xl font-mono text-xs md:text-sm text-muted-foreground leading-relaxed">
          Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new
          opportunities and interesting projects.
        </p>
      </div>

      <div ref={contentRef} className="grid md:grid-cols-2 gap-8 md:gap-16 max-w-5xl">
        {/* Contact Form */}
        <div className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-background border border-border/40 px-4 py-3 font-mono text-sm text-foreground focus:border-accent focus:outline-none transition-colors duration-200"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-background border border-border/40 px-4 py-3 font-mono text-sm text-foreground focus:border-accent focus:outline-none transition-colors duration-200"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full bg-background border border-border/40 px-4 py-3 font-mono text-sm text-foreground focus:border-accent focus:outline-none transition-colors duration-200 resize-none"
                required
                disabled={isSubmitting}
              />
            </div>

            {submitStatus && (
              <div
                className={`flex items-center gap-3 px-4 py-3 border ${
                  submitStatus.type === "success"
                    ? "border-green-500/40 bg-green-500/10 text-green-500"
                    : "border-red-500/40 bg-red-500/10 text-red-500"
                }`}
              >
                {submitStatus.type === "success" ? (
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                ) : (
                  <XCircle className="w-4 h-4 flex-shrink-0" />
                )}
                <span className="font-mono text-xs">{submitStatus.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex items-center gap-3 border border-accent/40 px-6 py-3 font-mono text-xs uppercase tracking-widest text-accent hover:bg-accent hover:text-background transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
            </button>
          </form>
        </div>

        {/* Social Links & Info */}
        <div className="space-y-8">
          <div>
            <h3 className="font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight mb-4">CONNECT WITH ME</h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 border border-border/40 px-4 py-3 hover:border-accent transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-accent transition-colors duration-300">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-border/40 pt-8">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">Location</h4>
            <p className="font-mono text-sm text-foreground">{siteConfig.location}</p>
            <p className="font-mono text-xs text-muted-foreground mt-2">{siteConfig.locationNote}</p>
          </div>

          <div className="border-t border-border/40 pt-8">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
              Response Time
            </h4>
            <p className="font-mono text-sm text-foreground">{siteConfig.responseTime}</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 md:mt-32 pt-8 border-t border-border/40">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {siteConfig.copyright}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {siteConfig.builtWith}
          </p>
        </div>
      </div>
    </section>
  )
}
