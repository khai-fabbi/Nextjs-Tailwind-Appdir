/* eslint-disable unused-imports/no-unused-vars */
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { url, nextUrl, cookies } = request
  const accessToken = cookies.get('access_token')?.value
  const pathname = nextUrl.pathname

  // if (!accessToken) {
  //   const searchParams = new URLSearchParams(nextUrl.searchParams)
  //   searchParams.set('next', pathname)

  //   const response = NextResponse.redirect(
  //     new URL(`/sign-in?${searchParams}`, {})
  //   )
  //   cookies.delete('access_token')
  //   return response
  // }
  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
