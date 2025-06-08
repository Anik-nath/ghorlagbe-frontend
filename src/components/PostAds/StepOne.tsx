import { Button } from "@/components/ui/button";

const StepOne = ({
  formData,
  handleRadioChange,
  handleCheckboxChange,
  handleNextStep,
  getRentToOptions,
  handleInputChange
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
              icon: "/images/icons/housing.png",
            },
            {
              id: "rent-for-flat",
              value: "1",
              label: "সিট ভাড়া",
              icon: "/images/icons/beds.png",
            },
            {
              id: "rent-for-sit",
              value: "2",
              label: "সাবলেট",
              icon: "/images/icons/house.png",
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
                className={`block p-4 border rounded-lg cursor-pointer transition-all ${
                  formData.rent_for === item.value
                    ? "border-green-500 bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-12 h-12 mx-auto mb-2"
                />
                <div>{item.label}</div>
                <div
                  className={`absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center ${
                    formData.rent_for === item.value
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {formData.rent_for && (
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
                  className={`block p-4 border rounded-lg cursor-pointer transition-all ${
                    formData.rent_to.includes(item.value)
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-12 h-12 mx-auto mb-2"
                  />
                  <div>{item.label}</div>
                  <div
                    className={`absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center ${
                      formData.rent_to.includes(item.value)
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

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
              icon: "/images/icons/islam.png",
            },
            {
              id: "hindu",
              value: "hindu",
              label: "হিন্দু",
              icon: "/images/icons/hindu.png",
            },
            {
              id: "christian",
              value: "christian",
              label: "খ্রিষ্টান",
              icon: "/images/icons/chris.png",
            },
            {
              id: "Buddhist",
              value: "Buddhist",
              label: "বৌদ্ধ",
              icon: "/images/icons/badda.png",
            },
            {
              id: "anyone",
              value: "anyone",
              label: "যেকোনো",
              icon: "/images/icons/anyone.png",
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
                className={`block p-4 border rounded-lg cursor-pointer transition-all ${
                  formData.religion_for.includes(item.value)
                    ? "border-green-500 bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-12 h-12 mx-auto mb-2"
                />
                <div>{item.label}</div>
                <div
                  className={`absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center ${
                    formData.religion_for.includes(item.value)
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="text-right">
        <Button
          type="button"
          onClick={handleNextStep}
          className="bg-green-600 hover:bg-green-700 px-6"
          disabled={!formData.rent_for || formData.rent_to.length === 0}
        >
          পরের ধাপ
        </Button>
      </div>
    </div>
  );
};

export default StepOne;
