import AccountCard from "@/components/About/AccountCard";
import AdListingCard from "@/components/Ads/AdListingCard";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const FavoritesPage = () => {
  // Mock data for wishlisted ads
  const wishlistedAds = [
    {
      id: 1,
      title: "ধানমন্ডিতে ২ বেডরুমের সুন্দর ফ্ল্যাট",
      location: "ধানমন্ডি, ঢাকা",
      rent: 25000,
      type: "ফ্ল্যাট",
      beds: 2,
      baths: 2,
      postedDate: "2024-01-15",
      views: 45,
      isRent: false,
      image:
        "https://ghor.saifmorshed.com/storage/upload/46/pHW64W6RLGcnThifxubJB657uXaqKJKyegLLbZJS.jpg",
    },
    {
      id: 2,
      title: "গুলশানে অফিস স্পেস ভাড়া",
      location: "গুলশান-২, ঢাকা",
      rent: 50000,
      type: "অফিস",
      beds: 0,
      baths: 2,
      postedDate: "2024-01-10",
      views: 32,
      isRent: false,
      image:
        "https://ghor.saifmorshed.com/storage/upload/46/pHW64W6RLGcnThifxubJB657uXaqKJKyegLLbZJS.jpg",
    },
    {
      id: 3,
      title: "বনানীতে ১ বেডরুমের ফার্নিশড রুম",
      location: "বনানী, ঢাকা",
      rent: 18000,
      type: "রুম",
      beds: 1,
      baths: 1,
      postedDate: "2024-01-05",
      views: 67,
      isRent: true,
      image:
        "https://ghor.saifmorshed.com/storage/upload/46/pHW64W6RLGcnThifxubJB657uXaqKJKyegLLbZJS.jpg",
    },
  ];

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className=" flex flex-col md:flex-row gap-4 py-12">
        {/* Sidebar */}
        <div className="w-full md:w-4/12 mb-8 md:mb-0  ">
          <AccountCard />
        </div>
        {/* wishlist items */}
        <div className="w-full bg-gray-50 p-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h1 className="text-3xl font-normal">
                  আমার ফেবারিটস বিজ্ঞাপন সমূহ
                </h1>
              </div>
            </div>

            {/* Ads Grid */}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
              {wishlistedAds?.map((ad) => (
                <div key={ad.id} className="relative">
                  <Link to={`/ads/${ad.id}`}>
                    <AdListingCard
                      title={ad.title}
                      location={ad.location}
                      beds={ad.beds ?? 0}
                      baths={ad.baths ?? 0}
                      price={ad.rent}
                      isVerified={false}
                      image={ad.image}
                      isRent={ad.isRent}
                    />
                  </Link>
                  <button className="absolute top-1 right-4 bg-white p-2 rounded-full shadow-md text-red-500 hover:bg-red-50">
                    <Heart className="w-4 h-4 fill-current" />
                  </button>
                </div>
              ))}
            </div>

            {wishlistedAds.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Heart className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  কোনো উইশলিস্ট আইটেম পাওয়া যায়নি
                </h3>
                <p className="text-gray-500 mb-4">
                  আপনি এখনো কোনো বিজ্ঞাপন উইশলিস্টে যোগ করেননি।
                </p>
                <Link
                  to="/ads"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  বিজ্ঞাপন ব্রাউজ করুন
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
