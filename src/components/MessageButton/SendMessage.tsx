import React, { useState, useRef, useEffect } from "react";
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
  const sampleMessages: Message[] = [
    {
      id: "1",
      text: "হ্যালো, কেমন আছেন?",
      sender: "user",
      timestamp: new Date(Date.now() - 3600000), // 1 hour ago
    },
    {
      id: "2",
      text: "আমি ভালো আছি, ধন্যবাদ! আপনি কেমন আছেন?",
      sender: "recipient",
      timestamp: new Date(Date.now() - 3000000), // 50 minutes ago
    },
    {
      id: "3",
      text: "আমিও ভালো আছি। আপনার সেবা সম্পর্কে কিছু জানতে চাই।",
      sender: "user",
      timestamp: new Date(Date.now() - 2400000), // 40 minutes ago
    },
    {
      id: "4",
      text: "অবশ্যই, আমি কিভাবে আপনাকে সাহায্য করতে পারি?",
      sender: "recipient",
      timestamp: new Date(Date.now() - 1800000), // 30 minutes ago
    },
    {
      id: "5",
      text: "আপনার প্রতিষ্ঠানের সার্ভিস চার্জ সম্পর্কে জানতে চাই।",
      sender: "user",
      timestamp: new Date(Date.now() - 600000), // 10 minutes ago
    },
  ];
  const { user, isAuthenticated } = useAuth();
  const [messages, setMessages] = useState<Message[]>(sampleMessages);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
            <div className="border border-gray-300 rounded-lg p-4 h-72 overflow-y-auto bg-green-100">
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
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            <form
              onSubmit={handleSendMessage}
              className="flex items-center gap-2 bg-white rounded-full shadow-sm border border-gray-300 px-4 py-3 transition-all"
            >
              <input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="আপনার মেসেজ লিখুন..."
                className="flex-1 border-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-800 placeholder-gray-600"
                aria-label="Message input"
              />
              <Button
                type="submit"
                disabled={!newMessage.trim()}
                aria-label="Send message"
                className="p-2 px-3 rounded-full hover:bg-[#157347] text-white bg-[#198754] disabled:bg-gray-300 disabled:text-gray-900 disabled:cursor-not-allowed transition-colors shadow-sm hover:shadow-md active:scale-95 disabled:scale-100"
              >
                <Send className="w-6 h-6" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SendMessage;
