import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";
import AddProductForm from "./AddProductForm"; // client component
import { authOptions } from './../../api/auth/[...nextauth]/route';

export default async function AddProductPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login"); // 🔒 Login na thakle login page e pathao
  }

  return <AddProductForm />; // ✅ only logged-in users can see
}
