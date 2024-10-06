import connectDB from '../../../lib/db';
import Product from '../../../models/Product';

export async function GET() {
    await connectDB();
    const products = await Product.find();
    return new Response(JSON.stringify(products), { status: 200 });
}

export async function POST(req) {
    await connectDB();
    const product = await req.json();
    const newProduct = new Product(product);
    await newProduct.save();
    return new Response(JSON.stringify(newProduct), { status: 201 });
}
