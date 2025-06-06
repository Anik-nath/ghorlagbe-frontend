
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Check, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register form submitted:', formData);
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
              </div>
            </div>

            {/* Right Section - Registration Form */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h1 className="text-2xl font-bold text-center mb-8">রেজিস্ট্রেশন করুন</h1>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        type="text"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        className="h-12"
                        required
                      />
                    </div>

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

                    <div>
                      <Input
                        type="password"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                        className="h-12"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-12 bg-green-600 hover:bg-green-700 text-lg"
                    >
                      নিবন্ধন
                    </Button>

                    <div className="text-center space-y-2">
                      <p className="text-sm text-gray-600">
                        <Link to="/login" className="text-blue-600 hover:underline">
                          পাসওয়ার্ড ভুলে গেছেন?
                        </Link>
                      </p>
                      <p className="text-sm text-gray-600">
                        <Link to="/login" className="text-blue-600 hover:underline">
                          → লগইন
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

export default RegisterPage;
