import Hero from "@/components/hero"
import AboutSnippet from "@/components/about-snippet"

import FocusImpact from "@/components/focus-impact"
import ImpactStatsNew from "@/components/impact-stats-new"

import FeaturedPrograms from "@/components/featured-programs"
import Pathways from "@/components/impact-pathways"
import CTASection from "@/components/cta-section"
import ScrollAnimationWrapper from "@/components/animation-on-scroll"

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <ScrollAnimationWrapper once={false} y={100}>

      <AboutSnippet />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper once={false} y={200}>
      <Pathways />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper once={false} x={200}>
      <FeaturedPrograms />
      </ScrollAnimationWrapper>
      <FocusImpact />
      <ImpactStatsNew />
      <CTASection />
    </div>
  )
}

