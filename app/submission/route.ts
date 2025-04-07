import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function PUT(request: Request) {
  const payload = await request.json(); // Parse the JSON payload
  console.log(payload); // Log the payload
  return NextResponse.json({ success: "success" });
}

