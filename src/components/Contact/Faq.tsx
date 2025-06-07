import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
const Faq = () => {
  const faqItems = [
    {
      question: "কিভাবে বিজ্ঞাপন পোস্ট করব?",
      answer:
        'আপনার অ্যাকাউন্টে লগইন করার পর "ফ্রি বিজ্ঞাপন" বাটনে ক্লিক করুন এবং নির্দেশনা অনুসরণ করুন।',
    },
    {
      question: "বিজ্ঞাপন পোস্ট করতে কত টাকা লাগে?",
      answer:
        "মৌলিক বিজ্ঞাপন পোস্ট করা সম্পূর্ণ বিনামূল্যে। প্রিমিয়াম ফিচারের জন্য আলাদা চার্জ রয়েছে।",
    },
    {
      question: "কিভাবে আমার বিজ্ঞাপন সম্পাদনা করব?",
      answer:
        '"আমার বিজ্ঞাপন" পেজে গিয়ে যে বিজ্ঞাপনটি সম্পাদনা করতে চান সেটিতে ক্লিক করুন।',
    },
    {
      question: "নিরাপত্তার জন্য কি ব্যবস্থা রয়েছে?",
      answer:
        "আমরা সব ব্যবহারকারীর তথ্য যাচাই করি এবং সন্দেহজনক কার্যকলাপ নিরীক্ষণ করি।",
    },
  ];
  return (
    <div>
      {/* FAQ Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageCircle className="h-5 w-5 mr-2 text-green-600" />
            প্রায়শই জিজ্ঞাসিত প্রশ্ন
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-4 last:border-b-0"
              >
                <h4 className="font-semibold text-lg mb-2">{item.question}</h4>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Faq;
