import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AdsCard from "@/components/Ads/AdsCard";
import SearchForm from "@/components/Search/SearchForm";
import { Link } from "react-router-dom";

interface Property {
  id: number;
  title: string;
  price: string;
  day: string;
  location: string;
  beds: number;
  bathrooms: number;
}

const AdsPage = () => {
  // Facilities state
  const [lift, setLift] = useState<"yes" | "no" | "">("");
  const [generator, setGenerator] = useState<"yes" | "no" | "">("");
  const [security, setSecurity] = useState<"yes" | "no" | "">("");
  const [parking, setParking] = useState<"yes" | "no" | "">("");
  const [gas, setGas] = useState<"line" | "silendar" | "no" | "">("");
  const [wifi, setWifi] = useState<"yes" | "no" | "">("");

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
                  <label className="block text-md font-medium text-gray-900 mb-3">
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
                  <label className="block text-md font-medium text-gray-900 mb-3">
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
                          className="h-4 w-4 text-[#198754] !rounded border border-[#198754] focus:ring-[#198754] accent-[#198754]"
                        />
                        <span className="text-md text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-md font-medium text-gray-900 mb-3">
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
                  <label className="block text-md font-medium text-gray-900 mb-3">
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
                  <label className="block text-md font-medium text-gray-900 mb-3">
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
                {/* লিফট সুবিধা */}
                <div className="flex items-start  gap-4 mb-4">
                  <label className="w-full text-left text-md text-nowrap">
                    লিফট সুবিধা:
                  </label>
                  <div className="w-full flex">
                    <div className="flex items-center rounded-full overflow-hidden">
                      {/* আছে Button */}
                      <button
                        type="button"
                        onClick={() => setLift("yes")}
                        className={`flex items-center px-4 py-1 border border-r-0 border-[#157347] rounded-l-full transition-colors ${
                          lift === "yes"
                            ? "bg-[#157347] text-white"
                            : "text-[#157347]"
                        }`}
                      >
                        {lift === "yes" && (
                          <span className="mr-2 text-white">✔</span>
                        )}
                        আছে
                      </button>

                      {/* নেই Button */}
                      <button
                        type="button"
                        onClick={() => setLift("no")}
                        className={`flex items-center px-4 py-1 border border-gray-700 rounded-r-full transition-colors ${
                          lift === "no"
                            ? "bg-gray-900 text-white"
                            : "text-gray-700"
                        }`}
                      >
                        {lift === "no" && (
                          <span className="mr-2 text-white">✔</span>
                        )}
                        নেই
                      </button>
                    </div>
                  </div>

                  {/* Hidden radio input for form submission */}
                  <input type="hidden" name="lift" value={lift} />
                </div>

                {/* জেনেরেটর সুবিধা */}
                <div className="flex items-start gap-4">
                  <label className="w-full text-left text-md text-nowrap">
                    জেনেরেটর সুবিধা:
                  </label>
                  <div className="w-full flex">
                    <div className="flex items-center rounded-full overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setGenerator("yes")}
                        className={`flex items-center px-4 py-1 border border-r-0 border-[#157347] rounded-l-full transition-colors ${
                          generator === "yes"
                            ? "bg-[#157347] text-white"
                            : "text-[#157347]"
                        }`}
                      >
                        {generator === "yes" && (
                          <span className="mr-2 text-white">✔</span>
                        )}
                        আছে
                      </button>
                      <button
                        type="button"
                        onClick={() => setGenerator("no")}
                        className={`flex items-center px-4 py-1 border border-gray-700 rounded-r-full transition-colors ${
                          generator === "no"
                            ? "bg-gray-900 text-white"
                            : "text-gray-700"
                        }`}
                      >
                        {generator === "no" && (
                          <span className="mr-2 text-white">✔</span>
                        )}
                        নেই
                      </button>
                    </div>
                  </div>
                  <input type="hidden" name="generator" value={generator} />
                </div>

                {/* সিকিউরিটি গার্ড */}
                <div className="flex items-start gap-4">
                  <label className="w-full text-left text-md text-nowrap">
                    সিকিউরিটি গার্ড:
                  </label>
                  <div className="w-full flex">
                    <div className="flex items-center rounded-full overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setSecurity("yes")}
                        className={`flex items-center px-4 py-1 border border-r-0 border-[#157347] rounded-l-full transition-colors ${
                          security === "yes"
                            ? "bg-[#157347] text-white"
                            : "text-[#157347]"
                        }`}
                      >
                        {security === "yes" && (
                          <span className="mr-2 text-white">✔</span>
                        )}
                        আছে
                      </button>
                      <button
                        type="button"
                        onClick={() => setSecurity("no")}
                        className={`flex items-center px-4 py-1 border border-gray-700 rounded-r-full transition-colors ${
                          security === "no"
                            ? "bg-gray-900 text-white"
                            : "text-gray-700"
                        }`}
                      >
                        {security === "no" && (
                          <span className="mr-2 text-white">✔</span>
                        )}
                        নেই
                      </button>
                    </div>
                  </div>
                  <input type="hidden" name="security" value={security} />
                </div>

                {/* পার্কিং সুবিধা */}
                <div className="flex items-start gap-4">
                  <label className="w-full text-left text-md text-nowrap">
                    পার্কিং সুবিধা:
                  </label>
                  <div className="w-full flex">
                    <div className="flex items-center rounded-full overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setParking("yes")}
                        className={`flex items-center px-4 py-1 border border-r-0 border-[#157347] rounded-l-full transition-colors ${
                          parking === "yes"
                            ? "bg-[#157347] text-white"
                            : "text-[#157347]"
                        }`}
                      >
                        {parking === "yes" && (
                          <span className="mr-2 text-white">✔</span>
                        )}
                        আছে
                      </button>
                      <button
                        type="button"
                        onClick={() => setParking("no")}
                        className={`flex items-center px-4 py-1 border border-gray-700 rounded-r-full transition-colors ${
                          parking === "no"
                            ? "bg-gray-900 text-white"
                            : "text-gray-700"
                        }`}
                      >
                        {parking === "no" && (
                          <span className="mr-2 text-white">✔</span>
                        )}
                        নেই
                      </button>
                    </div>
                  </div>
                  <input type="hidden" name="parking" value={parking} />
                </div>

                {/* গ্যাস সুবিধা */}
                <div className="flex flex-col items-start gap-4">
                  <label className="w-full text-left text-md text-nowrap">
                    গ্যাস সুবিধা:
                  </label>
                  <div className="w-full flex">
                    <div className="flex items-center rounded-full overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setGas("line")}
                        className={`flex items-center px-4 py-1 border border-r-0 border-[#157347] rounded-l-full transition-colors ${
                          gas === "line"
                            ? "bg-[#157347] text-white"
                            : "text-[#157347]"
                        }`}
                      >
                        {gas === "line" && (
                          <span className="mr-2 text-white">✔</span>
                        )}
                        লাইন
                      </button>
                      <button
                        type="button"
                        onClick={() => setGas("silendar")}
                        className={`flex items-center px-4 py-1 border border-r-0 border-[#157347] transition-colors ${
                          gas === "silendar"
                            ? "bg-[#157347] text-white"
                            : "text-[#157347]"
                        }`}
                      >
                        {gas === "silendar" && (
                          <span className="mr-2 text-white">✔</span>
                        )}
                        সিলিন্ডার
                      </button>
                      <button
                        type="button"
                        onClick={() => setGas("no")}
                        className={`flex items-center px-4 py-1 border border-gray-700 rounded-r-full transition-colors ${
                          gas === "no"
                            ? "bg-gray-900 text-white"
                            : "text-gray-700"
                        }`}
                      >
                        {gas === "no" && (
                          <span className="mr-2 text-white">✔</span>
                        )}
                        নেই
                      </button>
                    </div>
                  </div>
                  <input type="hidden" name="gas" value={gas} />
                </div>

                {/* WIFI সুবিধা */}
                <div className="flex items-start gap-4">
                  <label className="w-full text-left text-md text-nowrap">
                    WIFI সুবিধা:
                  </label>
                  <div className="w-full flex">
                    <div className="flex items-center rounded-full overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setWifi("yes")}
                        className={`flex items-center px-4 py-1 border border-r-0 border-[#157347] rounded-l-full transition-colors ${
                          wifi === "yes"
                            ? "bg-[#157347] text-white"
                            : "text-[#157347]"
                        }`}
                      >
                        {wifi === "yes" && (
                          <span className="mr-1 text-white">✔</span>
                        )}
                        আছে
                      </button>
                      <button
                        type="button"
                        onClick={() => setWifi("no")}
                        className={`flex items-center px-4 py-1 border border-gray-700 rounded-r-full transition-colors ${
                          wifi === "no"
                            ? "bg-gray-900 text-white"
                            : "text-gray-700"
                        }`}
                      >
                        {wifi === "no" && (
                          <span className="mr-2 text-white">✔</span>
                        )}
                        নেই
                      </button>
                    </div>
                  </div>
                  <input type="hidden" name="wifi" value={wifi} />
                </div>

                {/* Search Button */}
                <Button className="w-full text-lg hover:bg-[#157347] bg-[#198754] text-white py-3">
                  খুঁজুন
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Properties Grid */}
          <div className="flex-1 bg-gray-50 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {properties.map((property) => (
                <Link key={property.id} to={`/ads/${property.id}`}>
                  <AdsCard property={property} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsPage;
