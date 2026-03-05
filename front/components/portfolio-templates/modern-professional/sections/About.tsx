"use client";

import { Portfolio } from "@/lib/services/portfolios-service";

interface Props {
  portfolio: Portfolio;
}

export default function About({ portfolio }: Props) {
  const profile = portfolio.profile;

  return (
    <section id="about" className="py-25 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-2xl font-semibold mb-12 tracking-tight">
          About
        </h3>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <p className="text-gray-600 leading-relaxed text-lg">
              {profile.bio}
            </p>
          </div>

          <div className="space-y-6 text-sm">
            {profile.location && (
              <div>
                <p className="text-gray-400 uppercase text-xs">Location</p>
                <p className="text-gray-700">{profile.location}</p>
              </div>
            )}
            {profile.email && (
              <div>
                <p className="text-gray-400 uppercase text-xs">Email</p>
                <p className="text-gray-700">{profile.email}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
