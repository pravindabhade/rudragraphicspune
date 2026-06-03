const industries = [
  "Retail Stores",
  "Restaurants",
  "Hospitals",
  "Schools & Colleges",
  "Corporate Offices",
  "Real Estate",
  "Events & Exhibitions",
  "Manufacturing",
];

export default function Industries() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Industries We Serve
          </h2>

          <p className="text-gray-600 mt-3">
            Delivering branding and printing solutions across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="p-6 text-center bg-slate-50 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold">
                {industry}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}