'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: "The Great Gatsby",
    description: "A classic novel by F. Scott Fitzgerald.",
    image: "/resources/book1.webp",
    link: "/products/1",
  },
  {
    id: 2,
    name: "Atomic Habits",
    description: "Improve your habits with this insightful guide.",
    image: "/resources/book2.webp",
    link: "/products/2",
  },
  {
    id: 3,
    name: "Sapiens",
    description: "A brief history of humankind.",
    image: "/resources/book3.webp",
    link: "/products/3",
  },
];

export default function ProductHighlights() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#594a47] mb-12">
          Product Highlights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-full h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#594a47] mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link
                  href={product.link}
                  className="text-[#594a47] font-semibold hover:underline"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
