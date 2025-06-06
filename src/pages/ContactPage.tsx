
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "সফল!",
      description: "আপনার বার্তা পাঠানো হয়েছে। আমরা শীঘ্রই যোগাযোগ করব।",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const faqItems = [
    {
      question: 'কিভাবে বিজ্ঞাপন পোস্ট করব?',
      answer: 'আপনার অ্যাকাউন্টে লগইন করার পর "ফ্রি বিজ্ঞাপন" বাটনে ক্লিক করুন এবং নির্দেশনা অনুসরণ করুন।'
    },
    {
      question: 'বিজ্ঞাপন পোস্ট করতে কত টাকা লাগে?',
      answer: 'মৌলিক বিজ্ঞাপন পোস্ট করা সম্পূর্ণ বিনামূল্যে। প্রিমিয়াম ফিচারের জন্য আলাদা চার্জ রয়েছে।'
    },
    {
      question: 'কিভাবে আমার বিজ্ঞাপন সম্পাদনা করব?',
      answer: '"আমার বিজ্ঞাপন" পেজে গিয়ে যে বিজ্ঞাপনটি সম্পাদনা করতে চান সেটিতে ক্লিক করুন।'
    },
    {
      question: 'নিরাপত্তার জন্য কি ব্যবস্থা রয়েছে?',
      answer: 'আমরা সব ব্যবহারকারীর তথ্য যাচাই করি এবং সন্দেহজনক কার্যকলাপ নিরীক্ষণ করি।'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">যোগাযোগ করুন</h1>
            <p className="text-xl text-gray-600">আমরা আপনার সেবায় সর্বদা প্রস্তুত</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-green-600" />
                    ফোন
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">+৮৮০ ১৮১৩-২২২৫২৫</p>
                  <p className="text-gray-600">সকাল ৯টা - রাত ৯টা</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-green-600" />
                    ইমেইল
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">info@ghorlagbe.com</p>
                  <p className="text-gray-600">২৤ ঘন্টা সেবা</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-green-600" />
                    ঠিকানা
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">ঢাকা, বাংলাদেশ</p>
                  <p className="text-gray-600">প্রধান অফিস</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-green-600" />
                    কর্মঘন্টা
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>সোমবার - শুক্রবার:</span>
                      <span>৯:০০ - ১৮:০০</span>
                    </div>
                    <div className="flex justify-between">
                      <span>শনিবার:</span>
                      <span>১০:০০ - ১৬:০০</span>
                    </div>
                    <div className="flex justify-between">
                      <span>রবিবার:</span>
                      <span>বন্ধ</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>আমাদের কাছে বার্তা পাঠান</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">নাম *</label>
                        <Input
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="আপনার নাম লিখুন"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">ইমেইল *</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="আপনার ইমেইল লিখুন"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">ফোন নম্বর</label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="আপনার ফোন নম্বর"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">বিষয় *</label>
                        <select 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          required
                        >
                          <option value="">বিষয় নির্বাচন করুন</option>
                          <option value="technical">প্রযুক্তিগত সমস্যা</option>
                          <option value="billing">বিলিং সংক্রান্ত</option>
                          <option value="general">সাধারণ জিজ্ঞাসা</option>
                          <option value="complaint">অভিযোগ</option>
                          <option value="suggestion">পরামর্শ</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">বার্তা *</label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="আপনার বার্তা বিস্তারিত লিখুন..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      বার্তা পাঠান
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

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
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h4 className="font-semibold text-lg mb-2">{item.question}</h4>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Live Chat Section */}
          <Card className="mt-8">
            <CardContent className="p-6 text-center">
              <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">লাইভ চ্যাট</h3>
              <p className="text-gray-600 mb-4">
                তাৎক্ষণিক সহায়তার জন্য আমাদের লাইভ চ্যাটে যোগাযোগ করুন
              </p>
              <Button className="bg-green-600 hover:bg-green-700">
                <MessageCircle className="h-4 w-4 mr-2" />
                চ্যাট শুরু করুন
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
