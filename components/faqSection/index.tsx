"use client"

import { Plus } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
  const faqItems = [
    {
      question: "What is Enterprise AI?",
      answer:
        "Enterprise AI refers to artificial intelligence solutions designed specifically for business applications. It integrates advanced machine learning capabilities into corporate infrastructure to automate processes, enhance decision-making, and drive innovation across departments.",
    },
    {
      question: "How does Enterprise AI benefit businesses?",
      answer:
        "Enterprise AI delivers numerous benefits including increased operational efficiency, reduced costs, improved customer experiences, data-driven decision making, and the ability to identify new market opportunities. It can automate repetitive tasks, analyze vast amounts of data, and provide actionable insights that human analysis might miss.",
    },
    {
      question: "What are common use cases for Enterprise AI?",
      answer:
        "Common Enterprise AI use cases include customer service automation (chatbots), predictive maintenance, fraud detection, supply chain optimization, personalized marketing, sales forecasting, HR process automation, risk assessment, and product recommendation systems.",
    },
    {
      question: "How does Konuke fit into the Enterprise AI landscape?",
      answer:
        "Konuke provides a comprehensive platform that simplifies the implementation and management of AI solutions within enterprise environments. It bridges the gap between complex AI technologies and practical business applications, offering tools that enable companies to deploy AI without extensive technical expertise.",
    },
    {
      question: "What features does Konuke offer for building applications?",
      answer:
        "Konuke offers features such as pre-built AI models, no-code/low-code development interfaces, data integration tools, automated machine learning (AutoML), model monitoring and management, scalable infrastructure, and enterprise-grade security controls.",
    },
    {
      question: "Is Konuke compliant with data protection regulations?",
      answer:
        "Yes, Konuke is designed with compliance in mind. It adheres to major data protection regulations including GDPR, CCPA, HIPAA, and other industry-specific standards. The platform includes features for data governance, consent management, and audit trails to help enterprises maintain regulatory compliance.",
    },
    {
      question: "Can Konuke be used across different industries?",
      answer:
        "Absolutely. Konuke is designed to be industry-agnostic while offering specialized capabilities for sectors such as healthcare, finance, retail, manufacturing, and telecommunications. The platform can be customized to address specific industry challenges and requirements.",
    },
    {
      question: "How does Konuke ensure data security?",
      answer:
        "Konuke implements multiple layers of security including encryption (both in transit and at rest), role-based access controls, secure authentication methods, regular security audits, and compliance with industry standards. The platform also provides tools for data anonymization and privacy-preserving AI techniques.",
    },
    {
      question: "What kind of support does Konuke provide for enterprise clients?",
      answer:
        "Konuke offers comprehensive support including dedicated account managers, 24/7 technical support, implementation assistance, regular training sessions, detailed documentation, and a knowledge base. Enterprise clients also receive prioritized issue resolution and access to AI specialists for consultation.",
    },
    {
      question: "How can businesses get started with Konuke?",
      answer:
        "Businesses can get started with Konuke by requesting a demo, signing up for a free trial, or consulting with our solutions team. The onboarding process includes initial assessment, customized implementation planning, data integration, user training, and ongoing optimization support.",
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

