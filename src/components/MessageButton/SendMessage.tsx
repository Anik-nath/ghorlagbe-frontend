import React, { useState } from "react";
import { AiFillWechat } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { Send } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "recipient";
  timestamp: Date;
}

const SendMessage = () => {
  const { user, isAuthenticated } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");

    // Simulate response after 1 second
    setTimeout(() => {
      const responseMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "ধন্যবাদ আপনার মেসেজের জন্য। আমরা শীঘ্রই উত্তর দেব।",
        sender: "recipient",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, responseMessage]);
    }, 1000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="w-full bg-[#157347] hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2"
          type="button"
        >
          <AiFillWechat size={24} className="text-white" />
          একটি মেসেজ পাঠান
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="text-left flex items-center gap-2">
            {isAuthenticated ? (
              <AiFillWechat size={22} className="text-[#157347]" />
            ) : (
              ""
            )}
            {isAuthenticated ? "মেসেজ পাঠান" : "লগইন প্রয়োজন"}
          </DialogTitle>
        </DialogHeader>

        {!isAuthenticated ? (
          <div className="flex flex-col items-center gap-4 py-4">
            <p className="text-lg">মেসেজ পাঠাতে লগইন করুন</p>
            <Button
              className="bg-[#157347] hover:bg-green-700"
              // Replace with your actual login navigation
              onClick={() => {
                // router.push("/login");
                alert("Redirect to login page");
              }}
            >
              লগইন করুন
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="border rounded-lg p-4 h-64 overflow-y-auto bg-green-50">
              {messages.length === 0 ? (
                <div className="flex items-center justify-center h-full text-gray-500">
                  কোনো মেসেজ নেই
                </div>
              ) : (
                <div className="space-y-2">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.sender === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-xs p-2 rounded-lg ${
                          message.sender === "user"
                            ? "bg-[#157347] text-white"
                            : "bg-gray-200 text-gray-800"
                        }`}
                      >
                        <p>{message.text}</p>
                        <p className="text-xs mt-1 opacity-70">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <form onSubmit={handleSendMessage} className="flex gap-2">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="আপনার মেসেজ লিখুন..."
                className="flex-1"
              />
              <Button
                type="submit"
                className="bg-[#157347] hover:bg-green-700"
                disabled={!newMessage.trim()}
              >
                <Send className="w-4 h-4" />
                পাঠান
              </Button>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SendMessage;
