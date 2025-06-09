import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const districts = [
  { id: 1, name: "কুমিল্লা(Comilla)" },
  { id: 2, name: "ফেনী(Feni)" },
  { id: 3, name: "ব্রাহ্মণবাড়িয়া(Brahmanbaria)" },
  { id: 4, name: "রাঙ্গামাটি(Rangamati)" },
  { id: 5, name: "নোয়াখালী(Noakhali)" },
  { id: 6, name: "চাঁদপুর(Chandpur)" },
  { id: 7, name: "লক্ষ্মীপুর(Lakshmipur)" },
  { id: 8, name: "চট্টগ্রাম(Chattogram)" },
  { id: 9, name: "কক্সবাজার(Coxsbazar)" },
  { id: 10, name: "খাগড়াছড়ি(Khagrachhari)" },
  { id: 11, name: "বান্দরবান(Bandarban)" },
  { id: 12, name: "সিরাজগঞ্জ(Sirajganj)" },
  { id: 13, name: "পাবনা(Pabna)" },
  { id: 14, name: "বগুড়া(Bogura)" },
  { id: 15, name: "রাজশাহী(Rajshahi)" },
  { id: 16, name: "নাটোর(Natore)" },
  { id: 17, name: "জয়পুরহাট(Joypurhat)" },
  { id: 18, name: "চাঁপাইনবাবগঞ্জ(Chapainawabganj)" },
  { id: 19, name: "নওগাঁ(Naogaon)" },
  { id: 20, name: "যশোর(Jashore)" },
  { id: 21, name: "সাতক্ষীরা(Satkhira)" },
  { id: 22, name: "মেহেরপুর(Meherpur)" },
  { id: 23, name: "নড়াইল(Narail)" },
  { id: 24, name: "চুয়াডাঙ্গা(Chuadanga)" },
  { id: 25, name: "কুষ্টিয়া(Kushtia)" },
  { id: 26, name: "মাগুরা(Magura)" },
  { id: 27, name: "খুলনা(Khulna)" },
  { id: 28, name: "বাগেরহাট(Bagerhat)" },
  { id: 29, name: "ঝিনাইদহ(Jhenaidah)" },
  { id: 30, name: "ঝালকাঠি(Jhalakathi)" },
  { id: 31, name: "পটুয়াখালী(Patuakhali)" },
  { id: 32, name: "পিরোজপুর(Pirojpur)" },
  { id: 33, name: "বরিশাল(Barisal)" },
  { id: 34, name: "ভোলা(Bhola)" },
  { id: 35, name: "বরগুনা(Barguna)" },
  { id: 36, name: "সিলেট(Sylhet)" },
  { id: 37, name: "মৌলভীবাজার(Moulvibazar)" },
  { id: 38, name: "হবিগঞ্জ(Habiganj)" },
  { id: 39, name: "সুনামগঞ্জ(Sunamganj)" },
  { id: 40, name: "নরসিংদী(Narsingdi)" },
  { id: 41, name: "গাজীপুর(Gazipur)" },
  { id: 42, name: "শরীয়তপুর(Shariatpur)" },
  { id: 43, name: "নারায়ণগঞ্জ(Narayanganj)" },
  { id: 44, name: "টাঙ্গাইল(Tangail)" },
  { id: 45, name: "কিশোরগঞ্জ(Kishoreganj)" },
  { id: 46, name: "মানিকগঞ্জ(Manikganj)" },
  { id: 47, name: "ঢাকা(Dhaka)" },
  { id: 48, name: "মুন্সিগঞ্জ(Munshiganj)" },
  { id: 49, name: "রাজবাড়ী(Rajbari)" },
  { id: 50, name: "মাদারীপুর(Madaripur)" },
  { id: 51, name: "গোপালগঞ্জ(Gopalganj)" },
  { id: 52, name: "ফরিদপুর(Faridpur)" },
  { id: 53, name: "পঞ্চগড়(Panchagarh)" },
  { id: 54, name: "দিনাজপুর(Dinajpur)" },
  { id: 55, name: "লালমনিরহাট(Lalmonirhat)" },
  { id: 56, name: "নীলফামারী(Nilphamari)" },
  { id: 57, name: "গাইবান্ধা(Gaibandha)" },
  { id: 58, name: "ঠাকুরগাঁও(Thakurgaon)" },
  { id: 59, name: "রংপুর(Rangpur)" },
  { id: 60, name: "কুড়িগ্রাম(Kurigram)" },
  { id: 61, name: "শেরপুর(Sherpur)" },
  { id: 62, name: "ময়মনসিংহ(Mymensingh)" },
  { id: 63, name: "জামালপুর(Jamalpur)" },
  { id: 64, name: "নেত্রকোণা(Netrokona)" },
  { id: 65, name: "ঢাকা উত্তর সিটি(Dhaka North City)" },
  { id: 66, name: "ঢাকা দক্ষিণ সিটি(Dhaka South City)" },
  { id: 67, name: "চট্টগ্রাম সিটি(Chattogram City)" },
];

const SearchForm = ({ setSearchType }) => {
  return (
    <div className="bg-white rounded-md p-4 border">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-3 md:gap-4 items-center">
        {/* Search Input */}
        <div className="md:col-span-3">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center px-2 border border-l-0">
              <Search size={20} />
            </span>
            <Input placeholder="খুঁজুন ফ্ল্যাট / সিট রুম" className="pl-12" />
          </div>
        </div>

        {/* District Select */}
        <div className="md:col-span-1">
          <select
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md"
            id="district"
            name="district_id"
          >
            <option value="">শহর</option>
            {districts.map((district) => (
              <option key={district.id} value={district.id}>
                {district.name}
              </option>
            ))}
          </select>
        </div>

        {/* Area Select */}
        <div className="md:col-span-1">
          <select className="w-full bg-white px-4 py-2 border border-gray-300 rounded-md">
            <option value="">এলাকা</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="md:col-span-1 mx-auto w-full">
          <Button className="w-full md:w-fit text-sm bg-[#157347] hover:bg-green-700">
            খুঁজুন
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
