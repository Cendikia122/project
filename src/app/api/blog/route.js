import { connectDB } from "../../lib/mongodb";
import Blog from "../../models/Blog";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const blogs = await Blog.find({});
  return NextResponse.json(blogs);
}

export async function POST(req) {
  await connectDB();
  const data = await req.json();
  const blog = await Blog.create(data);
  return NextResponse.json(blog, { status: 201 });
}
