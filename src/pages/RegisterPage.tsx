import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import {
  FaArrowRightToBracket,
  FaHeartCircleCheck,
  FaShieldHeart,
} from "react-icons/fa6";
import { FaUser, FaMobile, FaLock } from "react-icons/fa";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "ত্রুটি!",
        description: "পাসওয়ার্ড মিলছে না।",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const success = await register(
        formData.fullName,
        formData.phone,
        formData.password
      );

      if (success) {
        toast({
          title: "সফল!",
          description: "আপনি সফলভাবে নিবন্ধিত হয়েছেন।",
        });
        navigate("/profile");
      } else {
        toast({
          title: "ত্রুটি!",
          description: "রেজিস্ট্রেশনে সমস্যা হয়েছে। আবার চেষ্টা করুন।",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        title: "ত্রুটি!",
        description: "রেজিস্ট্রেশনে সমস্যা হয়েছে। আবার চেষ্টা করুন।",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white py-14">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto px-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Section - Benefits */}
            <div className="flex flex-col justify-center">
              <div className="bg-white rounded-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 border border-[#198754] rounded-full flex items-center justify-center mr-4">
                    <FaShieldHeart className="h-10 w-10 text-[#198754]" />
                  </div>
                  <h2 className="text-5xl font-medium">ভেরিফাই করুন</h2>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <FaHeartCircleCheck className="h-5 w-5 text-[#198754] mt-1 flex-shrink-0" />
                    <p className="text-gray-900 text-xl">
                      সহজে ভাড়াটিয়ার সাথে বিশ্বাস বাড়ান
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaHeartCircleCheck className="h-5 w-5 text-[#198754] mt-1 flex-shrink-0" />
                    <p className="text-gray-900 text-xl">
                      আলাদা দাঁড়া এবং সুরক্ষা এবং নিরাপত্তা এবং আত্মনির্ভরণে
                      আপনি প্রতিশ্রুতি দেখান
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaHeartCircleCheck className="h-5 w-5 text-[#198754] mt-1 flex-shrink-0" />
                    <p className="text-gray-900 text-xl">
                      শুধুমাত্র কিছু মিনিট
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Registration Form */}
            <div>
              <Card className="border-none rounded-none bg-gray-50">
                <CardContent className="p-12 font-medium">
                  <h1 className="text-[1.7rem] text-center mb-8">
                    রেজিস্ট্রেশন করুন
                  </h1>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 bg-white p-6 rounded-md"
                  >
                    <div className="flex items-center">
                      <div className="bg-gray-100 h-12 flex items-center rounded-l-md">
                        <span className="flex items-center px-3 rounded-l-md">
                          <FaUser className="h-5 w-5" />
                        </span>
                      </div>
                      <Input
                        type="text"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="h-12 rounded-r-md rounded-l-none !text-lg !leading-6"
                        required
                      />
                    </div>

                    <div className="flex items-center">
                      <div className="bg-gray-100 h-12 flex items-center rounded-l-md">
                        <span className="flex items-center px-3 rounded-l-md">
                          <FaMobile className="h-5 w-5" />
                        </span>
                      </div>
                      <Input
                        type="tel"
                        placeholder="018xxxxxxx"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="h-12 rounded-r-md rounded-l-none !text-lg !leading-6"
                        required
                      />
                    </div>

                    <div className="flex items-center">
                      <div className="bg-gray-100 h-12 flex items-center rounded-l-md">
                        <span className="flex items-center px-3 rounded-l-md">
                          <FaLock className="h-5 w-5" />
                        </span>
                      </div>
                      <Input
                        type="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        className="h-12 rounded-r-md rounded-l-none !text-lg !leading-6"
                        required
                      />
                    </div>

                    <div className="flex items-center">
                      <div className="bg-gray-100 h-12 flex items-center rounded-l-md">
                        <span className="flex items-center px-3 rounded-l-md">
                          <FaLock className="h-5 w-5" />
                        </span>
                      </div>
                      <Input
                        type="password"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            confirmPassword: e.target.value,
                          })
                        }
                        className="h-12 rounded-r-md rounded-l-none !text-lg !leading-6"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 bg-[#198754] hover:bg-[#157347] text-lg"
                      disabled={isLoading}
                    >
                      {isLoading ? "নিবন্ধন হচ্ছে..." : "নিবন্ধন"}
                    </Button>

                    <div className="text-center space-y-2">
                      <div className="flex justify-end gap-8 text-lg font-normal text-gray-600">
                        <Link
                          to="/password/reset"
                          className="text-blue-600 underline"
                        >
                          পাসওয়ার্ড ভুলে গেছেন?
                        </Link>
                        <Link
                          to="/login"
                          className="text-blue-600 underline flex flex-row items-center gap-2"
                        >
                          <span>
                            <FaArrowRightToBracket className="w-4 h-4" />{" "}
                          </span>
                          নিবন্ধিত
                        </Link>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
