// src/app/products/[id]/page.js
import React from 'react';
import clientPromise from '@/lib/mongodb';

async function fetchProduct(id) {
  const client = await clientPromise;
  const db = client.db('read-haven');
  const product = await db.collection('products').findOne({ _id: new ObjectId(id) });
  return product;
}

import { ObjectId } from 'mongodb';

export default async function ProductDetailsPage({ params }) {
  const { id } = params;

  let product;
  try {
    product = await fetchProduct(id);
    if (!product) return <p>Product not found</p>;
  } catch (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="min-h-screen p-10 bg-white text-[#594a47]">
      <h1 className="text-3xl font-bold mb-4 ">{product.name}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="font-bold mb-4 text-lg">Price: ${product.price}</p>
    </div>
  );
}
