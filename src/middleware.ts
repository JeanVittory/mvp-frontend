import { REACT_LOADABLE_MANIFEST } from 'next/dist/shared/lib/constants';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const ACCESS_TOKEN = request.cookies.get('ACCESS_TOKEM');
  const REFRESH_TOKEN = request.cookies.get('REFRESH_TOKEM');

  if (!ACCESS_TOKEN && !REFRESH_TOKEN)
    return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
  matcher: '/dashboard/:path*',
};
