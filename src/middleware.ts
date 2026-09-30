import { NextResponse, type NextRequest } from "next/server";

/**
 * English is served from the site root, Arabic from /ar. Both render from app/[lang].
 *  /about      -> rewritten internally to /en/about
 *  /en/about   -> redirected to /about (one canonical URL)
 *  /ar/about   -> passes through
 */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === "/ar" || pathname.startsWith("/ar/")) return NextResponse.next();
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = req.nextUrl.clone();
    url.pathname = pathname.replace(/^\/en/, "") || "/";
    return NextResponse.redirect(url, 308);
  }
  const url = req.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = { matcher: ["/((?!api|_next|.*[.]).*)"] };
