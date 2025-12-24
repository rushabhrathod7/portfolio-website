import { HeroSection } from "@/components/hero-section"
import { WorkExperienceSection } from "@/components/work-experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"
import { SideNav } from "@/components/side-nav"

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <SideNav />
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />

      <div className="relative z-10 md:ml-0">
        <HeroSection />
        <WorkExperienceSection />
        <ProjectsSection />
        <TechStackSection />
        <EducationSection />
        <ContactSection />
      </div>
    </main>
  )
}
