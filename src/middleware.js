import { NextResponse } from 'next/server';

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const searchParams = new URLSearchParams(request.nextUrl.searchParams);
  
  const blockedPaths = {
    '/register': process.env.NEXT_PUBLIC_FEATURE_REGISTRATION !== 'true',
    '/sponsors': process.env.NEXT_PUBLIC_FEATURE_SPONSORS !== 'true'
  };

  for (const [route, isBlocked] of Object.entries(blockedPaths)) {
    if (path.startsWith(route) && isBlocked) {
      searchParams.set('maintenance', encodeURIComponent(`Acceso temporalmente deshabilitado: ${route}`));
      return NextResponse.redirect(new URL(`/?${searchParams}`, request.url));
    }
  }

  return NextResponse.next();
}