
import React from 'react';
import { Check, Crown, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const UpgradePage = () => {
  const plans = [
    {
      name: 'ফ্রি',
      price: 0,
      period: 'মাস',
      description: 'শুরুর জন্য উপযুক্ত',
      features: [
        '৩টি বিজ্ঞাপন পোস্ট করুন',
        'বেসিক লিস্টিং',
        'ইমেইল সাপোর্ট',
        'সাধারণ অনুসন্ধান',
      ],
      limitations: [
        'সীমিত ছবি আপলোড',
        'প্রিমিয়াম এলাকায় অ্যাক্সেস নেই',
      ],
      current: true,
      buttonText: 'বর্তমান প্ল্যান',
      buttonVariant: 'outline' as const,
      popular: false
    },
    {
      name: 'স্ট্যান্ডার্ড',
      price: 499,
      period: 'মাস',
      description: 'ব্যক্তিগত ব্যবহারের জন্য',
      features: [
        '১৫টি বিজ্ঞাপন পোস্ট করুন',
        'ফিচার্ড লিস্টিং',
        'প্রায়োরিটি সাপোর্ট',
        'অ্যাডভান্সড অনুসন্ধান',
        '১০টি ছবি আপলোড',
        'সব এলাকায় অ্যাক্সেস',
        'অ্যানালিটিক্স',
      ],
      limitations: [],
      current: false,
      buttonText: 'আপগ্রেড করুন',
      buttonVariant: 'default' as const,
      popular: true
    },
    {
      name: 'প্রিমিয়াম',
      price: 999,
      period: 'মাস',
      description: 'ব্যবসায়িক ব্যবহারের জন্য',
      features: [
        'আনলিমিটেড বিজ্ঞাপন',
        'টপ ফিচার্ড লিস্টিং',
        '২৪/৭ ফোন সাপোর্ট',
        'কাস্টম ব্র্যান্ডিং',
        '২৫টি ছবি আপলোড',
        'প্রিমিয়াম ব্যাজ',
        'বিস্তারিত অ্যানালিটিক্স',
        'একাধিক যোগাযোগের মাধ্যম',
      ],
      limitations: [],
      current: false,
      buttonText: 'আপগ্রেড করুন',
      buttonVariant: 'default' as const,
      popular: false
    }
  ];

  const features = [
    {
      icon: Crown,
      title: 'প্রিমিয়াম সুবিধা',
      description: 'আপনার বিজ্ঞাপনকে আরও দৃশ্যমান করুন'
    },
    {
      icon: Zap,
      title: 'দ্রুত অনুমোদন',
      description: 'আপনার বিজ্ঞাপন দ্রুত প্রকাশিত হবে'
    },
    {
      icon: Star,
      title: 'বিশেষ সাপোর্ট',
      description: '২৪/৭ প্রায়োরিটি কাস্টমার সাপোর্ট'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">প্ল্যান আপগ্রেড করুন</h1>
            <p className="text-xl text-gray-600">আরও বেশি সুবিধা পেতে উপযুক্ত প্ল্যান বেছে নিন</p>
          </div>

          {/* Features Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pricing Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-green-500 border-2' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      জনপ্রিয়
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold">
                    ৳{plan.price}
                    <span className="text-lg font-normal text-gray-600">/{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <div key={limitationIndex} className="flex items-start space-x-3">
                        <div className="h-5 w-5 flex items-center justify-center mt-0.5">
                          <div className="h-1 w-3 bg-gray-400 rounded"></div>
                        </div>
                        <span className="text-sm text-gray-500">{limitation}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant={plan.buttonVariant}
                    className={`w-full ${
                      plan.buttonVariant === 'default' 
                        ? 'bg-green-600 hover:bg-green-700' 
                        : ''
                    }`}
                    disabled={plan.current}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Comparison Table */}
          <Card>
            <CardHeader>
              <CardTitle>বিস্তারিত তুলনা</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">সুবিধা</th>
                      <th className="text-center py-3 px-4">ফ্রি</th>
                      <th className="text-center py-3 px-4">স্ট্যান্ডার্ড</th>
                      <th className="text-center py-3 px-4">প্রিমিয়াম</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4">বিজ্ঞাপন সংখ্যা</td>
                      <td className="text-center py-3 px-4">৩টি</td>
                      <td className="text-center py-3 px-4">১৫টি</td>
                      <td className="text-center py-3 px-4">আনলিমিটেড</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">ছবি আপলোড</td>
                      <td className="text-center py-3 px-4">৫টি</td>
                      <td className="text-center py-3 px-4">১০টি</td>
                      <td className="text-center py-3 px-4">২৫টি</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">ফিচার্ড লিস্টিং</td>
                      <td className="text-center py-3 px-4">❌</td>
                      <td className="text-center py-3 px-4">✅</td>
                      <td className="text-center py-3 px-4">✅</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">অ্যানালিটিক্স</td>
                      <td className="text-center py-3 px-4">❌</td>
                      <td className="text-center py-3 px-4">বেসিক</td>
                      <td className="text-center py-3 px-4">বিস্তারিত</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">কাস্টমার সাপোর্ট</td>
                      <td className="text-center py-3 px-4">ইমেইল</td>
                      <td className="text-center py-3 px-4">ইমেইল + চ্যাট</td>
                      <td className="text-center py-3 px-4">২৪/৭ ফোন</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">আজই আপগ্রেড করুন!</h3>
                <p className="text-gray-600 mb-6">
                  স্ট্যান্ডার্ড প্ল্যানে আপগ্রেড করুন এবং ৫০% বেশি ভিউ পান
                </p>
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  এখনই আপগ্রেড করুন
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradePage;
