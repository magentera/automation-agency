import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET() {
  // Clear the authentication cookie
  cookies().set("authenticated", "", {
    expires: new Date(0),
  })

  // Redirect to the login page
  return NextResponse.redirect(new URL("/login", process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"))
}

