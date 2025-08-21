'use client';

import React from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      
      {/* Dashboard Header */}
      <h1 className="text-4xl sm:text-5xl font-bold text-[#594a47] mb-6 text-center">
        Welcome to Your Dashboard
      </h1>

      {/* Info / Description */}
      <p className="text-center text-gray-700 mb-10 max-w-xl">
        Here you can manage your products. Click the button below to add a new product to your ReadHaven collection.
      </p>

      {/* Add Product Button */}
      <Link
        href="/dashboard/add-product"
        className="bg-[#594a47] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#463835] transition duration-300"
      >
        ➕ Add New Product
      </Link>

      {/* Optional: Small Tip / Note */}
      <p className="text-gray-500 text-sm mt-6 text-center max-w-md">
        You can add the product name, description, price, and upload a photo in the next page.
      </p>
    </div>
  );
}
