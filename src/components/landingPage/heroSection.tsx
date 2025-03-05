import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Transform Your Instagram <br />
          Engagement with <span className="text-violet-400">Swing</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Swing's marketing automation platform empowers businesses to connect effortlessly with their audience on
          Instagram. Automate your responses and turn every interaction into a valuable opportunity.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button className="bg-violet-600 hover:bg-violet-500 text-white text-lg py-6 px-8">Get Started</Button>
          <Button
            variant="outline"
            className="border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-gray-900 text-lg py-6 px-8"
          >
            Learn More
          </Button>
        </div>

        <div className="relative w-full max-w-5xl mx-auto aspect-video bg-gray-800/30 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Swing platform dashboard"
            width={1200}
            height={600}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        </div>
      </div>
    </section>
  )
}

