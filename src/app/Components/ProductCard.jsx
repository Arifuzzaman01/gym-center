import React from 'react';


const ProductCard = ({ product }) => {
  // Destructuring props for flexibility
  const { name, price, rating, image, bgColor } = product;

  return (
    <div className="group relative w-full max-w-[350px] bg-black rounded-[42px] p-4 transition-all hover:scale-[1.02]">
      
      {/* 1. Image Container with Custom Background */}
      <div 
        className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] flex items-center justify-center"
        style={{ backgroundColor: bgColor || '#9ADE7B' }}
      >
        <img
          src={image}
          alt={name}
          className="h-full w-full object-contain p-6 transition-transform group-hover:scale-110"
        />
      </div>

      {/* 2. Product Info Section */}
      <div className="mt-5 flex items-end justify-between px-2 pb-2">
        <div className="flex flex-col gap-1">
          <h3 className="text-[15px] font-normal text-gray-400">
            {name}
          </h3>
          
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-white">
              ₹{price}
            </span>
            
            {/* Star Rating */}
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className={`${
                    i < rating 
                    ? 'fill-[#58BC43] text-[#58BC43]' 
                    : 'fill-gray-700 text-gray-700'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 3. Add Button */}
        <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#58BC43] text-black shadow-lg shadow-[#58BC43]/20 transition-all hover:bg-[#4eaa3b] active:scale-90">
          <Plus size={24} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;