// 'use client';
// import { useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';

// export default function SignupPage() {
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('/api/auth/signup', { name, email, password });
//       const { token } = response.data;

//       localStorage.setItem('token', token);

//       router.push('/');
//     } catch (error) {
//       setError('Signup failed. Please check your credentials.');
//     }
//   };

//   return (
//     <div className="max-w-md p-4 mx-auto mt-10 bg-white rounded-lg shadow-lg">
//       <h2 className="mb-4 text-2xl font-bold">Sign Up</h2>
//       {error && <p className="text-red-500">{error}</p>}
//       <form onSubmit={handleSignup}>
//       <div className="mb-4">
//           <label htmlFor="name" className="block text-sm font-medium">Name</label>
//           <input
//             id="name"
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-medium">Email</label>
//           <input
//             id="email"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="password" className="block text-sm font-medium">Password</label>
//           <input
//             id="password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>
//         <button type="submit" className="w-full py-2 text-white bg-blue-600 rounded">Sign Up</button>
//       </form>
//     </div>
//   );
// }





'use client';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/auth/signup', { name, email, password });
      const { token } = response.data;

      // Save token to cookies
      Cookies.set('usertoken', token);

      router.push('/');
    } catch (error) {
      setError('Signup failed. Please check your credentials.');
    }
  };

  return (
    <div className="max-w-md p-4 mx-auto mt-10 bg-white rounded-lg shadow-lg">
      <h2 className="mb-4 text-2xl font-bold">Sign Up</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSignup}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="w-full py-2 text-white bg-blue-600 rounded">Sign Up</button>
      </form>
    </div>
  );
}
