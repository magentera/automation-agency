'use client'
import '@typeform/embed/build/css/popup.css'

import React from 'react'
import CTAProvider from '../cta';

const servicesData = [
    {
        id: 1,
        title: "Strategy Intensives",
        subtitle: "Deep-Dive Consulting",
        description:
            "We spend a focused period—one day to one week—identifying bottlenecks and opportunities in your operations. By the end, you’ll have a clear roadmap to automate and streamline workflows.",
        price: "Starting at $5K",
    },
    {
        id: 2,
        title: "Automation Audits",
        subtitle: "Systems & Processes Review",
        description:
            "I analyze your existing infrastructure—from CRMs to customer onboarding procedures—to find quick-win optimizations and long-term automation strategies.",
        price: "Starting at $3K",
    },
    {
        id: 3,
        title: "Implementation Packages",
        subtitle: "Custom-Built Solutions",
        description:
            "Once we’ve identified inefficiencies, I design and set up tailor-made workflows—leveraging Zapier, AI tools, or custom dashboards—to help you save time and reduce errors.",
        price: "Starting at $10K",
    },
    {
        id: 4,
        title: "Monthly Retainers",
        subtitle: "Ongoing Automation Consulting",
        description:
            "For businesses seeking continuous optimization and support, I offer monthly retainers that include scheduled check-ins, real-time troubleshooting, and new automation rollouts.",
        price: "Starting at $5K/month",
    },
];

export default function Services() {
    return (
        <div className="min-h-screen text-gray-800 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.05)_0,_transparent_2px)] [background-size:8px_8px] bg-repeat">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:py-24">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                            Unlock Your Business Potential
                        </h1>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                            Automate your operations, streamline your sales, and scale with
                            confidence. Let’s transform your business today.
                        </p>
                        <div className="mt-8 flex justify-center">
                            <CTAProvider hookType="button" text="Get Started" ctaType={'redirect'} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12 lg:py-16">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
                    {servicesData.map((service) => (
                        <div
                            key={service.id}
                            className="rounded-lg bg-white p-6 shadow hover:shadow-md transition"
                        >
                            <h2 className="text-2xl font-bold text-blue-500">
                                {service.title}
                            </h2>
                            <h3 className="mt-1 text-lg text-gray-700">{service.subtitle}</h3>
                            <p className="mt-4 text-gray-600 line-clamp-4">{service.description}</p>
                            <div className="mt-4 flex items-center justify-between">
                                <p className="text-lg font-semibold text-blue-500">
                                    {service.price}
                                </p>
                            </div>
                            <div className="mt-6 text-right">
                                <CTAProvider hookType="button" text="Get Started" ctaType={'redirect'} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="">
                <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:py-16 lg:py-20">
                    <h2 className="text-3xl font-bold tracking-tight text-blue-500 sm:text-4xl">
                        Ready to Automate & Scale?
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-black">
                        Take the next step in optimizing your business. Let’s talk about
                        your unique challenges and goals.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <CTAProvider hookType="button" text="Book Your Consultation" ctaType={'redirect'} />
                    </div>
                </div>
            </div>
        </div>
    );
}
