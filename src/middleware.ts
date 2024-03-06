import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import createError from 'http-errors';

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
  try {
    console.log(`${req.method.toUpperCase()}::${req.nextUrl.pathname}`);
    const token = req.headers.get('Authorization')?.split(' ')?.[1];

    if (token?.toLowerCase() === 'undefined' || !token?.length) {
      throw createError.Unauthorized();
    }

    return NextResponse.next();
  } catch (err: any) {
    console.log("Error :: ",{
      statusCode: err.statusCode,
      message: err.message
    });
    return NextResponse.json({
      statusCode: err.statusCode,
      message: err.message
    });
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/api/:path*']
};
