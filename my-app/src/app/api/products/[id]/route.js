
import connectDB from '../../../../lib/db';
import Product from '../../../../models/Product';

export async function GET(req, { params }) {
    await connectDB();
    const product = await Product.findById(params.id);
    return new Response(JSON.stringify(product), { status: 200 });
}

export async function DELETE(req, { params }) {
    await connectDB();
    await Product.findByIdAndDelete(params.id);
    return new Response(null, { status: 204 });
}

export async function PUT(req, { params }) {
    await connectDB();
    const updatedProduct = await req.json();
    const product = await Product.findByIdAndUpdate(params.id, updatedProduct, { new: true });
    return new Response(JSON.stringify(product), { status: 200 });
}
