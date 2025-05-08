"use client";

import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Interactive Music Lessons",
    description:
      "Engage in real-time lessons with experienced instructors. Whether you're learning piano, guitar, or voice, our interactive sessions allow you to receive personalized feedback and improve faster than ever before.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--purple-500))] text-white">
        Interactive Music Lessons
      </div>
    ),
  },
  {
    title: "Live Performance Feedback",
    description:
      "Perform live and get instant feedback from peers and teachers. Our platform enables real-time critiques, helping you refine your skills and gain confidence on stage and in the studio.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://www.greenbeltonline.org/wp-content/uploads/2021/04/live.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="live performance feedback"
        />
      </div>
    ),
  },
  {
    title: "Practice Tracking",
    description:
      "Keep track of your daily practice sessions, set goals, and monitor your progress over time. Stay motivated and consistent with features designed to support your musical journey.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--yellow-500),var(--orange-500))] text-white">
        Practice Tracking
      </div>
    ),
  },
  {
    title: "Digital Sheet Music Library",
    description:
      "Access a vast collection of sheet music directly from our platform. Browse by instrument, genre, or skill level and start playing without the need to hunt down paper copies.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--teal-500),var(--green-500))] text-white">
        Digital Sheet Music Library
      </div>
    ),
  },
];
const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
};

export default WhyChooseUs;
