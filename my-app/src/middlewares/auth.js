// import { NextResponse } from 'next/server';
// import jwt from 'jsonwebtoken';


// export const authenticate = (handler) => {
//   return async (req) => {
//     const token = req.headers.get('authorization')?.split(' ')[1];

//     if (!token) {
//       return NextResponse.json({ error: 'No token provided' }, { status: 401 });
//     }

//     try {
//       const decoded = jwt.verify(token, '123'); 
//       req.user = decoded.user; 

//       return await handler(req);
//     } catch (error) {
//       return NextResponse.json({ error: 'Token is not valid' }, { status: 401 });
//     }
//   };
// };



import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';

export const authenticate = (handler) => {
  return async (req) => {
    const token = Cookies.get('usertoken');

    if (!token) {
      return NextResponse.json({ error: 'No token provided' }, { status: 401 });
    }

    try {
      const decoded = jwt.verify(token, '123'); 
      req.user = decoded.user; 

      return await handler(req);
    } catch (error) {
      return NextResponse.json({ error: 'Token is not valid' }, { status: 401 });
    }
  };
};
