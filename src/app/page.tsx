import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';
import { AboutSection } from '@/components/sections/about-section';
import { CertificationsSection } from '@/components/sections/certifications-section';
import { ContactSection } from '@/components/sections/contact-section';
import { HeroSection } from '@/components/sections/hero-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ResumeSection } from '@/components/sections/resume-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { TechWatchSection } from '@/components/sections/tech-watch-section';
import { TimelineSection } from '@/components/sections/timeline-section';

export default function HomePage() {
  return (
    <div className='flex min-h-screen flex-col'>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <TimelineSection />
        <CertificationsSection />
        <TechWatchSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
