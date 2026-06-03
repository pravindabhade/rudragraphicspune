import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CTA from "../components/home/CTA";

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            About Rudra Graphics
          </h1>

          <p className="max-w-3xl mx-auto text-lg">
            Your trusted partner for printing, branding,
            signage and advertising solutions in Pune.
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src="/images/about/company.jpg"
              alt="Rudra Graphics"
              className="rounded-2xl shadow-xl"
            />
          </div>

          <div>
            <span className="text-cyan-600 font-semibold">
              WHO WE ARE
            </span>

            <h2 className="text-4xl font-bold mt-3">
              Printing Excellence Since Day One
            </h2>

            <p className="mt-6 text-gray-600">
              Rudra Graphics specializes in high-quality
              printing, signage, vehicle branding,
              shop branding and advertising solutions.
            </p>

            <p className="mt-4 text-gray-600">
              We help businesses establish a strong visual
              presence through innovative branding and
              professional printing services.
            </p>
          </div>

        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-3xl font-bold mb-4">
                Our Mission
              </h3>

              <p className="text-gray-600">
                Deliver premium printing and branding
                solutions that help businesses grow.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-3xl font-bold mb-4">
                Our Vision
              </h3>

              <p className="text-gray-600">
                Become Pune's most trusted branding and
                printing partner.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              Our Achievements
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="text-center">
              <h3 className="text-5xl font-bold text-cyan-600">
                500+
              </h3>
              <p>Projects Completed</p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-cyan-600">
                100+
              </h3>
              <p>Happy Clients</p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-cyan-600">
                56+
              </h3>
              <p>Google Reviews</p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-cyan-600">
                24/7
              </h3>
              <p>Support</p>
            </div>

          </div>

        </div>
      </section>

      <CTA />

      <Footer />
    </>
  );
}
