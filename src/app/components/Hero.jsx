'use client';

import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="relative h-[60vh] flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/resources/hero.webp')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Welcome to ReadHaven
        </h1>
        <p className="text-base sm:text-lg mb-6">
          Discover your next favorite book with us. Novels, non-fiction & more.
        </p>
        <Link
          href="/products"
          className="inline-block px-5 py-2 text-base font-semibold text-[#594a47] bg-white rounded-xl hover:bg-gray-200 transition duration-300"
        >
          Start Exploring
        </Link>
      </div>
    </section>
  );
}
