// import { connectDB } from "@/lib/mongodb";
// import Blog from "@/models/Blog";
// import { NextResponse } from "next/server";

// export async function GET(req, { params }) {
//   await connectDB();
//   const blog = await Blog.findById(params.id);
//   return NextResponse.json(blog);
// }

// export async function PUT(req, { params }) {
//   await connectDB();
//   const data = await req.json();
//   const updatedBlog = await Blog.findByIdAndUpdate(params.id, data, { new: true });
//   return NextResponse.json(updatedBlog);
// }

// export async function DELETE(req, { params }) {
//   await connectDB();
//   await Blog.findByIdAndDelete(params.id);
//   return NextResponse.json({ message: "Blog deleted" });
// }
