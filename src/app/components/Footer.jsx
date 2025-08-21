'use client';

import React from 'react';
import Image from 'next/image';
import logo from '../../../public/resources/logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#594a47] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-8">
          {/* Logo and Slogan */}
          <div className="flex items-center mb-6 md:mb-0">
            <div className="relative w-12 h-12 mr-3">
              <Image src={logo} alt="ReadHaven Logo" fill className="object-contain" />
            </div>
            <span className="text-xl font-bold">ReadHaven</span>
          </div>
          <p className="text-center md:text-left text-gray-200 italic max-w-md">
            "Your gateway to endless stories and adventures."
          </p>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8 text-gray-200">
          <div>
            <h4 className="font-semibold mb-2">About Us</h4>
            <p>ReadHaven is your ultimate online library. Explore books, discover stories, and enrich your mind.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p>Email: santuchowdhuryofficial@gmail.com</p>
            <p>Phone: +8801840577851</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="flex gap-4 mt-2">
              {/* Facebook */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#594a47] hover:bg-gray-200 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M22.675 0h-21.35C.598 0 0 .6 0 1.333v21.333C0 23.4.598 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.667V1.333C24 .6 23.4 0 22.675 0z"/>
                </svg>
              </a>
              {/* Twitter */}
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#594a47] hover:bg-gray-200 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M24 4.557a9.816 9.816 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.949 13.949 0 011.671 3.149a4.916 4.916 0 001.523 6.574 4.902 4.902 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.918 4.918 0 004.593 3.417 9.867 9.867 0 01-6.102 2.104c-.396 0-.788-.023-1.177-.068A13.945 13.945 0 007.548 21c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0024 4.557z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#594a47] hover:bg-gray-200 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.736 0 8.332.013 7.052.072 5.771.13 4.565.427 3.513 1.479 2.461 2.531 2.164 3.737 2.106 5.018.013 8.332 0 8.736 0 12s.013 3.668.072 4.948c.058 1.281.355 2.487 1.407 3.539 1.052 1.052 2.258 1.349 3.539 1.407C8.332 23.987 8.736 24 12 24s3.668-.013 4.948-.072c1.281-.058 2.487-.355 3.539-1.407 1.052-1.052 1.349-2.258 1.407-3.539.058-1.281.072-1.685.072-4.948s-.013-3.668-.072-4.948c-.058-1.281-.355-2.487-1.407-3.539-1.052-1.052-2.258-1.349-3.539-1.407C15.668.013 15.264 0 12 0z"/>
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998z"/>
                  <circle cx="18.406" cy="5.594" r="1.44"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-400 pt-4 text-center text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} ReadHaven. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
