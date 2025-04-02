"use client"

import { Plus } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
  const faqItems = [
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

