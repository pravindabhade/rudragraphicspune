const clients = [
  "Amazon",
  "Infosys",
  "TCS",
  "Wipro",
  "HDFC Bank",
  "ICICI Bank",
  "Reliance",
  "Tata Motors",
];

export default function TrustedClients() {
  return (
    <section className="py-16 bg-white border-y">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">
            Trusted By Businesses Across Pune
          </h2>

          <p className="text-gray-600 mt-2">
            Helping brands grow with premium printing and branding solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">

          {clients.map((client, index) => (
            <div
              key={index}
              className="
                bg-slate-50
                rounded-xl
                h-24
                flex
                items-center
                justify-center
                shadow-sm
                hover:shadow-lg
                transition-all
                duration-300
              "
            >
              <span className="font-semibold text-gray-700">
                {client}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}