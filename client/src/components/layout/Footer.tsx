
import { Phone, Mail, MapPin, Globe, Link } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <img
              src="/images/logo/logo.png"
              alt="Rudra Graphics"
              className="h-16 mb-4"
            />

            <p className="text-gray-400 leading-relaxed">
              Rudra Graphics is Pune's trusted printing,
              branding, signage and advertising partner,
              delivering premium quality solutions for
              businesses of all sizes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Our Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Flex Printing</li>
              <li>LED Sign Boards</li>
              <li>Vehicle Branding</li>
              <li>Shop Branding</li>
              <li>ACP Boards</li>
              <li>Digital Printing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact Info
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex gap-3">
                <Phone size={18} />
                <span>+91 95278 39464</span>
              </div>

              <div className="flex gap-3">
                <Mail size={18} />
                <span>info@rudragraphics.com</span>
              </div>

              <div className="flex gap-3">
                <MapPin size={18} />
                <span>
                  Hadapsar, Pune,
                  Maharashtra 411028
                </span>
              </div>

            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">

              <a
                href="#"
                className="bg-slate-800 p-3 rounded-full hover:bg-cyan-600 transition"
              >
                <Globe size={18} />
              </a>

              <a
                href="#"
                className="bg-slate-800 p-3 rounded-full hover:bg-cyan-600 transition"
              >
                <Globe size={18} />
              </a>

              <a
                href="#"
                className="bg-slate-800 p-3 rounded-full hover:bg-cyan-600 transition"
              >
                <Link size={18} />
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Rudra Graphics.
            All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm mt-3 md:mt-0">
            Designed & Developed by Rudra Graphics
          </p>

        </div>
      </div>

    </footer>
  );
}

