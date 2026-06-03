export default function Stats() {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "100+", label: "Happy Clients" },
    { number: "56+", label: "Google Reviews" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-4xl font-bold text-cyan-600">
                {item.number}
              </h2>
              <p className="mt-2 text-gray-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}