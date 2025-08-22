import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(req) {
  const { id } = req.params;
  const client = await clientPromise;
  const db = client.db("read-haven");
  const product = await db.collection("products").findOne({ _id: new ObjectId(id) });
  if (!product) return new Response("Product not found", { status: 404 });
  return new Response(JSON.stringify(product), { status: 200 });
}
