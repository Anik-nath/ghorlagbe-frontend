import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Phone,
  Mail,
  Lock,
  User,
  Heart,
  Bookmark,
  Bell,
  Power,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import SearchForm from "@/components/Search/SearchForm";
import Mission from "@/components/About/Misson";
import { FaShieldHalved } from "react-icons/fa6";

export default function HomePage() {
  const [districtId, setDistrictId] = useState("");
  const [upazilaId, setUpazilaId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("online");
  const [packageId, setPackageId] = useState("1");
  const [txCode, setTxCode] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality
    console.log({ searchTerm, districtId, upazilaId });
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment submission
    console.log({ packageId, paymentMethod, txCode });
  };

  return (
    <div className="min-h-screen">
      <div className="my-12 max-w-7xl mx-auto px-8">
        {/* Search  */}
        <section className="max-w-7xl mb-6">
          <SearchForm setSearchType={() => {}} />
        </section>
        {/* Post Options */}
        <section className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-medium mb-8 text-gray-800">
                বিনামূল্যে বিজ্ঞাপন পোস্ট করুন
              </h2>
              <h3 className="text-xl font-medium mb-2 text-gray-800">
                আপনি কি বিজ্ঞাপন দিতে চান?
              </h3>

              <div className="space-y-4">
                {/* Landlord Option */}
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="mr-4">
                        <img
                          src="/public/assets/room.jpg"
                          alt="Room"
                          className="w-28 h-28 rounded-full object-cover"
                        />
                      </div>
                      <div className="flex-1 text-gray-800">
                        <h4 className="text-3xl">বাড়িওয়ালা</h4>
                        <p className="text-lg">আমি বাসা ভাড়া দিতে চাই</p>
                      </div>
                      <div>
                        <a
                          href="/post-rent"
                          className="bg-yellow-400 hover:bg-yellow-500 font-medium py-2 px-4 rounded"
                        >
                          ফ্রি বিজ্ঞাপন পোস্ট করুন
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Tenant Option */}
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="mr-4">
                        <img
                          src="/public/assets/room-wanted.jpg"
                          alt="Room Wanted"
                          className="w-28 h-28 rounded-full object-cover"
                        />
                      </div>
                      <div className="flex-1 text-gray-800">
                        <h4 className="text-3xl">ভাড়াটিয়া</h4>
                        <p className="text-lg">আমি একটি রুম/বাসা খুঁজছি</p>
                      </div>
                      <div>
                        <a
                          href="/post-rent"
                          className="bg-yellow-400 hover:bg-yellow-500 font-medium py-2 px-4 rounded"
                        >
                          ফ্রি বিজ্ঞাপন পোস্ট করুন
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="mb-14">
                <h4 className="font-semibold mb-3 text-xl text-gray-800">সাহায্য বিষয়</h4>
                <div className="space-y-2">
                  <a href="#" className="block text-blue-500 border-b py-1 text-lg">
                    ঘর লাগবে কিভাবে কাজ করে?
                  </a>
                  <a href="#" className="block text-blue-500 border-b py-1 text-lg">
                    আমি কিভাবে উপযুক্ত ভাড়া বাড়ি খুঁজে পাব?
                  </a>
                  <a href="#" className="block text-blue-500 border-b py-1 text-lg">
                    কিভাবে ভাড়া রুম খুঁজে পেতে?
                  </a>
                </div>
              </div>

              <Card className="border-red-400">
                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    <span className="text-[#157347] mr-2 text-2xl">
                      <FaShieldHalved />
                    </span>
                    <h5 className="font-bold text-xl text-gray-800">সতর্ক বাণী</h5>
                  </div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>অপরিচিত জায়গায় একা যাবেন না</li>
                    <li>তৃতীয় পক্ষকে সম্পূর্ণ অর্থ প্রদান করবেন না</li>
                  </ul>
                  <a href="#" className="text-blue-500 mt-3 inline-block">
                    সমস্ত নিরাপত্তা টিপস দেখুন
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      {/* Mission  */}
      <Mission />
    </div>
  );
}
