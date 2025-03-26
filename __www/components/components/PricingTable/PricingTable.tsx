/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { pricingPlans } from "./pricingData.ts";
import { PricingPlan, PricingTableProps } from "./types.ts";

export default function PricingTable({ plans = pricingPlans, className = "" }: PricingTableProps) {
  const [isYearly, setIsYearly] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const FeatureItem = ({ text, included, tooltip }: { text: string; included: boolean; tooltip?: string }) => (
    <li class="flex items-center gap-2 text-gray-600">
      {included ? (
        <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg class="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      )}
      <span class={included ? "text-gray-900" : "text-gray-400"}>
        {text}
        {tooltip && (
          <span class="ml-1 cursor-help" title={tooltip}>
            ⓘ
          </span>
        )}
      </span>
    </li>
  );

  const PricingCard = ({ plan }: { plan: PricingPlan }) => {
    const price = isYearly ? (plan.yearlyPrice || plan.monthlyPrice * 12) / 12 : plan.monthlyPrice;

    return (
      <div
        class={`relative p-6 bg-white rounded-lg shadow-lg border ${
          plan.isPopular ? "border-blue-500" : "border-gray-200"
        }`}
      >
        {plan.isPopular && (
          <span class="absolute -top-3 right-6 bg-blue-500 text-white px-3 py-1 text-sm rounded-full">
            Most Popular
          </span>
        )}
        <div class="text-center">
          <h3 class="text-2xl font-bold text-gray-900">{plan.name}</h3>
          <p class="mt-2 text-gray-500">{plan.description}</p>
          <div class="mt-4">
            <span class="text-4xl font-bold text-gray-900">{formatPrice(price)}</span>
            <span class="text-gray-500">/month</span>
          </div>
        </div>

        <ul class="mt-6 space-y-4">
          {plan.features.map((feature) => (
            <FeatureItem {...feature} />
          ))}
        </ul>

        <button
          onClick={() => plan.ctaAction()}
          class={`mt-8 w-full py-3 px-4 rounded-lg font-semibold ${
            plan.isPopular
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : plan.name === "Enterprise"
              ? "bg-gray-900 text-white hover:bg-gray-800"
              : "bg-gray-50 text-gray-900 hover:bg-gray-100"
          } transition-colors duration-200`}
        >
          {plan.ctaText}
        </button>
      </div>
    );
  };

  return (
    <div class={`py-12 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div class="text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">PRICING PLANS</h2>
        <div class="mt-8 flex items-center justify-center gap-2">
          <span class={`text-sm ${!isYearly ? "text-blue-600" : "text-gray-500"}`}>Monthly</span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            class="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200"
          >
            <span
              class={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${
                isYearly ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span class={`text-sm ${isYearly ? "text-blue-600" : "text-gray-500"}`}>
            Yearly
            <span class="ml-1 text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
              Save 10%
            </span>
          </span>
        </div>
      </div>

      <div class="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-6 max-w-7xl mx-auto">
        {plans.map((plan) => (
          <PricingCard plan={plan} />
        ))}
      </div>

      <p class="mt-12 text-center text-gray-500">
        Need a custom plan? Contact our sales team for a tailored solution.
      </p>
      <div class="mt-4 text-center">
        <button
          onClick={() => console.log("Contact sales clicked")}
          class="text-blue-600 hover:text-blue-700 font-medium"
        >
          Contact Sales
        </button>
      </div>
    </div>
  );
} 