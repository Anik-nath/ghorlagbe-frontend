import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { Link } from "react-router-dom";
import homeicon from "../../../public/assets/icons/home 04.png";

const PostAdSection = () => {
  const features = [
    {
      icon: "https://ghor.saifmorshed.com/frontend/images/icons/home 04.png",
      alt: "Home icon",
      title: "আপনার রুম এবং অবস্থান সম্পর্কে জানতে দিন",
    },
    {
      icon: "https://ghor.saifmorshed.com/frontend/images/icons/Vector.png",
      alt: "Video icon",
      title: "একটি ছোট ভিডিও আপলোড করুন",
    },
    {
      icon: "https://ghor.saifmorshed.com/frontend/images/icons/image.png",
      alt: "Image icon",
      title: "9টি ফটো পর্যন্ত আপলোড করুন",
    },
  ];
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-7xl font-semibold text-gray-800">
          বিজ্ঞাপন পোস্ট করুন
          <br />
          এবং আপনার <span className="text-[#157347]">রুম ভাড়া দিন</span>
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 my-8 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center p-2"
          >
            <div className="flex justify-center mb-4 bg-[#157347] w-16 h-16 rounded-full p-3">
              <img
                src={feature.icon}
                alt={feature.alt}
                className="object-contain"
              />
            </div>
            <h3 className="text-3xl font-medium text-gray-800">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          to="/post-ad"
          className="bg-[#198754] hover:bg-[#157347] text-white px-6 py-3 rounded-md inline-flex items-center font-medium text-md transition-colors duration-200"
        >
          <CirclePlus className="mr-2 w-6 h-6" />
          এখন পোস্ট করুন
        </Link>
      </div>
    </section>
  );
};

export default PostAdSection;
