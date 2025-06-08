import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "@/components/Ads/Breadcrumbs";
import {
  FaWhatsapp,
  FaFacebookMessenger,
  FaFacebookF,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaShieldHeart, FaXTwitter } from "react-icons/fa6";
import { AiFillWechat } from "react-icons/ai";
import SendMessage from "@/components/MessageButton/SendMessage";

const AdsDetails = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="max-w-7xl mx-auto md:px-8 px-6 py-8 min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumbs />
      {/* Ads title and share buttons */}
      <div className="flex md:flex-row flex-col md:items-center md:justify-between mb-4">
        <div className="pt-6">
          <h1 className="text-2xl font-bold">Ads Title</h1>
          <div className="flex items-center gap-2 mb-4 text-gray-600 text-md">
            <span>১২:০০ PM</span>
            <span>১২৩ মেইন স্ট্রিট, ঢাকা</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600 mr-2">শেয়ার করুন:</span>
          <a
            href="#"
            title="WhatsApp"
            className="bg-[#157347] hover:bg-green-600 rounded-full p-2 flex items-center justify-center"
          >
            <FaWhatsapp className="text-white w-4 h-4 md:w-[18px] md:h-[18px]" />
          </a>
          <a
            href="#"
            title="Messenger"
            className="bg-[#157347] hover:bg-green-600 rounded-full p-2 flex items-center justify-center"
          >
            <FaFacebookMessenger className="text-white w-4 h-4 md:w-[18px] md:h-[18px]" />
          </a>
          <a
            href="#"
            title="Mail"
            className="bg-[#157347] hover:bg-green-600 rounded-full p-2 flex items-center justify-center"
          >
            <MdEmail className="text-white w-4 h-4 md:w-[18px] md:h-[18px]" />
          </a>
          <a
            href="#"
            title="Facebook"
            className="bg-[#157347] hover:bg-green-600 rounded-full p-2 flex items-center justify-center"
          >
            <FaFacebookF className="text-white w-4 h-4 md:w-[18px] md:h-[18px]" />
          </a>
          <a
            href="#"
            title="X"
            className="bg-[#157347] hover:bg-green-600 rounded-full p-2 flex items-center justify-center"
          >
            <FaXTwitter className="text-white w-4 h-4 md:w-[18px] md:h-[18px]" />
          </a>
        </div>
      </div>
      {/* Image grid layout */}
      <div className="grid grid-cols-3 gap-6">
        {/* Left column: one large image */}
        <div className="col-span-2">
          <img
            src="https://ghor.saifmorshed.com/storage/upload/46/pHW64W6RLGcnThifxubJB657uXaqKJKyegLLbZJS.jpg"
            alt="Main"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {/* Right column: two stacked images */}
        <div className="flex flex-col gap-6">
          <img
            src="https://ghor.saifmorshed.com/storage/upload/46/pHW64W6RLGcnThifxubJB657uXaqKJKyegLLbZJS.jpg"
            alt="Secondary 1"
            className="w-full h-full object-cover rounded-lg"
          />
          <img
            src="https://ghor.saifmorshed.com/storage/upload/46/pHW64W6RLGcnThifxubJB657uXaqKJKyegLLbZJS.jpg"
            alt="Secondary 2"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      {/* details and message*/}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
        <div className="col-span-2">
          {/* price */}
          <div className="flex justify-between items-center gap-4">
            <div className="flex items-center text-lg font-semibold text-[#157347]">
              <span className="text-2xl">৳ 3000</span>
              <span>/</span>
              <span>30</span>
            </div>
            <div className="text-lg text-gray-700">
              অভায়লাবিলিটি: <span className="font-semibold">আছে</span>
            </div>
          </div>
          {/* states */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 border rounded-md py-8">
            <div className=" flex flex-col items-center">
              <span className="text-gray-600 font-medium mb-1">বেডরুম</span>
              <span className="text-xl ">৩</span>
            </div>
            <div className="  flex flex-col items-center">
              <span className="text-gray-600 font-medium mb-1">ওয়াশরুম</span>
              <span className="text-xl ">২</span>
            </div>
            <div className="  flex flex-col items-center">
              <span className="text-gray-600 font-medium mb-1">বারান্দা</span>
              <span className="text-xl ">১</span>
            </div>
            <div className=" flex flex-col items-center">
              <span className="text-gray-600 font-medium mb-1">
                ফ্ল্যাট কততলা
              </span>
              <span className="text-xl ">১</span>
            </div>
          </div>
          {/* detils */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2 text-[#157347]">বিবরণ</h2>
            <p className="text-gray-700">
              এটি একটি ডামি বাংলা টেক্সট। এখানে বিজ্ঞাপনের বিস্তারিত তথ্য থাকবে।
              আপনি চাইলে এখানে আপনার বিজ্ঞাপনের বিবরণ লিখতে পারেন। আরও তথ্যের
              জন্য আমাদের সাথে যোগাযোগ করুন। বিজ্ঞাপনটি যাচাই-বাছাই করে দেখুন।
              সঠিক তথ্যের জন্য বিজ্ঞাপনদাতার সাথে সরাসরি কথা বলুন।
            </p>
          </div>
          {/* Extra facilities */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-[#157347]">
              অন্যান্য সুবিধাসমূহ / ভাড়া পরিমাণ
            </h2>
            <div className="overflow-x-auto">
              <div className="grid grid-cols-4 bg-white ">
                <div className="font-semibold py-2 pr-4 text-gray-700">
                  সুবিধা
                </div>
                <div className="font-semibold py-2 px-4 text-gray-700">আছে</div>
                <div className="font-semibold py-2 px-4 text-gray-700">
                  ভাড়া পরিমাণ
                </div>
                <div className="font-semibold py-2 px-4 text-gray-700">
                  টাকা
                </div>

                <div className="py-2 pr-4">গ্যাস</div>
                <div className="py-2 px-4">আছে</div>
                <div className="py-2 px-4">ভাড়া</div>
                <div className="py-2 px-4 flex items-center gap-1">
                  <span>৳</span> 3000
                </div>

                <div className="py-2 pr-4">সিকিউরিটি</div>
                <div className="py-2 px-4">আছে</div>
                <div className="py-2 px-4">বিল</div>
                <div className="py-2 px-4 flex items-center gap-1">
                  <span>৳</span> 500
                </div>

                <div className="py-2 pr-4">ওয়াইফাই</div>
                <div className="py-2 px-4">আছে</div>
                <div className="py-2 px-4">পানি বিল</div>
                <div className="py-2 px-4 flex items-center gap-1">
                  <span>৳</span> 200
                </div>

                <div className="py-2 pr-4">লিফট</div>
                <div className="py-2 px-4">আছে</div>
                <div className="py-2 px-4">বিদ্যুৎ বিল</div>
                <div className="py-2 px-4 flex items-center gap-1">
                  <span>৳</span> 1000
                </div>

                <div className="py-2 pr-4">জেনারেটর</div>
                <div className="py-2 px-4">আছে</div>
                <div className="py-2 px-4"></div>
                <div className="py-2 px-4"></div>

                <div className="py-2 pr-4">পার্কিং</div>
                <div className="py-2 px-4">আছে</div>
                <div className="py-2 px-4"></div>
                <div className="py-2 px-4"></div>
              </div>
            </div>
          </div>
          {/* map view */}
          <div className="mt-10">
            <h2
              className="text-xl font-semibold mb-4"
              style={{ color: "#157347" }}
            >
              ম্যাপ ভিউ
            </h2>
            <div className="w-full h-72 rounded-lg overflow-hidden shadow">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902776276097!2d90.39156331543118!3d23.75087619458951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b894b6b7aefd%3A0x6e7e6a8e6e8e6e8e!2s123%20Main%20St%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1680000000000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-4 shadow-md rounded-md p-4">
            {/* user profile */}
            <div className="flex items-center bg-white">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User Profile"
                className="w-20 h-20 rounded-full border-4 border-[#157347] mr-4"
              />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg font-semibold">
                    মোঃ রাকিবুল হাসান
                  </span>
                  <span
                    className="inline-flex items-center px-2 py-0.5 rounded bg-green-100 text-green-800 text-xs font-medium"
                    title="Verified"
                  >
                    <FaShieldHeart className="w-4 h-4 mr-1 text-green-500" />
                    ভেরিফাইড
                  </span>
                </div>
                <span className="text-sm text-gray-500">
                  যোগদান: জানুয়ারি ২০২৩
                </span>
              </div>
            </div>
            {/* contact info */}
            <SendMessage />
            <button
              className="w-full bg-[#157347] hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2"
              type="button"
            >
              <FaPhoneAlt size={18} className="text-white" />
              ০১৭xxxxxxxx
            </button>
          </div>
          {/* warning */}
          <div className="mt-6">
            <div className="bg-white border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow">
              <strong className="font-bold flex items-center gap-2 mb-1 text-black">
                <FaShieldHeart className="text-red-500 w-5 h-5" />
                সতর্কতা বাণী!
              </strong>
              <ul className="list-disc list-inside text-md m-2 text-black">
                <li>অপরিচিত জায়গায় একা যাবেন না।</li>
                <li>তৃতীয় পক্ষকে সম্পূর্ণ অর্থ প্রদান করবেন না।</li>
              </ul>
              <a
                href="#"
                className="text-xs text-blue-600 underline hover:text-blue-800"
              >
                আরও সতর্কতা পড়ুন
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdsDetails;
