import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CTA from "../components/home/CTA";

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Contact Us
          </h1>

          <p className="mt-6 text-lg max-w-3xl mx-auto">
            Get in touch with Rudra Graphics for printing,
            branding, signage and advertising solutions.
          </p>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Details */}
            <div>

              <h2 className="text-4xl font-bold mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6">

                <div className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-xl">
                    Phone
                  </h3>

                  <p className="mt-2 text-gray-600">
                    +91 95278 39464
                  </p>

                  <p className="text-gray-600">
                    +91 84599 89808
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-xl">
                    Email
                  </h3>

                  <p className="mt-2 text-gray-600">
                    info@rudragraphics.com
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-xl">
                    Address
                  </h3>

                  <p className="mt-2 text-gray-600">
                    15 No, Solapur Road,
                    Hadapsar, Pune,
                    Maharashtra 411028
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-xl">
                    Business Hours
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Open 24 Hours
                  </p>
                </div>

              </div>

            </div>

            {/* Contact Form */}
            <div className="bg-white shadow-xl rounded-2xl p-8">

              <h2 className="text-3xl font-bold mb-6">
                Send Inquiry
              </h2>

              <form className="space-y-4">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border rounded-lg p-3"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border rounded-lg p-3"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border rounded-lg p-3"
                />

                <select aria-label="Select Service" className="w-full border rounded-lg p-3">
                  <option>Select Service</option>
                  <option>Flex Printing</option>
                  <option>Vehicle Branding</option>
                  <option>LED Sign Boards</option>
                  <option>Shop Branding</option>
                </select>

                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full border rounded-lg p-3"
                />

                <button
                  type="submit"
                  className="
                    w-full
                    bg-cyan-600
                    text-white
                    py-3
                    rounded-lg
                    font-semibold
                  "
                >
                  Send Inquiry
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

      {/* Google Map */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-10">
            Our Location
          </h2>

          <div className="rounded-2xl overflow-hidden shadow-xl">

            <iframe
              title="Rudra Graphics Location"
              src="https://www.google.com/maps"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            />

          </div>

        </div>
      </section>

      <CTA />

      <Footer />
    </>
  );
}
