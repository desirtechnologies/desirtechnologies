import { PricingPlan } from "./types.ts";

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    description: "Perfect for small businesses and startups",
    monthlyPrice: 999,
    yearlyPrice: 899 * 12, // 10% discount
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
    ctaText: "Get Started",
    ctaAction: () => console.log("Starter plan selected"),
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses and teams",
    monthlyPrice: 1999,
    yearlyPrice: 1799 * 12, // 10% discount
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
    ctaText: "Get Started",
    ctaAction: () => console.log("Professional plan selected"),
    isPopular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex needs",
    monthlyPrice: 4999,
    yearlyPrice: 4499 * 12, // 10% discount
    features: [
      { text: "Unlimited users", included: true },
      { text: "24/7 premium support", included: true },
      { text: "Custom reporting", included: true },
      { text: "Unlimited projects", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Custom integrations", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Strategic consulting", included: true, tooltip: "Quarterly strategy sessions" },
    ],
    ctaText: "Contact Sales",
    ctaAction: () => console.log("Enterprise plan selected"),
  },
]; 