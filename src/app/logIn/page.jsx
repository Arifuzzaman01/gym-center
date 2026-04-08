"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMailOutline, IoLockClosedOutline } from "react-icons/io5";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember_me: "true", // API requirements অনুযায়ী
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const bodyFormData = new FormData();
    bodyFormData.append("email", formData.email);
    bodyFormData.append("password", formData.password);
    bodyFormData.append("remember_me", formData.remember_me);

    try {
      // API call based on collection
      const response = await axios.post(
        "https://apitest.thewarriors.team/api/login",
        bodyFormData
      );

      if (response.data.token) {
        // টোকেন সেভ করা (পরবর্তী এপিআই কলের জন্য)
        localStorage.setItem("token", response.data.token);
        
        toast.success("Login Successful! Welcome Back.");
        
        // সফল লগইন শেষে ল্যান্ডিং পেজে রিডাইরেক্ট
        setTimeout(() => {
          router.push("/");
        }, 1500);
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Invalid credentials. Please try again.";
      toast.error(errorMsg);
      console.error("Login Error:", error.response?.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#71ac16]/5 blur-[150px] -z-10"></div>
      
      <div className="w-full max-w-lg bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#71ac16] p-4 rounded-full shadow-lg shadow-[#71ac16]/30">
            <div className="grid grid-cols-2 gap-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-white rounded-sm"></div>
              ))}
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-black text-white text-center uppercase tracking-tighter mb-2">
          Welcome Back
        </h2>
        <p className="text-gray-400 text-center text-sm mb-8">
          Login to access your personalized dashboard
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email Input */}
          <div className="relative">
            <IoMailOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-white outline-none focus:border-[#71ac16] transition-all"
              onChange={handleChange}
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <IoLockClosedOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-white outline-none focus:border-[#71ac16] transition-all"
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-between items-center px-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" className="accent-[#71ac16]" defaultChecked />
              <label htmlFor="remember" className="text-gray-400 text-xs cursor-pointer">Remember Me</label>
            </div>
            <Link href="/forgot-password" size="sm" className="text-[#71ac16] text-xs font-bold hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#71ac16] text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-[#629613] transition-all shadow-lg shadow-[#71ac16]/20 disabled:opacity-50"
          >
            {loading ? "Authenticating..." : "Login"}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
           {" Don't"} have an account?{" "}
            <Link href="/register" className="text-[#71ac16] font-bold hover:underline">
              Register Now
            </Link>
          </p>
        </div>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center gap-6 text-gray-400 border-t border-white/10 pt-6">
          <FaFacebookF className="hover:text-[#71ac16] cursor-pointer transition-colors" />
          <FaInstagram className="hover:text-[#71ac16] cursor-pointer transition-colors" />
          <FaXTwitter className="hover:text-[#71ac16] cursor-pointer transition-colors" />
          <FaLinkedinIn className="hover:text-[#71ac16] cursor-pointer transition-colors" />
        </div>
      </div>
    </div>
  );
}