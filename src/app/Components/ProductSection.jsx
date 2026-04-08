import React from "react";
import { HiPlus } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";

const ProductSection = () => {
  // Sample data based on your image
  const products = [
    {
      id: 1,
      name: "Mint flavor chocolate",
      price: "399.00",
      rating: 4,
      bgColor: "bg-[#43a047]",
      image: "/p1.PNG",
    },
    {
      id: 2,
      name: "Mint flavor chocolate",
      price: "399.00",
      rating: 5,
      bgColor: "bg-[#98ee99]",
      image: "/p2.PNG",
    },
    {
      id: 3,
      name: "Mint flavor chocolate",
      price: "399.00",
      rating: 4,
      bgColor: "bg-[#ffccbc]",
      image: "/p3.PNG",
    },
    {
      id: 4,
      name: "Mint flavor chocolate",
      price: "399.00",
      rating: 5,
      bgColor: "bg-[#ffd54f]",
      image: "/p4.PNG",
    },
    {
      id: 5,
      name: "Mint flavor chocolate",
      price: "399.00",
      rating: 4,
      bgColor: "bg-[#a5d6a7]",
      image: "/p5.PNG",
    },
    {
      id: 6,
      name: "Mint flavor chocolate",
      price: "399.00",
      rating: 5,
      bgColor: "bg-[#fff9c4]",
      image: "/p6.PNG",
    },
  ];

  return (
    <section className="bg-white py-12 px-6 md:px-12 ">
      {/* --- Section Header --- */}
      <div className="max-w-7xl mx-auto mb-10">
        <h2 className="text-3xl font-bold text-[#333] mb-2">Our Products</h2>
        <p className="text-gray-500 text-lg">
          Fuel Your Workouts with Protein-Packed Nutrition
        </p>
      </div>

      {/* --- Products Grid --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-black rounded-2xl p-4 flex flex-col transition-transform duration-300 hover:scale-[1.02] shadow-2xl"
          >
            {/* Image Container */}
            <div
              className={`relative w-full h-fit  rounded-2xl  flex items-center justify-center  `}
            >
              
               <Image width={350} height={400} src={product.image} alt={product.name} className="rounded-2xl cover" />
              
            </div>

            {/* Content Details */}
            <div className="mt-6 mb-2 px-3 flex items-end justify-between">
              <div className="flex flex-col gap-1">
                <h3 className="text-gray-400 text-sm font-light">
                  {product.name}
                </h3>

                <div className="flex items-center gap-3">
                  <span className="text-white text-xl font-bold">
                    ₹{product.price}
                  </span>

                  {/* Star Ratings */}
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <AiFillStar
                        key={i}
                        size={14}
                        className={
                          i < product.rating
                            ? "text-[#4caf50]"
                            : "text-gray-700"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Add Button */}
              <button
                className="bg-[#4caf50] hover:bg-[#43a047] text-white p-3 rounded-xl transition-colors duration-200 active:scale-90"
                aria-label="Add to cart"
              >
                <HiPlus size={24} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
