
import React from 'react';
import { Calendar, Bell, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const UpdatesPage = () => {
  const updates = [
    {
      id: 1,
      title: 'নতুন ভেরিফিকেশন সিস্টেম চালু',
      description: 'আমরা একটি উন্নত ভেরিফিকেশন সিস্টেম চালু করেছি যা আরও নিরাপত্তা নিশ্চিত করবে।',
      date: '২০২৪-০৬-০১',
      type: 'নিরাপত্তা',
      status: 'নতুন'
    },
    {
      id: 2,
      title: 'মোবাইল অ্যাপ আপডেট',
      description: 'আমাদের মোবাইল অ্যাপের নতুন ভার্সন রিলিজ হয়েছে নতুন ফিচারসহ।',
      date: '২০২৪-০৫-২৮',
      type: 'অ্যাপ',
      status: 'সাম্প্রতিক'
    },
    {
      id: 3,
      title: 'নতুন এলাকা যোগ',
      description: 'চট্টগ্রাম এবং সিলেট অঞ্চলে আমাদের সেবা সম্প্রসারিত হয়েছে।',
      date: '২০২৪-০৫-২৫',
      type: 'সেবা',
      status: 'গুরুত্বপূর্ণ'
    },
    {
      id: 4,
      title: 'রিভিউ সিস্টেম উন্নতি',
      description: 'ভাড়াটিয়া এবং বাড়িওয়ালাদের জন্য উন্নত রিভিউ সিস্টেম চালু করা হয়েছে।',
      date: '২০২৪-০৫-২০',
      type: 'ফিচার',
      status: 'সাম্প্রতিক'
    },
    {
      id: 5,
      title: 'নিরাপত্তা আপডেট',
      description: 'ব্যবহারকারীদের তথ্যের নিরাপত্তা বৃদ্ধির জন্য নতুন এনক্রিপশন চালু করা হয়েছে।',
      date: '২০২৪-০৫-১৫',
      type: 'নিরাপত্তা',
      status: 'গুরুত্বপূর্ণ'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'নতুন': return 'bg-green-100 text-green-800';
      case 'সাম্প্রতিক': return 'bg-blue-100 text-blue-800';
      case 'গুরুত্বপূর্ণ': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'নিরাপত্তা': return <Bell className="h-5 w-5" />;
      case 'অ্যাপ': return <TrendingUp className="h-5 w-5" />;
      default: return <Calendar className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">আপডেট</h1>
          <p className="text-lg text-gray-600">
            আমাদের প্ল্যাটফর্মের সর্বশেষ আপডেট এবং নতুন ফিচার সম্পর্কে জানুন
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-600">৫০+</h3>
              <p className="text-gray-600">নতুন ফিচার</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Bell className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-blue-600">১০০+</h3>
              <p className="text-gray-600">বাগ ফিক্স</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-purple-600">মাসিক</h3>
              <p className="text-gray-600">নিয়মিত আপডেট</p>
            </CardContent>
          </Card>
        </div>

        {/* Updates List */}
        <div className="space-y-6">
          {updates.map((update) => (
            <Card key={update.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-green-600">
                      {getTypeIcon(update.type)}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{update.title}</CardTitle>
                      <div className="flex items-center space-x-3 mt-2">
                        <span className="text-sm text-gray-500 flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {update.date}
                        </span>
                        <Badge variant="secondary">{update.type}</Badge>
                        <Badge className={getStatusColor(update.status)}>
                          {update.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {update.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12">
          <Card className="bg-green-600 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">আপডেটের খবর পেতে চান?</h2>
              <p className="mb-6">আমাদের নিউজলেটার সাবস্ক্রাইব করুন এবং সর্বপ্রথম জানুন নতুন ফিচার সম্পর্কে</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="আপনার ইমেইল ঠিকানা"
                  className="flex-1 px-4 py-2 rounded-md text-gray-900"
                />
                <button className="bg-white text-green-600 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
                  সাবস্ক্রাইব
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UpdatesPage;
