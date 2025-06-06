import { ArrowRight, Heart, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Property {
  id: number;
  title: string;
  price: string;
  day: string;
  location: string;
  beds: number;
  bathrooms: number;
}

const LatestAdvertisement = () => {
  const properties: Property[] = [
    {
      id: 1,
      title: "বাস এ বিশুদ্ধ জুবির সঙ অ্যাপার্টমেন্ট ঘর ভাড়া নেওয়া হবে",
      price: "৳ 3000",
      day: "30",
      location: "Fotika, hathazari, চট্টগ্রাম, চট্টগ্রাম",
      beds: 3,
      bathrooms: 2,
    },
    {
      id: 2,
      title: "একটি সম্পূর্ণ প্রস্তুত ফ্ল্যাট ভাড়া দেওয়া হবে 3 বেড এবং গ্যাস সহ",
      price: "৳ 5000",
      day: "30",
      location: "বনানী, ঢাকা",
      beds: 2,
      bathrooms: 2,
    },
    {
      id: 3,
      title: "ফ্যামিলি ও ব্যাচেলর বাসা ভাড়া রাউজান সদর এ - লাইনের গ্যাস সুবিধা আছে",
      price: "৳ 4000",
      day: "30",
      location: "মিরপুর, ঢাকা",
      beds: 3,
      bathrooms: 1,
    },
    {
      id: 4,
      title: "সিটি সেন্টারের কাছে ফ্ল্যাট",
      price: "৳ 6000",
      day: "30",
      location: "গুলশান, ঢাকা",
      beds: 4,
      bathrooms: 3,
    },
    {
      id: 5,
      title: "বড় রুমের বাসা ভাড়া",
      price: "৳ 3500",
      day: "30",
      location: "উত্তরা, ঢাকা",
      beds: 2,
      bathrooms: 1,
    },
    {
      id: 6,
      title: "নতুন বিল্ডিংয়ের ফ্ল্যাট",
      price: "৳ 4500",
      day: "30",
      location: "মোহাম্মদপুর, ঢাকা",
      beds: 3,
      bathrooms: 2,
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold mb-4">
            সাম্প্রতিক <span className="text-[#198754]">বিজ্ঞাপন</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <Card
              key={property.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src="https://ghor.saifmorshed.com/storage/upload/46/pHW64W6RLGcnThifxubJB657uXaqKJKyegLLbZJS.jpg"
                  alt={property.title}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-sm">
                  Verified
                </div>
                <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                  <Heart className="h-4 w-4 text-gray-600" />
                </button>
              </div>
              <CardContent className="p-4">
                <h3 className="font-normal text-[1.4rem] mb-2">{property.title}</h3>
                <p className="text-green-600 font-medium text-lg mb-2">
                  {property.price}/{property.day}
                </p>
                <p className="text-gray-800 text-lg mb-2">
                  <MapPin className="inline mr-1 w-6 h-6" />
                  {property.location}
                </p>
                <hr className="my-4 border-t border-gray-300" />
                <div className="flex justify-between text-lg text-gray-800">
                  <span>{property.beds} Beds</span>
                  <span>{property.bathrooms} Bathrooms</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/ads">
            <Button className="bg-[#157347] text-md hover:bg-[#198754] text-white">
              আরো ব্রাউজ করুন 
              <ArrowRight className="w-6 h-6" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestAdvertisement;
