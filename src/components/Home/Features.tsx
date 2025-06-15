import { Heart, Shield, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useParams } from "react-router-dom";

const FeaturesSection = () => {
  const features = [
    {
      id: "busy",
      icon: <Heart className="h-8 w-8 text-green-600 mx-auto mb-4" />,
      title: "আমরা সবচেয়ে ব্যস্ত",
      description:
        "প্রতি 3 মিনিটে কেউ একজন স্পেয়াররুমে একজন ফ্ল্যাটমেট খুঁজে পায়। বিজ্ঞাপনের সবচেয়ে বড় নির্বাচনের সাথে, আপনি আপনারটি খুঁজে পাবেন।",
      extraHeight: false,
    },
    {
      id: "security",
      icon: <Shield className="h-8 w-8 text-green-600 mx-auto mb-4" />,
      title: "নিরাপত্তা",
      description:
        "আপনার নিরাপত্তা আমাদের শীর্ষ অগ্রাধিকার. বিজ্ঞাপন এবং বিষয়বস্তু পরীক্ষা করার জন্য আমাদের কাছে মডারেটরদের একটি দল সপ্তাহে 7 দিন কাজ করে।",
      extraHeight: true,
    },
    {
      id: "for-people",
      icon: <Clock className="h-8 w-8 text-green-600 mx-auto mb-4" />,
      title: "আমরা মানুষের জন্য করছি",
      description:
        "নিখুঁত হাউসমেট সম্পর্কে প্রত্যেকের ধারণা আলাদা, তাই আপনার জন্য কী গুরুত্বপূর্ণ তার উপর ভিত্তি করে অনুসন্ধান করুন।",
      extraHeight: false,
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto md:px-4 px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.extraHeight ? "md:row-span-2" : ""}`}
            >
              <Card
                className={`h-full text-center py-4 shadow-lg transition-shadow duration-300`}
              >
                <CardContent className="h-full flex flex-col">
                  <div>
                    {feature.icon}
                    <h3 className="text-2xl font-medium mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-800 text-md">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
