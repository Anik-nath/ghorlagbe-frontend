import StepOne from "@/components/PostAds/StepOne";
import StepThree from "@/components/PostAds/StepThree";
import StepTwo from "@/components/PostAds/StepTwo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const PostRentPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    rent_for: "",
    rent_to: [],
    religion_for: [],
    name: "",
    uphone: "",
    email: "",
    postasother: false,
    location: "",
    district: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    balconies: "",
    floor: "",
    lift: "no",
    generator: "no",
    security: "no",
    parking: "no",
    gas: "no",
    wifi: "no",
    rent_amount: "",
    rent_type: "month",
    rent_negotiable: false,
    electric_bill: "",
    gas_bill: "",
    water_bill: "",
    service_charge: "",
    available_from: "",
    ad_expiry: "",
    description: "",
    images: [],
  });

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCheckboxChange = (name: string, value: string) => {
    setFormData((prev) => {
      const currentValues = prev[name as keyof typeof prev] as string[];
      const updatedValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];

      return {
        ...prev,
        [name]: updatedValues,
      };
    });
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({
        ...prev,
        images: Array.from(e.target.files as FileList),
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  // Define rent options based on rent_for selection
  const getRentToOptions = () => {
    if (formData.rent_for === "0") {
      // ফ্লাট ভাড়া
      return [
        {
          id: "rent-bachelor",
          value: "bachelor",
          label: "ব্যাচেলর",
          icon: "/images/icons/bachelor.png",
        },
        {
          id: "rent-full-family",
          value: "full-family",
          label: "ফ্যামিলি",
          icon: "/images/icons/f-family.png",
        },
      ];
    } else if (formData.rent_for === "1") {
      // সিট ভাড়া
      return [
        {
          id: "rent-male-student",
          value: "male-student",
          label: "ছাত্র",
          icon: "/images/icons/male_student.png",
        },
        {
          id: "rent-female-student",
          value: "female-student",
          label: "ছাত্রী",
          icon: "/images/icons/female_student.png",
        },
        {
          id: "rent-men",
          value: "men",
          label: "পুরুষ",
          icon: "/images/icons/man.png",
        },
        {
          id: "rent-women",
          value: "women",
          label: "মহিলা",
          icon: "/images/icons/woman.png",
        },
        {
          id: "rent-male-jobholder",
          value: "male-jobholder",
          label: "পুরুষ চাকরীজীবী",
          icon: "/images/icons/businessman.png",
        },
        {
          id: "rent-female-jobholder",
          value: "female-jobholder",
          label: "মহিলা চাকরীজীবী",
          icon: "/images/icons/employee.png",
        },
        {
          id: "rent-all-other",
          value: "all-other",
          label: "যেকোনো",
          icon: "/images/icons/anyone.png",
        },
      ];
    } else if (formData.rent_for === "2") {
      // সাবলেট
      return [
        {
          id: "rent-male-student",
          value: "male-student",
          label: "ছাত্র",
          icon: "/images/icons/male_student.png",
        },
        {
          id: "rent-female-student",
          value: "female-student",
          label: "ছাত্রী",
          icon: "/images/icons/female_student.png",
        },
        {
          id: "rent-men",
          value: "men",
          label: "পুরুষ",
          icon: "/images/icons/man.png",
        },
        {
          id: "rent-women",
          value: "women",
          label: "মহিলা",
          icon: "/images/icons/woman.png",
        },
        {
          id: "rent-male-jobholder",
          value: "male-jobholder",
          label: "পুরুষ চাকরীজীবী",
          icon: "/images/icons/businessman.png",
        },
        {
          id: "rent-female-jobholder",
          value: "female-jobholder",
          label: "মহিলা চাকরীজীবী",
          icon: "/images/icons/employee.png",
        },
        {
          id: "rent-small-family",
          value: "small-family",
          label: "ছোট ফ্যামিলি",
          icon: "/images/icons/family.png",
        },
      ];
    }
    return [];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    আপনার বিনামূল্যে বিজ্ঞাপন দিয়ে শুরু করুন
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Progress bar */}
                    <div className="relative">
                      {/* Progress bar line */}
                      <div className="h-1 bg-gray-200 rounded-full relative">
                        <div
                          className="h-1 bg-green-600 rounded-full absolute left-0 top-0"
                          style={{ width: `${(currentStep / 3) * 100}%` }}
                        ></div>
                        {/* Step circles */}
                        <div className="absolute left-0 top-1/2 w-full flex justify-between -translate-y-1/2 pointer-events-none">
                          {[1, 2, 3].map((step) => (
                            <span
                              key={step}
                              className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors
                                ${
                                  currentStep >= step
                                    ? "bg-green-600 border-green-600 text-white"
                                    : "bg-white border-gray-300 text-gray-600"
                                }`}
                              style={{ zIndex: 1 }}
                            >
                              {step}
                            </span>
                          ))}
                        </div>
                      </div>
                      {/* Clickable step buttons below the line */}
                      <div className="flex justify-between mt-6">
                        {[1, 2, 3].map((step) => (
                          <button
                            key={step}
                            type="button"
                            onClick={() => setCurrentStep(step)}
                            className="w-8 h-8 opacity-0"
                            tabIndex={-1}
                            aria-hidden="true"
                          >
                            {step}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 1 */}
                    {currentStep === 1 && (
                      <StepOne
                        formData={formData}
                        handleInputChange={handleInputChange}
                        handleRadioChange={handleRadioChange}
                        handleCheckboxChange={handleCheckboxChange}
                        handleNextStep={handleNextStep}
                        getRentToOptions={getRentToOptions}
                      />
                    )}

                    {/* Step 2 */}
                    {currentStep === 2 && (
                      <StepTwo
                        formData={formData}
                        setFormData={setFormData}
                        handleInputChange={handleInputChange}
                        handleCheckboxChange={handleCheckboxChange}
                        handleRadioChange={handleRadioChange}
                        handleFileChange={handleFileChange}
                        getRentToOptions={getRentToOptions}
                        handlePrevStep={handlePrevStep}
                        handleNextStep={handleNextStep}
                      />
                    )}

                    {/* Step 3 */}
                    {currentStep === 3 && (
                      <StepThree
                        formData={formData}
                        handleInputChange={handleInputChange}
                        handleFileChange={handleFileChange}
                        handlePrevStep={handlePrevStep}
                      />
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostRentPage;
