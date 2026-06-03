const testimonials = [
  {
    name: "Rahul Patil",
    review: "Excellent printing quality and timely delivery.",
  },
  {
    name: "Amit Sharma",
    review: "Best branding partner in Pune.",
  },
  {
    name: "Neha Joshi",
    review: "Professional service and affordable pricing.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow"
            >
              <p className="text-gray-600 mb-4">
                "{item.review}"
              </p>

              <h3 className="font-semibold">
                {item.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}