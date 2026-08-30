import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { getAllSites, getSitesByCategoryId, createSite, updateSite, deleteSite } from "@/lib/db/queries";

export async function GET(request: Request) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get("categoryId");

    if (categoryId) {
      const sitesList = await getSitesByCategoryId(Number(categoryId));
      return NextResponse.json(sitesList);
    }

    const allSites = await getAllSites();
    return NextResponse.json(allSites);
  } catch (error) {
    console.error("GET sites error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const data = await request.json();
    const site = await createSite(data);
    return NextResponse.json(site);
  } catch (error) {
    console.error("POST site error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const data = await request.json();
    const { id, ...updateData } = data;

    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    const site = await updateSite(Number(id), updateData);
    return NextResponse.json(site);
  } catch (error) {
    console.error("PUT site error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    await deleteSite(Number(id));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE site error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
