
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CTA from "../components/home/CTA";

export default function ServiceDetails() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Flex Printing Services
          </h1>

          <p className="mt-6 text-lg max-w-3xl mx-auto">
            High-quality flex printing solutions for
            banners, hoardings, events, exhibitions,
            retail branding and outdoor advertising.
          </p>

        </div>
      </section>

      {/* Service Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <img
                src="/images/services/flex-printing.jpg"
                alt="Flex Printing"
                className="rounded-2xl shadow-xl"
              />
            </div>

            <div>

              <span className="text-cyan-600 font-semibold">
                PROFESSIONAL PRINTING
              </span>

              <h2 className="text-4xl font-bold mt-3">
                Premium Flex Printing Solutions
              </h2>

              <p className="mt-6 text-gray-600">
                Rudra Graphics offers premium flex
                printing services using high-quality
                materials and advanced printing
                technology.
              </p>

              <p className="mt-4 text-gray-600">
                Ideal for shop branding, event
                promotions, outdoor advertising,
                exhibitions and business marketing.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold">
              Service Features
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white p-6 rounded-xl shadow">
              HD Print Quality
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              Weather Resistant
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              Fast Delivery
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              Affordable Pricing
            </div>

          </div>

        </div>
      </section>

      {/* Applications */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold">
              Applications
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-slate-50 p-6 rounded-xl">
              Shop Branding
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              Event Promotion
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              Outdoor Advertising
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              Exhibition Displays
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              Product Launches
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              Business Promotions
            </div>

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">

            <details className="bg-white p-5 rounded-xl shadow">
              <summary className="font-semibold cursor-pointer">
                What sizes are available?
              </summary>

              <p className="mt-3 text-gray-600">
                We offer custom sizes as per client requirements.
              </p>
            </details>

            <details className="bg-white p-5 rounded-xl shadow">
              <summary className="font-semibold cursor-pointer">
                How long does printing take?
              </summary>

              <p className="mt-3 text-gray-600">
                Most orders are completed within 24-48 hours.
              </p>
            </details>

          </div>

        </div>
      </section>

      <CTA />

      <Footer />
    </>
  );
}
