const projects = [
  {
    title: "Shop Branding",
    image: "/images/portfolio/project1.jpg",
  },
  {
    title: "LED Sign Boards",
    image: "/images/portfolio/project2.jpg",
  },
  {
    title: "Vehicle Branding",
    image: "/images/portfolio/project3.jpg",
  },
  {
    title: "Flex Printing",
    image: "/images/portfolio/project4.jpg",
  },
  {
    title: "Sun Board Printing",
    image: "/images/portfolio/project5.jpg",
  },
  {
    title: "Corporate Branding",
    image: "/images/portfolio/project6.jpg",
  },
  {
    title: "ACP Sign Boards",
    image: "/images/portfolio/project7.jpg",
  },
  {
    title: "Digital Printing",
    image: "/images/portfolio/project8.jpg",
  },
  {
    title: "Visiting Cards",
    image: "/images/portfolio/project9.jpg",
  },
  {
    title: "Brochure Printing",
    image: "/images/portfolio/project10.jpg",
  },
  {
    title: "Vinyl Printing",
    image: "/images/portfolio/project11.jpg",
  },
  {
    title: "One Way Vision",
    image: "/images/portfolio/project12.jpg",
  },
];

export default function PortfolioPreview() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-cyan-600 font-semibold uppercase tracking-wider">
            Portfolio
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Our Recent Projects
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our successful printing, branding,
            signage and advertising projects delivered
            across Pune.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                rounded-2xl
                overflow-hidden
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-64
                    object-cover
                    group-hover:scale-110
                    transition-transform
                    duration-500
                  "
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-500 mt-2 text-sm">
                  Premium quality printing and branding solution.
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* Button */}
        <div className="text-center mt-14">
          <button
            className="
              bg-cyan-600
              hover:bg-cyan-700
              text-white
              px-8
              py-3
              rounded-lg
              font-semibold
              transition
            "
          >
            View All Projects
          </button>
        </div>

      </div>
    </section>
  );
}

