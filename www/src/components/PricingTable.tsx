import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PricingTableProps {
  category: string
}

// Mock pricing data for different service categories
const pricingData = {
  "web-development": {
    headers: ["Feature", "Basic", "Standard", "Premium"],
    rows: [
      { feature: "Number of Pages", basic: "5-7 pages", standard: "10-15 pages", premium: "Unlimited" },
      { feature: "Responsive Design", basic: true, standard: true, premium: true },
      { feature: "Content Management System", basic: true, standard: true, premium: true },
      { feature: "SEO Optimization", basic: "Basic", standard: "Comprehensive", premium: "Advanced" },
      { feature: "E-commerce Functionality", basic: false, standard: true, premium: true },
      { feature: "Custom Functionality", basic: false, standard: "Limited", premium: "Advanced" },
      { feature: "Revisions", basic: "3 rounds", standard: "5 rounds", premium: "Unlimited" },
      { feature: "Support", basic: "30 days", standard: "90 days", premium: "6 months" },
      { feature: "Analytics Integration", basic: "Basic", standard: "Advanced", premium: "Custom" },
    ],
    pricing: {
      basic: "$5,000",
      standard: "$10,000",
      premium: "$20,000+",
    },
  },
  "mobile-apps": {
    headers: ["Feature", "Basic", "Standard", "Premium"],
    rows: [
      { feature: "Platforms", basic: "Single Platform", standard: "iOS & Android", premium: "iOS & Android" },
      { feature: "UI Design", basic: "Standard", standard: "Custom", premium: "Premium Custom" },
      { feature: "User Authentication", basic: "Basic", standard: "Advanced", premium: "Enterprise-grade" },
      { feature: "Offline Functionality", basic: false, standard: "Limited", premium: "Full" },
      { feature: "Push Notifications", basic: false, standard: true, premium: true },
      { feature: "In-App Purchases", basic: false, standard: true, premium: true },
      { feature: "Analytics", basic: "Basic", standard: "Advanced", premium: "Custom" },
      { feature: "API Integration", basic: "1 API", standard: "3 APIs", premium: "Unlimited" },
      { feature: "Support", basic: "30 days", standard: "90 days", premium: "6 months" },
    ],
    pricing: {
      basic: "$15,000",
      standard: "$30,000",
      premium: "$50,000+",
    },
  },
  // Default pricing for other categories
  default: {
    headers: ["Feature", "Basic", "Standard", "Premium"],
    rows: [
      { feature: "Consultation", basic: "Limited", standard: "Comprehensive", premium: "In-depth" },
      { feature: "Implementation", basic: "Basic", standard: "Standard", premium: "Advanced" },
      { feature: "Support", basic: "30 days", standard: "90 days", premium: "6 months" },
      { feature: "Response Time", basic: "48 hours", standard: "24 hours", premium: "4 hours" },
      { feature: "Customization", basic: "Limited", standard: "Moderate", premium: "Extensive" },
    ],
    pricing: {
      basic: "Contact for pricing",
      standard: "Contact for pricing",
      premium: "Contact for pricing",
    },
  },
}

export default function PricingTable({ category }: PricingTableProps) {
  // Get pricing data for the category or use default if not found
  const data = pricingData[category as keyof typeof pricingData] || pricingData.default

  return (
    <div className="space-y-6">
      <Table>
        <TableHeader>
          <TableRow>
            {data.headers.map((header, index) => (
              <TableHead key={index} className={index === 0 ? "" : "text-center font-retro"}>
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium font-retro">{row.feature}</TableCell>
              <TableCell className="text-center">
                {typeof row.basic === "boolean" ? (
                  row.basic ? (
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  )
                ) : (
                  <span className="font-retro">{row.basic}</span>
                )}
              </TableCell>
              <TableCell className="text-center">
                {typeof row.standard === "boolean" ? (
                  row.standard ? (
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  )
                ) : (
                  <span className="font-retro">{row.standard}</span>
                )}
              </TableCell>
              <TableCell className="text-center">
                {typeof row.premium === "boolean" ? (
                  row.premium ? (
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  )
                ) : (
                  <span className="font-retro">{row.premium}</span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary mb-2 font-retro">{data.pricing.basic}</div>
          <Button asChild variant="outline" className="w-full rounded-full font-retro">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary mb-2 font-retro">{data.pricing.standard}</div>
          <Button asChild className="w-full rounded-full bg-desir-500 hover:bg-desir-600 text-white font-retro">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary mb-2 font-retro">{data.pricing.premium}</div>
          <Button asChild variant="outline" className="w-full rounded-full font-retro">
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

