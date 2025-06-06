
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">আমাদের সম্পর্কে</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            আমরা "ঘর লাগবে" ভাড়া নেওয়া সংক্রান্ত একটি আধুনিক ওয়েবসাইট, যা আপনার পছন্দের ঘর/বিট/ফ্ল্যাট সংবেদ 
            খোঁজাতে সাহায্য করে। আমরা আপনার জন্যটেস্টি করে সবেমের গাজি ভরসা আনে এবং বিনামূল্যে বাসনায় আপনার পছন্দ 
            থাকতে চাই।
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            একটি বিনামূল্যে বিজ্ঞাপন পোস্ট করুন এবং দিনে আপনার রুম ভাড়া দিন
          </h2>
          <p className="text-center text-gray-600 mb-8">
            লোকেদের আপনার সম্পত্তি, আপনার রুম এবং অভযান সম্পত্তি জানাতে দিন। একটি ছোট ডিজিটাল এবং গেটি ইচ্ছুক পর্যায় আপলোডেট করুন।
          </p>
          <div className="text-center">
            <Button className="bg-green-600 hover:bg-green-700 mb-4">
              📝 বিজ্ঞাপন পোস্ট করুন
            </Button>
            <p className="text-gray-600">
              রুম প্রয়োজন?? <a href="#" className="text-blue-600 hover:underline">📝 রুম চাই বিজ্ঞাপন পোস্ট করুন</a>
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏠</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">ঘর লাগবে সম্পর্কে</h3>
            <p className="text-gray-600">
              আমাদের প্ল্যাটফর্মের মাধ্যমে সহজেই আপনার স্বপ্নের বাড়ি খুঁজে পান
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📞</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">যোগাযোগ</h3>
            <p className="text-gray-600">
              যেকোনো সহায়তার জন্য আমাদের সাথে যোগাযোগ করুন
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">শর্তাবলী এবং গোপনীয়তা</h3>
            <p className="text-gray-600">
              আমাদের নীতিমালা এবং গোপনীয়তা সম্পর্কে জানুন
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-lg p-8 shadow-sm text-center">
          <h2 className="text-2xl font-bold mb-6">যোগাযোগের তথ্য</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">ফোন</h3>
              <p className="text-gray-600">+88 01815 123456</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">ইমেইল</h3>
              <p className="text-gray-600">support@ghorlagbe.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">কার্যসময়</h3>
              <p className="text-gray-600">
                সোম-শুক্র: ৯সকাল - ৮.৩০সন্ধ্যা<br />
                সপ্তাহান্ত: ১০সকাল - ৭.৩০সন্ধ্যা
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
