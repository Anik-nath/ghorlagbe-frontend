import Mission from "@/components/About/Misson";

const AboutPage = () => {
  return (
    <div>
      <div className="max-w-6xl px-6 mx-auto ">
        {/* Header */}
        <div className="text-center mb-12 bg-gray-50  py-8 my-12">
          <h1 className="text-3xl font-medium mb-4">আমাদের সম্পর্কে</h1>
          <p className="text-md text-gray-800 px-2 mx-auto">
            আমরা "ঘর লাগবে" ভাড়া সেবা সংক্রান্ত একটি আনুষাঙ্গিক প্ল্যাটফর্ম, যা
            আপনার পছন্দের ঘর/সিট/ফ্যাট সহজে খোঁজতে সাহায্য করে। আমরা আপনার
            জনপ্রিয় স্থানে সবচেয়ে ভাল ঘর,সিট,ফ্যাট, বাড়ি এবং সম্পদ নির্বাচনে
            সাহায্য করতে গর্বিত আছি, আপনার বাসস্থানে সন্তুষ্টি নিশ্চিত করতে।
            আমরা ঘর খুঁজে পেতে এবং নিরাপদ বাসস্থানে আপনার পাশে থাকতে চাই।
          </p>
        </div>
        {/* Services */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏠</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">ঘর লাগবে সম্পর্কে</h3>
            <p className="text-gray-600">
              আমাদের প্ল্যাটফর্মের মাধ্যমে সহজেই আপনার স্বপ্নের বাড়ি খুঁজে পান
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📞</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">যোগাযোগ</h3>
            <p className="text-gray-600">
              যেকোনো সহায়তার জন্য আমাদের সাথে যোগাযোগ করুন
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">
              শর্তাবলী এবং গোপনীয়তা
            </h3>
            <p className="text-gray-600">
              আমাদের নীতিমালা এবং গোপনীয়তা সম্পর্কে জানুন
            </p>
          </div>
        </div> */}

        {/* Contact Info */}
        {/* <div className="bg-white rounded-lg p-8 shadow-sm text-center">
          <h2 className="text-2xl font-bold mb-6">যোগাযোগের তথ্য</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">ফোন</h3>
              <p className="text-gray-600">+88 01815 123456</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">ইমেইল</h3>
              <p className="text-gray-600">support@ghorlagbe.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">কার্যসময়</h3>
              <p className="text-gray-600">
                সোম-শুক্র: ৯সকাল - ৮.৩০সন্ধ্যা
                <br />
                সপ্তাহান্ত: ১০সকাল - ৭.৩০সন্ধ্যা
              </p>
            </div>
          </div>
        </div> */}
      </div>
      {/* Mission Section */}
      <Mission />
    </div>
  );
};

export default AboutPage;
