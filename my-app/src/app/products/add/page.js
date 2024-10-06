// 'use client'
// import { useState } from 'react';

// const AddProduct = () => {
//     const [product, setProduct] = useState({ name: '', price: '', description: '', image: '' });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProduct((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         await fetch('/api/products', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(product),
//         });
//         // Reset the form or redirect
//         setProduct({ name: '', price: '', description: '', image: '' }); // Reset form
//         alert('Product added successfully!');
//     };

//     return (
//         <div>
//             <h1>Add New Product</h1>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Name" required />
//                 <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" required />
//                 <textarea name="description" value={product.description} onChange={handleChange} placeholder="Description" required />
//                 <input type="text" name="image" value={product.image} onChange={handleChange} placeholder="Image URL" required />
//                 <button type="submit">Add Product</button>
//             </form>
//         </div>
//     );
// };

// export default AddProduct;











'use client';
import { useState } from 'react';

const AddProduct = () => {
    const [product, setProduct] = useState({ name: '', price: '', description: '', image: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('/api/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product),
        });
        // Reset the form or redirect
        setProduct({ name: '', price: '', description: '', image: '' }); // Reset form
        alert('Product added successfully!');
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Add New Product</h1>
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
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
