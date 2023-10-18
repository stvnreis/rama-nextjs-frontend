import { NextResponse } from 'next/server';

// const allowedOrigins =
//   process.env.NODE_ENV === 'production'
//     ? ['https://ramabusiness.com.br', 'https://www.ramabusiness.com.br']
//     : [
//         'https://rama-nextjs-frontend-git-develop-stvnreis.vercel.app/',
//         // 'http://localhost:3000',
//       ];

const allowedOrigins = [''];

export function middleware(req: Request) {
  const origin = req.headers.get('origin');

  if (origin && !allowedOrigins.includes(origin))
    return new NextResponse(null, {
      status: 400,
      statusText: 'Bad Request',
      headers: {
        'Content-Type': 'text/plain',
      },
    });

  console.log('Middleware!');

  console.log(req.method);
  console.log(req.url);

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};