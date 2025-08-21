'use client';

import React, { useState } from 'react';

export default function AddProductPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [photo, setPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setToastMessage(''); // Clear any previous toast message

    // Simulating an API call (Replace with your actual API call)
    setTimeout(() => {
      console.log({ name, description, price, photo });
      setIsLoading(false);
      setToastMessage('Product added successfully!'); // Show success message
    }, 2000); // Simulate a delay (2 seconds)
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-[#594a47] mb-6">Add Product</h1>

        {/* Toast Message */}
        {toastMessage && (
          <div className="mb-4 text-center text-white bg-green-500 py-2 px-4 rounded-lg">
            {toastMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Product Name */}
          <div>
            <label className="block text-[#594a47] font-semibold mb-2">Product Name</label>
            <input
              type="text"
              placeholder="Enter product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#594a47] placeholder-gray-500 text-gray-600"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-[#594a47] font-semibold mb-2">Description</label>
            <textarea
              placeholder="Enter product description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#594a47] placeholder-gray-500 text-gray-600"
              rows={4}
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-[#594a47] font-semibold mb-2">Price (USD)</label>
            <input
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#594a47] placeholder-gray-500 text-gray-600"
              required
            />
          </div>

          {/* Photo Upload */}
          <div>
            <label className="block text-[#594a47] font-semibold mb-2">Product Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#594a47] text-[#2d2d2d]"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full bg-[#594a47] text-white font-semibold py-3 rounded-lg hover:bg-[#463835] transition duration-300 ${isLoading && 'cursor-not-allowed opacity-50'}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex justify-center items-center">
                <svg
                  className="animate-spin h-6 w-6 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="4" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 12a8 8 0 118 8 8 8 0 01-8-8z"
                  />
                </svg>
                Loading...
              </div>
            ) : (
              'Add Product'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
