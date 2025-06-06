import React from "react";
import { Link } from "react-router-dom";
import { Search, Heart, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import bgslide from "../../public/assets/others/bg-slide.jpg"; // Adjust the path as necessary

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center min-h-[90vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${bgslide})`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-[5rem] font-bold mb-8">
            বাড়ি খুঁজুন <span className="text-[#09B800]">সহজে</span>
          </h1>
          <p className="text-xl md:text-3xl font-normal mb-12 py-2 text-white">
            92,947 রুম এবং ফ্ল্যাটমেট পাওয়া যাচ্ছে
          </p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-white rounded-full py-5 px-6 shadow-lg">
            <div className="flex flex-col justify-between md:flex-row gap-4 items-center border rounded-md">
              <div className="flex items-center w-full md:w-auto">
                <div className="bg-gray-50 rounded-md rounded-r-none h-12 w-12 flex items-center justify-center ">
                  <Search className="w-6 h-6 text-black font-bold" />
                </div>
                <div className="flex-1">
                  <Input
                    placeholder="খুঁজুন ফ্ল্যাট / সিট রুম"
                    className="h-12 text-gray-900 border-none "
                  />
                </div>
              </div>
              <select className="px-4 py-3 text-gray-900">
                <option>শহর</option>
                <option>ঢাকা</option>
                <option>চট্টগ্রাম</option>
                <option>সিলেট</option>
              </select>
              <select className="px-4 py-3 text-gray-900">
                <option>এলাকা</option>
                <option>ধানমন্ডি</option>
                <option>গুলশান</option>
                <option>বনানী</option>
              </select>
              <Button className="rounded-md rounded-l-none bg-[#157347] hover:bg-[#198754] h-12 ">
                খুঁজুন
              </Button>
            </div>
          </div>
          {/* details button */}
          <div className="text-center mt-10">
            <Button
              asChild
              variant="default"
              className="bg-black/50 hover:bg-black border rounded-none text-lg px-12 py-6"
            >
              <Link to="/search" className="flex items-center gap-2">
                <span>বিস্তারিত খুঁজুন</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  আমরা সর্বদা যত্নেখুঁজুন ফ্ল্যাট / সিট রুম
                </h3>
                <p className="text-gray-600">
                  এক কিলিক করে আমরা আমাদের পরবর্তী সম্পর্ক স্থাপন করি উইপরেশন
                  দিয়ে। আর এভাবে আমাদের প্রতিটি সম্পর্ক দিয়ে আমাদের স্থান করি
                  পার।
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">নিরাপত্তা</h3>
                <p className="text-gray-600">
                  আপনার বিশ্বাস আমাদের কেই বাড়ি ভাইরেশন এবং সিকিউরিটি নিশ্চয়তা
                  এবং সদস্যদের প্রত্যেকে এবং সুরক্ষিতভাবে দেওয়ার জন্য উদ্দীপ্ত।
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  আমরা ২৪/৭ এর জন্য এখানে
                </h3>
                <p className="text-gray-600">
                  দিন এবং রাত যেকোনো সময় যখন প্রয়োজন হয় আমরা হাজির হব গুগল
                  হার্ট অ্যাক্সেস এবং তৎক্ষণাৎ সেবা দিতে পারি।
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              সাম্প্রতিক <span className="text-green-600">বিজ্ঞাপন</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Property Cards */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card
                key={item}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      1600607686578 + item
                    }-afd6715cbef8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80`}
                    alt="Property"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-sm">
                    Verified
                  </div>
                  <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">
                    বাস এ বিশুদ্ধ জুবির সঙ অ্যাপার্টমেন্ট ঘর ভাড়া নেওয়া হবে
                  </h3>
                  <p className="text-green-600 font-bold text-xl mb-2">
                    ৳ 3000/30
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    📍 Fotika, hathazari, চট্টগ্রাম, চট্টগ্রাম
                  </p>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>3 Beds</span>
                    <span>2 Bathrooms</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/ads">
              <Button className="bg-green-600 hover:bg-green-700">
                আরো দেখুন বিজ্ঞাপন →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            বিজ্ঞাপন পোস্ট করুন
            <br />
            এবং আপনার রুম ভাড়া দিন
          </h2>
          <p className="text-xl mb-8 text-green-100">
            লোকেদের আপনার সম্পত্তি, আপনার রুম এবং অভযান সম্পত্তি জানাতে দিন।
            একটি ছোট ডিজিটাল এবং গেটি ইচ্ছুক পর্যায় আপলোডেট করুন।
          </p>
          <Link to="/post-ad">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-green-600 hover:bg-gray-100"
            >
              📝 বিজ্ঞাপন পোস্ট করুন
            </Button>
          </Link>
          <p className="mt-4 text-green-100">
            রুম প্রোগ্রাম??{" "}
            <Link
              to="/register"
              className="text-white underline hover:no-underline"
            >
              📝 রুম চাই বিজ্ঞাপন পোস্ট করুন
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
