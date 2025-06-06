import FeaturesSection from "@/components/Home/Features";
import LatestAdvertisement from "@/components/Home/LatestAdvertiseMent";
import PostAdSection from "@/components/Home/PostAdSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import bgslide from "../../public/assets/others/bg-slide.jpg";

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
      <FeaturesSection />
      {/* Featured Properties Section */}
      <LatestAdvertisement />
      {/* Call to Action Section */}
      <PostAdSection />
    </div>
  );
};

export default HomePage;
