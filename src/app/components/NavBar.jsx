import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/resources/logo.png";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function NavBar() {
  const session = await getServerSession(authOptions); // ✅ server-side safe

  return (
    <nav className="flex items-center p-4 bg-[#594a47] text-white">
      <div className="flex items-center flex-1 gap-2">
        <Image src={logo} alt="Logo" className="h-8 w-auto" />
        <p className="text-2xl font-bold">ReadHaven</p>
      </div>

      <div className="flex gap-8 justify-center">
        <Link href="/" className="text-white no-underline hover:text-gray-200 transition-colors duration-300">Home</Link>
        <Link href="/products" className="text-white no-underline hover:text-gray-200 transition-colors duration-300">Products</Link>
        {session && (
          <Link href="/dashboard" className="text-white no-underline hover:text-gray-200 transition-colors duration-300">Dashboard</Link>
        )}
      </div>

      <div className="flex-1 flex justify-end gap-4">
        {!session ? (
          <Link href="/login" className="bg-white text-[#594a47] border rounded-2xl border-white py-2 px-4 cursor-pointer hover:bg-gray-200 hover:text-[#594a47] transition-all duration-300">
            Login
          </Link>
        ) : (
          <Link href="/api/auth/signout" className="bg-white text-[#594a47] border rounded-2xl border-white py-2 px-4 cursor-pointer hover:bg-gray-200 hover:text-[#594a47] transition-all duration-300">
            Logout
          </Link>
        )}
      </div>
    </nav>
  );
}
