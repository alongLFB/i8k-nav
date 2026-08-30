import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./src/lib/i18n/routing";

const AUTH_COOKIE_NAME = "i8k_nav_session";

const intlMiddleware = createMiddleware(routing);

const ADMIN_PATH_REGEX = /^\/(?:zh|en)\/admin(?!\/login)/;

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check auth for admin routes (excluding login page)
  if (ADMIN_PATH_REGEX.test(pathname)) {
    const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;
    if (!token) {
      const locale = pathname.startsWith("/en") ? "en" : "zh";
      return NextResponse.redirect(
        new URL(`/${locale}/admin/login`, request.url)
      );
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
