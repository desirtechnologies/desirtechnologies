import PricingSection from "@components/PricingSection"
export default function PricingTable() {
    return (
       
         <section className="container mx-auto px-4 py-16 relative z-10">
         <h2 className="text-3xl md:text-4xl font-light text-foreground/90 dark:text-foreground/90 mb-8 text-center font-retro">
           PRICING PLANS
         </h2>
         <PricingSection />
       </section>
    )
}