
import React, { useState } from 'react';
import { Heart, MapPin, Phone, Share2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const FavoritesPage = () => {
  const { toast } = useToast();
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: 'মিরপুরে ৩ বেডরুমের সুন্দর ফ্ল্যাট',
      location: 'মিরপুর-১০, ঢাকা',
      rent: 22000,
      type: 'ফ্ল্যাট',
      bedrooms: 3,
      bathrooms: 2,
      size: 1200,
      image: '/placeholder.svg',
      contactPhone: '01812345678',
      postedDate: '2024-01-15'
    },
    {
      id: 2,
      title: 'উত্তরায় অফিস স্পেস ভাড়া',
      location: 'উত্তরা সেক্টর-৭, ঢাকা',
      rent: 45000,
      type: 'অফিস',
      size: 800,
      image: '/placeholder.svg',
      contactPhone: '01856789012',
      postedDate: '2024-01-12'
    },
    {
      id: 3,
      title: 'বসুন্ধরায় ১ বেডরুমের ফার্নিশড রুম',
      location: 'বসুন্ধরা আবাসিক এলাকা, ঢাকা',
      rent: 20000,
      type: 'রুম',
      bedrooms: 1,
      bathrooms: 1,
      size: 600,
      image: '/placeholder.svg',
      contactPhone: '01934567890',
      postedDate: '2024-01-08'
    },
  ]);

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter(fav => fav.id !== id));
    toast({
      title: "ফেভারিট থেকে সরানো হয়েছে",
      description: "সম্পত্তিটি আপনার ফেভারিট তালিকা থেকে সরিয়ে দেওয়া হয়েছে।",
    });
  };

  const shareProperty = (property: any) => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `${property.title} - ৳${property.rent.toLocaleString()}/মাস`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "লিংক কপি হয়েছে",
        description: "সম্পত্তির লিংক ক্লিপবোর্ডে কপি হয়েছে।",
      });
    }
  };

  const contactOwner = (phone: string) => {
    window.open(`tel:${phone}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">আমার ফেভারিটস</h1>
            <p className="text-gray-600">আপনার পছন্দের সম্পত্তিগুলো এখানে সংরক্ষিত রয়েছে</p>
          </div>

          {/* Stats */}
          <div className="mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    <span className="font-medium">মোট ফেভারিট সম্পত্তি: {favorites.length}টি</span>
                  </div>
                  <Button variant="outline" size="sm">
                    সব শেয়ার করুন
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Favorites Grid */}
          {favorites.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((property) => (
                <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 flex space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="bg-white/80 hover:bg-white"
                        onClick={() => shareProperty(property)}
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="bg-white/80 hover:bg-white text-red-600"
                        onClick={() => removeFavorite(property.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="absolute top-2 left-2">
                      <Heart className="h-5 w-5 text-red-500 fill-current" />
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">{property.title}</h3>
                    
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    
                    <div className="text-green-600 font-bold text-xl mb-3">
                      ৳{property.rent.toLocaleString()}/মাস
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {property.type}
                      </span>
                      {property.bedrooms && (
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                          {property.bedrooms} বেডরুম
                        </span>
                      )}
                      {property.bathrooms && (
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                          {property.bathrooms} বাথরুম
                        </span>
                      )}
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                        {property.size} বর্গফুট
                      </span>
                    </div>

                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => contactOwner(property.contactPhone)}
                      >
                        <Phone className="h-4 w-4 mr-1" />
                        যোগাযোগ
                      </Button>
                      <Button 
                        size="sm" 
                        className="flex-1 bg-green-600 hover:bg-green-700"
                      >
                        বিস্তারিত
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Heart className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">কোনো ফেভারিট নেই</h3>
              <p className="text-gray-500 mb-4">আপনি এখনো কোনো সম্পত্তি ফেভারিট করেননি।</p>
              <Button className="bg-green-600 hover:bg-green-700">
                সম্পত্তি খুঁজুন
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
