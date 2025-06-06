import React, { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SearchPage = () => {
  const [searchType, setSearchType] = useState("খুঁজুন");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">রুম বা ফ্ল্যাটেট খুঁজুন</h1>

          {/* Search Type Tabs */}
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setSearchType("খুঁজুন")}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  searchType === "খুঁজুন"
                    ? "bg-green-600 text-white"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                খুঁজুন
              </button>
              <button
                onClick={() => setSearchType("বিভাগিত খুঁজুন")}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  searchType === "বিভাগিত খুঁজুন"
                    ? "bg-green-600 text-white"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                বিভাগিত খুঁজুন
              </button>
            </div>
          </div>

          {/* Search Form */}
          <div className="max-w-4xl mx-auto bg-white rounded-full p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <Input
                placeholder="খুঁজুন ফ্ল্যাট / সিট রুম"
                className="md:col-span-2"
              />
              <select className="px-4 py-2 border border-gray-300 rounded-md">
                <option>শহর</option>
                <option>ঢাকা</option>
                <option>চট্টগ্রাম</option>
                <option>সিলেট</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-md">
                <option>এলাকা</option>
                <option>ধানমন্ডি</option>
                <option>গুলশান</option>
                <option>বনানী</option>
              </select>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              <Search className="h-5 w-5 mr-2" />
              খুঁজুন
            </Button>
          </div>
        </div>

        {/* Instructions */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-semibold mb-4">
            একটি বিনামূল্যে বিজ্ঞাপন পোস্ট করুন এবং দিনে আপনার রুম ভাড়া দিন
          </h2>
          <p className="text-gray-600 mb-6">
            লোকেদের আপনার সম্পত্তি, আপনার রুম এবং অভযান সম্পত্তি জানাতে দিন।
            একটি ছোট ডিজিটাল এবং গেটি ইচ্ছুক পর্যায় আপলোডেট করুন।
          </p>
          <Button className="bg-green-600 hover:bg-green-700 mb-4">
            📝 বিজ্ঞাপন পোস্ট করুন
          </Button>
          <p className="text-gray-600">
            রুম প্রয়োজন??{" "}
            <a href="#" className="text-blue-600 hover:underline">
              📝 রুম চাই বিজ্ঞাপন পোস্ট করুন
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
