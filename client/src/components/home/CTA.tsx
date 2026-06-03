export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Grow Your Brand?
        </h2>

        <p className="text-lg md:text-xl text-cyan-100 mb-8">
          Get premium printing, signage, branding and advertising
          solutions from Rudra Graphics Pune.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="tel:+919527839464"
            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:scale-105 transition"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/919527839464"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition"
          >
            💬 WhatsApp Us
          </a>

        </div>

      </div>
    </section>
  );
}