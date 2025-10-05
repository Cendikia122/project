import BlogStyle1 from "@/components/blog/BlogStyle1";

async function getBlogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return res.json();
}

// Default export wajib React component
export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <div className="container mx-auto grid grid-cols-3 gap-6 py-10">
      {blogs.map((blog) => (
        <BlogStyle1 key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
