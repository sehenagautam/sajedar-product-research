import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const before = url.searchParams.toString();

  const removableExact = new Set(['fbclid', 'gclid', 'gclsrc', 'dclid', 'msclkid', 'trk']);
  const removablePrefixes = ['utm_'];

  const keys = [...url.searchParams.keys()];
  for (const key of keys) {
    const shouldRemove =
      removableExact.has(key) || removablePrefixes.some((prefix) => key.startsWith(prefix));
    if (shouldRemove) {
      url.searchParams.delete(key);
    }
  }

  const after = url.searchParams.toString();
  if (before !== after) {
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api).*)'],
};
