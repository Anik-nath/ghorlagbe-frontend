import React, { useState } from "react";
import { Heart, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AdsCard from "@/components/Ads/AdsCard";
import SearchForm from "@/components/Search/SearchForm";

const AdsPage = () => {
  const [filters, setFilters] = useState({
    propertyType: "",
    category: "",
    district: "",
    area: "",
    rent: "",
    facilities: {
      electricity: { available: false, notAvailable: false },
      generator: { available: false, notAvailable: false },
      security: { available: false, notAvailable: false },
      parking: { available: false, notAvailable: false },
      gas: { available: false, notAvailable: false },
      wifi: { available: false, notAvailable: false },
    },
  });

  const toggleFacility = (
    facility: string,
    type: "available" | "notAvailable"
  ) => {
    setFilters((prev) => ({
      ...prev,
      facilities: {
        ...prev.facilities,
        [facility]: {
          ...prev.facilities[facility],
          [type]: !prev.facilities[facility][type],
        },
      },
    }));
  };
  interface Property {
    id: number;
    title: string;
    price: string;
    day: string;
    location: string;
    beds: number;
    bathrooms: number;
  }

  const properties: Property[] = [
    {
      id: 1,
      title: "বাস এ বিশুদ্ধ জুবির সঙ অ্যাপার্টমেন্ট ঘর ভাড়া নেওয়া হবে",
      price: "৳ 3000",
      day: "30",
      location: "Fotika, hathazari, চট্টগ্রাম, চট্টগ্রাম",
      beds: 3,
      bathrooms: 2,
    },
    {
      id: 2,
      title:
        "একটি সম্পূর্ণ প্রস্তুত ফ্ল্যাট ভাড়া দেওয়া হবে 3 বেড এবং গ্যাস সহ",
      price: "৳ 5000",
      day: "30",
      location: "বনানী, ঢাকা",
      beds: 2,
      bathrooms: 2,
    },
    {
      id: 3,
      title:
        "ফ্যামিলি ও ব্যাচেলর বাসা ভাড়া রাউজান সদর এ - লাইনের গ্যাস সুবিধা আছে",
      price: "৳ 4000",
      day: "30",
      location: "মিরপুর, ঢাকা",
      beds: 3,
      bathrooms: 1,
    },
    {
      id: 4,
      title: "সিটি সেন্টারের কাছে ফ্ল্যাট",
      price: "৳ 6000",
      day: "30",
      location: "গুলশান, ঢাকা",
      beds: 4,
      bathrooms: 3,
    },
    {
      id: 5,
      title: "বড় রুমের বাসা ভাড়া",
      price: "৳ 3500",
      day: "30",
      location: "উত্তরা, ঢাকা",
      beds: 2,
      bathrooms: 1,
    },
    {
      id: 6,
      title: "নতুন বিল্ডিংয়ের ফ্ল্যাট",
      price: "৳ 4500",
      day: "30",
      location: "মোহাম্মদপুর, ঢাকা",
      beds: 3,
      bathrooms: 2,
    },
  ];

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Search Header */}
        <div className="max-w-7xl mb-14">
          <SearchForm setSearchType={() => {}} />
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="lg:w-80">
            <Card>
              <CardContent className="p-6 space-y-6">
                {/* Property Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">
                    প্রশাসনিক ধরণ:
                  </label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="-------" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bachelor">ব্যাচেলর</SelectItem>
                      <SelectItem value="family">ফ্যামিলি</SelectItem>
                      <SelectItem value="student">ছাত্র</SelectItem>
                      <SelectItem value="female-student">ছাত্রী</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">
                    ভাড়ার ধরন:
                  </label>
                  <div className="space-y-2">
                    {[
                      "ব্যাচেলর",
                      "ফ্যামিলি",
                      "ছাত্র",
                      "ছাত্রী",
                      "পূর্ণ",
                      "মহিলা",
                      "পূর্ণ চাকরীজীবী",
                      "মহিলা চাকরীজীবী",
                      "ছোট ফ্যামিলি",
                    ].map((type) => (
                      <label
                        key={type}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                        />
                        <span className="text-sm text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">
                    অবস্থান:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="শহর" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dhaka">ঢাকা</SelectItem>
                        <SelectItem value="chittagong">চট্টগ্রাম</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="এলাকা" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dhanmondi">ধানমন্ডি</SelectItem>
                        <SelectItem value="gulshan">গুলশান</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Rent Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">
                    ভেন্ট রেঞ্জ:
                  </label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="-------" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-5000">০-৫,০০০</SelectItem>
                      <SelectItem value="5000-10000">৫,০০০-১০,০০০</SelectItem>
                      <SelectItem value="10000-20000">১০,০০০-২০,০০০</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Area Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">
                    ওয়েল এরিয়া:
                  </label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="-------" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100-500">১০০-৫০০ বর্গফুট</SelectItem>
                      <SelectItem value="500-1000">
                        ৫০০-১,০০০ বর্গফুট
                      </SelectItem>
                      <SelectItem value="1000-2000">
                        ১,০০০-২,০০০ বর্গফুট
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Facilities with Toggle Buttons */}
                <div className="space-y-4">
                  {/* Electricity */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      বিদ্যুৎ সুবিধা:
                    </label>
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          toggleFacility("electricity", "available")
                        }
                        className={`px-4 py-1 text-sm rounded-full border transition-colors ${
                          filters.facilities.electricity.available
                            ? "bg-green-600 text-white border-green-600"
                            : "bg-white text-gray-700 border-gray-300 hover:border-green-600"
                        }`}
                      >
                        আছে
                      </button>
                      <button
                        onClick={() =>
                          toggleFacility("electricity", "notAvailable")
                        }
                        className={`px-4 py-1 text-sm rounded-full border transition-colors ${
                          filters.facilities.electricity.notAvailable
                            ? "bg-green-600 text-white border-green-600"
                            : "bg-white text-gray-700 border-gray-300 hover:border-green-600"
                        }`}
                      >
                        নাই
                      </button>
                    </div>
                  </div>

                  {/* Generator */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      জেনারেটর সুবিধা:
                    </label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleFacility("generator", "available")}
                        className={`px-4 py-1 text-sm rounded-full border transition-colors ${
                          filters.facilities.generator.available
                            ? "bg-green-600 text-white border-green-600"
                            : "bg-white text-gray-700 border-gray-300 hover:border-green-600"
                        }`}
                      >
                        আছে
                      </button>
                      <button
                        onClick={() =>
                          toggleFacility("generator", "notAvailable")
                        }
                        className={`px-4 py-1 text-sm rounded-full border transition-colors ${
                          filters.facilities.generator.notAvailable
                            ? "bg-green-600 text-white border-green-600"
                            : "bg-white text-gray-700 border-gray-300 hover:border-green-600"
                        }`}
                      >
                        নাই
                      </button>
                    </div>
                  </div>

                  {/* Security Guard */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      সিকিউরিটি গার্ড:
                    </label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleFacility("security", "available")}
                        className={`px-4 py-1 text-sm rounded-full border transition-colors ${
                          filters.facilities.security.available
                            ? "bg-green-600 text-white border-green-600"
                            : "bg-white text-gray-700 border-gray-300 hover:border-green-600"
                        }`}
                      >
                        আছে
                      </button>
                      <button
                        onClick={() =>
                          toggleFacility("security", "notAvailable")
                        }
                        className={`px-4 py-1 text-sm rounded-full border transition-colors ${
                          filters.facilities.security.notAvailable
                            ? "bg-green-600 text-white border-green-600"
                            : "bg-white text-gray-700 border-gray-300 hover:border-green-600"
                        }`}
                      >
                        নাই
                      </button>
                    </div>
                  </div>

                  {/* Parking */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      পার্কিং সুবিধা:
                    </label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleFacility("parking", "available")}
                        className={`px-4 py-1 text-sm rounded-full border transition-colors ${
                          filters.facilities.parking.available
                            ? "bg-green-600 text-white border-green-600"
                            : "bg-white text-gray-700 border-gray-300 hover:border-green-600"
                        }`}
                      >
                        আছে
                      </button>
                      <button
                        onClick={() =>
                          toggleFacility("parking", "notAvailable")
                        }
                        className={`px-4 py-1 text-sm rounded-full border transition-colors ${
                          filters.facilities.parking.notAvailable
                            ? "bg-green-600 text-white border-green-600"
                            : "bg-white text-gray-700 border-gray-300 hover:border-green-600"
                        }`}
                      >
                        নাই
                      </button>
                    </div>
                  </div>

                  {/* Gas */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      গ্যাস সুবিধা:
                    </label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleFacility("gas", "available")}
                        className={`px-4 py-1 text-sm rounded-full border transition-colors ${
                          filters.facilities.gas.available
                            ? "bg-green-600 text-white border-green-600"
                            : "bg-white text-gray-700 border-gray-300 hover:border-green-600"
                        }`}
                      >
                        সিলিন্ডার
                      </button>
                      <button
                        onClick={() => toggleFacility("gas", "notAvailable")}
                        className={`px-4 py-1 text-sm rounded-full border transition-colors ${
                          filters.facilities.gas.notAvailable
                            ? "bg-green-600 text-white border-green-600"
                            : "bg-white text-gray-700 border-gray-300 hover:border-green-600"
                        }`}
                      >
                        নাই
                      </button>
                    </div>
                  </div>

                  {/* WiFi */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      WiFi সুবিধা:
                    </label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleFacility("wifi", "available")}
                        className={`px-4 py-1 text-sm rounded-full border transition-colors ${
                          filters.facilities.wifi.available
                            ? "bg-green-600 text-white border-green-600"
                            : "bg-white text-gray-700 border-gray-300 hover:border-green-600"
                        }`}
                      >
                        আছে
                      </button>
                      <button
                        onClick={() => toggleFacility("wifi", "notAvailable")}
                        className={`px-4 py-1 text-sm rounded-full border transition-colors ${
                          filters.facilities.wifi.notAvailable
                            ? "bg-green-600 text-white border-green-600"
                            : "bg-white text-gray-700 border-gray-300 hover:border-green-600"
                        }`}
                      >
                        নাই
                      </button>
                    </div>
                  </div>
                </div>

                {/* Search Button */}
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                  খুঁজুন
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Properties Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {properties.map((property) => (
                <AdsCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsPage;
