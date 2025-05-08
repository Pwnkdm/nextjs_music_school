"use client";
import { div } from "motion/react-client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "I've been learning piano for six months now, and the progress I've made is unbelievable. The instructors are patient, talented, and truly passionate about music.",
    name: "Emily R.",
    title: "Beginner Piano Student",
  },
  {
    quote:
      "Joining the vocal performance class boosted my confidence on stage. The real-time feedback during rehearsals helped me improve quickly and sing with emotion.",
    name: "Jason T.",
    title: "Vocal Student",
  },
  {
    quote:
      "The ability to attend lessons online with such great sound quality and interactive tools is a game changer. It feels like I'm in the same room with my teacher.",
    name: "Nina M.",
    title: "Online Guitar Student",
  },
  {
    quote:
      "As a parent, I'm amazed at how engaged my child is during every class. The instructors make learning music fun and exciting!",
    name: "Sarah D.",
    title: "Parent of a Young Violinist",
  },
  {
    quote:
      "The music theory workshops helped me understand the 'why' behind everything I play. I now compose my own pieces with confidence.",
    name: "Leo K.",
    title: "Advanced Composition Student",
  },
];

const TestimonialCards = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
