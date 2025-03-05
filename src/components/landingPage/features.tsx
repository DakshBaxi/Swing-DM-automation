import { MessageSquare, Zap, BarChart3, Users } from "lucide-react"

const features = [
  {
    icon: <MessageSquare className="h-10 w-10 text-violet-400" />,
    title: "Smart Responses",
    description: "AI-powered responses that sound natural and engage your audience effectively.",
  },
  {
    icon: <Zap className="h-10 w-10 text-violet-400" />,
    title: "Automation",
    description: "Set up workflows that handle comments, DMs, and mentions automatically.",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-violet-400" />,
    title: "Analytics",
    description: "Track engagement metrics and optimize your Instagram strategy with data-driven insights.",
  },
  {
    icon: <Users className="h-10 w-10 text-violet-400" />,
    title: "Audience Growth",
    description: "Tools to help you grow your following and increase your reach organically.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to take your Instagram presence to the next level
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/40 border border-gray-700 rounded-lg p-6 hover:bg-gray-700/40 transition-colors duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

