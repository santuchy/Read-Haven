// src/app/products/page.js
import React from 'react';
import Link from 'next/link';

async function fetchProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export default async function ProductsPage() {
  let products = [];

  try {
    products = await fetchProducts();
  } catch (error) {
    console.error(error.message);
  }

  return (
    <div className="min-h-screen p-10 bg-white text-[#594a47]">
      <h1 className="text-3xl font-bold mb-6 text-[#594a47]">Products</h1>

      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product._id} className="border p-4 rounded-lg shadow flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="font-bold mb-4">${product.price}</p>
              </div>

              {/* Details button */}
              <Link
                href={`/products/${product._id}`}
                className="mt-auto inline-block text-center bg-[#594a47] text-white py-2 px-4 rounded-lg hover:bg-[#463835] transition"
              >
                Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
