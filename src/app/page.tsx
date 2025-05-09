import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import { Spotlight } from "@/components/ui/Spotlight";
import UpcommingWebinars from "@/components/UpcommingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.95] antialiased bg-grid-white/[0.02]">
      <Spotlight className="-top-40 left-0" fill="white" />

      <Spotlight className="-top-40 right-0" fill="white" />

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
