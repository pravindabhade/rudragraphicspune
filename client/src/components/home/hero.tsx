export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="text-center px-6">
        <p className="text-cyan-400 font-semibold mb-4">
          PRINT • BRAND • GROW
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Premium Printing &
          <br />
          Branding Solutions
        </h1>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Transform your business with high-quality printing,
          signage, vehicle branding and marketing materials.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="bg-cyan-500 px-6 py-3 rounded-lg font-semibold">
            Get Free Quote
          </button>

          <button className="border border-white px-6 py-3 rounded-lg">
            Call Now
          </button>
        </div>
      </div>
    </section>
  );
}