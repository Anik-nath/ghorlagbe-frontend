import React from "react";
import { Link } from "react-router-dom";
import {
  House,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Youtube,
  Instagram,
} from "lucide-react";
import logo from "../../public/assets/logo-main.png";
const Footer = () => {
  return (
    <footer className="bg-[#04331d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 ">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            {/* Logo */}
            <div className="flex flex-1 mb-6">
              <Link to="/">
                <img
                  src={logo}
                  alt="ঘর লাগবে লোগো"
                  className="w-full md:h-14 h-12 object-contain"
                  loading="lazy"
                />
              </Link>
            </div>
            <p className="text-white mb-4 max-w-md text-lg font-medium">
              "ঘর লাগবে" ভাড়া নেওয়া সংক্রান্ত একটি আধুনিক ওয়েবসাইট, যা আপনার
              পছন্দের ঘর/বিট/ফ্ল্যাট সংবেদ খোঁজাতে সাহায্য করে।
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="font-bold text-xl mb-4">আমাদের সম্পর্কে</h3>
            <ul
              className="space-y-2  text-white text-lg"
            >
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  ঘর লাগবে সম্পর্কে
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  যোগাযোগ
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  শর্তাবলী এবং গোপনীয়তা
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  গোপনীয়তা নীতি
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3
              className="font-bold text-white text-xl mb-4"
            >
              যোগাযোগ | সাহায্য দরকার?
            </h3>
            <div className="space-y-1 text-white font-medium text-lg">
              <h1>যোগাযোগ করুন</h1>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+88 01815 123456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@ghorlagbe.com</span>
              </div>
              <div className="text-lg">
                <p>Mon to Fri: 9am – 8.30pm</p>
                <p>Weekends: 10am – 7.30pm</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6 flex items-center">
              <p className="text-lg">সোশ্যাল নেটওয়ার্কে আমরা:</p>
              <div className="flex space-x-2">
                <Facebook className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
                <div className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer transition-colors">
                  𝕏
                </div>
                <Youtube className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-100 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl text-white font-bold mb-4 md:mb-0">
            <span>GhorLagbe apps (free)</span>
            <span className="mx-2">📱 iOS app</span>
            <span>🤖 Android app</span>
          </div>
          <div className="text-lg text-gray-100">
            © 2022-2024 GhorLagbe Ltd.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
