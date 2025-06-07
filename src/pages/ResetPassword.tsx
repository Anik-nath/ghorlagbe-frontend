import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaEnvelope } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { FaHeartCircleCheck, FaShieldHeart } from "react-icons/fa6";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "সফল!",
        description: "পাসওয়ার্ড রিসেট লিঙ্ক আপনার ইমেইলে পাঠানো হয়েছে।",
      });
      navigate("/login");
    } catch (error) {
      toast({
        title: "ত্রুটি!",
        description:
          "পাসওয়ার্ড রিসেট লিঙ্ক পাঠাতে সমস্যা হয়েছে। আবার চেষ্টা করুন।",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto px-2">
          <div className="flex justify-center">
            <div className="md:w-6/12 w-full">
              <Card className="border-none bg-gray-50">
                <CardContent className="p-12 font-medium">
                  <h1 className="text-[1.7rem] text-center mb-8">
                    পাসওয়ার্ড রিসেট করুন
                  </h1>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6 bg-white p-8 rounded-md"
                  >
                    <div className="flex items-center">
                      <div className="bg-gray-100 h-12 flex items-center rounded-l-md">
                        <span className="flex items-center px-3 rounded-l-md">
                          <FaEnvelope className="h-5 w-5" />
                        </span>
                      </div>
                      <Input
                        type="email"
                        placeholder="আপনার ইমেইল ঠিকানা"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12 rounded-r-md rounded-l-none !text-lg !leading-6"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 bg-[#198754] hover:bg-[#157347] text-lg"
                      disabled={isLoading}
                    >
                      {isLoading ? "পাঠানো হচ্ছে..." : "রিসেট লিঙ্ক পাঠান"}
                    </Button>

                    <div className="text-center">
                      <p className="text-lg font-normal text-gray-600">
                        মনে পড়ে গেছে?{" "}
                        <a href="/login" className="text-blue-600 underline">
                          লগইন করুন
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

export default ResetPassword;
