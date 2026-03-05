"use client";

import { Portfolio } from "@/lib/services/portfolios-service";

interface Props {
  portfolio: Portfolio;
}

export default function Contact({ portfolio }: Props) {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-semibold mb-6">
          Let’s Work Together
        </h3>

        <p className="text-gray-600 mb-10">
          Interested in collaborating or hiring me? Let’s talk.
        </p>

        <a
          href={`mailto:${portfolio.profile.email}`}
          className="inline-block px-8 py-4 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition"
        >
          Send Email
        </a>
      </div>
    </section>
  );
}
