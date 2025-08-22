import { getServerSession } from "next-auth";

import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  // jodi login na thake, redirect kora
  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center ">
        <p className="text-lg">
          You are not logged in. <Link href="/login" className="text-blue-500 underline">Login here</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-white">
      <h1 className="text-4xl font-bold text-[#594a47] mb-6">
        Welcome to Your Dashboard, {session.user.name}
      </h1>
      <p className="text-gray-700 mb-10 text-center max-w-xl">
        Here you can manage your products. Click the button below to add a new product to your ReadHaven collection.
      </p>
      <Link
        href="/dashboard/add-product"
        className="bg-[#594a47] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#463835] transition duration-300"
      >
        ➕ Add New Product
      </Link>
    </div>
  );
}
