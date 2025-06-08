import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import {
  FaHeartCircleCheck,
  FaLock,
  FaMobile,
  FaPhone,
  FaShieldHeart,
} from "react-icons/fa6";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    console.log("Login attempt with:", formData);

    try {
      const success = await login(formData.phone, formData.password);
      console.log("Login result:", success);

      if (success) {
        toast({
          title: "সফল!",
          description: "আপনি সফলভাবে লগইন করেছেন।",
        });
        console.log("Navigating to profile...");
        navigate("/profile");
      } else {
        toast({
          title: "ত্রুটি!",
          description: "ভুল ফোন নম্বর বা পাসওয়ার্ড।",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "ত্রুটি!",
        description: "লগইনে সমস্যা হয়েছে। আবার চেষ্টা করুন।",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Section - Benefits */}
            <div className="flex flex-col justify-center">
              <div className="bg-white rounded-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 border border-[#198754] rounded-full flex items-center justify-center mr-4">
                    <FaShieldHeart className="h-10 w-10 text-[#198754]" />
                  </div>
                  <h2 className="text-4xl font-medium">ভেরিফাই করুন</h2>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <FaHeartCircleCheck className="h-5 w-5 text-[#198754] mt-1 flex-shrink-0" />
                    <p className="text-gray-900 text-lg">
                      সহজে ভাড়াটিয়ার সাথে বিশ্বাস বাড়ান
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaHeartCircleCheck className="h-5 w-5 text-[#198754] mt-1 flex-shrink-0" />
                    <p className="text-gray-900 text-lg">
                      আলাদা দাঁড়া এবং সুরক্ষা এবং নিরাপত্তা এবং আত্মনির্ভরণে
                      আপনি প্রতিশ্রুতি দেখান
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaHeartCircleCheck className="h-5 w-5 text-[#198754] mt-1 flex-shrink-0" />
                    <p className="text-gray-900 text-lg">
                      শুধুমাত্র কিছু মিনিট
                    </p>
                  </div>
                </div>

                {/* Test Credentials */}
                {/* <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">
                    পরীক্ষার জন্য:
                  </h3>
                  <p className="text-sm text-blue-700">ফোন: 01813222525</p>
                  <p className="text-sm text-blue-700">পাসওয়ার্ড: 12345678</p>
                </div> */}
              </div>
            </div>

            {/* Right Section - Login Form */}
            <div>
              <Card className="border-none bg-gray-50">
                <CardContent className="p-10 font-medium">
                  <h1 className="text-[1.5rem] text-center">লগ ইন</h1>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6 bg-white p-8 rounded-md"
                  >
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
                        className="h-12 rounded-r-md rounded-l-none !text-md !leading-6"
                        required
                      />
                    </div>

                    <div className="flex items-center">
                      <div className="bg-gray-100 h-12 flex items-center rounded-l-md">
                        <span className="flex items-center px-3  rounded-l-md">
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
                        className="h-12 rounded-r-md rounded-l-none !text-md !leading-6 "
                        required
                      />
                    </div>
                    {/* remember me */}
                    <div className="flex items-center space-x-2">
                      <Input
                        type="checkbox"
                        id="remember"
                        className="h-4 w-4 text-[#198754] !rounded border border-[#198754] focus:ring-[#198754] accent-[#198754]"
                      />
                      <label
                        htmlFor="remember"
                        className="text-gray-600 text-md"
                      >
                        Remember me
                      </label>
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-10 bg-[#198754] hover:bg-[#157347] text-sm"
                      disabled={isLoading}
                    >
                      {isLoading ? "নিবন্ধন হচ্ছে..." : "নিবন্ধন"}
                    </Button>

                    <div className="text-right space-y-2">
                      <p className="text-md font-normal text-gray-600">
                        <a
                          href="/password/reset"
                          className="text-blue-600 underline"
                        >
                          Forgot Your Password?
                        </a>
                      </p>
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

export default LoginPage;
