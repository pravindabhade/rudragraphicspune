import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CTA from "../components/home/CTA";

const projects = [
  {
    title: "Shop Branding",
    category: "Branding",
    image: "/images/portfolio/project1.jpg",
  },
  {
    title: "LED Sign Board",
    category: "Signage",
    image: "/images/portfolio/project2.jpg",
  },
  {
    title: "Vehicle Branding",
    category: "Branding",
    image: "/images/portfolio/project3.jpg",
  },
  {
    title: "Flex Printing",
    category: "Printing",
    image: "/images/portfolio/project4.jpg",
  },
  {
    title: "Sun Board Printing",
    category: "Printing",
    image: "/images/portfolio/project5.jpg",
  },
  {
    title: "Corporate Branding",
    category: "Branding",
    image: "/images/portfolio/project6.jpg",
  },
  {
    title: "ACP Sign Board",
    category: "Signage",
    image: "/images/portfolio/project7.jpg",
  },
  {
    title: "Digital Printing",
    category: "Printing",
    image: "/images/portfolio/project8.jpg",
  },
  {
    title: "Visiting Cards",
    category: "Printing",
    image: "/images/portfolio/project9.jpg",
  },
  {
    title: "Brochure Printing",
    category: "Printing",
    image: "/images/portfolio/project10.jpg",
  },
  {
    title: "Vinyl Printing",
    category: "Printing",
    image: "/images/portfolio/project11.jpg",
  },
  {
    title: "One Way Vision",
    category: "Signage",
    image: "/images/portfolio/project12.jpg",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  const categories = [
    "All",
    "Printing",
    "Branding",
    "Signage",
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Our Portfolio
          </h1>

          <p className="mt-6 text-lg max-w-3xl mx-auto">
            Explore our printing, branding and signage
            projects completed across Pune.
          </p>

        </div>
      </section>

      {/* Filters */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-wrap justify-center gap-4">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`px-6 py-3 rounded-full font-medium transition
                  ${
                    activeCategory === category
                      ? "bg-cyan-600 text-white"
                      : "bg-slate-100"
                  }`}
              >
                {category}
              </button>
            ))}

          </div>

        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="
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
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-64
                    object-cover
                  "
                />

                <div className="p-5">

                  <span className="text-cyan-600 text-sm font-medium">
                    {project.category}
                  </span>

                  <h3 className="text-xl font-semibold mt-2">
                    {project.title}
                  </h3>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      <CTA />

      <Footer />
    </>
  );
}
