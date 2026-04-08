import React from "react";

const Subscribe = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Decorative background elements (optional) */}
      <div className="absolute top-10 right-10 opacity-10 hidden lg:block">
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="bg-black rounded-3xl py-14 px-8 md:px-16 text-center flex flex-col items-center shadow-sm">
          <span className="text-white text-lg font-medium mb-4">
            Join our community
          </span>

          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
            Subscribe to our{" "}
            <span className="relative inline-block">
              newsletter
              {/* Orange curved underline SVG */}
              <svg
                className="absolute -bottom-4 -rotate-3 left-0 w-full"
                viewBox="0 0 200 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 15C40 5 160 5 198 15"
                  stroke="#FF5722"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="text-gray-400 text-sm md:text-base max-w-3xl leading-relaxed mb-12">
            Join Our Community Of Fitness Enthusiasts And Athletes! By
            Subscribing To Our Newsletter,
            {"You'll"} Receive Expert Training Tips, Nutrition Guides, Exclusive
            Discounts, And The Latest News On Upcoming Events And Products.
          </p>

          {/* Pill-shaped Input Container */}
          <form className="w-full max-w-2xl relative">
            <div className="flex items-center bg-black border border-white/30 rounded-full p-2 pl-8 focus-within:border-white transition-colors">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-transparent border-none outline-none text-white w-full py-3 placeholder:text-gray-500"
                required
              />
              <button
                type="submit"
                className="bg-white text-black font-bold px-10 py-3 rounded-full hover:bg-gray-200 transition-all active:scale-95 whitespace-nowrap"
              >
                SUBSCRIBE
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
