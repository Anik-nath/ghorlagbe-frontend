import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
const LiveChat = () => {
  return (
    <div>
      <Card className="my-12">
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
  );
};

export default LiveChat;
