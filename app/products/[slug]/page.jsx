import { notFound } from "next/navigation";
import products from "../../Data/products";
import Navbar from "@/app/compoents/Home/Navbar";
import Footer from "@/app/compoents/Home/Footer";

export default async function ProductDetailPage({ params }) {

  const { slug } = await params;

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  return (
    <>
    <Navbar/>
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-5">

          <p className="text-sm uppercase tracking-[3px] text-blue-400">
            {product.category}
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold md:text-6xl">
            {product.title}
          </h1>   

        </div>
      </section>

      {/* PRODUCT DETAILS */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-3xl bg-gray-100">
            <img
              src={product.image}
              alt={product.title}
              className="h-[500px] w-full object-cover"
            />
          </div>

          {/* CONTENT */}
          <div>

            <p className="text-3xl font-bold text-blue-600">
              {product.price}
            </p>

            {product.oldPrice && (
              <p className="mt-1 text-lg text-gray-400 line-through">
                {product.oldPrice}
              </p>
            )}

            <h2 className="mt-8 text-3xl font-bold text-gray-900">
              Product Description
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              {product.description}
            </p>

            {/* FEATURES */}
            <h3 className="mt-8 text-2xl font-bold text-gray-900">
              Key Features
            </h3>

            <div className="mt-5 space-y-3">
              {product.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    ✓
                  </span>

                  <span className="text-gray-600">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <button className="mt-8 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
              Get a Quote
            </button>

          </div>

        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-5">

          <h2 className="text-3xl font-bold text-gray-900">
            Specifications
          </h2>

          <div className="mt-8 overflow-hidden rounded-2xl border">

            {product.specifications.map((spec, index) => (
              <div
                key={index}
                className="grid grid-cols-1 border-b last:border-0 md:grid-cols-2"
              >

                <div className="bg-gray-100 p-5 font-semibold text-gray-900">
                  {spec.label}
                </div>

                <div className="p-5 text-gray-600">
                  {spec.value}
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-5">

          <h2 className="text-4xl font-bold">
            Interested in This Product?
          </h2>

          <p className="mt-5 text-lg text-blue-100">
            Contact us today for pricing, product details and
            customized solutions.
          </p>

          <button className="mt-8 rounded-full bg-white px-8 py-4 font-semibold text-blue-600">
            Send Inquiry
          </button>

        </div>
      </section>

    </main>
    <Footer/>
    </>
  );
}