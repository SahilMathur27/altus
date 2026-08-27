import Image from "next/image";
import { products } from "../../Data/products";
import { notFound } from "next/navigation";
import Navbar from "@/app/compoents/Home/Navbar";
import Footer from "@/app/compoents/Home/Footer";

export default async function ProductDetails({ params }) {
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
    <div className="max-w-6xl mx-auto px-5 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={700}
            height={600}
            className="w-full rounded-xl"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold">
            {product.name}
          </h1>

          <p className="text-2xl font-semibold mt-5">
            {product.price}
          </p>

          <p className="text-gray-600 mt-5 leading-7">
            {product.description}
          </p>

          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg">
            Inquiry Now
          </button>
        </div>

      </div>
    </div>
    <Footer/>
    </>
  );
}