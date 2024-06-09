import { NextResponse } from "next/server";
import { useCookies } from "@/app/useCookies";
import { Authentication } from "@/services/user";
import { jwtDecode } from "jwt-decode";

// import cookie from "cookie";

export default async function middleware(request: any) {
  const cookie = useCookies("", "get-cookie");
  if (cookie) {
    const token = JSON?.parse(cookie).value || "";
    const decodedToken = jwtDecode(token);
    if (decodedToken && decodedToken.exp) {
      const currentTime = Date.now() / 1000;
      if (decodedToken?.exp < currentTime) {
        return NextResponse.redirect(new URL("/", request.url));
      }
    }
  } else {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/products", "/products/:path*"],
};
