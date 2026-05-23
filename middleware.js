import { NextResponse } from 'next/server';

export function middleware(request) {
  const referer = request.headers.get('referer') || '';
  const competitor = 'https://www.nexoraa.works'; // ← competitor domain

  if (referer.includes(competitor)) {
    return NextResponse.redirect('https://expecto.online'); // ← aapki agency
  }

  return NextResponse.next();
}

export const config = { matcher: '/:path*' };
