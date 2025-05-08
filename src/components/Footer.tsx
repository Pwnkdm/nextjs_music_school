import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        {/* About the School */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
          <p>
            Harmony Music School offers world-class music education to students
            of all ages and skill levels. Our mission is to inspire through
            sound.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About
              </a>
            </li>

            <li>
              <a href="/courses" className="hover:text-white">
                Courses
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Spotify
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
          <p>
            123 Melody Lane
            <br />
            Music City, Pune 10001
          </p>
          <p className="mt-2">Phone: (123) 456-7890</p>
          <p>Email: info@harmonymusicschool.com</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white">
              Facebook
            </a>
            <a href="#" className="hover:text-white">
              Instagram
            </a>
            <a href="#" className="hover:text-white">
              YouTube
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} Harmony Music School. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
