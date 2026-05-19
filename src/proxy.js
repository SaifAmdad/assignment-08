import { NextResponse } from "next/server";
import { useSession } from "./lib/auth-client";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
  // console.log(request, "here");
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  // matcher: "/prof",
  matcher: ["/tile/:path*", "/profile"],
};
