import Hero from "@/components/hero"
import AboutSnippet from "@/components/about-snippet"
import ProgramsGrid from "@/components/programs-grid"
import FocusImpact from "@/components/focus-impact"
import ImpactStatsNew from "@/components/impact-stats-new"
// import CTASectionNew from "@/components/cta-section-new"
import FeaturedPrograms from "@/components/featured-programs"
import Pathways from "@/components/impact-pathways"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSnippet />
      <Pathways />
      <ProgramsGrid />
      <FocusImpact />
      <ImpactStatsNew />
      {/* <CTASectionNew /> */}
      <FeaturedPrograms />
    </>
  )
}

