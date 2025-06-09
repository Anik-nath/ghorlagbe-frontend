import FeaturesSection from "@/components/Home/Features";
import LatestAdvertisement from "@/components/Home/LatestAdvertiseMent";
import PostAdSection from "@/components/Home/PostAdSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import bgslide from "/assets/others/bg-slide.jpg";
import { FaPeopleRoof } from "react-icons/fa6";
import { districts } from "@/components/Search/SearchForm";

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
          <h1 className="text-5xl md:text-[4.5rem] font-bold mb-8">
            বাড়ি খুঁজুন <span className="text-[#09B800]">সহজে</span>
          </h1>
          <p className="text-xl md:text-2xl font-normal mb-12 py-2 text-white">
            92,947 রুম এবং ফ্ল্যাটমেট পাওয়া যাচ্ছে
          </p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto md:bg-white md:rounded-full py-3 md:py-5 px-4 md:px-6 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-4 items-center md:border rounded-md">
              <div className="flex items-center w-full">
                <div className="bg-gray-50 rounded-md rounded-r-none h-12 w-12 flex items-center justify-center">
                  <Search className="w-6 h-6 text-black font-bold" />
                </div>
                <div className="flex-1">
                  <Input
                    placeholder="খুঁজুন ফ্ল্যাট / সিট রুম"
                    className="h-12 text-gray-900 md:rounded rounded-l-none border-none text-sm md:text-base"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 w-full md:w-auto">
                <select
                  className="w-full md:w-[100px] rounded md:rounded-none appearance-none px-3 md:px-4 py-3 text-gray-900 text-sm md:text-base"
                  id="district"
                  name="district_id"
                >
                  <option value="">শহর</option>
                  {districts.map((district) => (
                    <option key={district.id} value={district.id}>
                      {district.name}
                    </option>
                  ))}
                  {/* Keep all other options the same */}
                </select>
                <select className="w-full rounded md:rounded-none md:w-[100px] appearance-none px-3 md:px-4 py-3 text-gray-900 text-sm md:text-base">
                  <option value="" selected>
                    এলাকা
                  </option>
                </select>
              </div>
              <div className="w-full md:w-auto">
                <Button className="w-full md:w-auto rounded-md md:rounded-l-none bg-[#198754] hover:bg-[#157347] h-12 text-sm md:text-base">
                  খুঁজুন
                </Button>
              </div>
            </div>
          </div>

          {/* details button */}
          <div className="text-center mt-10">
            <Button
              asChild
              variant="default"
              className="bg-black/50 hover:bg-black border rounded-none text-md px-8 py-5"
            >
              <Link to="/search" className="flex items-center gap-2">
                <FaPeopleRoof className="w-6 h-6" />
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
