import { Button } from "@/components/ui/button";
import { FaCheck } from "react-icons/fa6";

const StepOne = ({
  formData,
  handleRadioChange,
  handleCheckboxChange,
  handleNextStep,
  getRentToOptions,
  handleInputChange,
}) => {
  return (
    <div className="space-y-8">
      <div>
        <h5 className="text-center font-medium mb-4">
          আপনি কি ভাড়া দিতে ?<span className="text-red-500">*</span>
        </h5>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            {
              id: "rent-for-house",
              value: "0",
              label: "ফ্লাট ভাড়া",
              icon: "/assets/icons/housing.png",
            },
            {
              id: "rent-for-flat",
              value: "1",
              label: "সিট ভাড়া",
              icon: "/assets/icons/beds.png",
            },
            {
              id: "rent-for-sit",
              value: "2",
              label: "সাবলেট",
              icon: "/assets/icons/house.png",
            },
          ].map((item) => (
            <div key={item.id} className="text-center relative">
              <input
                type="radio"
                id={item.id}
                name="rent_for"
                value={item.value}
                checked={formData.rent_for === item.value}
                onChange={() => handleRadioChange("rent_for", item.value)}
                className="hidden"
                required
              />
              <label
                htmlFor={item.id}
                className={`block p-4 border rounded-lg cursor-pointer transition-all relative overflow-hidden border-gray-200 hover:border-gray-300`}
                style={{ minWidth: 110 }}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className={`w-12 h-12 mx-auto mb-2 transition-all duration-200 ${
                    formData.rent_for === item.value
                      ? ""
                      : "grayscale hover:grayscale-0"
                  }`}
                />
                <div>{item.label}</div>
                {formData.rent_for === item.value && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/70 z-10 rounded-lg">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500">
                      <FaCheck className="text-white w-4 h-4" />
                    </span>
                  </div>
                )}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h5 className="text-center font-medium mb-4">
          আপনি কাদের কাছে ভাড়া দিতে চান??{" "}
          <span className="text-red-500">*</span>
        </h5>
        <div className="flex flex-wrap justify-center gap-4">
          {getRentToOptions().map((item) => (
            <div key={item.id} className="text-center relative">
              <input
                type="checkbox"
                id={item.id}
                name="rent_to"
                checked={formData.rent_to.includes(item.value)}
                onChange={() => handleCheckboxChange("rent_to", item.value)}
                className="hidden"
              />
              <label
                htmlFor={item.id}
                className={`block p-4 border rounded-lg cursor-pointer transition-all border-gray-200 hover:border-gray-300 relative overflow-hidden`}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className={`w-12 h-12 mx-auto mb-2 transition-all duration-200 ${
                    formData.rent_to.includes(item.value)
                      ? ""
                      : "grayscale hover:grayscale-0"
                  }`}
                />
                <div>{item.label}</div>
                {formData.rent_to.includes(item.value) && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/70 z-10 rounded-lg">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500">
                      <FaCheck className="text-white w-5 h-5" />
                    </span>
                  </div>
                )}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h5 className="text-center font-medium mb-4">
          আপনি কোন ধর্মের অনুসারীদের কাছে ভাড়া দিতে চান?
        </h5>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            {
              id: "islam",
              value: "islam",
              label: "ইসলাম",
              icon: "/assets/icons/islam.png",
            },
            {
              id: "hindu",
              value: "hindu",
              label: "হিন্দু",
              icon: "/assets/icons/hindu.png",
            },
            {
              id: "christian",
              value: "christian",
              label: "খ্রিষ্টান",
              icon: "/assets/icons/chris.png",
            },
            {
              id: "Buddhist",
              value: "Buddhist",
              label: "বৌদ্ধ",
              icon: "/assets/icons/badda.png",
            },
            {
              id: "anyone",
              value: "anyone",
              label: "যেকোনো",
              icon: "/assets/icons/anyone.png",
            },
          ].map((item) => (
            <div key={item.id} className="text-center relative">
              <input
                type="checkbox"
                id={item.id}
                name="religion_for"
                checked={formData.religion_for.includes(item.value)}
                onChange={() =>
                  handleCheckboxChange("religion_for", item.value)
                }
                className="hidden"
              />
              <label
                htmlFor={item.id}
                className={`block p-4 border rounded-lg cursor-pointer transition-all border-gray-200 hover:border-gray-300 relative overflow-hidden`}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className={`w-12 h-12 mx-auto mb-2 transition-all duration-200 ${
                    formData.religion_for.includes(item.value)
                      ? ""
                      : "grayscale hover:grayscale-0"
                  }`}
                />
                <div>{item.label}</div>
                {formData.religion_for.includes(item.value) && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/70 z-10 rounded-lg">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500">
                      <FaCheck className="text-white w-4 h-4" />
                    </span>
                  </div>
                )}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="text-right">
        <Button
          type="button"
          onClick={handleNextStep}
          className="bg-[#198754] hover:bg-[#157347] px-8 text-lg"
          disabled={!formData.rent_for || formData.rent_to.length === 0}
        >
          পরের ধাপ
        </Button>
      </div>
    </div>
  );
};

export default StepOne;
