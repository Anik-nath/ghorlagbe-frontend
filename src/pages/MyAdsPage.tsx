import AccountCard from "@/components/About/AccountCard";
import AdListingCard from "@/components/Ads/AdListingCard";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const MyAdsPage = () => {
  // Mock data for user's ads
  const myAds = [
    {
      id: 1,
      title: "গ্যাস ও বিদ্যুৎ সুবিধা সহ ব্যাচেলর ঘর ভাড়া দেওয়া হবে",
      location: "Fotika, hathazari, চট্টগ্রাম, চট্টগ্রাম",
      rent: 25000,
      type: "ফ্ল্যাট",
      status: "active",
      postedDate: "2024-01-15",
      views: 45,
      inquiries: 3,
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
      status: "active",
      postedDate: "2024-01-10",
      views: 32,
      inquiries: 1,
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
      status: "rented",
      postedDate: "2024-01-05",
      views: 67,
      inquiries: 8,
      isRent: true,
      image:
        "https://ghor.saifmorshed.com/storage/upload/46/pHW64W6RLGcnThifxubJB657uXaqKJKyegLLbZJS.jpg",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-gray-100 text-gray-800";
      case "rented":
        return "bg-blue-100 text-blue-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "সক্রিয়";
      case "inactive":
        return "নিষ্ক্রিয়";
      case "rented":
        return "ভাড়া হয়েছে";
      case "pending":
        return "অপেক্ষায়";
      default:
        return "অজানা";
    }
  };

  return (
    <div className="min-h-screen max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
      <div className=" flex flex-col md:flex-row gap-4 py-12">
        {/* Sidebar */}
        <div className="w-full md:w-4/12">
          <AccountCard />
        </div>
        {/* ads list  */}
        <div className="w-full bg-gray-50 p-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center md:mb-8 mb-4">
              <div>
                <h1 className="md:text-2xl text-xl font-normal">আমার সকল বিজ্ঞাপন সমূহ</h1>
              </div>
            </div>

            {/* Ads Grid */}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
              {myAds?.map((ad) => (
                <Link key={ad.id} to={`/ads/${ad.id}`}>
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
              ))}
            </div>

            {myAds.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Calendar className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  কোনো বিজ্ঞাপন পাওয়া যায়নি
                </h3>
                <p className="text-gray-500 mb-4">
                  এই ক্যাটাগরিতে আপনার কোনো বিজ্ঞাপন নেই।
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAdsPage;
