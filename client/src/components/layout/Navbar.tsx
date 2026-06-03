import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/images/logo/logo.png"
              alt="Rudra Graphics"
              className="h-12"
            />
            <h1 className="text-2xl font-bold">
              Rudra Graphics
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">

            <a href="/" className="font-medium hover:text-cyan-600">
              Home
            </a>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 font-medium hover:text-cyan-600">
                Services
                <ChevronDown size={18} />
              </button>

              <div className="absolute left-0 top-full mt-3 w-[700px] bg-white rounded-2xl shadow-xl p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">

                <div className="grid grid-cols-3 gap-8">

                  <div>
                    <h3 className="font-bold mb-3 text-cyan-600">
                      Printing
                    </h3>

                    <ul className="space-y-2 text-gray-600">
                      <li>Flex Printing</li>
                      <li>Digital Printing</li>
                      <li>Offset Printing</li>
                      <li>Sun Board Printing</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold mb-3 text-cyan-600">
                      Branding
                    </h3>

                    <ul className="space-y-2 text-gray-600">
                      <li>Shop Branding</li>
                      <li>Corporate Branding</li>
                      <li>Vehicle Branding</li>
                      <li>Retail Branding</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold mb-3 text-cyan-600">
                      Signage
                    </h3>

                    <ul className="space-y-2 text-gray-600">
                      <li>LED Boards</li>
                      <li>ACP Boards</li>
                      <li>Acrylic Boards</li>
                      <li>Glow Sign Boards</li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>

            <a href="/portfolio" className="font-medium hover:text-cyan-600">
              Portfolio
            </a>

            <a href="/about" className="font-medium hover:text-cyan-600">
              About
            </a>

            <a href="/blog" className="font-medium hover:text-cyan-600">
              Blog
            </a>

            <a href="/contact" className="font-medium hover:text-cyan-600">
              Contact
            </a>

          </nav>

          {/* CTA */}
          <a
            href="/quote"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Get Quote
          </a>

        </div>
      </div>
    </header>
  );
}

