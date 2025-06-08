import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
const StepTwo = ({
  formData,
  setFormData,
  handleInputChange,
  handleRadioChange,
  handleNextStep,
  handlePrevStep,
  handleCheckboxChange,
  handleFileChange,
  getRentToOptions,
  setLift,
  setParking,
  setGenerator,
  setWifi,
  setGas,
  setSecurity,
}) => {
  const { lift, generator, gas, security, parking, wifi } = formData;
  return (
    <div className="space-y-6">
      <h5 className="text-2xl font-medium text-gray-800">ব্যক্তিগত তথ্য</h5>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="name" className="text-md text-gray-700">
            নাম *
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="text-gray-700"
          />
        </div>
        <div>
          <Label htmlFor="uphone" className="text-md text-gray-700">
            মোবাইল নম্বর * (In English)
          </Label>
          <Input
            id="uphone"
            name="uphone"
            type="tel"
            value={formData.uphone}
            onChange={handleInputChange}
            required
            className="text-gray-700"
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-md text-gray-700">
            ইমেইল এড্রেস
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="ইমেইল এড্রেস লিখুন"
            className="text-gray-700"
          />
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="postasother"
          name="postasother"
          checked={formData.postasother}
          onCheckedChange={(checked) =>
            setFormData((prev) => ({
              ...prev,
              postasother: Boolean(checked),
            }))
          }
        />
        <Label htmlFor="postasother" className="text-md text-gray-700">
          আমি অন্যের হয়ে পোস্টটি করছি
        </Label>
      </div>

      <hr className="my-4" />

      <h5 className="text-2xl font-medium text-gray-800">
        ভাড়া সংক্রান্ত তথ্য
      </h5>
      <div>
        <Label htmlFor="location" className="text-md text-gray-700">
          বাসার ঠিকানা *
        </Label>
        <Textarea
          id="location"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          placeholder="বাসার ঠিকানা লিখুন"
          required
          className="text-gray-700"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="district" className="text-md text-gray-700">
            শহর সিলেক্ট করুন *
          </Label>
          <Select
            name="district"
            value={formData.district}
            onValueChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                district: value,
              }))
            }
            required
          >
            <SelectTrigger className="text-lg text-gray-700">
              <SelectValue placeholder="শহর" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="13">কক্সবাজার(Cox's Bazar)</SelectItem>
              <SelectItem value="29">কিশোরগঞ্জ(kishoreganj)</SelectItem>
              <SelectItem value="12">কুমিল্লা(Cumilla)</SelectItem>
              {/* Add other district options */}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="area" className="text-md text-gray-700">
            এলাকা সিলেক্ট করুন *
          </Label>
          <Select
            name="area"
            value={formData.area}
            onValueChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                area: value,
              }))
            }
            required
          >
            <SelectTrigger className="text-lg text-gray-700">
              <SelectValue placeholder="এলাকা" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1113">আনোয়ারা(Anwara)</SelectItem>
              <SelectItem value="1145">বন্দর(Bandor)</SelectItem>
              <SelectItem value="1148">বাঁশখালী(Banshkhali)</SelectItem>
              {/* Add other area options */}
            </SelectContent>
          </Select>
        </div>
      </div>

      <hr className="my-4" />

      <h5 className="text-2xl font-medium text-gray-800">বাসার বিবরন</h5>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <Label htmlFor="bedrooms" className="text-md text-gray-700">
            বেড রুমের সংখ্যা *
          </Label>
          <Select
            name="bedrooms"
            value={formData.bedrooms}
            onValueChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                bedrooms: value,
              }))
            }
            required
          >
            <SelectTrigger className="text-md text-gray-700">
              <SelectValue placeholder="1" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="bathrooms" className="text-md text-gray-700">
            ওযাস রুমের সংখ্যা *
          </Label>
          <Select
            name="bathrooms"
            value={formData.bathrooms}
            onValueChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                bathrooms: value,
              }))
            }
            required
          >
            <SelectTrigger className="text-md text-gray-700">
              <SelectValue placeholder="1" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="balconies" className="text-md text-gray-700">
            বারিন্দা সংখ্যা *
          </Label>
          <Select
            name="balconies"
            value={formData.balconies}
            onValueChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                balconies: value,
              }))
            }
            required
          >
            <SelectTrigger className="text-md text-gray-700">
              <SelectValue placeholder="1" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="floor" className="text-md text-gray-700">
            ফ্লাটটি কত তলাতে অবস্থিত
          </Label>
          <Select
            name="floor"
            value={formData.floor}
            onValueChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                floor: value,
              }))
            }
          >
            <SelectTrigger className="text-md text-gray-700">
              <SelectValue placeholder="1" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <hr className="my-4" />

      <h5 className="text-2xl font-medium text-gray-800">
        অন্যান্য সুবিধা সমুহ
      </h5>
      <div className="flex flex-wrap gap-4">
        {/* লিফট সুবিধা */}
        <div className="flex items-center mb-4">
          <label className="w-full text-left text-md text-gray-700">
            লিফট সুবিধা:
          </label>
          <div className="w-full flex">
            <div className="flex items-center rounded-full overflow-hidden">
              {/* আছে Button */}
              <button
                type="button"
                onClick={() => setLift("yes")}
                className={`flex items-center px-4 py-1 border border-r-0 border-[#157347] rounded-l-full transition-colors ${
                  lift === "yes" ? "bg-[#157347] text-white" : "text-[#157347]"
                }`}
              >
                {lift === "yes" && <span className="mr-2 text-white">✔</span>}
                আছে
              </button>

              {/* নেই Button */}
              <button
                type="button"
                onClick={() => setLift("no")}
                className={`flex items-center px-4 py-1 border border-gray-700 rounded-r-full transition-colors ${
                  lift === "no" ? "bg-gray-900 text-white" : "text-gray-700"
                }`}
              >
                {lift === "no" && <span className="mr-2 text-white">✔</span>}
                নেই
              </button>
            </div>
          </div>

          {/* Hidden radio input for form submission */}
          <input type="hidden" name="lift" value={lift} />
        </div>

        {/* জেনেরেটর সুবিধা */}
        <div className="flex items-center mb-4">
          <label className="w-full text-left text-md text-gray-700">
            জেনেরেটর সুবিধা:
          </label>
          <div className="w-full flex">
            <div className="flex items-center rounded-full overflow-hidden">
              <button
                type="button"
                onClick={() => setGenerator("yes")}
                className={`flex items-center px-4 py-1 border border-r-0 border-[#157347] rounded-l-full transition-colors ${
                  generator === "yes"
                    ? "bg-[#157347] text-white"
                    : "text-[#157347]"
                }`}
              >
                {generator === "yes" && (
                  <span className="mr-2 text-white">✔</span>
                )}
                আছে
              </button>
              <button
                type="button"
                onClick={() => setGenerator("no")}
                className={`flex items-center px-4 py-1 border border-gray-700 rounded-r-full transition-colors ${
                  generator === "no"
                    ? "bg-gray-900 text-white"
                    : "text-gray-700"
                }`}
              >
                {generator === "no" && (
                  <span className="mr-2 text-white">✔</span>
                )}
                নেই
              </button>
            </div>
          </div>
          <input type="hidden" name="generator" value={generator} />
        </div>

        {/* সিকিউরিটি গার্ড */}
        <div className="flex items-center mb-4">
          <label className="w-full text-left text-md text-gray-700">
            সিকিউরিটি গার্ড:
          </label>
          <div className="w-full flex">
            <div className="flex items-center rounded-full overflow-hidden">
              <button
                type="button"
                onClick={() => setSecurity("yes")}
                className={`flex items-center px-4 py-1 border border-r-0 border-[#157347] rounded-l-full transition-colors ${
                  security === "yes"
                    ? "bg-[#157347] text-white"
                    : "text-[#157347]"
                }`}
              >
                {security === "yes" && (
                  <span className="mr-2 text-white">✔</span>
                )}
                আছে
              </button>
              <button
                type="button"
                onClick={() => setSecurity("no")}
                className={`flex items-center px-4 py-1 border border-gray-700 rounded-r-full transition-colors ${
                  security === "no" ? "bg-gray-900 text-white" : "text-gray-700"
                }`}
              >
                {security === "no" && (
                  <span className="mr-2 text-white">✔</span>
                )}
                নেই
              </button>
            </div>
          </div>
          <input type="hidden" name="security" value={security} />
        </div>

        {/* পার্কিং সুবিধা */}
        <div className="flex items-center mb-4">
          <label className="w-full text-left text-md text-gray-700">
            পার্কিং সুবিধা:
          </label>
          <div className="w-full flex">
            <div className="flex items-center rounded-full overflow-hidden">
              <button
                type="button"
                onClick={() => setParking("yes")}
                className={`flex items-center px-4 py-1 border border-r-0 border-[#157347] rounded-l-full transition-colors ${
                  parking === "yes"
                    ? "bg-[#157347] text-white"
                    : "text-[#157347]"
                }`}
              >
                {parking === "yes" && (
                  <span className="mr-2 text-white">✔</span>
                )}
                আছে
              </button>
              <button
                type="button"
                onClick={() => setParking("no")}
                className={`flex items-center px-4 py-1 border border-gray-700 rounded-r-full transition-colors ${
                  parking === "no" ? "bg-gray-900 text-white" : "text-gray-700"
                }`}
              >
                {parking === "no" && <span className="mr-2 text-white">✔</span>}
                নেই
              </button>
            </div>
          </div>
          <input type="hidden" name="parking" value={parking} />
        </div>

        {/* গ্যাস সুবিধা */}
        <div className="flex items-center mb-4">
          <label className="w-full text-left text-md text-gray-700">
            গ্যাস সুবিধা:
          </label>
          <div className="w-full flex">
            <div className="flex items-center rounded-full overflow-hidden">
              <button
                type="button"
                onClick={() => setGas("line")}
                className={`flex items-center px-4 py-1 border border-r-0 border-[#157347] rounded-l-full transition-colors ${
                  gas === "line" ? "bg-[#157347] text-white" : "text-[#157347]"
                }`}
              >
                {gas === "line" && <span className="mr-2 text-white">✔</span>}
                লাইন
              </button>
              <button
                type="button"
                onClick={() => setGas("silendar")}
                className={`flex items-center px-4 py-1 border border-r-0 border-[#157347] transition-colors ${
                  gas === "silendar"
                    ? "bg-[#157347] text-white"
                    : "text-[#157347]"
                }`}
              >
                {gas === "silendar" && (
                  <span className="mr-2 text-white">✔</span>
                )}
                সিলিন্ডার
              </button>
              <button
                type="button"
                onClick={() => setGas("no")}
                className={`flex items-center px-4 py-1 border border-gray-700 rounded-r-full transition-colors ${
                  gas === "no" ? "bg-gray-900 text-white" : "text-gray-700"
                }`}
              >
                {gas === "no" && <span className="mr-2 text-white">✔</span>}
                নেই
              </button>
            </div>
          </div>
          <input type="hidden" name="gas" value={gas} />
        </div>

        {/* WIFI সুবিধা */}
        <div className="flex items-center mb-4">
          <label className="w-full text-left text-md text-gray-700">
            WIFI সুবিধা:
          </label>
          <div className="w-full flex">
            <div className="flex items-center rounded-full overflow-hidden">
              <button
                type="button"
                onClick={() => setWifi("yes")}
                className={`flex items-center px-4 py-1 border border-r-0 border-[#157347] rounded-l-full transition-colors ${
                  wifi === "yes" ? "bg-[#157347] text-white" : "text-[#157347]"
                }`}
              >
                {wifi === "yes" && <span className="mr-1 text-white">✔</span>}
                আছে
              </button>
              <button
                type="button"
                onClick={() => setWifi("no")}
                className={`flex items-center px-4 py-1 border border-gray-700 rounded-r-full transition-colors ${
                  wifi === "no" ? "bg-gray-900 text-white" : "text-gray-700"
                }`}
              >
                {wifi === "no" && <span className="mr-2 text-white">✔</span>}
                নেই
              </button>
            </div>
          </div>
          <input type="hidden" name="wifi" value={wifi} />
        </div>
      </div>

      <hr className="my-4" />

      <h5 className="text-2xl font-medium text-gray-800">ভাড়ার বিবরণ</h5>
      <div>
        <Label htmlFor="rent_amount" className="text-md text-gray-700">
          ভাড়ার পরিমান *
        </Label>
        <div className="flex">
          <Input
            id="rent_amount"
            name="rent_amount"
            type="number"
            value={formData.rent_amount}
            onChange={handleInputChange}
            className="rounded-r-none h-9"
            required
          />
          <div className="flex items-start gap-4">
            <div className="w-full flex">
              <div className="flex items-center  overflow-hidden">
                <button
                  type="button"
                  onClick={() => handleRadioChange("rent_type", "daily")}
                  className={`flex items-center px-4 py-1 border border-r-0 border-[#157347] transition-colors ${
                    formData.rent_type === "daily"
                      ? "bg-black text-white"
                      : "text-[#157347]"
                  }`}
                >
                  দিনে
                </button>
                <button
                  type="button"
                  onClick={() => handleRadioChange("rent_type", "week")}
                  className={`flex items-center px-4 py-1 border border-r-0 border-[#157347] transition-colors ${
                    formData.rent_type === "week"
                      ? "bg-black text-white"
                      : "text-[#157347]"
                  }`}
                >
                  সপ্তাহে
                </button>
                <button
                  type="button"
                  onClick={() => handleRadioChange("rent_type", "month")}
                  className={`flex items-center px-4 py-1 border border-[#157347] transition-colors ${
                    formData.rent_type === "month"
                      ? "bg-black text-white"
                      : "text-[#157347]"
                  }`}
                >
                  মাসে
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Checkbox
            id="rent_negotiable"
            name="rent_negotiable"
            checked={formData.rent_negotiable}
            onCheckedChange={(checked) =>
              setFormData((prev) => ({
                ...prev,
                rent_negotiable: Boolean(checked),
              }))
            }
          />
          <Label htmlFor="rent_negotiable" className="text-md text-gray-700">
            ভাড়ার পরিমান আলোচনার সাপেক্ষে নির্ধারন করা হবে
          </Label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        <div>
          <Label htmlFor="electric_bill" className="text-md text-gray-700">
            বিদ্যুৎ বিল
          </Label>
          <Input
            id="electric_bill"
            name="electric_bill"
            type="number"
            value={formData.electric_bill}
            onChange={handleInputChange}
            placeholder="টাকার পরিমাণ"
            className="text-md text-gray-700"
          />
        </div>
        <div>
          <Label htmlFor="gas_bill" className="text-md text-gray-700">
            গ্যাস বিল
          </Label>
          <Input
            id="gas_bill"
            name="gas_bill"
            type="number"
            value={formData.gas_bill}
            onChange={handleInputChange}
            placeholder="টাকার পরিমাণ"
            className="text-md text-gray-700"
          />
        </div>
        <div>
          <Label htmlFor="water_bill" className="text-md text-gray-700">
            পানির বিল
          </Label>
          <Input
            id="water_bill"
            name="water_bill"
            type="number"
            value={formData.water_bill}
            onChange={handleInputChange}
            placeholder="টাকার পরিমাণ"
            className="text-md text-gray-700"
          />
        </div>
        <div>
          <Label htmlFor="service_charge" className="text-md text-gray-700">
            সার্ভিস চার্জ
          </Label>
          <Input
            id="service_charge"
            name="service_charge"
            type="number"
            value={formData.service_charge}
            onChange={handleInputChange}
            placeholder="টাকার পরিমাণ"
            className="text-md text-gray-700"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <Label htmlFor="available_from" className="text-md text-gray-700">
            কোন তারিখ থেকে ভাড়া হবে *
          </Label>
          <Input
            id="available_from"
            name="available_from"
            type="date"
            value={formData.available_from}
            onChange={handleInputChange}
            required
            className="text-md text-gray-700"
          />
        </div>
        <div>
          <Label htmlFor="ad_expiry" className="text-md text-gray-700">
            কোন তারিখ পর্যন্ত বিজ্ঞাপনটি সাইটে থাকবে *
          </Label>
          <Input
            id="ad_expiry"
            name="ad_expiry"
            type="date"
            value={formData.ad_expiry}
            onChange={handleInputChange}
            required
            className="text-md text-gray-700"
          />
        </div>
      </div>

      <div className="flex justify-end space-x-4 pt-4">
        <Button
          type="button"
          className="bg-yellow-400 hover:bg-yellow-400/90 text-lg text-gray-800"
          variant="outline"
          onClick={handlePrevStep}
        >
          পূর্ববর্তী ধাপ
        </Button>
        <Button
          type="button"
          onClick={handleNextStep}
          className="bg-[#198754] hover:bg-[#157347] px-8 text-lg"
        >
          পরের ধাপ
        </Button>
      </div>
    </div>
  );
};

export default StepTwo;
