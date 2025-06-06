import React, { useState } from 'react';
import { User, Camera, Edit2, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const ProfilePage = () => {
  const { user, updateUser } = useAuth();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    gender: user?.gender || 'male',
    division: user?.division || 'চট্টগ্রাম (Chattagram)',
    district: user?.district || 'চট্টগ্রাম (Chattogram)',
    upazila: user?.upazila || 'হাতহাজারী (Hathazari)',
  });

  const handleSave = () => {
    updateUser(formData);
    setIsEditing(false);
    toast({
      title: "সফল!",
      description: "আপনার প্রোফাইল আপডেট হয়েছে।",
    });
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '',
      gender: user?.gender || 'male',
      division: user?.division || 'চট্টগ্রাম (Chattagram)',
      district: user?.district || 'চট্টগ্রাম (Chattogram)',
      upazila: user?.upazila || 'হাতহাজারী (Hathazari)',
    });
    setIsEditing(false);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 py-12">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 mb-8 md:mb-0">
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h3 className="font-semibold text-blue-800 mb-3">অ্যাকাউন্ট</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-blue-600 hover:underline">আমার বিজ্ঞাপন সমূহ</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">আমার ফেভারিটস</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">আমার প্রোফাইল</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">মেসেজ</a></li>
            </ul>
          </div>
        </aside>
        {/* Main Card */}
        <main className="flex-1 flex justify-center">
          <Card className="w-full max-w-2xl mx-auto p-0">
            <CardHeader className="flex flex-col items-center bg-white rounded-t-lg pt-8 pb-4">
              {/* Profile Picture */}
              <div className="relative mb-4">
                <div className="w-32 h-32 mx-auto bg-green-100 rounded-full flex items-center justify-center overflow-hidden">
                  {user.profilePicture ? (
                    <img 
                      src={user.profilePicture} 
                      alt="Profile" 
                      className="w-32 h-32 rounded-full object-cover"
                    />
                  ) : (
                    <User className="h-16 w-16 text-green-600" />
                  )}
                </div>
                <Button className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 text-sm flex items-center gap-2 shadow" size="sm">
                  <Camera className="h-4 w-4" /> পরিবর্তন করুন
                </Button>
              </div>
              <h2 className="text-xl font-bold mt-8 mb-1">{user.name}</h2>
              <p className="text-gray-600 mb-2 text-sm">সদস্য হয়েছেন {new Date(user.joinDate).toLocaleDateString('bn-BD')}</p>
            </CardHeader>
            <CardContent className="p-8 bg-white rounded-b-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      মোবাইল <span className="text-red-500">*</span>
                    </label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="আপনার ফোন নম্বর লিখুন"
                      className="bg-gray-100"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      নাম <span className="text-red-500">*</span>
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="আপনার নাম লিখুন"
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="আপনার ইমেইল লিখুন"
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                {/* Gender Selection */}
                <div>
                  <label className="block text-sm font-medium mb-3">Gender</label>
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      className={`px-6 py-2 rounded-md border ${formData.gender === 'male' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                      onClick={() => isEditing && setFormData({...formData, gender: 'male'})}
                      disabled={!isEditing}
                    >
                      Male
                    </button>
                    <button
                      type="button"
                      className={`px-6 py-2 rounded-md border ${formData.gender === 'female' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                      onClick={() => isEditing && setFormData({...formData, gender: 'female'})}
                      disabled={!isEditing}
                    >
                      Female
                    </button>
                  </div>
                </div>
                {/* Location Selection */}
                <div>
                  <label className="block text-sm font-medium mb-3">Location</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
                      value={formData.division}
                      onChange={e => setFormData({...formData, division: e.target.value})}
                      disabled={!isEditing}
                    >
                      <option>চট্টগ্রাম (Chattagram)</option>
                    </select>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
                      value={formData.district}
                      onChange={e => setFormData({...formData, district: e.target.value})}
                      disabled={!isEditing}
                    >
                      <option>চট্টগ্রাম (Chattogram)</option>
                    </select>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
                      value={formData.upazila}
                      onChange={e => setFormData({...formData, upazila: e.target.value})}
                      disabled={!isEditing}
                    >
                      <option>হাতহাজারী (Hathazari)</option>
                    </select>
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="flex justify-end gap-2 pt-4">
                  {!isEditing ? (
                    <Button 
                      type="button"
                      onClick={() => setIsEditing(true)}
                      variant="outline"
                      className="flex items-center space-x-2"
                    >
                      <Edit2 className="h-4 w-4" />
                      <span>সম্পাদনা</span>
                    </Button>
                  ) : (
                    <>
                      <Button 
                        type="button"
                        onClick={handleSave}
                        className="flex items-center space-x-2 bg-green-600 hover:bg-green-700"
                      >
                        <Save className="h-4 w-4" />
                        <span>আপডেট করুন</span>
                      </Button>
                      <Button 
                        type="button"
                        onClick={handleCancel}
                        variant="outline"
                        className="flex items-center space-x-2"
                      >
                        <X className="h-4 w-4" />
                        <span>বাতিল</span>
                      </Button>
                    </>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;
