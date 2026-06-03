
const steps = [
  {
    number: "01",
    title: "Discuss Requirement",
    description:
      "Share your printing, branding or signage requirements with our team.",
  },
  {
    number: "02",
    title: "Design Approval",
    description:
      "Our designers create concepts and get your approval before production.",
  },
  {
    number: "03",
    title: "Printing & Production",
    description:
      "We use premium quality materials and advanced printing technology.",
  },
  {
    number: "04",
    title: "Delivery & Installation",
    description:
      "Quick delivery and professional installation across Pune.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-semibold uppercase tracking-wider">
            Our Process
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            How We Work
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            From concept to completion, we ensure a smooth and
            professional experience for every project.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className="
                relative
                bg-slate-50
                rounded-2xl
                p-8
                shadow-md
                hover:shadow-xl
                transition-all
                duration-300
              "
            >
              <div
                className="
                  w-16
                  h-16
                  rounded-full
                  bg-cyan-600
                  text-white
                  flex
                  items-center
                  justify-center
                  text-xl
                  font-bold
                  mb-6
                "
              >
                {step.number}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}