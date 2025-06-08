import { Button } from "@/components/ui/button";

const Mission = () => {
  return (
    <div className="bg-gray-50 pt-10 p-8 pb-20">
      <h2 className="md:text-[2rem] text-2xl font-semibold text-gray-800 text-center ">
        একটি বিনামূল্যে বিজ্ঞাপন পোস্ট করুন এবং দিনে আপনার রুম ভাড়া দিন
      </h2>
      <p className="text-center text-[1rem] text-gray-800 my-3">
        লোকেদের আপনার সম্পত্তি, আপনার রুম এবং অভযান সম্পত্তি জানাতে দিন। একটি
        ছোট ডিজিটাল এবং গেটি ইচ্ছুক পর্যায় আপলোডেট করুন।
      </p>
      <div className="text-center">
        <Button
          asChild
          className="hover:bg-[#157347] bg-[#198754] mb-4 text-md font-medium"
        >
          <a href="/post-ad">ফ্রি বিজ্ঞাপন পোস্ট করুন</a>
        </Button>
        <p className="text-gray-600 md:text-lg text-md">
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
