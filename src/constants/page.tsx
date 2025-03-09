export const PAGE_BREAD_CRUMBS: string[]=[
    'contacts',
    'automations',
    'integrations',
    'setting',
]

type Props={
    [page in string]:string
}

export const PAGE_ICON:Props={
    AUTOMATIONS:'/icons/Automation.svg',
    CONTACTS: '/icons/Contacts.svg',
    INTEGRATIONS: '/icons/Integration.svg',
    SETTING: '/icons/Setting.svg',
    HOME:'/icons/Home.svg'
}

export const PLANS = [
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