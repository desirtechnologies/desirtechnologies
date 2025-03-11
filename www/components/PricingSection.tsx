"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, HelpCircle } from "lucide-react"
import Link from "next/link"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface PricingPlan {
  id: string
  name: string
  description: string
  price: {
    monthly: string
    yearly: string
  }
  features: {
    text: string
    included: boolean
    tooltip?: string
  }[]
  cta: string
  popular?: boolean
}

const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for small businesses and startups",
    price: {
      monthly: "$999",
      yearly: "$899",
    },
    features: [
      { text: "Up to 5 users", included: true },
      { text: "Basic support", included: true },
      { text: "Standard reporting", included: true },
      { text: "1 project", included: true },
      { text: "Priority support", included: false, tooltip: "Available in higher tiers" },
      { text: "Advanced analytics", included: false },
      { text: "Custom integrations", included: false },
      { text: "Dedicated account manager", included: false },
    ],
    cta: "Get Started",
  },
  {
    id: "professional",
    name: "Professional",
    description: "Ideal for growing businesses and teams",
    price: {
      monthly: "$1,999",
      yearly: "$1,799",
    },
    features: [
      { text: "Up to 20 users", included: true },
      { text: "Priority support", included: true },
      { text: "Advanced reporting", included: true },
      { text: "5 projects", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Basic integrations", included: true },
      { text: "Custom integrations", included: false },
      { text: "Dedicated account manager", included: false },
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large organizations with complex needs",
    price: {
      monthly: "$4,999",
      yearly: "$4,499",
    },
    features: [
      { text: "Unlimited users", included: true },
      { text: "24/7 premium support", included: true },
      { text: "Custom reporting", included: true },
      { text: "Unlimited projects", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Custom integrations", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Strategic consulting", included: true, tooltip: "Quarterly strategic technology consulting" },
    ],
    cta: "Contact Sales",
  },
]

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <div className="space-y-8">
      <div className="flex justify-center items-center space-x-4 mb-8">
        <Label
          htmlFor="billing-cycle"
          className={`text-sm ${billingCycle === "monthly" ? "text-primary" : "text-foreground/70"}`}
        >
          Monthly
        </Label>
        <Switch
          id="billing-cycle"
          checked={billingCycle === "yearly"}
          onCheckedChange={(checked) => setBillingCycle(checked ? "yearly" : "monthly")}
        />
        <div className="flex items-center">
          <Label
            htmlFor="billing-cycle"
            className={`text-sm ${billingCycle === "yearly" ? "text-primary" : "text-foreground/70"}`}
          >
            Yearly
          </Label>
          <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">Save 10%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="h-full"
          >
            <Card
              className={`h-full border ${plan.popular ? "border-primary/50 shadow-lg shadow-primary/10" : "border-border/50"} bg-card/50 dark:bg-card/50 backdrop-blur-sm relative`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  Most Popular
                </div>
              )}
              <CardContent className="p-6">
                <h3 className="text-2xl font-medium mb-2 font-retro">{plan.name}</h3>
                <p className="text-sm text-foreground/70 mb-4 font-retro">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary font-retro">
                    {billingCycle === "monthly" ? plan.price.monthly : plan.price.yearly}
                  </span>
                  <span className="text-foreground/70 ml-2 font-retro">/month</span>
                  {billingCycle === "yearly" && (
                    <div className="text-xs text-foreground/60 mt-1 font-retro">Billed annually</div>
                  )}
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className={`mr-2 mt-0.5 ${feature.included ? "text-primary" : "text-foreground/30"}`}>
                        {feature.included ? (
                          <Check className="h-5 w-5" />
                        ) : (
                          <div className="h-5 w-5 border border-foreground/30 rounded-full" />
                        )}
                      </span>
                      <span
                        className={`text-sm ${feature.included ? "text-foreground/70" : "text-foreground/40"} font-retro`}
                      >
                        {feature.text}
                      </span>
                      {feature.tooltip && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpCircle className="h-4 w-4 ml-1 text-foreground/40" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-xs">{feature.tooltip}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`w-full rounded-full ${plan.popular ? "bg-desir-500 hover:bg-desir-600 text-white" : ""} font-retro`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  <Link href="/contact">{plan.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-foreground/60 font-retro mb-4">
          Need a custom plan? Contact our sales team for a tailored solution.
        </p>
        <Button asChild variant="outline" className="rounded-full font-retro">
          <Link href="/contact">Contact Sales</Link>
        </Button>
      </div>
    </div>
  )
}

