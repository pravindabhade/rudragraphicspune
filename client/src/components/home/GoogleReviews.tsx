    const reviews = [
    {
        name: "Rahul Patil",
        review: "Excellent printing quality and fast delivery. Highly recommended.",
    },
    {
        name: "Amit Sharma",
        review: "Best branding and signage service in Pune.",
    },
    {
        name: "Neha Joshi",
        review: "Professional team and affordable pricing.",
    },
    ];

    export default function GoogleReviews() {
    return (
        <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-12">
            <div className="text-yellow-500 text-3xl mb-3">
                ★★★★★
            </div>

            <h2 className="text-4xl font-bold">
                Google Reviews
            </h2>

            <p className="text-gray-600 mt-3">
                Rated 5.0 by our customers based on 56+ reviews.
            </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">

            {reviews.map((review, index) => (
                <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
                >
                <div className="text-yellow-500 mb-3">
                    ★★★★★
                </div>

                <p className="text-gray-600 mb-4">
                    "{review.review}"
                </p>

                <h3 className="font-semibold">
                    {review.name}
                </h3>
                </div>
            ))}

            </div>

        </div>
        </section>
    );
    }
