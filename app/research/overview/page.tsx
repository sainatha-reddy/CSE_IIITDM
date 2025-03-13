import Header from "@/components/Header"
import Footer from "@/components/Footer"
import HeroSection from "@/components/research/overview/HeroSection"
import ResearchAreas from "@/components/research/overview/ResearchAreas"
import PhdProgram from "@/components/research/overview/PhdProgram"
import EntranceSyllabus from "@/components/research/overview/EntranceSyllabus"
import Resources from "@/components/research/overview/Resources"
import CallToAction from "@/components/research/overview/CallToAction"
import Pagination from "@/components/research/overview/Pagination"

export default function ResearchOverviewPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section id="hero">
          <HeroSection />
        </section>

        <section id="research-areas">
          <ResearchAreas />
        </section>

        <section id="phd-program">
          <PhdProgram />
        </section>

        <section id="entrance-syllabus">
          <EntranceSyllabus />
        </section>

        <section id="resources">
          <Resources />
        </section>

        <CallToAction />

        <Pagination />
      </main>

      <Footer />
    </div>
  )
}

