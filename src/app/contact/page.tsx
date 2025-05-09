import { Meteors } from "@/components/ui/meteors";
import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-20 relative overflow-hidden">
      <Meteors number={50} className="absolute inset-0 z-0" />

      {/* Content Wrapper to keep content above meteors */}
      <div className="relative z-10 ">
        {/* Header */}
        <div className="py-16 text-center">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg">
            We&rsquo;d love to hear from you — whether it&apos;s about lessons,
            programs, or performances!
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-600 bg-gray-900 text-white px-4 py-2 rounded"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-600 bg-gray-900 text-white px-4 py-2 rounded"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Subject</label>
                <input
                  type="text"
                  className="w-full border border-gray-600 bg-gray-900 text-white px-4 py-2 rounded"
                  placeholder="Lesson Inquiry, Feedback, etc."
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  className="w-full border border-gray-600 bg-gray-900 text-white px-4 py-2 rounded h-32"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Our Info</h2>
            <div>
              <p className="font-medium">Address</p>
              <p>
                Harmony Music School
                <br />
                123 Melody Lane
                <br />
                Music City, NY 10001
              </p>
            </div>
            <div>
              <p className="font-medium">Phone</p>
              <p>(123) 456-7890</p>
            </div>
            <div>
              <p className="font-medium">Email</p>
              <p>info@harmonymusicschool.com</p>
            </div>
            <div>
              <p className="font-medium">Hours</p>
              <p>
                Mon–Fri: 9am – 6pm
                <br />
                Sat: 10am – 4pm
                <br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full h-64">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.935149106106!2d-73.98165298459254!3d40.768731679327955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ2JzA3LjQiTiA3M8KwNTgnNDcuMiJX!5e0!3m2!1sen!2sus!4v1617654249671!5m2!1sen!2sus"
            loading="lazy"
            title="School Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
