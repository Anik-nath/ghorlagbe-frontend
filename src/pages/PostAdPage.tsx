
import React, { useState } from 'react';
import { Upload, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

const PostAdPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    rent: '',
    location: '',
    propertyType: '',
    bedrooms: '',
    bathrooms: '',
    images: []
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Post ad form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">পোস্ট বিজ্ঞাপন</h1>
            <p className="text-gray-600">আপনার সম্পত্তির বিজ্ঞাপন দিন এবং ভাড়াটিয়া খুঁজুন</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>মৌলিক তথ্য</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">বিজ্ঞাপনের শিরোনাম *</label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="যেমন: ধানমন্ডিতে ২ বেডরুমের ফ্ল্যাট ভাড়া"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">বিবরণ *</label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="আপনার সম্পত্তি সম্পর্কে বিস্তারিত লিখুন..."
                    rows={4}
                    required
                  />
                </div>
              </CardContent>
            </Card>

            {/* Property Details */}
            <Card>
              <CardHeader>
                <CardTitle>সম্পত্তির বিবরণ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">সম্পত্তির ধরণ *</label>
                    <select 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      value={formData.propertyType}
                      onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                      required
                    >
                      <option value="">নির্বাচন করুন</option>
                      <option value="apartment">অ্যাপার্টমেন্ট</option>
                      <option value="house">বাড়ি</option>
                      <option value="room">রুম</option>
                      <option value="flat">ফ্ল্যাট</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">মাসিক ভাড়া (টাকা) *</label>
                    <Input
                      type="number"
                      value={formData.rent}
                      onChange={(e) => setFormData({...formData, rent: e.target.value})}
                      placeholder="০০০০০"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">বেডরুম সংখ্যা *</label>
                    <select 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      value={formData.bedrooms}
                      onChange={(e) => setFormData({...formData, bedrooms: e.target.value})}
                      required
                    >
                      <option value="">নির্বাচন করুন</option>
                      <option value="1">১</option>
                      <option value="2">২</option>
                      <option value="3">৩</option>
                      <option value="4">৪</option>
                      <option value="5+">৫+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">বাথরুম সংখ্যা *</label>
                    <select 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      value={formData.bathrooms}
                      onChange={(e) => setFormData({...formData, bathrooms: e.target.value})}
                      required
                    >
                      <option value="">নির্বাচন করুন</option>
                      <option value="1">১</option>
                      <option value="2">২</option>
                      <option value="3">৩</option>
                      <option value="4">৪</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">ঠিকানা *</label>
                  <Input
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    placeholder="এলাকা, শহর"
                    required
                  />
                </div>
              </CardContent>
            </Card>

            {/* Images */}
            <Card>
              <CardHeader>
                <CardTitle>ছবি আপলোড করুন</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">ছবি আপলোড করতে ক্লিক করুন বা ড্র্যাগ এন্ড ড্রপ করুন</p>
                  <Button type="button" variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    ছবি যোগ করুন
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Submit */}
            <div className="text-center">
              <Button 
                type="submit" 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 px-12"
              >
                বিজ্ঞাপন পোস্ট করুন
              </Button>
              <p className="text-sm text-gray-600 mt-4">
                বিজ্ঞাপন পোস্ট করার আগে আমাদের <a href="#" className="text-blue-600 hover:underline">নীতিমালা</a> পড়ুন
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostAdPage;
