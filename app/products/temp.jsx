import Link from "next/link";
import Image from "next/image";
import { products } from "../Data/products";
import Navbar from "../compoents/Home/Navbar";
import Footer from "../compoents/Home/Footer";

export default function ProductsPage() {
  return (
    <>
    <Navbar/>

     <div className="w-full h-[200px] bg-blue-950 flex justify-center items-end pb-6">
     <h1 className="text-6xl text-white text-center ">All Products</h1>
   </div>
   
    
    <div className="max-w-7xl mx-auto px-5 py-16">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={400}
              className="w-full h-[250px] object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-semibold">
                {product.name}
              </h2>

              <p className="text-gray-600 mt-2">
                {product.description}
              </p>

              <p className="text-lg font-bold mt-3">
                {product.price}
              </p>

              <Link
                href={`/products/${product.slug}`}
                className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg"
              >
                View Product
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}