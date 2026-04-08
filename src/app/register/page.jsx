"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    terms: "false", 
  });
  const [otp, setOtp] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? String(checked) : value,
    }));
  };

 
 const handleRegister = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    
    const bodyFormData = new FormData();
    bodyFormData.append("first_name", formData.first_name);
    bodyFormData.append("last_name", formData.last_name);
    bodyFormData.append("email", formData.email);
    bodyFormData.append("password", formData.password);
    bodyFormData.append("password_confirmation", formData.password_confirmation);
    bodyFormData.append("terms", formData.terms);

    const response = await axios.post(
      "https://apitest.thewarriors.team/api/register",
      bodyFormData,
      {
        headers: { "Content-Type": "multipart/form-data" }
      }
    );

   
    console.log("Registration Response:", response.data);

   
    if (response.data && (response.data.data.otp || response.status === 200)) {
      toast.success(`Success! Your OTP is: ${response.data.data.otp}`);
      setStep(2); 
    } else {
      toast.error("Registration successful but no OTP received.");
    }
  } catch (error) {
    toast.error("Full Error:", error.response?.data);
    
  
    const errorData = error.response?.data;
    if (errorData?.errors) {
      
      const firstError = Object.values(errorData.errors)[0][0];
      // toast.error(firstError);
    } else {
      toast.error(errorData?.message || "Registration failed. Try again.");
    }
  } finally {
    setLoading(false);
  }
};


  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    const bodyFormData = new FormData();
    bodyFormData.append("email", formData.email);
    bodyFormData.append("otp", otp);

    try {
      const response = await axios.post(
        "https://apitest.thewarriors.team/api/verify_otp",
        bodyFormData
      );
      
      if (response.status === 200) {
        toast.success("Account Verified Successfully!");
        router.push("/logIn"); // redirect to login page after successful OTP verification
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };
console.log(step)
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
     
      <div className="absolute top-0 right-0 w-full h-full bg-[#71ac16]/5 blur-[150px] -z-10"></div>
      
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

        {step === 1 ? (
          <>
            <h2 className="text-3xl font-black text-white text-center uppercase tracking-tighter mb-2">Join Us</h2>
            <p className="text-gray-400 text-center text-sm mb-8">Power your potential with MuscleForge</p>

            <form onSubmit={handleRegister} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input name="first_name" placeholder="First Name" required className="input-style" onChange={handleChange} />
                <input name="last_name" placeholder="Last Name" required className="input-style" onChange={handleChange} />
              </div>
              <input type="email" name="email" placeholder="Email" required className="input-style" onChange={handleChange} />
              <input type="password" name="password" placeholder="Password" required className="input-style" onChange={handleChange} />
              <input type="password" name="password_confirmation" placeholder="Confirm Password" required className="input-style" onChange={handleChange} />
              
              <div className="flex items-center gap-2 px-2">
                <input type="checkbox" name="terms" id="terms" className="accent-[#71ac16]" onChange={handleChange} />
                <label htmlFor="terms" className="text-gray-400 text-xs">Agree to terms & conditions</label>
              </div>

              <button type="submit" disabled={loading} className="btn-primary">
                {loading ? "Registering..." : "Register"}
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-black text-white text-center uppercase tracking-tighter mb-2">Verify OTP</h2>
            <p className="text-gray-400 text-center text-sm mb-8">Enter the code sent to {formData.email}</p>

            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <input 
                type="text" 
                placeholder="Enter 6-digit OTP" 
                required 
                maxLength={6} 
                className="input-style text-center tracking-[1em] text-xl font-bold" 
                onChange={(e) => setOtp(e.target.value)} 
              />
              <button type="submit" disabled={loading} className="btn-primary">
                {loading ? "Verifying..." : "Verify Now"}
              </button>
              <button type="button" onClick={() => setStep(1)} className="w-full text-gray-400 text-xs hover:text-white">
                Back to Register
              </button>
            </form>
          </>
        )}

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Already a member? <Link href="/login" className="text-[#71ac16] font-bold">Login</Link>
          </p>
        </div>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center gap-6 text-gray-400 border-t border-white/10 pt-6">
          <FaFacebookF className="hover:text-[#71ac16] cursor-pointer" />
          <FaInstagram className="hover:text-[#71ac16] cursor-pointer" />
          <FaXTwitter className="hover:text-[#71ac16] cursor-pointer" />
          <FaLinkedinIn className="hover:text-[#71ac16] cursor-pointer" />
        </div>
      </div>

      <style jsx>{`
        .input-style {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 16px;
          color: white;
          outline: none;
          transition: all 0.3s;
        }
        .input-style:focus {
          border-color: #71ac16;
          background: rgba(255, 255, 255, 0.1);
        }
        .btn-primary {
          width: 100%;
          background: #71ac16;
          color: white;
          padding: 16px;
          border-radius: 16px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          transition: all 0.3s;
          box-shadow: 0 10px 20px -10px rgba(113, 172, 22, 0.5);
        }
        .btn-primary:hover {
          background: #629613;
          transform: translateY(-2px);
        }
        .btn-primary:disabled {
          opacity: 0.5;
          transform: none;
        }
      `}</style>
    </div>
  );
}