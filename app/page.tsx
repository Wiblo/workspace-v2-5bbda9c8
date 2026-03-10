/**
 * HOME PAGE
 *
 * This page is a template placeholder. Customize it for your client's business.
 *
 * TYPICAL HOME PAGE STRUCTURE:
 * 1. Hero Section - Main headline, value proposition, CTA
 * 2. Featured Services - Highlight 3-4 key services
 * 3. About Preview - Brief intro with link to full about page
 * 4. Features/Benefits - Why choose this business
 * 5. CTA Section - Call to action (book appointment, contact, etc.)
 * 6. Location Section - Address, map, hours
 * 7. FAQ Section - Common questions
 *
 * AVAILABLE COMPONENTS (in components/sections/):
 * - hero/HeroSection - Full hero with image and CTA
 * - services/FeaturedServices - Grid of featured services
 * - about/AboutPreview - Short about section with link
 * - features/FeaturesSection - Benefits/features grid
 * - cta/CTASection - Call to action banner
 * - location/LocationSection - Business location and hours
 * - faq/FAQSection - Frequently asked questions
 *
 * BEFORE ADDING COMPONENTS:
 * 1. Update lib/data/ with the client's business information
 * 2. Read docs/brand-guide.md for colors and typography
 * 3. Customize each component's content to match the business
 * 4. Follow the brand colors defined in globals.css
 *
 * EXAMPLE IMPLEMENTATION:
 * ```tsx
 * import { HeroSection } from "@/components/sections/hero/HeroSection"
 * import { FeaturedServices } from "@/components/sections/services/FeaturedServices"
 * import { AboutPreview } from "@/components/sections/about/AboutPreview"
 * import { FeaturesSection } from "@/components/sections/features/FeaturesSection"
 * import { CTASection } from "@/components/sections/cta/CTASection"
 * import { LocationSection } from "@/components/sections/location/LocationSection"
 * import { FAQSection } from "@/components/sections/faq/FAQSection"
 *
 * export default function HomePage() {
 *   return (
 *     <>
 *       <HeroSection />
 *       <FeaturedServices />
 *       <AboutPreview />
 *       <FeaturesSection />
 *       <CTASection />
 *       <LocationSection />
 *       <FAQSection />
 *     </>
 *   )
 * }
 * ```
 */
import Image from "next/image"

export default function HomePage() {
  return (
    <main className="min-h-dvh flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-lg mx-auto flex flex-col items-center gap-10 text-center">

        {/* Status badge */}
        <div className="animate-in fade-in slide-in-from-top-3 duration-500 fill-mode-backwards">
          <span className="inline-flex items-center gap-2 border border-border border-dashed rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            Building something great
          </span>
        </div>

        {/* Robot mascot with decorative rings */}
        <div
          className="animate-in fade-in zoom-in-90 duration-500 [animation-delay:120ms] [animation-fill-mode:backwards] relative flex items-center justify-center"
        >
          {/* Outer dashed decorative ring */}
          <div className="absolute size-72 rounded-full border-2 border-dashed border-border" />
          {/* Middle solid ring */}
          <div className="absolute size-60 rounded-full border border-border bg-muted/40" />
          {/* Inner circle */}
          <div className="relative size-52 rounded-full bg-muted flex items-center justify-center">
            <Image
              src="/uploads/logo_construction.png"
              alt="Friendly construction worker robot mascot"
              width={220}
              height={275}
              className="w-44 h-auto object-contain relative z-10"
              priority
            />
          </div>
        </div>

        {/* Text content */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 [animation-delay:240ms] [animation-fill-mode:backwards] flex flex-col items-center gap-4">
          <h1 className="text-5xl sm:text-6xl font-bold text-balance leading-[1.1]">
            Home Page{" "}
            <span className="text-primary">Under Construction</span>
          </h1>
          <p className="text-lg text-muted-foreground text-pretty max-w-sm leading-relaxed">
            This page is being customized for your business. Ask the AI to build
            your home page with your brand and content.
          </p>
        </div>

        {/* Decorative divider dots */}
        <div
          className="animate-in fade-in duration-500 [animation-delay:360ms] [animation-fill-mode:backwards] flex items-center gap-2"
        >
          <span className="size-1.5 rounded-full bg-border" />
          <span className="size-1.5 rounded-full bg-primary/40" />
          <span className="size-1.5 rounded-full bg-primary" />
          <span className="size-1.5 rounded-full bg-primary/40" />
          <span className="size-1.5 rounded-full bg-border" />
        </div>

      </div>
    </main>
  )
}
