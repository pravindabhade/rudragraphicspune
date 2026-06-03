import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CTA from "../components/home/CTA";

const blogs = [
  {
    title: "Top 10 Benefits of Shop Branding for Businesses",
    category: "Branding",
    date: "June 2026",
    image: "/images/blogs/blog1.jpg",
  },
  {
    title: "How LED Sign Boards Increase Customer Visibility",
    category: "Signage",
    date: "June 2026",
    image: "/images/blogs/blog2.jpg",
  },
  {
    title: "Why Flex Printing is Still Popular in Advertising",
    category: "Printing",
    date: "May 2026",
    image: "/images/blogs/blog3.jpg",
  },
  {
    title: "Vehicle Branding: A Moving Advertisement",
    category: "Branding",
    date: "May 2026",
    image: "/images/blogs/blog4.jpg",
  },
  {
    title: "Choosing the Right ACP Sign Board for Your Shop",
    category: "Signage",
    date: "April 2026",
    image: "/images/blogs/blog5.jpg",
  },
  {
    title: "Professional Visiting Cards for Business Growth",
    category: "Printing",
    date: "April 2026",
    image: "/images/blogs/blog6.jpg",
  },
];

export default function Blog() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Our Blog
          </h1>

          <p className="mt-6 text-lg max-w-3xl mx-auto">
            Insights, tips and updates about printing,
            branding, signage and advertising solutions.
          </p>

        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {blogs.map((blog, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-2xl
                  overflow-hidden
                  shadow-md
                  hover:shadow-xl
                  transition-all
                "
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="
                    w-full
                    h-60
                    object-cover
                  "
                />

                <div className="p-6">

                  <span className="text-cyan-600 text-sm font-medium">
                    {blog.category}
                  </span>

                  <h3 className="text-xl font-bold mt-3">
                    {blog.title}
                  </h3>

                  <p className="text-gray-500 mt-3">
                    {blog.date}
                  </p>

                  <button className="mt-5 text-cyan-600 font-semibold">
                    Read More →
                  </button>

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
