import React from "react";
import { Link } from "react-router-dom";
import logo from "/assets/logo-main.png";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import {
  FaAndroid,
  FaApple,
  FaEnvelope,
  FaPhone,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#04331d] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 pb-8">
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
            <p className="text-white mb-4 max-w-sm text-md font-normal">
              "ঘর লাগবে" ভাড়া নেওয়া সংক্রান্ত একটি আধুনিক ওয়েবসাইট, যা আপনার
              পছন্দের ঘর/বিট/ফ্ল্যাট সংবেদ খোঁজাতে সাহায্য করে।
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">আমাদের সম্পর্কে</h3>
            <ul className="space-y-2 text-white text-md font-normal ">
              <li>
                <Link
                  to="/about"
                  className="hover:text-black transition-colors"
                >
                  ঘর লাগবে সম্পর্কে
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-black  transition-colors"
                >
                  যোগাযোগ
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-condition"
                  className="hover:text-black  transition-colors"
                >
                  শর্তাবলী এবং গোপনীয়তা
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-black  transition-colors"
                >
                  গোপনীয়তা নীতি
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-span-1 md:col-span-2 flex md:flex-col md:items-end">
            <div>
              <h3 className="font-bold text-white text-lg mb-4 ">
                যোগাযোগ | সাহায্য দরকার?
              </h3>
              <div className="space-y-1 text-white font-normal text-md ">
                <h1 className="hover:text-black transition-colors">
                  যোগাযোগ করুন
                </h1>
                <div className="flex items-center space-x-2 cursor-pointer hover:text-black transition-colors">
                  <FaPhone className="h-4 w-4" />
                  <span>+88 01815 123456</span>
                </div>
                <div className="flex items-center space-x-2 cursor-pointer hover:text-black transition-colors">
                  <FaEnvelope className="h-4 w-4" />
                  <span>support@ghorlagbe.com</span>
                </div>
                <div className="text-md ">
                  <p className="hover:text-black transition-colors">
                    Mon to Fri: 9am – 8.30pm
                  </p>
                  <p className="hover:text-black transition-colors">
                    Weekends: 10am – 7.30pm
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6 flex flex-row items-center gap-1">
                <p className="text-lg mr-2">সোশ্যাল নেটওয়ার্কে আমরা:</p>
                <div className="flex space-x-4">
                  <Link to="https://ghor.saifmorshed.com/#">
                    <FaFacebook className="h-5 w-5" />
                  </Link>
                  <Link to="https://ghor.saifmorshed.com/#">
                    <FaXTwitter className="h-5 w-5" />
                  </Link>
                  <Link to="https://ghor.saifmorshed.com/#">
                    <FaYoutube className="h-6 w-6" />
                  </Link>
                  <Link to="https://ghor.saifmorshed.com/#">
                    <FaInstagram className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-100 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <Link to="https://ghor.saifmorshed.com/">
            <div className="flex flex-row items-center text-lg text-white font-bold mb-4 md:mb-0">
              <span>GhorLagbe apps (free)</span>

              <span className="mx-2 flex flex-row items-center ">
                <FaApple className="w-5 h-5 mb-2" />
                iOS app
              </span>

              <span className="flex flex-row items-center ">
                <FaAndroid className="w-5 h-5 mr-2" /> Android app
              </span>
            </div>
          </Link>
          <div className="text-md text-gray-100">
            © 2022-2024 GhorLagbe Ltd.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
