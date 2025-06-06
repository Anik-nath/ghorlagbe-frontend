import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Home, Building2, Hotel, Store, Upload, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const PostRentPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPropertyType, setSelectedPropertyType] = useState('');
  const [selectedPurpose, setSelectedPurpose] = useState('');
  const [selectedReligion, setSelectedReligion] = useState('');
  const [formData, setFormData] = useState({
    // Property details
    title: '',
    description: '',
    propertyType: '',
    
    // Location
    division: '',
    district: '',
    area: '',
    address: '',
    
    // Specifications
    bedrooms: '',
    bathrooms: '',
    floor: '',
    totalFloors: '',
    size: '',
    
    // Rent information
    monthlyRent: '',
    deposit: '',
    otherCharges: '',
    
    // Amenities
    furnished: '',
    parking: false,
    elevator: false,
    generator: false,
    internet: false,
    gas: false,
    water: false,
    
    // Contact
    contactName: '',
    contactPhone: '',
    alternativePhone: '',
    contactEmail: '',
    
    // Additional
    availableFrom: '',
    condition: '',
    preferredTenant: '',
    images: []
  });

  const navigate = useNavigate();
  const { toast } = useToast();

  const propertyTypes = [
    { id: 'flat', name: 'ফ্ল্যাট ভাড়া', icon: Building2 },
    { id: 'sublet', name: 'সিট ভাড়া', icon: Hotel },
    { id: 'house', name: 'সাবলেট', icon: Home },
  ];

  const purposeTypes = [
    { id: 'bachelor', name: 'ব্যাচেলর', icon: '👤' },
    { id: 'family', name: 'ফ্যামিলি', icon: '👨‍👩‍👧‍👦' },
  ];

  const religionTypes = [
    { id: 'islam', name: 'ইসলাম', icon: '☪️' },
    { id: 'hindu', name: 'হিন্দু', icon: '🕉️' },
    { id: 'buddhist', name: 'বুদ্ধিস্ট', icon: '☸️' },
    { id: 'christian', name: 'খৃষ্ট', icon: '✝️' },
    { id: 'other', name: 'অন্যান্য', icon: '💎' },
  ];

  const handlePropertyTypeSelect = (type: string) => {
    setSelectedPropertyType(type);
    setFormData({ ...formData, propertyType: type });
  };

  const handlePurposeSelect = (purpose: string) => {
    setSelectedPurpose(purpose);
  };

  const handleReligionSelect = (religion: string) => {
    setSelectedReligion(religion);
  };

  const handleNext = () => {
    if (currentStep === 1 && !selectedPropertyType) {
      toast({
        title: "দয়া করে একটি সম্পত্তির ধরণ নির্বাচন করুন",
        variant: "destructive",
      });
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    toast({
      title: "সফল!",
      description: "আপনার বিজ্ঞাপন সফলভাবে পোস্ট হয়েছে।",
    });
    navigate('/myads');
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3].map((step) => (
        <React.Fragment key={step}>
          <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 ${
            step <= currentStep 
              ? 'bg-blue-500 border-blue-500 text-white' 
              : 'bg-white border-gray-300 text-gray-400'
          }`}>
            {step < currentStep ? <Check className="h-6 w-6" /> : step}
          </div>
          {step < 3 && (
            <div className={`w-24 h-1 ${step < currentStep ? 'bg-blue-500' : 'bg-gray-300'}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <div className="flex justify-center">
      <Card className="w-full max-w-3xl shadow-lg rounded-xl border border-gray-200">
        <CardContent className="p-0">
          {/* Step Indicator - matches screenshot */}
          <div className="flex items-center justify-between px-12 pt-8 pb-0">
            {[1, 2, 3].map((step, idx) => (
              <React.Fragment key={step}>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-blue-500 bg-white text-blue-600 text-lg font-bold">
                    {step}
                  </div>
                </div>
                {idx < 2 && (
                  <div className="flex-1 h-0.5 bg-gray-200 mx-2" />
                )}
              </React.Fragment>
            ))}
          </div>
          {/* Main Content */}
          <div className="px-10 pt-6 pb-10">
            {/* Title */}
            <h2 className="text-2xl font-bold text-center mb-10">আপনার বিনামূল্যে বিজ্ঞাপন দিয়ে শুরু করুন</h2>
            {/* Property Type Selection */}
            <div className="mb-10">
              <h3 className="text-lg font-semibold mb-6 text-center">
                আপনি কি ভাড়া দিতে? <span className="text-red-500">*</span>
              </h3>
              <div className="flex justify-center gap-8">
                {propertyTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => handlePropertyTypeSelect(type.id)}
                    className={`flex flex-col items-center px-8 py-6 rounded-lg border-2 shadow-sm transition-all text-center focus:outline-none focus:ring-2 focus:ring-blue-200 ${
                      selectedPropertyType === type.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 bg-white hover:border-blue-300'
                    }`}
                  >
                    <type.icon className={`h-10 w-10 mb-3 ${selectedPropertyType === type.id ? 'text-blue-500' : 'text-gray-600'}`} />
                    <span className="font-medium text-base">{type.name}</span>
                  </button>
                ))}
              </div>
            </div>
            {/* Purpose Selection */}
            <div className="mb-10">
              <h3 className="text-lg font-semibold mb-6 text-center">
                আপনি কাদের কাছে ভাড়া দিতে চান?? <span className="text-red-500">*</span>
              </h3>
              <div className="flex justify-center gap-8">
                {purposeTypes.map((purpose) => (
                  <button
                    key={purpose.id}
                    type="button"
                    onClick={() => handlePurposeSelect(purpose.id)}
                    className={`flex flex-col items-center px-8 py-6 rounded-lg border-2 shadow-sm transition-all text-center focus:outline-none focus:ring-2 focus:ring-blue-200 ${
                      selectedPurpose === purpose.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 bg-white hover:border-blue-300'
                    }`}
                  >
                    <span className="text-3xl mb-2">{purpose.icon}</span>
                    <span className="font-medium text-base">{purpose.name}</span>
                  </button>
                ))}
              </div>
            </div>
            {/* Religion Selection */}
            <div className="mb-10">
              <h3 className="text-lg font-semibold mb-6 text-center">
                আপনি কোন ধর্মের অনুসারীদের কাছে ভাড়া দিতে চান?
              </h3>
              <div className="flex justify-center gap-6 flex-wrap">
                {religionTypes.map((religion) => (
                  <button
                    key={religion.id}
                    type="button"
                    onClick={() => handleReligionSelect(religion.id)}
                    className={`flex flex-col items-center px-6 py-4 rounded-lg border-2 shadow-sm transition-all text-center focus:outline-none focus:ring-2 focus:ring-blue-200 mb-2 ${
                      selectedReligion === religion.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 bg-white hover:border-blue-300'
                    }`}
                  >
                    <span className="text-2xl mb-2">{religion.icon}</span>
                    <span className="font-medium text-sm">{religion.name}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-end mt-8">
              <Button 
                onClick={handleNext}
                className="bg-green-600 hover:bg-green-700 px-8 py-3"
                disabled={!selectedPropertyType || !selectedPurpose}
              >
                পরের ধাপ
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderStep2 = () => (
    <div className="max-w-4xl mx-auto">
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-center">বিস্তারিত তথ্য</CardTitle>
        </CardHeader>
        <CardContent className="p-8 space-y-6">
          {/* Basic Information */}
          <div>
            <label className="block text-sm font-medium mb-2">
              নাম <span className="text-red-500">*</span>
            </label>
            <Input
              value={formData.contactName}
              onChange={(e) => setFormData({...formData, contactName: e.target.value})}
              placeholder="Ekram Hossen"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                সম্পদের নাম <span className="text-red-500">*</span> (in English)
              </label>
              <Input
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                placeholder=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                উপশহর এলাকা
              </label>
              <Input
                placeholder="উপশহর এলাকা লিখুন"
              />
            </div>
          </div>

          {/* Property Description */}
          <div>
            <label className="block text-sm font-medium mb-2">
              সম্পদ বিবরণ <span className="text-red-500">*</span>
            </label>
            <Textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              placeholder=""
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              সম্পদ বিবরণ <span className="text-red-500">*</span>
            </label>
            <Textarea
              placeholder="সম্পদ বিবরণ লিখুন"
              rows={4}
            />
          </div>

          {/* Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                সর্ব প্রতম বিভাগ <span className="text-red-500">*</span>
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option>ঢাকা</option>
                <option>চট্টগ্রাম</option>
                <option>সিলেট</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                জেলার নাম বাছাই <span className="text-red-500">*</span>
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option>নরসিংদী</option>
                <option>ঢাকা</option>
                <option>গাজীপুর</option>
              </select>
            </div>
          </div>

          {/* Property Details */}
          <div>
            <h3 className="font-semibold text-lg mb-4">বাসার বিবরণ</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">বেড রুমের সংখ্যা</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">বাথ রুমের সংখ্যা</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">বালকনির সংখ্যা</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">ফ্ল্যাট সাইজ যদি জানা থাকে</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="font-semibold text-lg mb-4">অন্যান্য সুবিধা সমূহ</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'লিফট সুবিধা', key: 'elevator' },
                { name: 'জেনারেটর সুবিধা', key: 'generator' },
                { name: 'পার্কিং এর সুবিধা', key: 'parking' },
                { name: 'WiFi সুবিধা', key: 'wifi' },
                { name: 'গ্যাস সুবিধা', key: 'gas' }
              ].map((amenity) => (
                <div key={amenity.key} className="flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-sm border border-green-600 text-green-600 rounded">আছে</button>
                    <button className="px-3 py-1 text-sm bg-gray-800 text-white rounded">✓ নাই</button>
                  </div>
                  <span className="text-sm">{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Property Details */}
          <div>
            <h3 className="font-semibold text-lg mb-4">বাসার বিবরণ</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">বাসার গেট</label>
                <div className="flex space-x-4">
                  <button className="px-4 py-2 border border-gray-300 rounded text-sm">ছোট</button>
                  <button className="px-4 py-2 border border-gray-300 rounded text-sm">মধ্যম</button>
                  <button className="px-4 py-2 bg-gray-800 text-white rounded text-sm">বড়</button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">বিক্রয় দিন</label>
                  <Input type="date" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">পছন্দ করো</label>
                  <Input type="date" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between pt-6">
            <Button variant="outline" onClick={handlePrevious}>
              পূর্ববর্তী ধাপ
            </Button>
            <Button onClick={handleNext} className="bg-green-600 hover:bg-green-700">
              পরের ধাপ
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderStep3 = () => (
    <div className="max-w-4xl mx-auto">
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-center">অন্যান্য বিবরণ</CardTitle>
        </CardHeader>
        <CardContent className="p-8 space-y-6">
          {/* Property Name */}
          <div>
            <label className="block text-sm font-medium mb-2">
              বাসার সম্পত্তি
            </label>
            <Textarea
              placeholder="আপনার বাসার অন্যান্য সুবিধার কথা লিখুন"
              rows={4}
              className="w-full"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium mb-4">
              ছবি যুক্ত করুন <span className="text-red-500">*</span>
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <input 
                type="file" 
                multiple 
                accept="image/*"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
              />
            </div>
          </div>

          <div className="flex justify-between items-center pt-6">
            <Button variant="outline" onClick={handlePrevious} className="px-6">
              পূর্ববর্তী ধাপ
            </Button>
            <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700 px-8">
              পোস্ট সাবমিট করুন
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">আপনার বিনামূল্যে বিজ্ঞাপন দিয়ে শুরু করুন</h1>
        </div>

        {renderStepIndicator()}

        <div className="mb-8">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
        </div>
      </div>
    </div>
  );
};

export default PostRentPage;
