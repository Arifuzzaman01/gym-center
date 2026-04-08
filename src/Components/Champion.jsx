import Image from 'next/image';
import React from 'react';
import { IoPlaySharp } from 'react-icons/io5';

const Champion = () => {
  return (
    <section className="bg-white py-16  font-sans">
      <div className="max-w-7xl mx-auto ">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Train Like a Champion</h2>
          <p className="text-gray-500 mt-1">Unleash Your Power with Expert Boxing Training</p>
        </div>

        {/* Main Black Container */}
        <div className="bg-black rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          
          {/* Left: Image Container */}
          <div className="w-full lg:w-1/3 aspect-[4/5] overflow-hidden rounded-2xl">
            <Image 
              src="/champion.PNG" 
              alt="Professional Trainer"
              width={500}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Content Section */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 py-4">
            
            {/* Training Focus Areas */}
            <div className="space-y-8 lg:space-y-12">
              <h3 className="text-xl font-bold text-white mb-6">Training Focus Areas:</h3>
              
              <div className="space-y-2">
                <h4 className="text-gray-200 font-semibold">Strength & Conditioning</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Develop knockout power with a mix of strength training and explosive movements.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-gray-200 font-semibold">Speed & Agility</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Sharpen your reflexes and footwork with dynamic drills that improve speed and coordination.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-gray-200 font-semibold">Endurance Training</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Boost your stamina with high-intensity circuits that keep you fighting strong till the final round.
                </p>
              </div>
            </div>

            {/* Why Train With Us */}
            <div className="flex flex-col justify-between">
              <div className="space-y-8">
                <h3 className="text-xl font-bold text-white mb-6">Why Train With Us:</h3>

                <div className="space-y-2">
                  <h4 className="text-gray-200 font-semibold">Expert Coaches</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Our experienced boxing trainers have worked with amateur and professional athletes, 
                    ensuring you get the best training tailored to your goals.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-gray-200 font-semibold">Flexible Programs</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Whether {"you're"} a beginner or seasoned boxer, we offer flexible programs that fit your schedule and needs.
                  </p>
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="mt-12 flex items-center gap-6">
                <button className="bg-[#58BC43] hover:bg-[#4eaa3b] text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all active:scale-95 shadow-lg shadow-[#58BC43]/20">
                  Punch Now
                </button>
                
                {/* Play Button */}
                <button className="group flex items-center justify-center h-14 w-14 rounded-full border border-dashed border-[#58BC43] p-1 transition-transform hover:scale-110">
                  <div className="bg-black border border-[#58BC43] h-full w-full rounded-full flex items-center justify-center">
                    <IoPlaySharp className="text-[#58BC43] ml-1 text-xl" />
                  </div>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Champion;