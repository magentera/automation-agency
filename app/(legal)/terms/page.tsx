import LegalPage, { LegalSection } from "@/components/legal";

const sections: LegalSection[] = [
  {
    heading: "1. Agreement to Terms",
    body: `By accessing or using **konuke.com** or engaging Konuke Limited for Services, you agree to be bound by these Terms & Conditions ("Terms"). If you do not agree, do not use the Site.`,
  },
  {
    heading: "2. Definitions",
    body: `* **"Client"** means any individual or entity that requests or purchases Services from Konuke;  
* **"Content"** means all text, graphics, code, data, audio, video or other materials on the Site;  
* **"Services"** means consultancy, audits, strategic advice, automation implementation, AI‑based workflows and related deliverables provided by Konuke.`,
  },
  {
    heading: "3. Use of the Site",
    body: `You may use the Site only for lawful purposes and in accordance with these Terms. You agree not to:
1. Violate applicable laws or regulations;  
2. Attempt to gain unauthorised access to any part of the Site or its systems;  
3. Interfere with or disrupt the Site’s functionality;  
4. Use automated means (scrapers, bots) without our prior written consent.`,
  },
  {
    heading: "4. Services, Proposals & Engagements",
    body: `* All proposals or statements of work ("SOWs") are valid for 14 days unless otherwise stated.  
* Services commence only after written acceptance, upfront deposit (if required) and provision of necessary information by Client.  
* Timeframes are estimates; Client cooperation and timely feedback are essential.`,
  },
  {
    heading: "5. Fees & Payment",
    body: `* Fees will be outlined in the relevant SOW or invoice (e.g., NZD $350 per consulting hour).  
* Invoices are payable within 7 days of issue unless agreed otherwise.  
* Late payments incur interest at 2% per month and may result in suspension of Services.`,
  },
  {
    heading: "6. Client Responsibilities",
    body: `The Client must:
* Provide accurate information, access to systems and timely feedback;  
* Ensure that use of Services complies with applicable laws and internal policies;  
* Obtain all necessary rights, licences and consents for data and materials supplied to Konuke.`,
  },
  {
    heading: "7. Intellectual Property",
    body: `Unless otherwise agreed in writing:
* All pre‑existing IP owned by each party remains that party’s sole property;  
* Konuke grants the Client a perpetual, worldwide, royalty‑free licence to use deliverables created specifically for the Client, upon full payment;  
* Konuke retains the right to reuse non‑confidential know‑how, templates and code in future projects.`,
  },
  {
    heading: "8. Confidentiality",
    body: `Each party must keep confidential any non‑public information disclosed by the other and use it only for the purpose of performing or receiving the Services. This clause survives termination.`,
  },
  {
    heading: "9. Disclaimers",
    body: `*The Site and Services are provided "as is" and "as available".* Konuke makes no warranties, express or implied, regarding accuracy, reliability, merchantability, fitness for a particular purpose or non‑infringement. While we strive for best‑practice outcomes, we cannot guarantee specific results (e.g., revenue targets) due to factors beyond our control.`,
  },
  {
    heading: "10. Limitation of Liability",
    body: `To the maximum extent permitted by law, Konuke shall not be liable for indirect, incidental, special or consequential loss, or for any loss of profits, revenue, data or goodwill. Our total liability under any claim is limited to the amount you paid us for the Services giving rise to the claim.`,
  },
  {
    heading: "11. Indemnity",
    body: `You agree to indemnify and hold Konuke harmless from any claims, damages or expenses arising out of your:
1. Breach of these Terms;  
2. Use of the Site or Services in violation of law or third‑party rights;  
3. Failure to obtain necessary permissions for materials supplied to us.`,
  },
  {
    heading: "12. Termination",
    body: `Either party may terminate an engagement:
* For convenience with 14 days’ written notice (fees incurred to date remain payable), or  
* Immediately if the other party materially breaches these Terms and fails to cure within 10 days of notice.  
&nbsp; \n
Upon termination, provisions relating to intellectual property, confidentiality, payment, limitation of liability and indemnity survive.`,
  },
  {
    heading: "13. Governing Law & Jurisdiction",
    body: `These Terms are governed by the laws of New Zealand. Any dispute will be subject to the exclusive jurisdiction of the New Zealand courts.`,
  },
  {
    heading: "14. Changes to Terms",
    body: `We may revise these Terms from time to time. The updated version becomes effective when posted on the Site. Material changes will be highlighted for 30 days.`,
  },
  {
    heading: "15. Contact",
    body: `Questions about these Terms should be sent to **legal@konuke.com**.`},
];

export default function TermsPage() {
  return <LegalPage title="Terms & Conditions" sections={sections} />;
}