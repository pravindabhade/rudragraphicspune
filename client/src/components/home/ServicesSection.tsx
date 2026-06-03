const services = [
  {
    title: "Flex Printing",
    desc: "High-quality flex printing for banners and promotions.",
  },
  {
    title: "Sun Board Printing",
    desc: "Premium sun board printing for indoor and outdoor branding.",
  },
  {
    title: "Shop Branding",
    desc: "Complete branding solutions for retail and commercial spaces.",
  },
  {
    title: "Vehicle Branding",
    desc: "Creative branding for cars, buses, trucks and fleets.",
  },
  {
    title: "LED Sign Boards",
    desc: "Attractive illuminated sign boards for businesses.",
  },
  {
    title: "Corporate Branding",
    desc: "Professional branding solutions for companies.",
  },
  {
    title: "Visiting Cards",
    desc: "Premium business cards with modern designs.",
  },
  {
    title: "Brochure Printing",
    desc: "Professional brochures for marketing campaigns.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Our Services
          </h2>
          <p className="text-gray-600 mt-3">
            Complete Printing, Branding & Signage Solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}