// components/TeamSection.tsx

import React from 'react';

interface TeamMember {
  name: string;
  title: string;
  imageUrl: string;
  bio: string;
  testimonial?: string;
  ctaLabel?: string;
  ctaLink?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Edward Stevenson',
    title: 'Workflow Specialist',
    imageUrl: '/images/sarah.jpg', // Replace with your image path
    bio: 'Over a decade of experience streamlining business operations, saving companies time and resources with her efficient, people-centered approach.',
    testimonial: '"Sarah’s automation strategies saved us 15 hours a week!" — Client A',
    ctaLabel: 'Schedule a Call',
    ctaLink: '/contact',
  },
  {
    name: 'Chelsa Lork',
    title: 'Process Consultant',
    imageUrl: '/images/david.jpg', // Replace with your image path
    bio: 'Focuses on building scalable processes and optimizing team collaboration to unlock higher-level strategy work.',
    testimonial: '"David’s guidance reduced our bottlenecks by 40%!" — Client B',
    ctaLabel: 'Book a Free Consultation',
    ctaLink: '/contact',
  },
  {
    name: 'David Rach',
    title: 'Operations Analyst',
    imageUrl: '/images/emily.jpg', // Replace with your image path
    bio: 'Specializes in data-driven insights that transform day-to-day workflows into streamlined, measurable successes.',
    testimonial: '"Emily’s data insights changed our approach entirely!" — Client C',
    ctaLabel: 'Get in Touch',
    ctaLink: '/contact',
  },
  {
    name: 'Jared Stevenson',
    title: 'Operations Analyst',
    imageUrl: '/images/emily.jpg', // Replace with your image path
    bio: 'Specializes in data-driven insights that transform day-to-day workflows into streamlined, measurable successes.',
    testimonial: '"Emily’s data insights changed our approach entirely!" — Client C',
    ctaLabel: 'Get in Touch',
    ctaLink: '/contact',
  },
  {
    name: 'Nathan Thomson',
    title: 'Operations Analyst',
    imageUrl: '/images/emily.jpg', // Replace with your image path
    bio: 'Specializes in data-driven insights that transform day-to-day workflows into streamlined, measurable successes.',
    testimonial: '"Emily’s data insights changed our approach entirely!" — Client C',
    ctaLabel: 'Get in Touch',
    ctaLink: '/contact',
  },
  {
    name: 'Thomas Cahalane',
    title: 'Operations Analyst',
    imageUrl: '/images/emily.jpg', // Replace with your image path
    bio: 'Specializes in data-driven insights that transform day-to-day workflows into streamlined, measurable successes.',
    testimonial: '"Emily’s data insights changed our approach entirely!" — Client C',
    ctaLabel: 'Get in Touch',
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

              {/* Testimonial (optional) */}
              {member.testimonial && (
                <blockquote className="mt-4 text-sm italic text-gray-500">
                  {member.testimonial}
                </blockquote>
              )}

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
