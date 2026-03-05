"use client";

import { Portfolio } from "@/lib/services/portfolios-service";

interface Props {
  portfolio: Portfolio;
}

export default function Projects({ portfolio }: Props) {
  return (
    <section id="projects" className="py-24 border-b border-gray-100 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-semibold mb-14">Selected Projects</h3>

        <div className="grid md:grid-cols-3 gap-10">
          {portfolio.projects.map((project) => (
            <div
              key={project._id}
              className="border border-gray-200 rounded-xl bg-white overflow-hidden hover:shadow-lg transition"
            >
              {project.thumbnail && (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />
              )}

              <div className="p-6">
                <h4 className="font-semibold text-lg">{project.title}</h4>
                <p className="text-gray-600 mt-3 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
