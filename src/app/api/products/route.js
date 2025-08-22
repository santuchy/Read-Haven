import clientPromise from "@/lib/mongodb";

// GET products
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("read-haven");
    const products = await db.collection("products").find({}).toArray();
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

// POST product
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, description, price } = body;

    if (!name || !description || !price)
      return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });

    const client = await clientPromise;
    const db = client.db("read-haven");
    const result = await db.collection("products").insertOne({
      name,
      description,
      price: parseFloat(price),
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ message: "Product added", id: result.insertedId }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
