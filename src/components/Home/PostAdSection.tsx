import { Link } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";

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
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-800">
          বিজ্ঞাপন পোস্ট করুন
          <br />
          এবং আপনার <span className="text-[#157347]">রুম ভাড়া দিন</span>
        </h2>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 my-8 sm:my-12 md:my-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center p-2 sm:p-4"
          >
            <div className="flex justify-center mb-4 bg-[#157347] w-12 h-12 sm:w-16 sm:h-16 rounded-full p-2 sm:p-3">
              <img
                src={feature.icon}
                alt={feature.alt}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-800">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>

      <div className="text-center sm:mt-12">
        <Link
          to="/post-ad"
          className="bg-[#198754] hover:bg-[#157347] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md inline-flex items-center font-medium text-sm sm:text-md transition-colors duration-200"
        >
          <FaCirclePlus className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
          এখন পোস্ট করুন
        </Link>
      </div>
    </section>
  );
};

export default PostAdSection;
