// components/TeamSection.tsx

import React from 'react';

interface TeamMember {
  name: string;
  title: string;
  imageUrl: string;
  bio: string;
  ctaLabel?: string;
  ctaLink?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Edward Stevenson',
    title: 'Director of Workflow Optimization & Founder',
    imageUrl: '/images/ed.jpg',
    bio: 'Leads the design and execution of end-to-end process improvements across core business units.',
    ctaLabel: 'Schedule a Call',
    ctaLink: '/contact',
  },
  {
    name: 'Chelsa Lork',
    title: 'Strategy & Systems Advisor',
    imageUrl: '/images/david.jpg',
    bio: 'Acts as a strategic partner to clients, aligning business objectives with intelligent system design.',
    ctaLabel: 'Schedule a Call',
    ctaLink: '/contact',
  },
  {
    name: 'David Rach',
    title: 'Senior Technical Implementation Consultant',
    imageUrl: '/images/emily.jpg',
    bio: 'Leads complex system implementations, integrations, and automation builds with a strategic lens and technical precision',
    ctaLabel: 'Schedule a Call',
    ctaLink: '/contact',
  },
  {
    name: 'Jared Stevenson',
    title: 'Technical Implementation Consultant',
    imageUrl: '/images/emily.jpg',
    bio: 'Builds and deploys integrations, custom workflows, and automation systems that align with technical specifications and deliver operational efficiency.',
    ctaLabel: 'Schedule a Call',
    ctaLink: '/contact',
  },
  {
    name: 'Nathan Thomson',
    title: 'Technical Implementation Consultant',
    imageUrl: '/images/emily.jpg',
    bio: 'Implements system builds, integrations, and automation workflows in alignment with defined strategies and business requirements.',
    ctaLabel: 'Schedule a Call',
    ctaLink: '/contact',
  },
  {
    name: 'Thomas Cahalane',
    title: 'Technical Implementation Consultant',
    imageUrl: '/images/emily.jpg', 
    bio: 'Translates strategic plans into functional, scalable systems through precise implementation of integrations and automation solutions.',
    ctaLabel: 'Schedule a Call',
    ctaLink: '/contact',
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Meet the Experts Driving Better Workflows
          </h2>
          <p className="mt-4 text-gray-600">
            Our team brings deep expertise in workflow management and
            operational excellence. We focus on tangible results, efficiency,
            and growth.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Headshot */}
              <div className="flex justify-center">
                <img
                  src={member.imageUrl}
                  alt={`${member.name} Headshot`}
                  className="w-32 h-32 object-cover rounded-full"
                />
              </div>

              {/* Name and Title */}
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-indigo-600">{member.title}</p>
              </div>

              {/* Bio */}
              <p className="mt-4 text-gray-600 text-sm">{member.bio}</p>

              {/* CTA (optional) */}
              {member.ctaLabel && member.ctaLink && (
                <div className="mt-6 text-center">
                  <a
                    href={member.ctaLink}
                    className="inline-block px-5 py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors"
                  >
                    {member.ctaLabel}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Optional Additional Conversion Elements */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-900">
            Ready to Accelerate Your Workflows?
          </h3>
          <p className="mt-2 text-gray-700">
            Discover how our team’s expertise can transform your operations and
            free up your time for higher-level strategic work.
          </p>
          <a
            href="/contact"
            className="mt-4 inline-block px-8 py-3 bg-indigo-600 text-white font-medium rounded hover:bg-indigo-700 transition-colors"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
