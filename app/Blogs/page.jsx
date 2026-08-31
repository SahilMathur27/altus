import Link from "next/link";
import blogs from "@/Data/Blogsdata";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export default function Blogs() {
  return (
    <>
    <Navbar/>
    <main className="max-w-7xl mx-auto px-6 py-16">

      <div className="grid md:grid-cols-3 gap-8">

        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border rounded-xl overflow-hidden"
          >

            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">

              <h2 className="text-xl font-bold">
                {blog.title}
              </h2>

              <p className="text-gray-600 mt-3">
                {blog.excerpt}
              </p>

              <Link
                href={`/Blogs/${blog.slug}`}
                className="inline-block mt-5 text-blue-600 font-semibold"
              >
                Read More →
              </Link>

            </div>
          </div>
        ))}

      </div>

    </main>
    <Footer/>
    </>
  );
}