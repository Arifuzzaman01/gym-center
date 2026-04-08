"use client";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoSearchOutline, IoLocationSharp } from "react-icons/io5";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

// Import your custom icons here (e.g., from react-icons or SVG)
import {
  MdDirectionsRun,
  MdSelfImprovement,
  MdOutlineSportsGymnastics,
} from "react-icons/md";

export default function GymBanner() {
  return (
    <div className="relative w-full min-h-[750px] bg-white font-sans overflow-hidden">
      {/* 1. TOP NAVIGATION BAR */}
      <nav className="absolute top-4 left-0 w-full z-50 px-6 flex items-center justify-between ">
        {/* Logo Icon */}
        <div className="bg-[#71ac16] p-5 rounded-full flex items-center justify-center shadow-lg ">
          <div className="grid grid-cols-2 gap-1">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-white rounded-sm"></div>
            ))}
          </div>
        </div>

        {/* Center Nav Pill */}
        <div className="w-2/3 flex justify-start">
          <div className="flex  items-center bg-black/90 border-2 border-white rounded-full px-8 py-3 text-white gap-10">
            <a href="#" className="text-sm hover:text-[#71ac16]">
              Home
            </a>
            <a href="#" className="text-sm hover:text-[#71ac16]">
              Our gym location
            </a>
            <div className="h-4 w-[1px] bg-gray-600"></div>
            <div className="relative flex items-center bg-white/10 rounded-full px-4 py-1">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent border-none outline-none text-xs w-24 placeholder:text-gray-400"
              />
              <IoSearchOutline className="text-gray-400 ml-2" />
            </div>
          </div>
        </div>

        {/* Register Button */}
        <button className="bg-[#71ac16] text-white px-14 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-[#629613] transition-all shadow-lg mr-10">
          Register
        </button>
      </nav>

      {/* 2. MAIN BACKGROUND CONTAINER WITH MASK */}
      <div
        className="absolute inset-0 w-full h-full flex items-center justify-center text-white bg-black"
        style={{
          backgroundImage: "url('/gym1.PNG')", // Using your file name
          backgroundSize: "cover",
          backgroundPosition: "center",

          /* 🔥 YOUR MASK CONTROL */
          WebkitMaskImage: "url('/Subtract.svg')",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "cover",
          WebkitMaskPosition: "top",

          maskImage: "url('/Subtract.svg')",
          maskRepeat: "no-repeat",
          maskSize: "cover",
          maskPosition: "top",
        }}
      >
        {/* Dark Overlay to make text pop */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content Layer */}
        <div className="relative z-10 w-full h-full flex flex-col justify-center px-12 lg:px-24">
          {/* Social Icons Top Left */}
          <div className="absolute top-36 left-12 flex items-center gap-4 text-white/80">
            <span className="text-xs font-medium">Follow On:</span>
            <FaFacebookF className="hover:text-[#71ac16] cursor-pointer" />
            <FaInstagram className="hover:text-[#71ac16] cursor-pointer" />
            <FaXTwitter className="hover:text-[#71ac16] cursor-pointer" />
            <FaLinkedinIn className="hover:text-[#71ac16] cursor-pointer" />
          </div>

          {/* Large Hero Text */}
          <div className="mt-20 w-full h-full bg-[url('/bannerImg.png')] bg-cover bg-left-top flex items-end justify-end">
            <div>
              <h1 className="text-[80px] md:text-[120px] font-black leading-[0.9] uppercase tracking-tighter  text-white/90 opacity-70 ">
                POWER YOUR
              </h1>
              <h1 className="text-[80px] md:text-[120px] font-black leading-[0.8] uppercase tracking-tighter text-white/70  ">
                PONTETIALE
              </h1>
              <div className="flex   gap-4 my-8   ">
              <button className="flex items-center gap-4 border rounded-xl px-8 py-4  hover:text-black transition-all group hover:bg-white ">
                <span className="font-bold uppercase tracking-widest text-sm">
                  Shop Now
                </span>
                <HiOutlineArrowNarrowRight
                  size={24}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/90 p-4 rounded-xl hover:bg-white hover:text-black transition-all">
                <IoLocationSharp size={24} />
              </button>
            </div>
            </div>
            
          </div>

         
        </div>
      </div>

      {/* 3. LEFT SPECIALTY SIDEBAR */}
      <div className="absolute bottom-10 left-0 z-50  bg-[#71ac16] rounded-[40px] p-6 shadow-2xl specialty pt-28 px-10" >
 
        <div className="">
          <h2 className="text-white text-xl font-bold uppercase mb-6">
          Our Specialty
        </h2>

        <div className="flex flex-col gap-3">
          <SpecialtyItem icon={<MdDirectionsRun />} label="Ground running" />
          <SpecialtyItem icon={<MdSelfImprovement />} label="Yoga Assistance" />
          <SpecialtyItem
            icon={<MdOutlineSportsGymnastics />}
            label="Personal Trainer"
          />
        </div>
        </div>
      </div>

      {/* Inline Styles for the "Outlined" Text Effect */}
      <style jsx>{`
        .outline-text {
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </div>
  );
}

// Helper Component for Sidebar Items
function SpecialtyItem({ icon, label }) {
  return (
    <div className="flex items-center gap-4 border border-white/30 rounded-2xl p-3 hover:bg-white/10 cursor-pointer transition-colors">
      <div className="text-white text-2xl border border-white/50 p-2 rounded-lg">
        {icon}
      </div>
      <span className="text-white text-xs font-semibold">{label}</span>
    </div>
  );
}
