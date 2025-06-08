import Mission from "@/components/About/Misson";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Clock, Mail } from "lucide-react";
import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import {
  FaCalendar,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    subject: "",
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "সফল!",
      description: "আপনার বার্তা পাঠানো হয়েছে। আমরা শীঘ্রই যোগাযোগ করব।",
    });
    setFormData({
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      subject: "",
      comment: "",
    });
  };

  return (
    <div className="min-h-screen pt-8">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 bg-gray-50 py-12 px-4">
            <h1 className="md:text-3xl text-2xl font-medium mb-4">
              যোগাযোগ | সাহায্য দরকার?
            </h1>
            <hr className="my-4 border-t border-gray-300" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-20">
            {/* Contact Information */}
            <div className="bg-gray-50 p-8 px-12 h-fit">
              <h2 className="text-lg font-semibold mb-8">যোগাযোগ করুন</h2>

              <div className="space-y-4 pl-4 text-lg">
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="h-5 w-5 text-gray-700" />
                  <span>+88 01815 123456</span>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-gray-700" />
                  <span>support@ghorlagbe.com</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gray-700" />
                  <span>Mon to Fri: 9am – 8.30pm</span>
                </div>

                <div className="flex  items-center gap-2">
                  <FaCalendar className="h-5 w-5 text-gray-700" />
                  <span>Weekends: 10am – 7.30pm</span>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-4">
                  সোশ্যাল নেটওয়ার্কে আমরা:
                </h3>
                <div className="flex gap-4">
                  <Link
                    to="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#157347] hover:opacity-80"
                    aria-label="Facebook"
                  >
                    <FaFacebook size={22} />
                  </Link>
                  <Link
                    to="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#157347] hover:opacity-80"
                    aria-label="Twitter"
                  >
                    <FaXTwitter size={22} />
                  </Link>
                  <Link
                    to="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#157347] hover:opacity-80"
                    aria-label="YouTube"
                  >
                    <FaYoutube size={22} />
                  </Link>
                  <Link
                    to="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#157347] hover:opacity-80"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={22} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-none">
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          className="!text-md !font-normal"
                          value={formData.firstname || ""}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              firstname: e.target.value,
                            })
                          }
                          placeholder="First Name"
                          name="firstname"
                          required
                        />
                      </div>
                      <div>
                        <Input
                          className="!text-md !font-normal"
                          value={formData.lastname || ""}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              lastname: e.target.value,
                            })
                          }
                          placeholder="Last Name"
                          name="lastname"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          className="!text-md !font-normal"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="Phone Number"
                          name="phone"
                          required
                        />
                      </div>
                      <div>
                        <Input
                          className="!text-md !font-normal"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="Email"
                          name="email"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Input
                        className="!text-md !font-normal"
                        type="text"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder="Subject"
                        name="subject"
                        required
                      />
                    </div>

                    <div>
                      <Textarea
                        className="!text-md !font-normal"
                        value={formData.comment || ""}
                        onChange={(e) =>
                          setFormData({ ...formData, comment: e.target.value })
                        }
                        placeholder="Leave a comment here..."
                        rows={3}
                        name="comment"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-auto text-md bg-[#198754] hover:bg-[#157347] text-white "
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
          {/* FAQ Section */}
          {/* Live Chat Section */}
        </div>
      </div>
      {/* Mission Section */}
      <Mission />
    </div>
  );
};

export default ContactPage;
