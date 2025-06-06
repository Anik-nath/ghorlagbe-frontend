
import React from 'react';
import { Link } from 'react-router-dom';
import { House, Phone, Mail, MapPin, Facebook, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <House className="h-8 w-8 text-green-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
              <span className="text-2xl font-bold">
                ঘর <span className="text-red-400">লাগবে</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              "ঘর লাগবে" ভাড়া নেওয়া সংক্রান্ত একটি আধুনিক ওয়েবসাইট, যা আপনার পছন্দের ঘর/বিট/ফ্ল্যাট সংবেদ 
              খোঁজাতে সাহায্য করে।
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">আমাদের সম্পর্কে</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about" className="hover:text-white transition-colors">ঘর লাগবে সম্পর্কে</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">যোগাযোগ</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">শর্তাবলী এবং গোপনীয়তা</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">গোপনীয়তা নীতি</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">যোগাযোগ | সাহায্য দরকার?</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+88 01815 123456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@ghorlagbe.com</span>
              </div>
              <div className="text-sm">
                <p>Mon to Fri: 9am – 8.30pm</p>
                <p>Weekends: 10am – 7.30pm</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <p className="text-sm mb-3">সোশ্যাল নেটওয়ার্কে আমরা:</p>
              <div className="flex space-x-3">
                <Facebook className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
                <div className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer transition-colors">𝕏</div>
                <Youtube className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-emerald-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-300 mb-4 md:mb-0">
            <span className="font-semibold">GhorLagbe apps (free)</span>
            <span className="mx-2">📱 iOS app</span>
            <span>🤖 Android app</span>
          </div>
          <div className="text-sm text-gray-300">
            © 2022-2024 GhorLagbe Ltd.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
