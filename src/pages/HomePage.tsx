import FeaturesSection from "@/components/Home/Features";
import LatestAdvertisement from "@/components/Home/LatestAdvertiseMent";
import PostAdSection from "@/components/Home/PostAdSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import bgslide from "/assets/others/bg-slide.jpg";

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
            <div className="flex flex-row justify-between gap-4 items-center border rounded-md">
              <div className="flex items-center w-full">
                <div className="bg-gray-50 rounded-md rounded-r-none h-12 w-12 flex items-center justify-center ">
                  <Search className="w-6 h-6 text-black font-bold" />
                </div>
                <div className="flex-1">
                  <Input
                    placeholder="খুঁজুন ফ্ল্যাট / সিট রুম"
                    className="h-12 text-gray-900 border-none"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <select
                  className="w-[100px] appearance-none px-4 py-3 text-gray-900"
                  id="district"
                  name="district_id"
                >
                  <option value="" selected>
                    শহর
                  </option>
                  <option value="1">কুমিল্লা(Comilla)</option>
                  <option value="2">ফেনী(Feni)</option>
                  <option value="3">ব্রাহ্মণবাড়িয়া(Brahmanbaria)</option>
                  <option value="4">রাঙ্গামাটি(Rangamati)</option>
                  <option value="5">নোয়াখালী(Noakhali)</option>
                  <option value="6">চাঁদপুর(Chandpur)</option>
                  <option value="7">লক্ষ্মীপুর(Lakshmipur)</option>
                  <option value="8">চট্টগ্রাম(Chattogram)</option>
                  <option value="9">কক্সবাজার(Coxsbazar)</option>
                  <option value="10">খাগড়াছড়ি(Khagrachhari)</option>
                  <option value="11">বান্দরবান(Bandarban)</option>
                  <option value="12">সিরাজগঞ্জ(Sirajganj)</option>
                  <option value="13">পাবনা(Pabna)</option>
                  <option value="14">বগুড়া(Bogura)</option>
                  <option value="15">রাজশাহী(Rajshahi)</option>
                  <option value="16">নাটোর(Natore)</option>
                  <option value="17">জয়পুরহাট(Joypurhat)</option>
                  <option value="18">চাঁপাইনবাবগঞ্জ(Chapainawabganj)</option>
                  <option value="19">নওগাঁ(Naogaon)</option>
                  <option value="20">যশোর(Jashore)</option>
                  <option value="21">সাতক্ষীরা(Satkhira)</option>
                  <option value="22">মেহেরপুর(Meherpur)</option>
                  <option value="23">নড়াইল(Narail)</option>
                  <option value="24">চুয়াডাঙ্গা(Chuadanga)</option>
                  <option value="25">কুষ্টিয়া(Kushtia)</option>
                  <option value="26">মাগুরা(Magura)</option>
                  <option value="27">খুলনা(Khulna)</option>
                  <option value="28">বাগেরহাট(Bagerhat)</option>
                  <option value="29">ঝিনাইদহ(Jhenaidah)</option>
                  <option value="30">ঝালকাঠি(Jhalakathi)</option>
                  <option value="31">পটুয়াখালী(Patuakhali)</option>
                  <option value="32">পিরোজপুর(Pirojpur)</option>
                  <option value="33">বরিশাল(Barisal)</option>
                  <option value="34">ভোলা(Bhola)</option>
                  <option value="35">বরগুনা(Barguna)</option>
                  <option value="36">সিলেট(Sylhet)</option>
                  <option value="37">মৌলভীবাজার(Moulvibazar)</option>
                  <option value="38">হবিগঞ্জ(Habiganj)</option>
                  <option value="39">সুনামগঞ্জ(Sunamganj)</option>
                  <option value="40">নরসিংদী(Narsingdi)</option>
                  <option value="41">গাজীপুর(Gazipur)</option>
                  <option value="42">শরীয়তপুর(Shariatpur)</option>
                  <option value="43">নারায়ণগঞ্জ(Narayanganj)</option>
                  <option value="44">টাঙ্গাইল(Tangail)</option>
                  <option value="45">কিশোরগঞ্জ(Kishoreganj)</option>
                  <option value="46">মানিকগঞ্জ(Manikganj)</option>
                  <option value="47">ঢাকা(Dhaka)</option>
                  <option value="48">মুন্সিগঞ্জ(Munshiganj)</option>
                  <option value="49">রাজবাড়ী(Rajbari)</option>
                  <option value="50">মাদারীপুর(Madaripur)</option>
                  <option value="51">গোপালগঞ্জ(Gopalganj)</option>
                  <option value="52">ফরিদপুর(Faridpur)</option>
                  <option value="53">পঞ্চগড়(Panchagarh)</option>
                  <option value="54">দিনাজপুর(Dinajpur)</option>
                  <option value="55">লালমনিরহাট(Lalmonirhat)</option>
                  <option value="56">নীলফামারী(Nilphamari)</option>
                  <option value="57">গাইবান্ধা(Gaibandha)</option>
                  <option value="58">ঠাকুরগাঁও(Thakurgaon)</option>
                  <option value="59">রংপুর(Rangpur)</option>
                  <option value="60">কুড়িগ্রাম(Kurigram)</option>
                  <option value="61">শেরপুর(Sherpur)</option>
                  <option value="62">ময়মনসিংহ(Mymensingh)</option>
                  <option value="63">জামালপুর(Jamalpur)</option>
                  <option value="64">নেত্রকোণা(Netrokona)</option>
                  <option value="65">ঢাকা উত্তর সিটি(Dhaka North City)</option>
                  <option value="66">ঢাকা দক্ষিণ সিটি(Dhaka South City)</option>
                  <option value="67">চট্টগ্রাম সিটি(Chattogram City)</option>
                </select>
                <select className="w-[100px] appearance-none px-4 py-3 text-gray-900">
                  <option value="" selected>
                    এলাকা
                  </option>
                </select>
              </div>
              <div>
                <Button className="rounded-md rounded-l-none bg-[#198754] hover:bg-[#157347] h-12 ">
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
