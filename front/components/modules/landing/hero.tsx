"use client";

import Container from "@/components/custom/container";
import { GridBackground } from "@/components/custom/grid-background";
import { LocaleLink } from "@/components/custom/locale-link";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/custom/loading-spinner";
import { activeUsers } from "@/data/hero";
import { SignUpButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useIntl } from "react-intl";
import { memo, useMemo } from "react";
import { isValidImageUrl } from "@/lib/security";
import { useReducedMotion, useScreenReader } from "@/hooks/useAccessibility";
import { m, Variants } from "framer-motion";
import type { HeroProps } from "@/types/landing";
import { devLog } from "@/lib/utils";

/**
 * Hero Section Component
 * Default export + memoized for performance
 */
function Hero({ usersCount }: HeroProps) {
  const intl = useIntl();
  const { isSignedIn, isLoaded } = useUser();
  const prefersReducedMotion = useReducedMotion();
  const { announcement, announce } = useScreenReader();

  // Format the user count with locale support
  const formattedUserCount = useMemo(
    () => new Intl.NumberFormat(intl.locale).format(usersCount),
    [usersCount, intl.locale],
  );

  // Validate avatars before rendering
  const validatedUsers = useMemo(
    () =>
      activeUsers.filter((user) => {
        if (!isValidImageUrl(user.avatar)) {
          devLog.warn("[Hero] Invalid avatar URL filtered:", user.avatar);
          return false;
        }
        return true;
      }),
    [],
  );

  // Localized strings
  const messages = useMemo(
    () => ({
      title: intl.formatMessage({
        id: "hero.title",
        defaultMessage: "Your portfolio, ready in",
      }),
      titleHighlight: intl.formatMessage({
        id: "hero.titleHighlight",
        defaultMessage: "10 minutes",
      }),
      titleDays: intl.formatMessage({
        id: "hero.titleDays",
        defaultMessage: "not days",
      }),
      subtitle: intl.formatMessage({
        id: "hero.subtitle",
        defaultMessage:
          "Stop spending days coding your portfolio when you can build it in just 10 minutes — without writing a single line of code.",
      }),
      dashboard: intl.formatMessage({
        id: "hero.dashboard",
        defaultMessage: "Dashboard",
      }),
      cta: intl.formatMessage({
        id: "hero.cta",
        defaultMessage: "Create Your Portfolio",
      }),
      activeUsersText: intl.formatMessage({
        id: "hero.activeUsersText",
        defaultMessage: "users have created their portfolios",
      }),
    }),
    [intl],
  );

  // Framer Motion animation variants
  const animationVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.1 : 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  };

  return (
    <GridBackground
      dotColor="rgba(102, 90, 240, 0.15)"
      dotSize={1.4}
      dotSpacing={20}
    >
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {announcement}
      </div>

      <main
        id="main-content"
        className="flex flex-col justify-center items-center min-h-screen -mt-20"
      >
        <Container className="flex flex-col justify-center items-center h-full">
          <m.div
            variants={staggerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center items-center"
          >
            <m.h1
              variants={animationVariants}
              className="text-center text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight"
              tabIndex={-1}
            >
              {messages.title}{" "}
              <span
                className="text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text drop-shadow-sm px-2 animate-pulse transition-all"
                aria-label={`${messages.titleHighlight} (highlighted)`}
              >
                {messages.titleHighlight}
              </span>
              <span className="text-muted-foreground/80 font-medium">
                {messages.titleDays}
              </span>
            </m.h1>

            <m.h6
              variants={animationVariants}
              className="mt-8 text-center text-muted-foreground text-lg sm:text-xl max-w-2xl leading-relaxed text-pretty dark:text-gray-400"
            >
              {messages.subtitle}
            </m.h6>

            <m.div
              variants={animationVariants}
              className="flex items-center justify-center mt-12 gap-4"
            >
              {!isLoaded ? (
                <LoadingSpinner
                  size="lg"
                  label="Loading authentication status"
                />
              ) : isSignedIn ? (
                <Button
                  size="lg"
                  className="
  relative py-7 px-10 text-xl font-bold
  bg-gradient-to-r from-primary to-purple-600
  hover:from-primary/90 hover:to-purple-600/90
  shadow-xl shadow-primary/25 hover:shadow-primary/40
  transition-all duration-300 hover:-translate-y-1
  overflow-hidden group border-0
"
                >
                  <span
                    className="
    relative z-10
    bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-700
    bg-clip-text text-transparent
  "
                  >
                    {messages.dashboard}
                  </span>

                  <div
                    className="
    absolute inset-0
    -translate-x-full
    bg-gradient-to-r from-transparent via-white/30 to-transparent
    group-hover:translate-x-full
    transition-transform duration-700
  "
                  />
                </Button>
              ) : (
                <SignUpButton
                  fallbackRedirectUrl="/user/portfolios/new"
                  mode="modal"
                >
                  <Button
                    size="lg"
                    className="relative py-7 px-10 text-xl font-bold 
  bg-gradient-to-r from-primary to-purple-600
  hover:from-primary/90 hover:to-purple-600/90
  text-white
  shadow-xl shadow-primary/25 hover:shadow-primary/40
  transition-all duration-300 hover:-translate-y-1
  overflow-hidden group border-0"
                    onClick={() => announce("Opening sign up form")}
                    aria-describedby="cta-description"
                  >
                    <span className="bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-700 bg-clip-text text-transparent">
                      {messages.cta}
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                  </Button>
                </SignUpButton>
              )}
            </m.div>

            {/* Accessibility Descriptions */}
            <div className="sr-only">
              <div id="dashboard-description">
                Navigate to your personal dashboard to manage portfolios
              </div>
              <div id="cta-description">
                Start creating your professional portfolio in just 10 minutes
              </div>
            </div>

            {/* Active Users Section */}
            <m.div
              variants={animationVariants}
              className="mt-16 flex flex-col items-center"
            >
              {validatedUsers.length > 0 && (
                <div
                  className="mb-4"
                  role="img"
                  aria-label={`Profile pictures of ${validatedUsers.length} recent users`}
                >
                  <div className="flex -space-x-2">
                    {validatedUsers.slice(0, 5).map((user, index) => (
                      <div key={user.id} className="relative">
                        <Image
                          className="inline-block object-cover h-12 w-12 rounded-full ring-2 ring-background shadow-md"
                          src={user.avatar || "/placeholder.svg"}
                          alt={`${user.name}, ${user.title}`}
                          width={48}
                          height={48}
                          loading={index < 3 ? "eager" : "lazy"}
                          onError={(e) => {
                            devLog.warn(
                              "[Hero] Failed to load avatar:",
                              user.avatar,
                            );
                            e.currentTarget.style.display = "none";
                          }}
                        />
                        {user.isOnline && (
                          <div
                            className="absolute -bottom-0 -right-0 w-4 h-4 bg-green-500 rounded-full ring-2 ring-background"
                            aria-label="Currently online"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <p className="inline-flex items-center text-center text-muted-foreground gap-1 my-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>

                <span
                  className="font-semibold text-foreground text-xl"
                  aria-label={`${formattedUserCount} users`}
                >
                  +{formattedUserCount}&nbsp;
                </span>

                <span
                  aria-label="have successfully created their portfolios"
                  className="text-xl"
                >
                  {messages.activeUsersText}
                </span>
              </p>
            </m.div>
          </m.div>
        </Container>
      </main>
    </GridBackground>
  );
}

// Memoized default export for performance
export default memo(Hero);
