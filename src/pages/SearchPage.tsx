import React, { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Mission from "@/components/About/Misson";

const SearchPage = () => {
  const [form, setForm] = useState({
    searchType: "খুঁজুন",
    lift: "",
    generator: "",
    parking: "",
    wifi: "",
    gas: "",
    security: "",
  });

  const setSearchType = (searchType: string) =>
    setForm((prev) => ({ ...prev, searchType }));
  const setLift = (lift: string) =>
    setForm((prev) => ({ ...prev, lift }));
  const setGenerator = (generator: string) =>
    setForm((prev) => ({ ...prev, generator }));
  const setParking = (parking: string) =>
    setForm((prev) => ({ ...prev, parking }));
  const setWifi = (wifi: string) =>
    setForm((prev) => ({ ...prev, wifi }));
  const setGas = (gas: string) =>
    setForm((prev) => ({ ...prev, gas }));
  const setSecurity = (security: string) =>
    setForm((prev) => ({ ...prev, security }));

  const {
    searchType,
    lift,
    generator,
    parking,
    wifi,
    gas,
    security,
  } = form;

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-medium my-6">
            রুম বা ফ্ল্যাটমেট খুঁজুন
          </h1>

          {/* Search Type Tabs */}
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setSearchType("খুঁজুন")}
                className={`px-6 py-2 rounded-md text-lg transition-colors ${
                  searchType === "খুঁজুন"
                    ? "hover:bg-[#157347] bg-[#198754] text-white"
                    : "text-[#198754] hover:text-[#198754]"
                }`}
              >
                খুঁজুন
              </button>
              <button
                onClick={() => setSearchType("বিস্তারিত খুঁজুন")}
                className={`px-6 py-2 rounded-md text-lg transition-colors ${
                  searchType === "বিস্তারিত খুঁজুন"
                    ? "hover:bg-[#157347] bg-[#198754] text-white"
                    : "text-[#198754] hover:text-[#198754]"
                }`}
              >
                বিস্তারিত খুঁজুন
              </button>
            </div>
          </div>

          {/* Search Form */}
          {searchType === "খুঁজুন" ? (
            <div className="max-w-6xl mx-auto bg-white rounded-md p-6 border">
              <div className="grid grid-cols-1 md:grid-cols-6 gap-2 items-center">
                <div className="relative md:col-span-3">
                  <span className="absolute inset-y-0 left-0 flex items-center p-3 border border-l-0">
                    <Search size={20} />
                  </span>
                  <Input
                    placeholder="খুঁজুন ফ্ল্যাট / সিট রুম"
                    className="pl-14 !text-lg"
                  />
                </div>
                <select
                  className="px-4 py-2 border border-gray-300 rounded-md"
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
                <select className="px-4 py-2 border border-gray-300 rounded-md">
                  <option value="" selected>
                    এলাকা
                  </option>
                </select>
                <div className="flex items-center justify-around">
                  <Button className="w-fit text-lg bg-[#157347] hover:bg-green-700">
                    খুঁজুন
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-6xl mx-auto bg-white rounded-lg p-10 border">
              <form>
                <div className="space-y-5">
                  {/* প্রপার্টির ধরন */}
                  <div className="flex items-start gap-4">
                    <label className="w-4/12 text-left text-lg">
                      প্রপার্টির ধরন:
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
                      <option value="">-------</option>
                      <option value="0">ফ্লাট ভাড়া</option>
                      <option value="1">সিট ভাড়া</option>
                      <option value="2">সাবলেট</option>
                    </select>
                  </div>

                  {/* ভাড়ার ধরন */}
                  <div className="flex items-start gap-4">
                    <label className="w-4/12 text-left text-lg">
                      ভাড়ার ধরন:
                    </label>
                    <div className="w-full flex flex-wrap gap-x-6 gap-y-2">
                      {[
                        { label: "ব্যাচেলর", value: "bachelor" },
                        { label: "ফ্যামিলি", value: "family" },
                        { label: "ছাত্র", value: "male-student" },
                        { label: "ছাত্রী", value: "female-student" },
                        { label: "পুরুষ", value: "male" },
                        { label: "মহিলা", value: "female" },
                        { label: "পুরুষ চাকরীজীবী", value: "male-jobholder" },
                        { label: "মহিলা চাকরীজীবী", value: "female-jobholder" },
                        { label: "ছোট ফ্যামিলি", value: "small-family" },
                      ].map((item) => (
                        <label
                          key={item.value}
                          className="flex items-center space-x-2"
                        >
                          <input
                            type="checkbox"
                            name="rentfor[]"
                            value={item.value}
                            className="h-4 w-4"
                          />
                          <span className="text-lg text-gray-900">
                            {item.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* অবস্থান */}
                  <div className="flex items-start gap-4">
                    <label className="w-4/12 text-left text-lg">অবস্থান:</label>
                    <div className="w-full grid grid-cols-2 gap-2">
                      <select className="px-4 py-2 border border-gray-300 rounded-md">
                        <option value="">শহর</option>
                        <option value="1">ঢাকা</option>
                        <option value="2">চট্টগ্রাম</option>
                        <option value="3">সিলেট</option>
                      </select>
                      <select className="px-4 py-2 border border-gray-300 rounded-md">
                        <option value="">এলাকা</option>
                        <option value="1">ধানমন্ডি</option>
                        <option value="2">গুলশান</option>
                        <option value="3">বনানী</option>
                      </select>
                    </div>
                  </div>

                  {/* বেড রুম */}
                  <div className="flex items-start gap-4">
                    <label className="w-4/12 text-left text-lg">বেড রুম:</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
                      <option value="">-------</option>
                      <option value="1">১</option>
                      <option value="2">২</option>
                      <option value="3">৩</option>
                      <option value="4">৪</option>
                      <option value="5">৫</option>
                      <option value="6">৬+</option>
                    </select>
                  </div>

                  {/* ওয়াস রুম */}
                  <div className="flex items-start gap-4">
                    <label className="w-4/12 text-left text-lg">
                      ওয়াস রুম:
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
                      <option value="">-------</option>
                      <option value="1">১</option>
                      <option value="2">২</option>
                      <option value="3">৩</option>
                      <option value="4">৪</option>
                      <option value="5">৫</option>
                      <option value="6">৬+</option>
                    </select>
                  </div>
                  {/* লিফট সুবিধা */}
                  <div className="flex items-start gap-4 mb-4">
                    <label className="w-4/12 text-left text-lg">
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
                    <label className="w-4/12 text-left text-lg">
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
                    <label className="w-4/12 text-left text-lg">
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
                    <label className="w-4/12 text-left text-lg">
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
                  <div className="flex items-start gap-4">
                    <label className="w-4/12 text-left text-lg">
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
                    <label className="w-4/12 text-left text-lg">
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

                  {/* Submit */}
                  <div className="pt-4 flex justify-end">
                    <Button className="w-auto text-lg bg-[#157347] hover:bg-green-700">
                      খুঁজুন
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
      {/* Instructions */}
      <Mission />
    </div>
  );
};

export default SearchPage;
