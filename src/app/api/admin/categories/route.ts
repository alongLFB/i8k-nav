import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { getAllCategories, createCategory, updateCategory, deleteCategory } from "@/lib/db/queries";

export async function GET() {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const categoriesList = await getAllCategories();
    return NextResponse.json(categoriesList);
  } catch (error) {
    console.error("GET categories error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const data = await request.json();
    const category = await createCategory(data);
    return NextResponse.json(category);
  } catch (error) {
    console.error("POST category error:", error);
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

    const category = await updateCategory(Number(id), updateData);
    return NextResponse.json(category);
  } catch (error) {
    console.error("PUT category error:", error);
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

    await deleteCategory(Number(id));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE category error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
