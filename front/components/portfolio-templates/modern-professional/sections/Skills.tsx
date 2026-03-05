"use client";

import { Portfolio } from "@/lib/services/portfolios-service";

interface Props {
  portfolio: Portfolio;
}

export default function Skills({ portfolio }: Props) {
  return (
    <section id="skills" className="py-24 border-b border-gray-100 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-2xl font-semibold mb-14">Skills</h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolio.skills.map((skill) => (
            <div
              key={skill.name}
              className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-md transition"
            >
              <h4 className="font-medium">{skill.name}</h4>
              <p className="text-sm text-gray-500 mt-2 capitalize">
                {skill.proficiency}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
