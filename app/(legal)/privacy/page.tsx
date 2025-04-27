import LegalPage, { LegalSection } from "@/components/legal";

const sections: LegalSection[] = [
  {
    heading: "1. Introduction",
    body: `Konuke Limited ("Konuke", "we", "our" or "us") is a New Zealand–registered consultancy that designs and implements AI‑powered workflow, automation and operational improvements for high‑ticket businesses. We operate the website **konuke.com** (the "Site") and associated landing pages, forms, email and scheduling tools (collectively, the "Services").  
This Privacy Policy explains how we collect, use, disclose and safeguard your personal information when you visit, interact with or purchase from our Site and Services.  
We process personal information in accordance with the New Zealand Privacy Act 2020, the EU/UK General Data Protection Regulation (GDPR) and, where applicable, the California Consumer Privacy Act (CCPA).  
By using the Site you consent to the practices described below.`,
  },
  {
    heading: "2. Information We Collect",
    body: `| Category | Examples | Source |
|-----------|----------|--------|
| **Contact & Identity Data** | Name, email, phone, company, job title | You (forms, Calendly booking), HubSpot CRM sync |
| **Business Profile Data** | Organisation size, sector, challenges, project details | You (questionnaires, discovery calls) |
| **Technical & Usage Data** | IP address, device type, browser, pages visited, time on page, referring URL | Cookies, server logs, analytics |
| **Marketing & Communications Data** | Preferences for receiving marketing, survey responses, social-media handles | You (opt‑ins), LinkedIn Insight Tag |
| **Payment & Billing Data** | Invoicing details, transaction ID (handled by Stripe or Xero) | Stripe/Xero APIs |
&nbsp; \n
We do **not** intentionally collect sensitive personal information unless you volunteer it (e.g., accessibility requirements).`,
  },
  {
    heading: "3. How We Use Your Information",
    body: `We use personal data to:
1. Provide, operate and maintain the Site and Services;  
2. Respond to inquiries, schedule consultations and deliver statements of work;  
3. Improve and personalise content, user experience and marketing campaigns;  
4. Perform analytics and develop new offerings;  
5. Send administrative or promotional communications that you have opted‑in to receive;  
6. Process payments and manage accounts;  
7. Detect, prevent and address technical issues, fraud or misuse;  
8. Comply with legal obligations and enforce our contractual rights.
&nbsp; \n
Legal bases under GDPR: performance of a contract, legitimate interests, consent (for marketing cookies/emails) and legal obligation.`,
  },
  {
    heading: "4. Sharing and Disclosure",
    body: `We never sell your personal information. We may share it:
* **Service Providers.** Trusted vendors that help us run our business (e.g., HubSpot CRM, Calendly scheduling, AWS SES/WorkMail email, Google Analytics, Stripe/Xero payments, Typeform). Each provider is bound by confidentiality and data‑processing agreements.  
* **Professional Advisers.** Lawyers, accountants, insurers and auditors under confidentiality.  
* **Business Transfers.** In connection with a merger, acquisition or asset sale, subject to appropriate safeguards.  
* **Legal Requirements.** When required to comply with law or protect rights, property or safety.`,
  },
  {
    heading: "5. International Transfers",
    body: `We host data on AWS servers located in Australia and/or the United States. Where data is transferred outside New Zealand or the European Economic Area, we implement appropriate safeguards such as Standard Contractual Clauses.`,
  },
  {
    heading: "6. Data Retention",
    body: `We retain personal information only as long as necessary for the purposes set out in this Policy, unless a longer retention period is required by law or contract. Analytical data may be retained indefinitely in aggregate form.`,
  },
  {
    heading: "7. Your Rights & Choices",
    body: `Depending on your jurisdiction you may have the right to:
* Access and receive a copy of the personal data we hold about you;  
* Correct inaccurate or incomplete data;  
* Delete your data ("right to be forgotten");  
* Restrict or object to certain processing;  
* Port your data to another controller;  
* Withdraw consent at any time (without affecting prior processing);  
* Lodge a complaint with a supervisory authority.
&nbsp; \n
To exercise any of these rights, email **privacy@konuke.com**.`,
  },
  {
    heading: "8. Cookies & Tracking Technologies",
    body: `We use first‑ and third‑party cookies, pixels and similar technologies to remember preferences, perform analytics, measure marketing performance and facilitate social‑media integrations. You can disable cookies via your browser, but some features may not function.

### Key Cookies
| Cookie |&nbsp;&nbsp;&nbsp;| Purpose |&nbsp;&nbsp;&nbsp;| Provider |
|--------|-|---------|-|----------|
| _ga / _gid |&nbsp;&nbsp;&nbsp;| Google Analytics visitor statistics |&nbsp;&nbsp;&nbsp;| Google |
| hubspotutk |&nbsp;&nbsp;&nbsp;| Identify visitor across HubSpot sessions |&nbsp;&nbsp;&nbsp;| HubSpot |
| li_fat_id |&nbsp;&nbsp;&nbsp;| LinkedIn Insight Tag conversion tracking |&nbsp;&nbsp;&nbsp;| LinkedIn |
| calendly_session |&nbsp;&nbsp;&nbsp;| Manage scheduling state |&nbsp;&nbsp;&nbsp;| Calendly |`,
  },
  {
    heading: "9. Data Security",
    body: `We employ technical and organisational measures such as encryption in transit (TLS 1.2+), network firewalls, least‑privilege access controls, multi‑factor authentication for admin consoles, regular security audits and staff training.`,
  },
  {
    heading: "10. Third‑Party Links",
    body: `The Site may contain links to external sites we do not control. We are not responsible for their privacy practices. Review the privacy notices of any third‑party sites you visit.`,
  },
  {
    heading: "11. Children’s Privacy",
    body: `Our Services are not directed to children under 16, and we do not knowingly collect their data. If you believe we have done so inadvertently, contact us to delete the information.`,
  },
  {
    heading: "12. Changes to This Policy",
    body: `We may update this Policy periodically. We will post the revised version with a new "Effective date" and, where appropriate, notify you by email.`,
  },
  {
    heading: "13. Contact Us",
    body: `If you have questions about privacy or this Policy, contact our Data Protection Officer at **privacy@konuke.com** or write to Konuke Limited, PO Box 1234, Auckland 1010, New Zealand.`,
  },
];

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" sections={sections} />;
}