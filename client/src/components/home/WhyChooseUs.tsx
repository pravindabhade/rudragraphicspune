const features = [
  "Premium Quality Printing",
  "Fast Delivery",
  "Affordable Pricing",
  "24/7 Customer Support",
  "Experienced Team",
  "56+ Google Reviews",
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Why Choose Rudra Graphics?
          </h2>

          <p className="text-gray-600 mt-4">
            We provide complete printing, branding and signage
            solutions with unmatched quality and service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-slate-50 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-cyan-600 text-3xl mb-3">
                ✓
              </div>

              <h3 className="font-semibold text-lg">
                {feature}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}