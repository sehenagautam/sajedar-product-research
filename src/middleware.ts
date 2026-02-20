import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Removed the redirection logic that was causing an ERR_TOO_MANY_REDIRECTS loop 
  // because Vercel was redirecting sajedar.com -> www.sajedar.com, 
  // while this middleware was redirecting www.sajedar.com -> sajedar.com.

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
