'use client';

import React from 'react';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    await signIn('google', { callbackUrl: '/products' }); // ✅ Login sesh e home page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#f5f0e1] to-[#e8d7c1] px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <div className="flex justify-center mb-6">
          <Image src="/resources/logo.png" alt="Logo" width={80} height={80} />
        </div>

        <h1 className="text-3xl font-bold text-center text-[#594a47] mb-2">Welcome Back!</h1>
        <p className="text-center text-gray-500 mb-8">
          Sign in to continue to your account
        </p>

        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full border border-gray-300 rounded-lg py-3 px-4 gap-2 hover:shadow-md transition"
        >
          <FcGoogle size={24} />
          <span className="font-medium text-gray-700">Sign in with Google</span>
        </button>
      </div>
    </div>
  );
}
