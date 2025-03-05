"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

const plans = [
  {
    name: "Free",
    description: "Perfect for individuals just getting started",
    price: {
      monthly: "$0",
      yearly: "$0",
    },
    features: [
      "1 Instagram account",
      "Basic automation",
      "100 automated responses per month",
      "Standard analytics",
      "Email support",
    ],
    limitations: ["No custom AI training", "Limited analytics", "No audience growth tools"],
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
  },
  {
    name: "AI Plan",
    description: "Advanced features for growing businesses",
    price: {
      monthly: "$29",
      yearly: "$290",
    },
    features: [
      "5 Instagram accounts",
      "Advanced AI automation",
      "Unlimited automated responses",
      "Advanced analytics & reporting",
      "Priority support",
      "Custom AI training",
      "Audience growth tools",
    ],
    popular: true,
    buttonText: "Start Free Trial",
    buttonVariant: "default" as const,
  },
]

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <section className="py-20 bg-background dark" id="pricing">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Choose the plan that's right for your business
            </p>
          </div>

          <div className="flex items-center space-x-2 mt-6">
            <Label
              htmlFor="billing-cycle"
              className={billingCycle === "monthly" ? "text-foreground" : "text-muted-foreground"}
            >
              Monthly
            </Label>
            <Switch
              id="billing-cycle"
              checked={billingCycle === "yearly"}
              onCheckedChange={(checked) => setBillingCycle(checked ? "yearly" : "monthly")}
            />
            <Label
              htmlFor="billing-cycle"
              className={billingCycle === "yearly" ? "text-foreground" : "text-muted-foreground"}
            >
              Yearly{" "}
              <span className="ml-1 rounded-full bg-violet-200 px-2 py-0.5 text-xs font-medium text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">
                Save 20%
              </span>
            </Label>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 mt-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md ${
                plan.popular ? "border-violet-600/50 shadow-violet-900/10" : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-violet-600 px-3 py-1 text-xs font-medium text-white">
                  Most Popular
                </div>
              )}

              <div className="mb-5">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-muted-foreground mt-1">{plan.description}</p>
              </div>

              <div className="mb-5">
                <div className="flex items-baseline text-3xl font-bold">
                  {plan.price[billingCycle]}
                  <span className="ml-1 text-sm font-normal text-muted-foreground">
                    /{billingCycle === "monthly" ? "month" : "year"}
                  </span>
                </div>
              </div>

              <ul className="mb-6 space-y-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-violet-500" />
                    <span>{feature}</span>
                  </li>
                ))}

                {plan.limitations &&
                  plan.limitations.map((limitation) => (
                    <li key={limitation} className="flex items-center text-muted-foreground">
                      <span className="mr-2 text-sm">—</span>
                      <span>{limitation}</span>
                    </li>
                  ))}
              </ul>

              <div className="mt-auto">
                <Button
                  variant={plan.buttonVariant}
                  className={`w-full ${
                    plan.buttonVariant === "outline"
                      ? "border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-gray-900"
                      : "bg-violet-600 hover:bg-violet-500 text-white"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-muted-foreground">
            Need a custom plan?{" "}
            <a href="#" className="font-medium text-violet-400 hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

