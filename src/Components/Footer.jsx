import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-5 pb-8 px-6 md:px-12 lg:px-20 font-sans text-[#333]">
      <div className="border-t-2 border-gray-200 pt-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: About */}
          <div className="flex flex-col">
            <h4 className="text-xl font-bold mb-6">About</h4>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-xs">
              At MuscleForge, we believe in the power of dedication and hard work. 
              Our mission is to provide you with the tools, resources, and community 
              you need to build the body of your dreams.
            </p>
            
            {/* Social Media Line Section */}
            <div className="pt-4 border-t border-gray-400 w-full sm:w-48">
              <div className="flex items-center gap-4">
                <span className="font-bold text-sm whitespace-nowrap">Social Media:</span>
                <div className="flex gap-3">
                  <a href="#" className="hover:text-blue-600 transition-colors"><FaFacebookF size={18} /></a>
                  <a href="#" className="hover:text-blue-700 transition-colors"><FaLinkedinIn size={18} /></a>
                  <a href="#" className="hover:text-blue-400 transition-colors"><FaTwitter size={18} /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-black transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Our gym location</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Privacy policy</a></li>
            </ul>
          </div>

          {/* Column 3: Our Service */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Service</h4>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-black transition-colors">Indoor gym</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Outdoor gym</a></li>
              <li><a href="#" className="hover:text-black transition-colors">On ground gym</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Yoga class</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm text-gray-800">
              <li><span className="font-bold">Mail:</span> info@example.com</li>
              <li><span className="font-bold">Call:</span> +91 9876543210</li>
              <li><span className="font-bold">Location:</span> New York, 235 Lane, 10001</li>
              <li><span className="font-bold">Time:</span> Workout Hours: 5AM - 8PM</li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Section */}
        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm tracking-wide">
            websitename.com © {currentYear} all right reserve
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;