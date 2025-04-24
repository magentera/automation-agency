'use client'
import { ArrowRight } from "lucide-react";
import { InlineWidget } from "react-calendly";


export default function InitialConsultation() {
    return (


        <main className="bg-white text-black px-4 md:px-6 py-0 md:py-12">

            <section className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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

                    <div className="">
                        <InlineWidget styles={{ height: '950px', marginTop: '-50px'}} url="https://calendly.com/konuke/30min" />
                        <p></p>
                    </div>
                </div>
            </section>
        </main>
    );
}
