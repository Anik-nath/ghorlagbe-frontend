import { useState } from "react";
import { User as LucideUser, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

export interface User {
  name: string;
  email: string;
  phone: string;
  gender?: string;
  profilePicture?: string;
  division?: string;
  district?: string;
  upazila?: string;
}

const ProfilePage = () => {
  const { user, updateUser } = useAuth();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    gender: user?.gender || "male",
    division: user?.division || "চট্টগ্রাম (Chattagram)",
    district: user?.district || "চট্টগ্রাম (Chattogram)",
    upazila: user?.upazila || "হাতহাজারী (Hathazari)",
    profilePicture: user?.profilePicture || "",
  });

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className=" flex flex-col md:flex-row gap-4 py-12">
        {/* Main Card */}
        <Card className="w-full mx-auto p-0 bg-gray-50 ">
          <CardHeader className="flex flex-col items-center rounded-t-lg pt-4 pb-4">
            {/*  Card Title */}
            <CardTitle className="text-2xl font-semibold text-gray-800 mb-2">
              আমার প্রোফাইল
              {/* Profile Picture */}
              <div className="relative mb-4">
                <div className="w-40 h-40 mx-auto bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                  {user.profilePicture ? (
                    <img
                      src={user.profilePicture}
                      alt="Profile"
                      className="w-32 h-32 rounded-full object-cover"
                    />
                  ) : (
                    <User className="h-16 w-16 text-gray-500" />
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  id="profile-upload"
                  style={{ display: "none" }}
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        if (reader.result) {
                          setFormData((prev) => ({
                            ...prev,
                            profilePicture: reader.result as string,
                          }));
                        }
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
                <Button
                  className="absolute text-lg left-1/2 -bottom-4 transform -translate-x-1/2 bg-orange-500 hover:bg-orange-400 text-white px-4 py-2 rounded-full"
                  size="sm"
                  type="button"
                  onClick={() => {
                    const input = document.getElementById("profile-upload");
                    if (input) (input as HTMLInputElement).click();
                  }}
                >
                  পরিবর্তন করুন
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8  rounded-b-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg mb-0">
                    মোবাইল <span>*</span>
                  </label>
                  <Input
                    value={formData.phone}
                    readOnly
                    placeholder="আপনার ফোন নম্বর লিখুন"
                    className="bg-gray-200 !text-lg !border border-gray-300 !text-black !font-normal"
                  />
                </div>
                <div>
                  <label className="block text-lg mb-0">
                    নাম <span>*</span>
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="আপনার নাম লিখুন"
                    className="!text-lg !border border-gray-300"
                  />
                </div>
                {/* Email */}
                <div>
                  <label className="block text-lg mb-0">
                    Email <span>*</span>
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="আপনার ইমেইল লিখুন"
                    className="!text-lg !border border-gray-300"
                  />
                </div>
                {/* Gender Selection */}
                <div>
                  <label className="block text-lg mb-0">Gender</label>
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      className={`px-12 py-1 rounded-md border ${
                        formData.gender === "male"
                          ? "bg-gray-800 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                      onClick={() =>
                        isEditing &&
                        setFormData({ ...formData, gender: "male" })
                      }
                    >
                      Male
                    </button>
                    <button
                      type="button"
                      className={`px-12 py-1 rounded-md border ${
                        formData.gender === "female"
                          ? "bg-gray-800 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                      onClick={() =>
                        isEditing &&
                        setFormData({ ...formData, gender: "female" })
                      }
                    >
                      Female
                    </button>
                  </div>
                </div>
              </div>

              {/* Location Selection */}
              <div>
                <label className="block text-lg mb-0">Location</label>
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <select
                    className="w-full px-3 py-2 border border-gray-300 border-r-0"
                    value={formData.division}
                    onChange={(e) =>
                      setFormData({ ...formData, division: e.target.value })
                    }
                  >
                    <option>চট্টগ্রাম (Chattagram)</option>
                  </select>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 border-r-0"
                    value={formData.district}
                    onChange={(e) =>
                      setFormData({ ...formData, district: e.target.value })
                    }
                  >
                    <option>চট্টগ্রাম (Chattogram)</option>
                  </select>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 "
                    value={formData.upazila}
                    onChange={(e) =>
                      setFormData({ ...formData, upazila: e.target.value })
                    }
                  >
                    <option>হাতহাজারী (Hathazari)</option>
                  </select>
                </div>
              </div>
              {/* Action Buttons */}
              <div className="flex justify-end gap-2 pt-4">
                <Button
                  type="submit"
                  variant="outline"
                  className="flex items-center space-x-2 text-white hover:bg-[##157347] bg-[#198754] hover:text-white"
                >
                  <span className="text-lg font-normal">আপডেট করুন</span>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
        {/* Sidebar */}
        <div className="w-full md:w-4/12 mb-8 md:mb-0  ">
          <div className="rounded-md border p-4 mb-6">
            <h3 className="font-medium mb-3 text-lg">অ্যাকাউন্ট</h3>
            <ul className="space-y-1 text-md pl-10 font-medium">
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  আমার বিজ্ঞাপন সমূহ
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  আমার ফেভারিটস
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  আমার প্রোফাইল
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  মেসেজ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
