'use client'
import BookingPageSections from "@/components/bookingPageSections";
import { ArrowRight, ChevronDown } from "lucide-react";
import { InlineWidget } from "react-calendly";
import { motion } from "framer-motion";

export function DownArrow() {
    return (
        <motion.div
            /* slight vertical bounce */
            animate={{ y: [0, 8, 0] }}
            transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className="mt-8 flex justify-center cursor-pointer"
        >
            {/* you can change size / color via Tailwind classes */}
            <ChevronDown className="w-8 h-8 text-indigo-600" />
        </motion.div>
    );
}


export default function InitialConsultation() {
    return (


        <main className="bg-white text-black px-4 md:px-6 py-0 md:py-12">

            <section className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="flex flex-col gap-28">
                        <div>
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
                                <span className="text-blue-500">Book a free 30-minute</span>
                                <br />
                                Workflow Strategy Session with Konuke

                            </h1>

                            <div className="space-y-3 mb-10 text-lg">
                                <p>
                                    Discover the exact <span className="font-semibold">automations, AI workflows, and quick wins</span> that will streamline your ops and boost revenue—before you spend a cent.
                                </p>
                                <p>
                                    Make your organization <span className="font-semibold">smarter</span>.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">

                                <div className="text-blue-500 font-medium flex items-center justify-center">
                                    Start for free <ArrowRight className="ml-2 h-4 w-4" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-10">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="mx-auto max-w-5xl text-center"
                            >
                                <h2 className="text-3xl font-semibold mb-8">In 30 Minutes You’ll Walk Away With…</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                                    <div className="bg-white/70 rounded-2xl p-6 shadow-lg">
                                        <h3 className="text-xl font-medium mb-2">Bottleneck Map</h3>
                                        <p className="text-gray-600">A prioritized view of your workflow choke‑points.</p>
                                    </div>
                                    <div className="bg-white/70 rounded-2xl p-6 shadow-lg">
                                        <h3 className="text-xl font-medium mb-2">Instant AI Wins</h3>
                                        <p className="text-gray-600">Specific automations & tools that deliver payback fastest.</p>
                                    </div>
                                    <div className="bg-white/70 rounded-2xl p-6 shadow-lg">
                                        <h3 className="text-xl font-medium mb-2">90‑Day Action Plan</h3>
                                        <p className="text-gray-600">Keep this blueprint whether we partner or not.</p>
                                    </div>
                                </div>
                            </motion.div>
                            <DownArrow />
                        </div>
                    </div>

                    <div className="" id="calendly">
                        <InlineWidget styles={{ height: '950px', marginTop: '-50px' }} url="https://calendly.com/konuke/30min" />
                        <p></p>
                    </div>
                </div>
            </section>
            <section>
                <BookingPageSections />
            </section>
        </main>
    );
}
