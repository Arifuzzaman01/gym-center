import React from "react";
import { HiPlus } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import ProductCard from "./ProductCard";

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
    <section className="bg-white py-12  ">
      {/* --- Section Header --- */}
      <div className=" mb-10">
        <h2 className="text-3xl font-bold text-[#333] mb-2">Our Products</h2>
        <p className="text-gray-500 text-lg">
          Fuel Your Workouts with Protein-Packed Nutrition
        </p>
      </div>

      {/* --- Products Grid --- */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
