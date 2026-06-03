const faqs = [
  {
    question: "Do you provide same-day printing services?",
    answer:
      "Yes, for selected products and urgent requirements we offer same-day printing services.",
  },
  {
    question: "Do you provide design services?",
    answer:
      "Yes, our creative team can design banners, brochures, visiting cards, sign boards and branding materials.",
  },
  {
    question: "Do you deliver across Pune?",
    answer:
      "Yes, we provide delivery services across Pune and nearby areas.",
  },
  {
    question: "What types of printing services do you offer?",
    answer:
      "We offer Flex Printing, Vinyl Printing, Sun Board Printing, Brochure Printing, Visiting Cards, Shop Branding and much more.",
  },
  {
    question: "How can I request a quotation?",
    answer:
      "You can call us, WhatsApp us, or submit a quote request through our website.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mt-3">
            Find answers to common questions about our printing and branding services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-slate-50 rounded-xl p-5 shadow"
            >
              <summary className="cursor-pointer font-semibold text-lg">
                {faq.question}
              </summary>

              <p className="mt-3 text-gray-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}