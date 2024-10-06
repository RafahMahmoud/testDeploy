// 'use client'

// import { useEffect, useState } from 'react';

// const UpdateProduct = ({ params }) => {
//     const { id } = params;
//     const [product, setProduct] = useState({ name: '', price: '', description: '', image: '' });

//     useEffect(() => {
//         const fetchProduct = async () => {
//             const res = await fetch(`/api/products/${id}`);
//             const data = await res.json();
//             setProduct(data);
//         };
//         fetchProduct();
//     }, [id]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProduct((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         await fetch(`/api/products/${id}`, {
//             method: 'PUT',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(product),
//         });
//         alert('Product updated successfully!');
//     };

//     return (
//         <div>
//             <h1>Update Product</h1>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Name" required />
//                 <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" required />
//                 <textarea name="description" value={product.description} onChange={handleChange} placeholder="Description" required />
//                 <input type="text" name="image" value={product.image} onChange={handleChange} placeholder="Image URL" required />
//                 <button type="submit">Update Product</button>
//             </form>
//         </div>
//     );
// };

// export default UpdateProduct;








'use client';
import { useEffect, useState } from 'react';

const UpdateProduct = ({ params }) => {
    const { id } = params;
    const [product, setProduct] = useState({ name: '', price: '', description: '', image: '' });

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch(`/api/products/${id}`);
            const data = await res.json();
            setProduct(data);
        };
        fetchProduct();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(`/api/products/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product),
        });
        alert('Product updated successfully!');
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Update Product</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        placeholder="Product Name"
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="price">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        placeholder="Product Price"
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        placeholder="Product Description"
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="image">Image URL</label>
                    <input
                        type="text"
                        name="image"
                        value={product.image}
                        onChange={handleChange}
                        placeholder="Image URL"
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Update Product
                </button>
            </form>
        </div>
    );
};

export default UpdateProduct;
