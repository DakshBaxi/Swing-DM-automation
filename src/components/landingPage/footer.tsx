import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              <span className="text-violet-400">Swing</span>
            </div>
            <p className="text-gray-400 mb-4">Transform your Instagram engagement with AI-powered automation.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Swing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

