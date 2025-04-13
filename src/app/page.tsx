import Hero from "@/components/hero"
import AboutSnippet from "@/components/about-snippet"

import FocusImpact from "@/components/focus-impact"
import ImpactStatsNew from "@/components/impact-stats-new"

import FeaturedPrograms from "@/components/featured-programs"
import Pathways from "@/components/impact-pathways"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSnippet />
      <Pathways />
      <FeaturedPrograms />
      <FocusImpact />
      <ImpactStatsNew />
      <CTASection />
    </>
  )
}

