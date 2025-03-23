export interface Feature {
  text: string;
  included: boolean;
  tooltip?: string;
}

export interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice?: number;
  features: Feature[];
  ctaText: string;
  ctaAction: () => void;
  isPopular?: boolean;
}

export interface PricingTableProps {
  plans: PricingPlan[];
  className?: string;
} 