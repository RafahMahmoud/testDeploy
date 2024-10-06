
// 'use client'
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// const ProductsPage = () => {
//     const [products, setProducts] = useState([]);
//     const router = useRouter();

//     useEffect(() => {
//         const fetchProducts = async () => {
//             const res = await fetch('/api/products');
//             const data = await res.json();
//             setProducts(data);
//         };
//         fetchProducts();
//     }, []);

//     const handleDelete = async (id) => {
//         const confirmed = confirm("Are you sure you want to delete this product?");
//         if (confirmed) {
//             await fetch(`/api/products/${id}`, {
//                 method: 'DELETE',
//             });
//             setProducts(products.filter(product => product._id !== id));
//         }
//     };

//     const handleUpdate = async (id) => {
//         router.push(`/products/update/${id}`);
//     };

//     return (
//         <div>
//             <h1>Products</h1>
//             <ul>
//                 {products.map(product => (
//                     <li key={product._id}>
//                         <h2>{product.name}</h2>
//                         <p>${product.price}</p>
//                         <p>{product.description}</p>
//                         <img src={product.image} alt={product.name} />
//                         <button onClick={() => handleUpdate(product._id)}>Update</button>
//                         <button onClick={() => handleDelete(product._id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ProductsPage;






// 'use client'; 
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Cookies from 'js-cookie';

// const ProductsPage = () => {
//     const [products, setProducts] = useState([]);
//     const router = useRouter();

//     useEffect(() => {
//         const token = Cookies.get('usertoken');
//         if (!token) {
//             // Redirect to login if there's no token
//             router.push('/login');
//             return;
//         }

//         const fetchProducts = async () => {
//             const res = await fetch('/api/products');
//             const data = await res.json();
//             setProducts(data);
//         };
        
//         fetchProducts();
//     }, [router]);

//     const handleDelete = async (id) => {
//         const confirmed = confirm("Are you sure you want to delete this product?");
//         if (confirmed) {
//             await fetch(`/api/products/${id}`, {
//                 method: 'DELETE',
//             });
//             setProducts(products.filter(product => product._id !== id));
//         }
//     };

//     const handleUpdate = async (id) => {
//         router.push(`/products/update/${id}`);
//     };

//     return (
//         <div>
//             <h1>Products</h1>
//             <ul>
//                 {products.map(product => (
//                     <li key={product._id}>
//                         <h2>{product.name}</h2>
//                         <p>${product.price}</p>
//                         <p>{product.description}</p>
//                         <img src={product.image} alt={product.name} />
//                         <button onClick={() => handleUpdate(product._id)}>Update</button>
//                         <button onClick={() => handleDelete(product._id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ProductsPage;








'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get('usertoken');
        if (!token) {
            router.push('/login');
            return;
        }

        const fetchProducts = async () => {
            const res = await fetch('/api/products');
            const data = await res.json();
            setProducts(data);
        };
        
        fetchProducts();
    }, [router]);

    const handleDelete = async (id) => {
        const confirmed = confirm("Are you sure you want to delete this product?");
        if (confirmed) {
            await fetch(`/api/products/${id}`, {
                method: 'DELETE',
            });
            setProducts(products.filter(product => product._id !== id));
        }
    };

    const handleUpdate = async (id) => {
        router.push(`/products/update/${id}`);
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                    <div key={product._id} className="border rounded-lg shadow-lg p-4 bg-white transition-transform transform hover:scale-105">
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
                        <h2 className="text-xl font-semibold">{product.name}</h2>
                        <p className="text-gray-600">${product.price}</p>
                        <p className="text-gray-500">{product.description}</p>
                        <div className="mt-4 flex justify-between">
                            <button 
                                onClick={() => handleUpdate(product._id)} 
                                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                            >
                                Update
                            </button>
                            <button 
                                onClick={() => handleDelete(product._id)} 
                                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
