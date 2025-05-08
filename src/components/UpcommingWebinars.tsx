import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

export const upcomingWebinars = [
  {
    title: "Mastering M ic Theory Basics",
    description:
      "Learn the core principles of music theory including scales, intervals, and chord progressions. Perfect for beginners or anyone looking to strengthen their foundation.",
    link: "/",
  },
  {
    title: "Vocal Techniques for All Genres",
    description:
      "Join our vocal coach as they cover breathing techniques, vocal warm-ups, and tips for singing pop, classical, jazz, and more.",
    link: "/",
  },
  {
    title: "Digital Music Production 101",
    description:
      "A beginner-friendly introduction to using DAWs (like Logic Pro or Ableton), virtual instruments, and mixing tools to create your own music.",
    link: "/",
  },
  {
    title: "Improvisation for Jazz Musicians",
    description:
      "Explore improvisational techniques in jazz. Learn how to create spontaneous solos and develop your ear for harmony and rhythm.",
    link: "/",
  },
  {
    title: "From Practice to Performance",
    description:
      "Discover strategies for effective practice, managing stage fright, and delivering confident performances, whether online or in person.",
    link: "/",
  },
  {
    title: "Composing Your First Song",
    description:
      "Unlock your creativity with songwriting fundamentals. This webinar covers lyric writing, melody construction, and arranging your first original piece.",
    link: "/",
  },
];

const UpcommingWebinars = () => {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Webinars
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect items={upcomingWebinars} />
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcommingWebinars;
