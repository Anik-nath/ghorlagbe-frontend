import { Heart, Shield, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />,
      title: "আমরা সবচেয়ে ব্যস্ত",
      description:
        "প্রতি 3 মিনিটে কেউ একজন স্পেয়াররুমে একজন ফ্ল্যাটমেট খুঁজে পায়। বিজ্ঞাপনের সবচেয়ে বড় নির্বাচনের সাথে, আপনি আপনারটি খুঁজে পাবেন।",
    },
    {
      icon: <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />,
      title: "নিরাপত্তা",
      description:
        "আপনার নিরাপত্তা আমাদের শীর্ষ অগ্রাধিকার. বিজ্ঞাপন এবং বিষয়বস্তু পরীক্ষা করার জন্য আমাদের কাছে মডারেটরদের একটি দল সপ্তাহে 7 দিন কাজ করে।",
    },
    {
      icon: <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />,
      title: "আমরা মানুষের জন্য করছি",
      description:
        "নিখুঁত হাউসমেট সম্পর্কে প্রত্যেকের ধারণা আলাদা, তাই আপনার জন্য কী গুরুত্বপূর্ণ তার উপর ভিত্তি করে অনুসন্ধান করুন।",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center py-4 shadow-lg transition-shadow duration-300"
            >
              <CardContent>
                {feature.icon}
                <h3 className="text-3xl font-medium mb-2">{feature.title}</h3>
                <p className="text-gray-800 text-lg">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
