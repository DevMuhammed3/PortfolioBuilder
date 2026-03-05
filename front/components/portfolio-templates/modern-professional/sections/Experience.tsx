"use client";

import { Portfolio } from "@/lib/services/portfolios-service";

interface Props {
  portfolio: Portfolio;
}

export default function Experience({ portfolio }: Props) {
  return (
    <section id="experience" className="py-24 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-2xl font-semibold mb-16">Experience</h3>

        <div className="space-y-16">
          {portfolio.experiences.map((exp) => (
            <div key={exp._id}>
              <h4 className="text-lg font-semibold">{exp.title}</h4>
              <p className="text-gray-500 text-sm mt-1">
                {exp.company} · {exp.location}
              </p>
              <p className="mt-4 text-gray-600">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
