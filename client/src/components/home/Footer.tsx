import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <img
              src="/images/logo/logo.png"
              alt="Rudra Graphics"
              className="h-14 mb-4"
            />

            <p className="text-gray-400">
              Rudra Graphics is a leading printing, branding,
              signage and advertising company in Pune,
              delivering premium quality solutions for
              businesses and organizations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Flex Printing</li>
              <li>Shop Branding</li>
              <li>Vehicle Branding</li>
              <li>LED Sign Boards</li>
              <li>Corporate Branding</li>
              <li>Digital Printing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex items-start gap-3">
                <Phone size={18} />
                <span>+91 95278 39464</span>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} />
                <span>info@rudragraphics.com</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} />
                <span>
                  Hadapsar, Pune,
                  Maharashtra 411028
                </span>
              </div>

            </div>
          </div>

        </div>

        <hr className="my-10 border-slate-700" />

        <div className="text-center text-gray-500">
          © {new Date().getFullYear()} Rudra Graphics Pune.
          All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}