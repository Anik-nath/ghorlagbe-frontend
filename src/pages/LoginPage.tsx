
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Check, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    phone: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    console.log('Login attempt with:', formData);
    
    try {
      const success = await login(formData.phone, formData.password);
      console.log('Login result:', success);
      
      if (success) {
        toast({
          title: "সফল!",
          description: "আপনি সফলভাবে লগইন করেছেন।",
        });
        console.log('Navigating to profile...');
        navigate('/profile');
      } else {
        toast({
          title: "ত্রুটি!",
          description: "ভুল ফোন নম্বর বা পাসওয়ার্ড।",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Login error:', error);
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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Section - Benefits */}
            <div className="flex flex-col justify-center">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold">ভেরিফাই করুন</h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">সহজে ভাড়াটিয়ার সাথে বিশ্বাস বাড়ান</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">আপনাকে দ্রুত এবং নিরাপদ এবং নিরাপত্তা এবং আগ্রহী প্রভাবিত দেশের</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">শুধুমাত্র কিছু মিনিট</p>
                  </div>
                </div>

                {/* Test Credentials */}
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">পরীক্ষার জন্য:</h3>
                  <p className="text-sm text-blue-700">ফোন: 01813222525</p>
                  <p className="text-sm text-blue-700">পাসওয়ার্ড: 12345678</p>
                </div>
              </div>
            </div>

            {/* Right Section - Login Form */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h1 className="text-2xl font-bold text-center mb-8">লগইন করুন</h1>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        type="tel"
                        placeholder="018xxxxxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="h-12"
                        required
                      />
                    </div>

                    <div>
                      <Input
                        type="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        className="h-12"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-12 bg-green-600 hover:bg-green-700 text-lg"
                      disabled={isLoading}
                    >
                      {isLoading ? 'লগইন হচ্ছে...' : 'লগইন'}
                    </Button>

                    <div className="text-center space-y-2">
                      <p className="text-sm text-gray-600">
                        <a href="#" className="text-blue-600 hover:underline">
                          পাসওয়ার্ড ভুলে গেছেন?
                        </a>
                      </p>
                      <p className="text-sm text-gray-600">
                        <Link to="/register" className="text-blue-600 hover:underline">
                          → রেজিস্ট্রেশন
                        </Link>
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
