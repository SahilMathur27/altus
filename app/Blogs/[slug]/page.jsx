import blogs from "@/app/Data/Blogsdata";

export default async function Page({ params }) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Blog Not Found
        </h1>
      </div>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      {/* Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-[450px] object-cover rounded-2xl"
      />

      {/* Category */}
      <p className="text-blue-600 font-medium mt-8">
        {blog.category}
      </p>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mt-3">
        {blog.title}
      </h1>

      {/* Meta */}
      <div className="flex gap-4 text-gray-500 mt-4">
        <span>By {blog.author}</span>
        <span>{blog.date}</span>
      </div>

      {/* Content */}
      <div className="mt-8 text-lg text-gray-700 leading-8">
        {blog.content}
      </div>

    </main>
  );
}