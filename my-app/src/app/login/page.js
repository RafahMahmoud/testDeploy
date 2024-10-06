// 'use client';

// import { useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';

// export default function LoginForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     try {
//       const res = await axios.post('/api/auth/login', { email, password });
//       const { token } = res.data;

//       // Save token to local storage or handle it as needed
//       localStorage.setItem('token', token);
//       alert('Login successful!');

//       router.push('/');

//       // Redirect or update UI as needed here
//     } catch (err) {
//       console.error(err);
//       setError(err.response?.data?.error || 'Something went wrong');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md p-6 mx-auto bg-white rounded-lg shadow-md">
//       <h2 className="mb-4 text-2xl font-bold text-center">Login</h2>
      
//       {error && <p className="text-center text-red-500">{error}</p>}

//       <div className="mb-4">
//         <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="email">Email</label>
//         <input
//           id="email"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           required
//           className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="password">Password</label>
//         <input
//           id="password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           required
//           className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />
//       </div>

//       <button
//         type="submit"
//         disabled={loading}
//         className={`w-full px-4 py-2 font-semibold text-white transition duration-200 ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} rounded-lg`}
//       >
//         {loading ? 'Logging in...' : 'Login'}
//       </button>
//     </form>
//   );
// }

'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await axios.post('/api/auth/login', { email, password });
      const { token } = res.data;

      // Save token to cookies
      Cookies.set('usertoken', token);

      alert('Login successful!');
      router.push('/');

    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md p-6 mx-auto bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-2xl font-bold text-center">Login</h2>
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full px-4 py-2 font-semibold text-white transition duration-200 ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} rounded-lg`}
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}
