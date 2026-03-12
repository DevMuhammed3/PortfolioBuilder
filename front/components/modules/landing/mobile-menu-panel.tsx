"use client";

import { LocaleLink } from "@/components/custom/locale-link";
import ProtectedLink from "@/components/custom/protected-link";
import React from "react";
import { FormattedMessage } from "react-intl";

export default function MobileMenuPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute p-4 bg-white shadow-md top-15 right-0 space-y-4 w-full">
      <LocaleLink
        href="/features"
        onClick={onClose}
        className="block text-base font-medium text-slate-700 hover:text-primary transition-colors duration-300 py-2 border-b border-border/50"
      >
        <FormattedMessage id="header.features" defaultMessage="Features" />
      </LocaleLink>

      <ProtectedLink
        href="/public-portfolios"
        className="block text-base font-medium text-slate-700 hover:text-primary transition-colors duration-300 py-2 border-b border-border/50"
      >
        <FormattedMessage
          id="header.publicPortfolios"
          defaultMessage="Public portfolios"
        />
      </ProtectedLink>

      <LocaleLink
        href="/pricing"
        onClick={onClose}
        className="block text-base font-medium text-slate-700 hover:text-primary transition-colors duration-300 py-2"
      >
        <FormattedMessage id="header.pricing" defaultMessage="Pricing" />
      </LocaleLink>
    </div>
  );
}
