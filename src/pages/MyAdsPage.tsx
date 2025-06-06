
import React, { useState } from 'react';
import { Edit, Trash2, Eye, MoreVertical, MapPin, Calendar, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useAuth } from '@/contexts/AuthContext';

const MyAdsPage = () => {
  const { user } = useAuth();
  const [filter, setFilter] = useState('all');

  // Mock data for user's ads
  const myAds = [
    {
      id: 1,
      title: 'ধানমন্ডিতে ২ বেডরুমের সুন্দর ফ্ল্যাট',
      location: 'ধানমন্ডি, ঢাকা',
      rent: 25000,
      type: 'ফ্ল্যাট',
      status: 'active',
      postedDate: '2024-01-15',
      views: 45,
      inquiries: 3,
      image: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'গুলশানে অফিস স্পেস ভাড়া',
      location: 'গুলশান-২, ঢাকা',
      rent: 50000,
      type: 'অফিস',
      status: 'active',
      postedDate: '2024-01-10',
      views: 32,
      inquiries: 1,
      image: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'বনানীতে ১ বেডরুমের ফার্নিশড রুম',
      location: 'বনানী, ঢাকা',
      rent: 18000,
      type: 'রুম',
      status: 'rented',
      postedDate: '2024-01-05',
      views: 67,
      inquiries: 8,
      image: '/placeholder.svg'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'rented': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'সক্রিয়';
      case 'inactive': return 'নিষ্ক্রিয়';
      case 'rented': return 'ভাড়া হয়েছে';
      case 'pending': return 'অপেক্ষায়';
      default: return 'অজানা';
    }
  };

  const filteredAds = filter === 'all' ? myAds : myAds.filter(ad => ad.status === filter);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">আমার বিজ্ঞাপন</h1>
              <p className="text-gray-600">আপনার পোস্ট করা সমস্ত বিজ্ঞাপন দেখুন ও পরিচালনা করুন</p>
            </div>
            <Button className="bg-green-600 hover:bg-green-700 mt-4 md:mt-0">
              নতুন বিজ্ঞাপন পোস্ট করুন
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">3</div>
                <div className="text-sm text-gray-600">মোট বিজ্ঞাপন</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">2</div>
                <div className="text-sm text-gray-600">সক্রিয় বিজ্ঞাপন</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">144</div>
                <div className="text-sm text-gray-600">মোট ভিউ</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-orange-600">12</div>
                <div className="text-sm text-gray-600">ইনকুয়ারি</div>
              </CardContent>
            </Card>
          </div>

          {/* Filter Tabs */}
          <div className="flex space-x-4 mb-6">
            {[
              { key: 'all', label: 'সব' },
              { key: 'active', label: 'সক্রিয়' },
              { key: 'rented', label: 'ভাড়া হয়েছে' },
              { key: 'inactive', label: 'নিষ্ক্রিয়' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === tab.key 
                    ? 'bg-green-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-green-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Ads Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAds.map((ad) => (
              <Card key={ad.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={ad.image} 
                    alt={ad.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="bg-white/80 hover:bg-white">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          বিস্তারিত দেখুন
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          সম্পাদনা করুন
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="h-4 w-4 mr-2" />
                          মুছে ফেলুন
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(ad.status)}`}>
                      {getStatusText(ad.status)}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{ad.title}</h3>
                  
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{ad.location}</span>
                  </div>
                  
                  <div className="flex items-center text-green-600 mb-3">
                    <DollarSign className="h-4 w-4 mr-1" />
                    <span className="font-semibold">৳{ad.rent.toLocaleString()}/মাস</span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{new Date(ad.postedDate).toLocaleDateString('bn-BD')}</span>
                    </div>
                    <span className="bg-gray-100 px-2 py-1 rounded">{ad.type}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center p-2 bg-blue-50 rounded">
                      <div className="font-semibold text-blue-800">{ad.views}</div>
                      <div className="text-blue-600">ভিউ</div>
                    </div>
                    <div className="text-center p-2 bg-green-50 rounded">
                      <div className="font-semibold text-green-800">{ad.inquiries}</div>
                      <div className="text-green-600">ইনকুয়ারি</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredAds.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Calendar className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">কোনো বিজ্ঞাপন পাওয়া যায়নি</h3>
              <p className="text-gray-500 mb-4">এই ক্যাটাগরিতে আপনার কোনো বিজ্ঞাপন নেই।</p>
              <Button className="bg-green-600 hover:bg-green-700">
                নতুন বিজ্ঞাপন পোস্ট করুন
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAdsPage;
