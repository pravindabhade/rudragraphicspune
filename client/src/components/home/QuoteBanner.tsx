
export default function QuoteBanner() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-900 to-cyan-700 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <span className="uppercase tracking-widest text-cyan-200">
              Get Free Quote
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Let's Build Your Brand Together
            </h2>

            <p className="mt-6 text-lg text-gray-200">
              From printing and signage to complete branding solutions,
              Rudra Graphics helps businesses stand out.
            </p>

            <div className="mt-8 space-y-3">
              <p>✅ Premium Quality</p>
              <p>✅ Fast Delivery</p>
              <p>✅ Affordable Pricing</p>
              <p>✅ Professional Support</p>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">

            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Request a Quote
            </h3>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg p-3"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-lg p-3"
              />

              <select aria-label="Select Service" name="service" className="w-full border rounded-lg p-3">
                <option>Select Service</option>
                <option>Flex Printing</option>
                <option>Shop Branding</option>
                <option>Vehicle Branding</option>
                <option>LED Sign Boards</option>
              </select>

              <textarea
                rows={4}
                placeholder="Project Details"
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
                Get Free Quote
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}