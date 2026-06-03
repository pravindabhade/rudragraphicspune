
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Quote() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Request A Free Quote
          </h1>

          <p className="mt-6 text-lg max-w-3xl mx-auto">
            Tell us about your printing, branding or signage
            requirements and our team will contact you shortly.
          </p>

        </div>
      </section>

      {/* Quote Form */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-8 text-center">
              Get Your Custom Quote
            </h2>

            <form className="grid md:grid-cols-2 gap-6">

              {/* Name */}
              <div>
                <label className="block mb-2 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border rounded-lg p-3"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-2 font-medium">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full border rounded-lg p-3"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full border rounded-lg p-3"
                />
              </div>

              {/* Service */}
              <div>
                <label className="block mb-2 font-medium">
                  Select Service
                </label>

                <select className="w-full border rounded-lg p-3">
                  <option>Choose Service</option>
                  <option>Flex Printing</option>
                  <option>Digital Printing</option>
                  <option>Shop Branding</option>
                  <option>Vehicle Branding</option>
                  <option>LED Sign Boards</option>
                  <option>ACP Sign Boards</option>
                  <option>Brochure Printing</option>
                  <option>Visiting Cards</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="block mb-2 font-medium">
                  Budget Range
                </label>

                <select className="w-full border rounded-lg p-3">
                  <option>Select Budget</option>
                  <option>₹1,000 - ₹5,000</option>
                  <option>₹5,000 - ₹10,000</option>
                  <option>₹10,000 - ₹25,000</option>
                  <option>₹25,000+</option>
                </select>
              </div>

              {/* Quantity */}
              <div>
                <label className="block mb-2 font-medium">
                  Quantity
                </label>

                <input
                  type="number"
                  placeholder="Enter quantity"
                  className="w-full border rounded-lg p-3"
                />
              </div>

              {/* File Upload */}
              <div className="md:col-span-2">
                <label className="block mb-2 font-medium">
                  Upload Design / Reference File
                </label>

                <input
                  type="file"
                  className="w-full border rounded-lg p-3"
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="block mb-2 font-medium">
                  Project Details
                </label>

                <textarea
                  rows={6}
                  placeholder="Describe your project requirements..."
                  className="w-full border rounded-lg p-3"
                />
              </div>

              {/* Submit */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="
                    w-full
                    bg-cyan-600
                    hover:bg-cyan-700
                    text-white
                    py-4
                    rounded-xl
                    font-semibold
                    transition
                  "
                >
                  Request Quote
                </button>
              </div>

            </form>

          </div>

        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8 text-center">

            <div className="bg-white shadow p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-3">
                Call Us
              </h3>
              <p>+91 95278 39464</p>
            </div>

            <div className="bg-white shadow p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-3">
                WhatsApp
              </h3>
              <p>+91 95278 39464</p>
            </div>

            <div className="bg-white shadow p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-3">
                Email
              </h3>
              <p>info@rudragraphics.com</p>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
