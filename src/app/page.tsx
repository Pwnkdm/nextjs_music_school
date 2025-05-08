import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import { Spotlight } from "@/components/ui/Spotlight";
import UpcommingWebinars from "@/components/UpcommingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.95] antialiased bg-grid-white/[0.02]">
      {/* <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      /> */}

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60 h-[100%]"
        fill="white"
      />
      <Spotlight
        className="-top-40 right-0 md:-top-20 md:right-60 scale-x-[-1] h-[100%]"
        fill="white"
      />

      <Herosection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCards />
      <UpcommingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}
