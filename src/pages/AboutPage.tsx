
import PostAdSection from "@/components/Home/PostAdSection";

const AboutPage = () => {
  return (
    <div>
      <div className="max-w-6xl px-6 mx-auto ">
        {/* Header */}
        <div className="text-center mb-12 bg-gray-50  py-8 my-12">
          <h1 className="md:text-6xl font-bold text-gray-700 mb-4">আমাদের সম্পর্কে</h1>
          <p className="md:text-xl text-gray-800 px-2 mx-auto">
            আমরা "ঘর লাগবে" ভাড়া সেবা সংক্রান্ত একটি আনুষাঙ্গিক প্ল্যাটফর্ম, যা
            আপনার পছন্দের ঘর/সিট/ফ্যাট সহজে খোঁজতে সাহায্য করে। আমরা আপনার
            জনপ্রিয় স্থানে সবচেয়ে ভাল ঘর,সিট,ফ্যাট, বাড়ি এবং সম্পদ নির্বাচনে
            সাহায্য করতে গর্বিত আছি, আপনার বাসস্থানে সন্তুষ্টি নিশ্চিত করতে।
            আমরা ঘর খুঁজে পেতে এবং নিরাপদ বাসস্থানে আপনার পাশে থাকতে চাই।
          </p>
        </div>
      </div>
      {/* PostAdSection Section */}
      <PostAdSection />
    </div>
  );
};

export default AboutPage;
