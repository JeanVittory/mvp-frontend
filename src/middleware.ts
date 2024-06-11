import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // const ACCESS_TOKEN = request.cookies.get('ACCESS_TOKEM');
  // const REFRESH_TOKEN = request.cookies.get('REFRESH_TOKEM');
  // console.log(ACCESS_TOKEN, REFRESH_TOKEN)
  // if (!ACCESS_TOKEN && !REFRESH_TOKEN)
  //   return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
  matcher: '/dashboard/:path*',
};
