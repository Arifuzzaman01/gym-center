import Image from 'next/image';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { HiPlus } from 'react-icons/hi';


const ProductCard = ({ product }) => {
  // Destructuring props for flexibility
  const { name, price, rating, image, bgColor } = product;

  return (
    <div
            key={product.id}
            className="bg-black rounded-4xl p-4 flex flex-col transition-transform duration-300 hover:scale-[1.02] shadow-2xl"
          >
            {/* Image Container */}
            <div
              className={`relative w-full h-fit  rounded-2xl  flex items-center justify-center  `}
            >
              <Image
                width={350}
                height={400}
                src={product.image}
                alt={product.name}
                className="rounded-2xl cover"
              />
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
  );
};

export default ProductCard;