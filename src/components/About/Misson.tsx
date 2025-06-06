import { Button } from "@/components/ui/button";

const Mission = () => {
  return (
    <div className="bg-gray-50 pt-10 p-8 pb-20">
      <h2 className="text-4xl font-medium text-center ">
        একটি বিনামূল্যে বিজ্ঞাপন পোস্ট করুন এবং দিনে আপনার রুম ভাড়া দিন
      </h2>
      <p className="text-center text-lg text-gray-600 my-4">
        লোকেদের আপনার সম্পত্তি, আপনার রুম এবং অভযান সম্পত্তি জানাতে দিন। একটি
        ছোট ডিজিটাল এবং গেটি ইচ্ছুক পর্যায় আপলোডেট করুন।
      </p>
      <div className="text-center">
        <Button className="hover:bg-[#157347] bg-[#198754] mb-4 text-lg font-medium">
          ফ্রি বিজ্ঞাপন পোস্ট করুন
        </Button>
        <p className="text-gray-600 text-lg">
          রুম প্রয়োজন??{" "}
          <a href="#" className="text-blue-600 hover:underline">
            রুম চাই বিজ্ঞাপন পোস্ট করুন
          </a>
        </p>
      </div>
    </div>
  );
};

export default Mission;
