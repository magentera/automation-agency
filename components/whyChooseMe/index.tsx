import React from "react";
import TypeformPopup from "../typeformPopup";

const reasons = [
  {
    id: 1,
    title: "Expert Positioning",
    description:
      "With a track record in high-ticket environments, I understand the unique pressures of scaling businesses with complex processes.",
    note: "",
  },
  {
    id: 2,
    title: "ROI-Driven",
    description:
      "My approach zeroes in on high-impact changes that rapidly improve profitability.",
  },
  {
    id: 3,
    title: "Rapid Deployment",
    description:
      "I collaborate with your team to implement tested automation tactics quickly, so you see real benefits fast.",
  },
  {
    id: 4,
    title: "Long-Term Partnerships",
    description:
      "I cap the number of clients I take each month to ensure dedicated attention.",
  },
];

export default function WhyChooseMe() {
  return (
    <section className="bg-blue-100/30 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
            Why Choose Me
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
            Here’s what sets me apart from the rest.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="rounded-lg bg-white p-6 shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-blue-500">
                {reason.title}
              </h3>
              <p className="mt-2 text-gray-700">{reason.description}</p>
              {/* Optional note (like "The Business Model") */}
              {reason.note && (
                <div className="mt-4 inline-block rounded-full bg-indigo-50 px-3 py-1 text-sm text-blue-500">
                  {reason.note}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <TypeformPopup hookType="button" text="Let’s Talk" />
        </div>
      </div>
    </section>
  );
}
