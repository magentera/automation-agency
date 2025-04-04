"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

// In a real application, you would want to store this securely
// and potentially use environment variables
const DEVELOPMENT_PASSWORD = "your-secure-password"

export async function authenticate(formData: FormData) {
  const password = formData.get("password") as string

  // Validate the password
  const isValid = password === DEVELOPMENT_PASSWORD

  if (isValid) {
    // Set a cookie to indicate the user is authenticated
    cookies().set("authenticated", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24,
      path: "/",
    })

    // Redirect to the home page
    redirect("/")
  }

  // Return validation result for client-side feedback
  return { success: isValid }
}

