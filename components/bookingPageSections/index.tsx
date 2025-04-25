'use client'
import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, CheckCircle, Sparkle } from "lucide-react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react"

interface Testimonial {
  quote: string;
  author: string;
  kpi: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Konuke slashed our onboarding time from 8 days to 36 hours—worth $420k in recovered MRR.",
    author: "COO, FinTech SaaS",
    kpi: "36h"
  },
  {
    quote: "Automation audit delivered a 512% ROI in the first quarter.",
    author: "VP Ops, Global E-commerce",
    kpi: "512% ROI"
  },
  {
    quote: "We reclaimed 20 team-hours per week within two sprints.",
    author: "Operations Lead, B2B Marketplace",
    kpi: "+20h/week"
  }
];

export default function BookingPageSections() {
  const sliderRef = React.useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const { clientWidth } = sliderRef.current;
    const scrollAmount = clientWidth * 0.9;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };

  return (
    <section className="flex flex-col gap-24">
      {/* Section 3: What We'll Cover */}


      {/* Section 4: Social Proof Slider */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-violet-600 py-14 -mx-6">
        <h2 className="text-center text-white text-3xl font-semibold mb-10">Real Results. Zero Guesswork.</h2>

        {/* <div className="flex justify-center mb-6 gap-4">
          <Button variant="ghost" size="icon" onClick={() => scrollSlider("left")}> 
            <ChevronLeft className="text-white" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => scrollSlider("right")}> 
            <ChevronRight className="text-white" />
          </Button>
        </div>

        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto px-8 scroll-smooth snap-x snap-mandatory"
        >
          {testimonials.map((t, idx) => (
            <Card
              key={idx}
              className="min-w-[300px] sm:min-w-[380px] bg-white rounded-2xl shadow-xl snap-start"
            >
              <CardContent className="p-6 flex flex-col gap-4">
                <Sparkle className="w-6 h-6 text-indigo-600" />
                <p className="text-lg font-medium leading-relaxed">“{t.quote}”</p>
                <div className="text-sm font-semibold text-gray-500">{t.author}</div>
                <div className="text-indigo-600 font-bold">{t.kpi}</div>
              </CardContent>
            </Card>
          ))}
        </div> */}
      </div>

      {/* Section 5: Is This Call Right for You? */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl"
      >
        <h2 className="text-3xl font-semibold text-center mb-8">Is This Call Right for You?</h2>
        <ul className="space-y-4 text-gray-700 mb-10">
          {[
            "You’re juggling >$1 M in annual revenue but still rely on manual processes.",
            "Sales team hits capacity because CRM data is messy or siloed.",
            "Ops feels the strain of rapid growth and legacy tools.",
            "You know AI could help but don’t have time (or in‑house talent) to vet solutions."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle className="text-indigo-600 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="text-center">
          <Button asChild size="lg">
            <a href="#calendly">Yes—Show Me Available Slots</a>
          </Button>
        </div>
      </motion.div>

      {/* Section 6: Konuke Method Snapshot */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gray-50 py-16"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold text-center mb-12">Why Our Clients See Results in Weeks, Not Months</h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            {[
              { title: "Rapid‑Fire Audit", desc: "360° systems deep‑dive" },
              { title: "ROI Heat‑Map", desc: "Score opportunities by impact & effort" },
              { title: "Zero‑Disruption Deploy", desc: "Automations built without stalling daily ops" },
              { title: "Performance Pulse", desc: "Weekly KPI checks & iterative tweaks" }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col gap-2 text-center">
                <div className="w-12 h-12 rounded-full bg-indigo-600 text-white mx-auto flex items-center justify-center font-bold shadow-lg">
                  {idx + 1}
                </div>
                <h3 className="font-medium text-lg">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Section 7: FAQ Accordion */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto lg:w-1/2 w-full"
      >
        <CallFaqSection />        
      </motion.div>

      {/* Section 8: Secondary CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-indigo-600 text-white py-16 text-center rounded-2xl mx-4"
      >
        <h2 className="text-3xl font-semibold mb-6">Last Step: Lock Your Time Slot Before This Week Fills Up.</h2>
        <Button asChild size="lg" variant="secondary">
          <a href="#calendly">Book My Free Strategy Session →</a>
        </Button>
      </motion.div>
    </section>
  );
}

function CallFaqSection() {
  const faqItems = [
    {
      question: "Is the call really free?",
      answer: "Absolutely. No invoice and no obligation—just 30 minutes of pure value."
    },
    {
      question: "Will you try to sell me?",
      answer: "Only if you ask. The session is focused on diagnosing opportunities, not pitching."
    },
    {
      question: "How technical do I need to be?",
      answer: "Zero technical knowledge required. We translate geek‑speak into bottom‑line insights."
    },
    {
      question: "What if our stack is unique?",
      answer: "We’re tool‑agnostic and integrate with 200+ platforms. Unique stacks are our playground."
    },
    {
      question: "What services does Konuke agency provide?",
      answer:
        'We specialize in workflow management and process improvements. Our services include auditing current workflows, identifying inefficiencies, recommending improvement strategies, and implementing streamlined processes to help teams reduce errors, save time, and boost productivity.'
    },
    {
      question: "What types of organizations or industries does Konuke work with?",
      answer:
        "We serve a variety of organizations—ranging from startups to established enterprises—in industries such as healthcare, finance, logistics, tech, retail, and professional services. Because workflow principles are broadly applicable, our methods can adapt to nearly any sector."
    },
    {
      question: "How does Konuke evaluate a client’s existing workflows?",
      answer:
        "We begin with a comprehensive assessment, which may include stakeholder interviews, process mapping, and data analysis. This allows us to pinpoint inefficiencies and bottlenecks, then develop a structured plan to optimize or redesign those workflows."
    },
    {
      question: "What is the typical ROI of workflow improvements?",
      answer:
        "Return on investment often comes in the form of cost savings, reduced turnaround times, increased employee satisfaction, improved customer experience, or better compliance outcomes. While each project is unique, our goal is always to deliver measurable improvements that justify the project’s cost."
    },
    {
      question: "How long do projects usually take?",
      answer:
        "This varies based on scope and complexity. Smaller improvement initiatives might be completed in a few weeks, whereas larger, organizational-wide overhauls can extend over several months. We tailor each engagement timeline to meet the client’s specific needs and priorities."
    },
    {
      question: "Does Konuke offer ongoing support after the initial improvement phase?",
      answer:
        "Yes. We offer continued support through training, regular check-ins, and performance assessments to ensure that your new processes remain effective. We can also provide additional recommendations or refinements over time as your organization evolves."
    },
    {
      question: "How are Konuke's services priced?",
      answer:
        "We typically use either a project-based fee model or hourly consulting rates, depending on the engagement’s scope and duration. After an initial consultation, we’ll provide a detailed proposal that outlines the project deliverables, timeline, and budget."
    },
    {
      question: "What kind of results can we expect once our workflows are improved?",
      answer:
        "Most clients see a notable increase in efficiency, reduction in errors, higher employee morale, and smoother interdepartmental collaboration. Over time, improved workflows can also lead to better customer satisfaction and scalable growth."
    },
    {
      question: "How do we get started or request a consultation?",
      answer:
        "Simply reach out to our team through our website contact form, email, or phone. We’ll set up an initial discovery call to learn more about your current challenges and goals. From there, we’ll propose a tailored action plan."
    },
    {
      question: "Why should we work with Konuke instead of a larger consulting firm?",
      answer:
        "We combine deep expertise in workflow management with a personalized, hands-on approach. Our team focuses on building strong client relationships, delivering measurable results, and ensuring that the changes we implement align with your company’s mission and values."
    },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-10">Frequently asked questions</h1>
      <Accordion type="single" collapsible className="space-y-0">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-t border-b py-4">
            <AccordionTrigger className="flex justify-between text-left font-medium text-base hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2 text-gray-600">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

