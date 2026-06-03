import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CTA from "../components/home/CTA";

const services = [
  "Flex Printing",
  "Digital Printing",
  "Offset Printing",
  "Sun Board Printing",
  "Shop Branding",
  "Corporate Branding",
  "Vehicle Branding",
  "LED Sign Boards",
  "ACP Sign Boards",
  "Vinyl Printing",
  "One Way Vision",
  "Visiting Cards",
  "Brochures",
  "Pamphlets",
  "Glow Sign Boards",
  "Promotional Materials",
];

export default function Services() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Our Services
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg">
            Complete printing, branding, signage and
            advertising solutions for businesses in Pune.
          </p>

        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {services.map((service, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-2xl
                  p-8
                  shadow-md
                  hover:shadow-xl
                  transition-all
                "
              >
                <h3 className="text-xl font-semibold">
                  {service}
                </h3>

                <p className="text-gray-600 mt-3">
                  Professional quality service for
                  businesses and brands.
                </p>

                <button className="mt-5 text-cyan-600 font-semibold">
                  Learn More →
                </button>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              Why Choose Rudra Graphics
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white p-6 rounded-xl shadow">
              Premium Quality
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              Fast Delivery
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              Affordable Pricing
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              Expert Team
            </div>

          </div>

        </div>
      </section>

      <CTA />

      <Footer />
    </>
  );
}
