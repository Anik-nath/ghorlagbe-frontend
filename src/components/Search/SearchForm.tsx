import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchForm = ({ setSearchType }) => {
  return (
    <div className="bg-white rounded-md p-4 border">
      <div className="grid grid-cols-1 md:grid-cols-6 items-center">
        <div className="relative md:col-span-3">
          <span className="absolute inset-y-0 left-0 flex items-center p-3 border border-l-0">
            <Search size={20} />
          </span>
          <Input
            placeholder="খুঁজুন ফ্ল্যাট / সিট রুম"
            className="pl-14"
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
          <Button className="w-fit text-sm bg-[#157347] hover:bg-green-700">
            খুঁজুন
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
