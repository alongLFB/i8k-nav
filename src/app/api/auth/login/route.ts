import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { loginRateLimiter } from "@/lib/rateLimit";
import { login } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    // Get IP
    const headersList = await headers();
    const ip = headersList.get("x-forwarded-for") || headersList.get("x-real-ip") || "127.0.0.1";

    // Check rate limit
    const rateCheck = loginRateLimiter.check(ip);
    if (!rateCheck.success) {
      return NextResponse.json(
        { error: "Too many failed attempts, please try again later", remaining: 0 },
        { status: 429 }
      );
    }

    const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

    if (password !== adminPassword) {
      // Artificial delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      return NextResponse.json(
        { error: "Invalid password", remaining: rateCheck.remaining - 1 },
        { status: 401 }
      );
    }

    // Success - use auth helper
    await login();

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
